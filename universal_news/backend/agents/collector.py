import logging
from typing import List

logger = logging.getLogger(__name__)

def collect_news() -> List[dict]:
    """Stub collector agent that gathers news items from RSS, API, and scraped pages."""
    logger.info("Starting news collection cycle")
    return [
        {
            "source": "GlobalWire",
            "title": "Virtual Summit Accelerates Renewable Investment",
            "url": "https://globalwire.example.com/article/123",
            "published_at": "2026-04-26T12:00:00Z",
            "region": "Europe",
            "category": "Environment",
        }
    ]
