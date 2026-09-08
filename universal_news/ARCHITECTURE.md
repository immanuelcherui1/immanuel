# Universal News Platform Architecture

## System Overview
The Universal News Platform is designed as a global news aggregation and publishing system with autonomous AI workflows. It is built to ingest, verify, categorize, summarize, and personalize news with a scalable modern backend and a professional frontend.

### Key components
- **Frontend**: React-based newsroom UI with admin and writer dashboards.
- **Backend**: FastAPI service exposing news, admin, and personalization APIs.
- **AI Agents**: Specialized services for collection, verification, summarization, ranking, and personalization.
- **Storage**: PostgreSQL for canonical article metadata, Redis for caching and realtime status, Kafka for event streaming.
- **Deployment**: Docker containers and cloud-native Kubernetes readiness.

## Architecture Diagram (Text)
1. **Data Sources**
   - Publisher RSS feeds
   - Official government outlets
   - Verified APIs
   - Social media signals
   - Scraped publisher pages via Playwright/Puppeteer

2. **News Collector Agent**
   - Normalizes raw items
   - Pushes candidate stories into a queue
   - Enforces geo-distribution for Africa, US, Europe, Asia, Middle East

3. **Fact Checker Agent**
   - Verifies claims against trusted references
   - Assigns credibility and bias labels
   - Flags low-confidence stories for review

4. **Summarizer Agent**
   - Generates TL;DR summaries and rewritten journalist-style copy
   - Produces headlines optimized for clarity and engagement

5. **Content Ranker Agent**
   - Classifies by category, region, urgency, sentiment
   - Deduplicates and removes near-duplicate stories
   - Stores final story records in Postgres

6. **Personalization Agent**
   - Tracks user behavior and preference vectors
   - Generates recommended feeds across categories and regions
   - Delivers personalized homepage content

7. **Frontend / Admin Dashboard**
   - Publishes verified news
   - Displays live ticker and trending topics
   - Shows agent health, throughput, and manual override controls

## Agent Communication
- Use **Kafka** or **Redis Streams** as the event bus.
- Agents publish the following domains:
  - `raw_news` → collection results
  - `verified_news` → fact-check outputs
  - `ranked_news` → categorized articles
  - `user_events` → personalization signals
- Orchestration is handled by a workflow service or scheduler with retries.

## Error Handling
- **Retry strategy** on transient network or API errors.
- **Fallback sources** if primary feed fails.
- **Manual review queue** when confidence is low.
- **Logging and alerting** for agent pipeline delays.

## Ethics and Compliance
- Clearly label AI-generated summaries and rewritten articles.
- Respect copyright by rewriting and normalizing source material instead of copying.
- Surface source credibility and verification metadata.
- Provide transparency for each published story.
