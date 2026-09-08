from datetime import datetime, timedelta
from fastapi import APIRouter, Query
from backend.schemas import Article, TrendItem

router = APIRouter()

sample_articles = [
    {
        "id": 1,
        "title": "Global Summit Advances Climate Diplomacy",
        "headline": "World leaders agree on a new climate finance framework.",
        "summary": "Officials from five continents sign a pact to increase funding for climate resilience.",
        "body": "Detailed coverage of diplomatic negotiations and impact across regions.",
        "category": "Environment",
        "region": "Global",
        "country": "Multiple",
        "source": "GlobalWatch",
        "published_at": datetime.utcnow() - timedelta(hours=2),
        "credibility_score": 0.92,
        "verification_status": "verified",
        "bias_label": "neutral",
        "is_ai_generated": False,
    },
    {
        "id": 2,
        "title": "AI Regulation Gains Momentum in Europe",
        "headline": "New draft legislation seeks global standards for AI transparency.",
        "summary": "European lawmakers draft a sweeping AI governance plan with cross-border implications.",
        "body": "Analysis of proposed rules, industry responses, and next steps.",
        "category": "Technology",
        "region": "Europe",
        "country": "EU",
        "source": "TechSignal",
        "published_at": datetime.utcnow() - timedelta(hours=4),
        "credibility_score": 0.88,
        "verification_status": "verified",
        "bias_label": "balanced",
        "is_ai_generated": True,
    },
]

trend_items = [
    {"topic": "Climate finance", "momentum": 0.82, "region": "Global"},
    {"topic": "AI transparency", "momentum": 0.76, "region": "Europe"},
    {"topic": "Elections 2026", "momentum": 0.71, "region": "US"},
]

@router.get("/", response_model=list[Article])
def list_news(
    category: str | None = Query(None),
    region: str | None = Query(None),
    country: str | None = Query(None),
    limit: int = Query(20, ge=1, le=100),
):
    results = sample_articles
    if category:
        results = [item for item in results if item["category"].lower() == category.lower()]
    if region:
        results = [item for item in results if item["region"].lower() == region.lower()]
    if country:
        results = [item for item in results if item["country"].lower() == country.lower()]
    return [Article(**item) for item in results[:limit]]

@router.get("/{article_id}", response_model=Article)
def get_article(article_id: int):
    article = next((item for item in sample_articles if item["id"] == article_id), None)
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return Article(**article)

@router.get("/trending", response_model=list[TrendItem])
def get_trending():
    return [TrendItem(**item) for item in trend_items]
