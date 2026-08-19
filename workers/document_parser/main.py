import os
import sys
import time
import json
import random
from datetime import datetime

sys.stdout.reconfigure(encoding='utf-8')

from sqlalchemy.orm import Session

# Add the project root to sys.path so we can import from domain
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from domain.database import SessionLocal
from domain.models import Document, ProcessingJob

class MinerUClientMock:
    """Mock client for MinerU / OpenDataLoader to test the pipeline without heavy ML models"""
    def parse_pdf(self, file_path: str):
        # Simulate processing delay
        time.sleep(random.uniform(1.0, 3.0))
        
        # Simulate successful parsing
        # Returns structured Markdown and JSON payload
        base_name = os.path.basename(file_path)
        markdown_content = f"# Умный Парсинг: {base_name}\n\n## Характеристики\n\nИзвлеченные данные с помощью MinerU OCR..."
        
        # Fake structured data
        json_payload = {
            "title": base_name,
            "type": "equipment_passport",
            "extracted_tables": [
                {"Наименование": "Кабель ВВГнг-LS", "Номинальное напряжение": "0.66 кВ"}
            ],
            "raw_markdown": markdown_content,
            "confidence_score": round(random.uniform(0.85, 0.99), 2)
        }
        return json_payload

def process_pending_documents():
    db: Session = SessionLocal()
    client = MinerUClientMock()
    
    print("🤖 Запуск Воркера AI Парсинга (MinerU / OpenDataLoader)...")
    
    while True:
        # Fetch one pending document
        doc = db.query(Document).filter(Document.status == 'pending').first()
        
        if not doc:
            print("📭 Нет новых документов для обработки. Ожидание 10 секунд...")
            time.sleep(10)
            continue
            
        print(f"🔄 Обработка документа: {doc.title} (ID: {doc.id})")
        
        # Update status to processing
        doc.status = 'processing'
        
        # Create a job record
        job = ProcessingJob(
            document_id=doc.id,
            task_type="ocr",
            status="running"
        )
        db.add(job)
        db.commit()
        
        try:
            # Call the ML parser
            result = client.parse_pdf(doc.file_path or "unknown.pdf")
            
            # Update the document
            doc.parsed_data = result
            doc.confidence = result.get('confidence_score')
            doc.status = 'completed'
            
            # Update the job
            job.status = 'success'
            job.result = {"message": "Успешно распарсено"}
            job.progress = 100.0
            
            db.commit()
            print(f"✅ Документ {doc.id} успешно распарсен! Confidence: {doc.confidence}")
            
        except Exception as e:
            print(f"❌ Ошибка при обработке документа {doc.id}: {e}")
            doc.status = 'error'
            job.status = 'failed'
            job.result = {"error": str(e)}
            db.commit()
            
        # Small delay between docs
        time.sleep(1)

if __name__ == "__main__":
    process_pending_documents()
