from datetime import datetime, timedelta
from fastapi import APIRouter
from backend.schemas import AdminOverview, AgentStatus

router = APIRouter()

@router.get("/overview", response_model=AdminOverview)
def get_overview():
    return AdminOverview(
        total_articles=1562,
        published=1124,
        drafts=312,
        flagged=126,
    )

@router.get("/agents", response_model=list[AgentStatus])
def get_agents():
    now = datetime.utcnow()
    return [
        AgentStatus(agent_name="collector", status="running", last_run=now - timedelta(seconds=16), queue_depth=12, errors=0),
        AgentStatus(agent_name="fact_checker", status="running", last_run=now - timedelta(seconds=28), queue_depth=8, errors=1),
        AgentStatus(agent_name="summarizer", status="running", last_run=now - timedelta(seconds=12), queue_depth=4, errors=0),
        AgentStatus(agent_name="personalization", status="healthy", last_run=now - timedelta(seconds=6), queue_depth=0, errors=0),
    ]
