from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(
    title="PTO Intelligence API",
    description="API для платформы оцифровки и проверки исполнительной документации",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "service": "PTO Intelligence API"}

@app.post("/api/documents/upload")
def upload_document():
    # TODO: Implement file upload and enqueue OCR job
    return {"job_id": "job_123", "status": "queued"}

import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from domain.database import SessionLocal
from domain.models import Document

@app.get("/api/documents")
def get_documents(skip: int = 0, limit: int = 100):
    db = SessionLocal()
    docs = db.query(Document).offset(skip).limit(limit).all()
    db.close()
    return [{"id": d.id, "title": d.title, "status": d.status, "confidence": d.confidence} for d in docs]

@app.get("/api/documents/{doc_id}")
def get_document(doc_id: int):
    db = SessionLocal()
    doc = db.query(Document).filter(Document.id == doc_id).first()
    db.close()
    if not doc:
        return {"error": "not found"}
    return {
        "id": doc.id,
        "title": doc.title,
        "status": doc.status,
        "confidence": doc.confidence,
        "parsed_data": doc.parsed_data
    }

@app.post("/api/matching/specification")
def match_specification(payload: dict):
    # TODO: Implement matching logic
    return {
        "matches": [
            {
                "document_id": "doc_456",
                "score": 0.984,
                "reasons": ["article_exact", "brand_exact"]
            }
        ]
    }

@app.get("/api/projects/{project_id}/dashboard")
def get_project_dashboard(project_id: int):
    # TODO: Aggregate stats from DB
    return {
        "project_id": project_id,
        "stats": {
            "documents_to_process": 84,
            "manual_review_needed": 17,
            "missing_passports": 9,
            "missing_certificates": 4
        }
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
