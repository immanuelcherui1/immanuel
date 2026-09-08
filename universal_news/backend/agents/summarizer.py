import logging

logger = logging.getLogger(__name__)

def summarize_news(item: dict) -> dict:
    """Stub summarizer that produces a short summary and headline."""
    logger.info("Summarizing news item %s", item.get("title"))
    item["summary"] = item.get("summary", "") or "An AI-generated summary is not yet available."
    item["headline"] = item.get("headline", item["title"])
    item["is_ai_generated"] = True
    return item
