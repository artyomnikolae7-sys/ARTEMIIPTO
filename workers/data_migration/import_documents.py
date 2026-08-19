import os
import sys
from sqlalchemy.orm import Session
from datetime import datetime

# Add the project root to sys.path so we can import from domain
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from domain.database import SessionLocal, engine
from domain.models import Base, Document, Project

Base.metadata.create_all(bind=engine)

DOCUMENTS_DIR = r"G:\Мой диск\РЕЕСТР ПАСПОРТОВ И СЕРТИФИКАТОВ"

def import_documents():
    db: Session = SessionLocal()
    print("Начинаем импорт реестра документов...")
    
    # Ensure there is a project to link the documents to
    project = db.query(Project).filter(Project.name == "РЕЕСТР ПАСПОРТОВ И СЕРТИФИКАТОВ").first()
    if not project:
        project = Project(
            name="РЕЕСТР ПАСПОРТОВ И СЕРТИФИКАТОВ",
            description="Глобальная библиотека нормативных документов ПТО"
        )
        db.add(project)
        db.commit()
        db.refresh(project)

    imported_count = 0
    skipped_count = 0

    # Recursive walk
    for root, dirs, files in os.walk(DOCUMENTS_DIR):
        for file in files:
            if file.lower().endswith(".pdf"):
                file_path = os.path.join(root, file)
                
                # Determine document type by name
                doc_type = "other"
                name_lower = file.lower()
                if "паспорт" in name_lower:
                    doc_type = "passport"
                elif "сертификат" in name_lower:
                    doc_type = "certificate"
                elif "отказн" in name_lower or "письмо" in name_lower:
                    doc_type = "rejection_letter"
                    
                # Check if exists
                existing = db.query(Document).filter(Document.title == file).first()
                if not existing:
                    doc = Document(
                        project_id=project.id,
                        title=file,
                        doc_type=doc_type,
                        file_path=file_path,
                        status="pending"
                    )
                    db.add(doc)
                    imported_count += 1
                else:
                    skipped_count += 1

                # Commit every 100 docs to save memory
                if imported_count % 100 == 0:
                    db.commit()

    db.commit()
    print(f"Импорт завершен. Добавлено документов: {imported_count}. Пропущено (уже есть): {skipped_count}.")
    db.close()

if __name__ == "__main__":
    import_documents()
