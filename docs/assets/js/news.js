(function () {
  'use strict';

  var SECTIONS = [
    { id: 'x', label: 'X', filter: function (i) { return i.source_type === 'twitter'; } },
    { id: 'github', label: 'GitHub', filter: function (i) { return i.source_type === 'github'; } },
    { id: 'aihot', label: 'AIHOT', filter: function (i) { return i.source_type === 'rss' && i.category === 'aihot'; } },
    { id: 'hackernews', label: 'HackerNews', filter: function (i) { return i.source_type === 'hackernews'; } },
    { id: 'rss', label: 'RSS', filter: function (i) { return i.source_type === 'rss' && i.category !== 'aihot'; } },
    { id: 'reddit', label: 'Reddit', filter: function (i) { return i.source_type === 'reddit'; } },
    { id: 'telegram', label: 'Telegram', filter: function (i) { return i.source_type === 'telegram'; } }
  ];

  var LABELS = {
    zh: { loading: '加载中…', error: '数据加载失败', empty: '暂无数据', refs: '参考链接' },
    en: { loading: 'Loading…', error: 'Failed to load data', empty: 'No items yet', refs: 'References' }
  };

  var state = {
    data: null,
    active: SECTIONS[0].id,
    lang: 'zh',
    error: null
  };

  try {
    var saved = localStorage.getItem('horizon-news-lang');
    if (saved === 'en' || saved === 'zh') state.lang = saved;
  } catch (e) { /* noop */ }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function safeUrl(u) {
    if (!u) return null;
    var s = String(u);
    return /^https?:\/\//i.test(s) ? s : null;
  }

  function localized(valueMap, lang) {
    if (!valueMap) return null;
    if (valueMap[lang]) return valueMap[lang];
    if (valueMap.en) return valueMap.en;
    if (valueMap.zh) return valueMap.zh;
    var keys = Object.keys(valueMap);
    return keys.length ? valueMap[keys[0]] : null;
  }

  function subLabel(item) {
    if (item.subreddit) return 'r/' + item.subreddit;
    if (item.feed_name) return item.feed_name;
    if (item.channel) return '@' + item.channel;
    if (item.screen_name) return '@' + item.screen_name;
    if (item.author) return item.author;
    return item.source_type;
  }

  function scoreTier(score) {
    if (score == null) return null;
    if (score >= 9) return 'high';
    if (score >= 7) return 'good';
    if (score >= 5) return 'mid';
    return 'low';
  }

  function formatDate(iso, lang) {
    if (!iso) return '';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    try {
      return d.toLocaleString(lang === 'zh' ? 'zh-CN' : 'en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
    } catch (e) {
      return d.toISOString().slice(0, 16);
    }
  }

  function sectionItems(section) {
    if (!state.data || !state.data.items) return [];
    return state.data.items.filter(section.filter);
  }

  /* ---------- Sidebar ---------- */
  function renderSidebar() {
    var nav = document.getElementById('nav');
    nav.innerHTML = '';
    SECTIONS.forEach(function (section) {
      var count = sectionItems(section).length;
      var el = document.createElement('div');
      el.className = 'nav-item' + (section.id === state.active ? ' active' : '');
      el.setAttribute('data-section', section.id);
      el.innerHTML =
        '<span class="label">' + escapeHtml(section.label) + '</span>' +
        '<span class="count">' + count + '</span>';
      el.addEventListener('click', function () {
        state.active = section.id;
        renderSidebar();
        renderContent();
      });
      nav.appendChild(el);
    });
  }

  /* ---------- Content ---------- */
  function itemHtml(item) {
    var lang = state.lang;
    var title = localized(item.title, lang) || item.title || '';
    var summary = localized(item.summary, lang) || '';
    var url = safeUrl(item.url);

    var titleHtml = url
      ? '<a href="' + escapeHtml(url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(title) + '</a>'
      : escapeHtml(title);

    var badge = '';
    var tier = scoreTier(item.score);
    if (tier) {
      badge = '<span class="score-badge" data-tier="' + tier + '">' +
        escapeHtml(item.score) + '</span>';
    }

    var metaParts = [];
    var sub = subLabel(item);
    if (sub) metaParts.push(escapeHtml(sub));
    if (item.author && item.author !== sub) metaParts.push(escapeHtml(item.author));
    var when = formatDate(item.published_at, lang);
    if (when) metaParts.push(escapeHtml(when));

    var tags = '';
    if (item.tags && item.tags.length) {
      tags = '<div class="item-tags">' + item.tags.map(function (t) {
        return '<span class="tag">#' + escapeHtml(t) + '</span>';
      }).join('') + '</div>';
    }

    var refs = '';
    if (item.references && item.references.length) {
      var links = item.references.map(function (r) {
        var ru = safeUrl(r.url);
        return ru
          ? '<li><a href="' + escapeHtml(ru) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(r.title) + '</a></li>'
          : '<li>' + escapeHtml(r.title) + '</li>';
      }).join('');
      refs = '<details class="item-refs"><summary>' + escapeHtml(LABELS[lang].refs) + '</summary><ul>' + links + '</ul></details>';
    }

    return '<article class="item">' +
      '<div class="item-top"><h2 class="item-title">' + titleHtml + '</h2>' + badge + '</div>' +
      (metaParts.length ? '<div class="item-meta">' + metaParts.join(' · ') + '</div>' : '') +
      (summary ? '<div class="item-summary">' + escapeHtml(summary) + '</div>' : '') +
      tags + refs +
      '</article>';
  }

  function renderContent() {
    var labels = LABELS[state.lang];
    var section = null;
    for (var i = 0; i < SECTIONS.length; i++) {
      if (SECTIONS[i].id === state.active) { section = SECTIONS[i]; break; }
    }
    if (!section) return;

    document.getElementById('section-title').textContent = section.label;

    var container = document.getElementById('items');
    if (state.error) {
      container.innerHTML = '<div class="error">' + escapeHtml(labels.error) + '</div>';
      return;
    }
    if (!state.data) {
      container.innerHTML = '<div class="loading">' + escapeHtml(labels.loading) + '</div>';
      return;
    }

    var items = sectionItems(section);
    if (!items.length) {
      container.innerHTML = '<div class="empty">' + escapeHtml(labels.empty) + '</div>';
      return;
    }

    container.innerHTML = items.map(itemHtml).join('');
  }

  function renderDate() {
    var el = document.getElementById('data-date');
    if (state.data && state.data.date) {
      el.textContent = state.data.date;
    } else {
      el.textContent = '';
    }
  }

  function renderLangButtons() {
    var buttons = document.querySelectorAll('.lang-toggle button');
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === state.lang);
    });
  }

  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem('horizon-news-lang', lang); } catch (e) { /* noop */ }
    renderLangButtons();
    renderContent();
  }

  function init() {
    // Language toggle
    document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });

    renderLangButtons();
    renderSidebar();
    renderContent();

    var url = window.HORIZON_DATA_URL || 'assets/data/news.json';
    fetch(url, { cache: 'no-store' })
      .then(function (resp) {
        if (!resp.ok) throw new Error('HTTP ' + resp.status);
        return resp.json();
      })
      .then(function (data) {
        state.data = data;
        renderDate();
        renderSidebar();
        renderContent();
      })
      .catch(function (err) {
        state.error = String(err && err.message ? err.message : err);
        renderContent();
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
