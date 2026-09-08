from sqlalchemy import Boolean, Column, DateTime, Float, Integer, String, Text, func
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Source(Base):
    __tablename__ = "sources"

    id = Column(Integer, primary_key=True)
    name = Column(String(255), nullable=False)
    type = Column(String(50), nullable=False)
    region = Column(String(100), nullable=False)
    credibility_score = Column(Float, nullable=False)
    trust_level = Column(String(50), nullable=True)
    last_seen_at = Column(DateTime, nullable=True)

class Article(Base):
    __tablename__ = "articles"

    id = Column(Integer, primary_key=True)
    source_id = Column(Integer, nullable=False)
    title = Column(String(512), nullable=False)
    headline = Column(String(512), nullable=False)
    summary = Column(Text, nullable=False)
    body = Column(Text, nullable=True)
    published_at = Column(DateTime, nullable=False)
    region = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    category = Column(String(100), nullable=False)
    sentiment = Column(String(50), nullable=True)
    urgency = Column(String(50), nullable=True)
    language = Column(String(20), nullable=False, default="en")
    bias_label = Column(String(50), nullable=True)
    verification_status = Column(String(50), nullable=False, default="pending")
    status = Column(String(50), nullable=False, default="review")
    is_ai_generated = Column(Boolean, nullable=False, default=False)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())
