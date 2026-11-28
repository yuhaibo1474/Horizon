"""Structured JSON export for the Horizon news frontend.

The daily Markdown summary is grouped by processing profile and is not easy to
consume by a browser. This module turns the same selected items into a compact
JSON payload that the docs/ frontend renders, grouped by *source* (Twitter,
GitHub, AIHOT, Hacker News, RSS, Reddit, Telegram).
"""

from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from ..models import ContentItem


def _artifact_title(item: ContentItem, lang: str) -> Optional[str]:
    """Localized title for one language, or None when unavailable."""
    if not item.processing:
        return None
    artifact = item.processing.artifacts.get(lang)
    if artifact and artifact.title:
        return artifact.title
    return None


def _artifact_summary(item: ContentItem, lang: str) -> Optional[str]:
    """Localized summary for one language, or None when unavailable."""
    if not item.processing:
        return None
    artifact = item.processing.artifacts.get(lang)
    if artifact:
        primary = next((block.content for block in artifact.blocks if block.primary), None)
        if primary:
            return primary
    analysis = item.processing.analysis
    if analysis and analysis.summary:
        return analysis.summary
    return None


def build_news_payload(
    items: List[ContentItem],
    date: str,
    total_fetched: int,
    languages: List[str],
) -> Dict[str, Any]:
    """Serialize selected items into the frontend's JSON schema.

    Args:
        items: High-scoring content items (the daily digest's selection).
        date: Date string (YYYY-MM-DD).
        total_fetched: Number of items fetched before filtering.
        languages: Configured output languages (e.g. ``["zh", "en"]``).

    Returns:
        A JSON-serializable dict with per-language titles/summaries.
    """
    payload_items: List[Dict[str, Any]] = []
    for item in items:
        analysis = item.processing.analysis if item.processing else None
        meta = item.metadata or {}

        title: Dict[str, str] = {}
        summary: Dict[str, str] = {}
        references: List[Dict[str, str]] = []

        for lang in languages:
            localized_title = _artifact_title(item, lang)
            if localized_title:
                title[lang] = localized_title
            localized_summary = _artifact_summary(item, lang)
            if localized_summary:
                summary[lang] = localized_summary

        # Fall back to the raw title / analysis summary for any language that
        # has no enriched artifact.
        for lang in languages:
            title.setdefault(lang, item.title)
            if lang not in summary and analysis and analysis.summary:
                summary[lang] = analysis.summary

        # Reference links are language-independent; take them from the first
        # artifact that carries any.
        if item.processing:
            for artifact in item.processing.artifacts.values():
                if artifact.sources:
                    references = [
                        {"title": source.title, "url": source.url}
                        for source in artifact.sources
                    ]
                    break

        payload_items.append(
            {
                "id": item.id,
                "source_type": item.source_type.value,
                "category": meta.get("category"),
                "feed_name": meta.get("feed_name"),
                "subreddit": meta.get("subreddit"),
                "channel": meta.get("channel"),
                "screen_name": meta.get("screen_name"),
                "author": item.author,
                "url": str(item.url),
                "published_at": item.published_at.isoformat()
                if item.published_at
                else None,
                "score": analysis.score
                if analysis and analysis.score is not None
                else None,
                "tags": analysis.tags if analysis else [],
                "title": title,
                "summary": summary,
                "references": references,
            }
        )

    return {
        "date": date,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "total_fetched": total_fetched,
        "item_count": len(payload_items),
        "items": payload_items,
    }
