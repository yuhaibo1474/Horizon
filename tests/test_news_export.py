"""Tests for the structured frontend JSON export."""

from datetime import datetime, timezone

from src.models import (
    ArtifactSource,
    ClassificationResult,
    ContentAnalysis,
    ContentArtifact,
    ContentBlock,
    ContentItem,
    ProcessingResult,
    SourceType,
)
from src.storage.news_export import build_news_payload


def make_item(item_id: str, source_type: SourceType, metadata: dict | None = None) -> ContentItem:
    return ContentItem(
        id=item_id,
        source_type=source_type,
        title=f"{item_id} raw",
        url=f"https://example.com/{item_id}",
        published_at=datetime(2026, 11, 28, 10, 0, tzinfo=timezone.utc),
        metadata=metadata or {},
        processing=ProcessingResult(
            classification=ClassificationResult(
                profile="tech-news", method="source_override"
            ),
            analysis=ContentAnalysis(
                score=8.5, reason="test", summary=f"{item_id} summary", tags=["ai"]
            ),
            artifacts={
                "zh": ContentArtifact(
                    language="zh",
                    title=f"{item_id} 中文",
                    blocks=[
                        ContentBlock(
                            id="b1",
                            title="背景",
                            content=f"{item_id} 中文摘要",
                            primary=True,
                        )
                    ],
                    sources=[ArtifactSource(id="s1", title="参考", url="https://ref.example.com")],
                ),
                "en": ContentArtifact(
                    language="en",
                    title=f"{item_id} EN",
                    blocks=[
                        ContentBlock(
                            id="b1",
                            title="Background",
                            content=f"{item_id} EN summary",
                            primary=True,
                        )
                    ],
                    sources=[],
                ),
            },
        ),
    )


def test_build_news_payload_carries_source_and_bilingual_fields():
    items = [
        make_item("rss:aihot:1", SourceType.RSS, {"feed_name": "AIHOT 日报", "category": "aihot"}),
        make_item("twitter:1", SourceType.TWITTER, {"screen_name": "karpathy", "category": None}),
    ]
    payload = build_news_payload(items, "2026-11-28", 100, ["zh", "en"])

    assert payload["date"] == "2026-11-28"
    assert payload["total_fetched"] == 100
    assert payload["item_count"] == 2

    by_id = {item["id"]: item for item in payload["items"]}

    aihot = by_id["rss:aihot:1"]
    assert aihot["source_type"] == "rss"
    assert aihot["category"] == "aihot"
    assert aihot["feed_name"] == "AIHOT 日报"
    assert aihot["title"]["zh"] == "rss:aihot:1 中文"
    assert aihot["title"]["en"] == "rss:aihot:1 EN"
    assert aihot["summary"]["zh"] == "rss:aihot:1 中文摘要"
    assert aihot["score"] == 8.5
    assert aihot["tags"] == ["ai"]
    assert aihot["references"] == [{"title": "参考", "url": "https://ref.example.com"}]

    twitter = by_id["twitter:1"]
    assert twitter["source_type"] == "twitter"
    assert twitter["screen_name"] == "karpathy"


def test_build_news_payload_falls_back_to_raw_title():
    item = ContentItem(
        id="hn:1",
        source_type=SourceType.HACKERNEWS,
        title="raw title",
        url="https://example.com/hn",
        published_at=datetime(2026, 11, 28, tzinfo=timezone.utc),
    )
    payload = build_news_payload([item], "2026-11-28", 1, ["zh", "en"])

    out = payload["items"][0]
    assert out["title"] == {"zh": "raw title", "en": "raw title"}
    assert out["summary"] == {}
    assert out["score"] is None
    assert out["references"] == []
