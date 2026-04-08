# Copilot Instructions — yuna-s.github.io

Yuna Nishikino's personal blog (GitHub Pages static site). Bilingual EN/JA. Posts are added as HTML files in `posts/`.

---

## File Structure

```
├── index.html              ← Home, About, blog listing
├── css/style.css           ← Shared styles for all pages
├── js/post.js              ← Post-page JS (EN/JA toggle)
├── posts/
│   ├── _template.html      ← Template for new posts
│   └── YYYY-MM-DD-*.html
├── assets/images/          ← Image assets
└── .claude/
    ├── ルール.md           ← Authoring rules
    └── ナレッジ.md         ← Project knowledge base
```

---

## Design

| Item | Value |
|------|-------|
| Colors | Rose `#e8836a`, Peach `#fce8dd`, Cream `#fdf6f0` |
| Fonts | Nunito (body) / Lora (headings) |
| Style | Warm, cute, clear |

---

## Adding a New Post

### 1. Create the post file

File name: `posts/YYYY-MM-DD-english-keyword.html`

Use `posts/_template.html` as a base. Every post must include:

- An AI disclosure banner at the top of `.post-body`:

```html
<div class="ai-disclosure">
  <span class="lang-en">🤖 This article was written in collaboration with Claude (AI). The content has been reviewed and edited by the author.</span>
  <span class="lang-ja">🤖 この記事は AI（Claude）と共同で執筆しています。内容は筆者が確認・編集しています。</span>
</div>
```

- EN content in `<div class="lang-en">`, JA content in `<div class="lang-ja">`
- `<script src="../js/post.js"></script>` at the end of body

### 2. Add a card to `index.html` (insert at the top of `.blog-grid`)

```html
<a class="post-card" href="posts/YYYY-MM-DD-title.html"
   data-tags="tag-value"
   data-content="search keywords in both English and Japanese">
  <div class="post-meta">
    <span class="post-date">
      <span class="lang-en">Month DD, YYYY</span>
      <span class="lang-ja">YYYY年M月D日</span>
    </span>
    <a class="post-tag" href="#blog" data-filter="tag-value">
      <span class="lang-en">🌿 daily life</span>
      <span class="lang-ja">🌿 日常</span>
    </a>
  </div>
  <div class="post-title">
    <span class="lang-en">EN Title</span>
    <span class="lang-ja">JA タイトル</span>
  </div>
  <div class="post-excerpt">
    <span class="lang-en">EN excerpt.</span>
    <span class="lang-ja">JA 抜粋。</span>
  </div>
  <div class="post-read">
    <span class="lang-en">Read more →</span>
    <span class="lang-ja">続きを読む →</span>
  </div>
</a>
```

### 3. Update the sidebar in `index.html`

- **Recent Posts**: keep the latest 4 entries
- **Stats**: increment post count; update tag counts

---

## Tags (4 types only)

| `data-tags` value | EN display | JA display |
|-------------------|------------|------------|
| `daily life` | 🌿 daily life | 🌿 日常 |
| `tech` | 💻 tech | 💻 テック |
| `books` | 📚 books | 📚 本 |
| `writing` | ✍️ writing | ✍️ ライティング |

To add a new tag, also update the filter buttons, tag cloud, and i18n object in `index.html`.

---

## EN/JA Toggle

### `index.html`
- The `i18n` object in the inline `<script>` has `en` and `ja` keys.
- `data-i18n="key"` → switches `textContent`
- `data-i18n-html="key"` → switches `innerHTML` (for elements containing `<strong>` etc.)
- `data-i18n-placeholder="key"` → switches input placeholder
- For complex blocks use `class="lang-en"` / `class="lang-ja"` show/hide

### Post pages (`posts/*.html`)
- Load `js/post.js`
- Split EN/JA content with `<div class="lang-en">` / `<div class="lang-ja">`
- Language preference is stored in `localStorage` and synced across pages

---

## Search

- Searches: title, excerpt, and `data-content` attribute of each `.post-card`
- Add important body keywords (both EN and JA) to `data-content`
- Tag filter and search work together as AND conditions
- Full-text search is not possible on a static site; `data-content` is the workaround

---

## Writing Style

- Polite but not stiff (丁寧だが堅すぎない)
- Avoid dramatic or overly narrative expressions
- Audience: engineers or general readers interested in AI
- Use section headings for readability
- Avoid stereotyping by age, gender, or other attributes

---

## Pre-publish Checklist

- [ ] Post renders correctly in preview
- [ ] Tag filter works
- [ ] Title, date, and tag are correct
- [ ] EN/JA toggle shows both languages correctly
- [ ] Sidebar Recent Posts and Stats are updated
- [ ] Required images are in `assets/images/`
