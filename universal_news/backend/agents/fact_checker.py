import logging

logger = logging.getLogger(__name__)

def verify_news(item: dict) -> dict:
    """Stub fact checker that scores credibility and labels bias."""
    logger.info("Verifying news item %s", item.get("title"))
    item["verification_status"] = "verified"
    item["credibility_score"] = 0.9
    item["bias_label"] = "balanced"
    return item
