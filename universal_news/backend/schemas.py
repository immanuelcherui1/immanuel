from datetime import datetime
from pydantic import BaseModel
from typing import List, Optional

class Source(BaseModel):
    id: int
    name: str
    type: str
    region: str
    credibility_score: float
    last_seen_at: Optional[datetime]

class Article(BaseModel):
    id: int
    title: str
    headline: str
    summary: str
    body: Optional[str]
    category: str
    region: str
    country: str
    source: str
    published_at: datetime
    credibility_score: float
    verification_status: str
    bias_label: str
    is_ai_generated: bool

class AgentStatus(BaseModel):
    agent_name: str
    status: str
    last_run: datetime
    queue_depth: int
    errors: int

class AdminOverview(BaseModel):
    total_articles: int
    published: int
    drafts: int
    flagged: int

class TrendItem(BaseModel):
    topic: str
    momentum: float
    region: str
