from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Float, JSON
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime

Base = declarative_base()

class Project(Base):
    __tablename__ = 'projects'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    documents = relationship("Document", back_populates="project")
    specifications = relationship("Specification", back_populates="project")

class Document(Base):
    __tablename__ = 'documents'
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey('projects.id'), nullable=True)
    title = Column(String)
    doc_type = Column(String) # 'passport', 'certificate', 'specification', 'scheme'
    status = Column(String, default='pending') # 'pending', 'processing', 'completed', 'error'
    file_path = Column(String, nullable=True) # local path to the file
    confidence = Column(Float, nullable=True)
    parsed_data = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    project = relationship("Project", back_populates="documents")

class Material(Base):
    __tablename__ = 'materials'
    id = Column(Integer, primary_key=True, index=True)
    canonical_name = Column(String, index=True)
    article = Column(String, index=True, nullable=True)
    manufacturer = Column(String, nullable=True)
    category = Column(String, nullable=True)

class MaterialAlias(Base):
    __tablename__ = 'material_aliases'
    id = Column(Integer, primary_key=True, index=True)
    material_id = Column(Integer, ForeignKey('materials.id'))
    alias = Column(String, index=True)
    
    material = relationship("Material")

class Specification(Base):
    __tablename__ = 'specifications'
    id = Column(Integer, primary_key=True, index=True)
    project_id = Column(Integer, ForeignKey('projects.id'))
    title = Column(String)
    
    project = relationship("Project", back_populates="specifications")
    items = relationship("SpecificationItem", back_populates="specification")

class SpecificationItem(Base):
    __tablename__ = 'specification_items'
    id = Column(Integer, primary_key=True, index=True)
    specification_id = Column(Integer, ForeignKey('specifications.id'))
    material_id = Column(Integer, ForeignKey('materials.id'), nullable=True)
    original_name = Column(String)
    quantity = Column(Float)
    unit = Column(String)
    
    specification = relationship("Specification", back_populates="items")
    material = relationship("Material")

class ProcessingJob(Base):
    __tablename__ = 'processing_jobs'
    id = Column(Integer, primary_key=True, index=True)
    document_id = Column(Integer, ForeignKey('documents.id'))
    task_type = Column(String) # 'ocr', 'parse', 'match'
    status = Column(String, default='queued') # 'queued', 'running', 'success', 'failed'
    progress = Column(Float, default=0.0)
    result = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
