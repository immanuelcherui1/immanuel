from fastapi import FastAPI
from backend.routers import admin, news

app = FastAPI(
    title="Universal News Platform API",
    version="0.1.0",
    description="Backend API for a global news aggregation and verification platform.",
)

app.include_router(news.router, prefix="/api/v1/news", tags=["news"])
app.include_router(admin.router, prefix="/api/v1/admin", tags=["admin"])

@app.get("/api/v1/health")
def health_check():
    return {"status": "ok", "service": "universal-news-api"}
