import logging

logger = logging.getLogger(__name__)

def rank_recommendations(user_profile: dict, articles: list[dict]) -> list[dict]:
    """Stub personalization agent that ranks articles for a given user."""
    logger.info("Ranking recommendations for user %s", user_profile.get("id"))
    return sorted(articles, key=lambda item: item.get("credibility_score", 0), reverse=True)
