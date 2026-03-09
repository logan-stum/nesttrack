import { useState, useRef, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

/* ─── FONTS & GLOBAL STYLES ─────────────────────────────────────── */
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Fira+Code:wght@400;500&family=Lato:wght@300;400;700&display=swap');`;

const CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Lato', sans-serif;
  background: #0d0f12;
  color: #e8e3dc;
  min-height: 100vh;
  overflow-x: hidden;
}

:root {
  --bg0: #0d0f12;
  --bg1: #13161b;
  --bg2: #1a1e26;
  --bg3: #222733;
  --bg4: #2a3040;
  --border: rgba(255,255,255,0.07);
  --border-hi: rgba(255,255,255,0.14);
  --text0: #f0ebe3;
  --text1: #b8b0a5;
  --text2: #6e6860;
  --teal: #3ecfb2;
  --teal-dim: rgba(62,207,178,0.12);
  --teal-glow: 0 0 20px rgba(62,207,178,0.25);
  --amber: #f0a94a;
  --amber-dim: rgba(240,169,74,0.12);
  --red: #f0584a;
  --red-dim: rgba(240,88,74,0.12);
  --green: #5bcf8a;
  --green-dim: rgba(91,207,138,0.12);
  --blue: #5b9cf0;
  --blue-dim: rgba(91,156,240,0.12);
  --r: 12px;
  --r-lg: 18px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-lg: 0 12px 48px rgba(0,0,0,0.55);
}

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: var(--bg1); }
::-webkit-scrollbar-thumb { background: var(--bg4); border-radius: 3px; }

/* ── HEADER ── */
.header {
  background: rgba(13,15,18,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 32px; height: 60px;
}
.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 20px;
  letter-spacing: -0.3px;
  color: var(--text0);
  display: flex; align-items: center; gap: 10px;
}
.logo-dot { color: var(--teal); }
.logo-tag {
  font-family: 'Fira Code', monospace;
  font-size: 10px; font-weight: 400;
  color: var(--text2); letter-spacing: 1px;
  border: 1px solid var(--border-hi);
  padding: 2px 7px; border-radius: 4px; margin-left: 4px;
}
.nav { display: flex; gap: 4px; align-items: center; }
.nav-btn {
  font-family: 'Lato', sans-serif;
  font-size: 13px; font-weight: 700;
  background: transparent; border: none;
  color: var(--text2); padding: 7px 14px;
  border-radius: 8px; cursor: pointer;
  transition: all 0.15s; letter-spacing: 0.3px;
  display: flex; align-items: center; gap: 6px;
}
.nav-btn:hover { color: var(--text1); background: var(--bg2); }
.nav-btn.active { color: var(--teal); background: var(--teal-dim); }
.nav-badge {
  background: var(--bg4); color: var(--text1);
  font-family: 'Fira Code', monospace;
  font-size: 10px; padding: 1px 6px; border-radius: 10px; min-width: 18px;
  text-align: center;
}
.nav-btn.active .nav-badge { background: rgba(62,207,178,0.2); color: var(--teal); }

/* ── MAIN ── */
.main { max-width: 1280px; margin: 0 auto; padding: 36px 28px 100px; }

/* ── PAGE HEADER ── */
.page-head { margin-bottom: 32px; display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
.page-title {
  font-family: 'Syne', sans-serif;
  font-size: 30px; font-weight: 800;
  color: var(--text0); line-height: 1.1;
  letter-spacing: -0.5px;
}
.page-sub { font-size: 13px; color: var(--text2); margin-top: 5px; font-weight: 300; }
.page-actions { display: flex; gap: 8px; }

/* ── BUTTONS ── */
.btn {
  font-family: 'Lato', sans-serif; font-weight: 700;
  font-size: 13px; border: none; border-radius: 9px;
  cursor: pointer; transition: all 0.16s;
  display: inline-flex; align-items: center; gap: 6px;
  letter-spacing: 0.2px; white-space: nowrap;
}
.btn-primary {
  background: var(--teal); color: #0d0f12;
  padding: 10px 20px;
}
.btn-primary:hover { background: #5de0c8; transform: translateY(-1px); box-shadow: var(--teal-glow); }
.btn-secondary {
  background: var(--bg3); color: var(--text1);
  padding: 10px 18px; border: 1px solid var(--border-hi);
}
.btn-secondary:hover { background: var(--bg4); color: var(--text0); }
.btn-ghost {
  background: transparent; color: var(--text2);
  padding: 8px 14px; border: 1px solid var(--border);
}
.btn-ghost:hover { background: var(--bg2); color: var(--text1); border-color: var(--border-hi); }
.btn-danger { background: var(--red-dim); color: var(--red); border: 1px solid rgba(240,88,74,0.2); padding: 8px 14px; }
.btn-danger:hover { background: var(--red); color: white; }
.btn-sm { padding: 6px 12px; font-size: 12px; border-radius: 7px; }
.btn-icon { padding: 7px; width: 32px; height: 32px; justify-content: center; border-radius: 8px; font-size: 14px; }

/* ── ADD PANEL ── */
.add-panel {
  background: var(--bg1); border: 1px solid var(--border);
  border-radius: var(--r-lg); margin-bottom: 28px;
  overflow: hidden; transition: all 0.2s;
}
.add-panel-header {
  padding: 16px 24px; display: flex; align-items: center; justify-content: space-between;
  cursor: pointer; user-select: none;
}
.add-panel-header:hover { background: var(--bg2); }
.add-panel-title {
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  color: var(--text0); display: flex; align-items: center; gap: 8px;
}
.panel-caret { color: var(--text2); transition: transform 0.2s; font-size: 11px; }
.panel-caret.open { transform: rotate(180deg); }
.add-panel-body { padding: 0 24px 24px; border-top: 1px solid var(--border); }

/* URL FETCH ROW */
.fetch-row {
  display: flex; gap: 10px; padding: 16px 0 14px;
  align-items: center;
}
.fetch-input {
  flex: 1; background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 10px 14px;
  font-family: 'Fira Code', monospace; font-size: 12px; color: var(--text1);
  outline: none; transition: border-color 0.15s;
}
.fetch-input:focus { border-color: var(--teal); background: var(--bg3); }
.fetch-input::placeholder { color: var(--text2); }
.fetch-divider {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.fetch-divider-line { flex: 1; height: 1px; background: var(--border); }
.fetch-divider-text { font-size: 11px; color: var(--text2); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }

/* FORM GRID */
.form-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.fg-full { grid-column: 1 / -1; }
.fg-half { grid-column: span 2; }
.fg-3 { grid-column: span 3; }
.form-group { display: flex; flex-direction: column; gap: 5px; }
.form-label { font-size: 10px; font-weight: 700; color: var(--text2); text-transform: uppercase; letter-spacing: 0.8px; }
.form-input {
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 9px 13px;
  font-family: 'Lato', sans-serif; font-size: 13px; color: var(--text0);
  outline: none; transition: border-color 0.15s;
  width: 100%;
}
.form-input:focus { border-color: var(--teal); background: var(--bg3); }
.form-input::placeholder { color: var(--text2); }
select.form-input { cursor: pointer; }
textarea.form-input { resize: vertical; min-height: 72px; font-family: 'Lato', sans-serif; }
.form-actions { display: flex; gap: 10px; margin-top: 14px; align-items: center; }
.fetch-status {
  font-size: 12px; font-family: 'Fira Code', monospace;
  padding: 6px 10px; border-radius: 6px;
}
.fetch-status.loading { color: var(--amber); background: var(--amber-dim); }
.fetch-status.success { color: var(--green); background: var(--green-dim); }
.fetch-status.error { color: var(--red); background: var(--red-dim); }

/* ── FILTER BAR ── */
.filter-bar { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; align-items: center; }
.filter-chip {
  font-size: 12px; font-weight: 700; font-family: 'Lato', sans-serif;
  padding: 6px 14px; border-radius: 20px; border: 1px solid var(--border);
  background: var(--bg1); color: var(--text2); cursor: pointer; transition: all 0.15s;
  letter-spacing: 0.2px;
}
.filter-chip:hover { border-color: var(--border-hi); color: var(--text1); }
.filter-chip.active { background: var(--teal-dim); border-color: rgba(62,207,178,0.3); color: var(--teal); }
.filter-spacer { flex: 1; }
.listings-count { font-family: 'Fira Code', monospace; font-size: 11px; color: var(--text2); }

/* ── GRID ── */
.listings-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 18px; }

/* ── CARD ── */
.card {
  background: var(--bg1); border: 1px solid var(--border);
  border-radius: var(--r-lg); overflow: hidden;
  transition: all 0.22s; cursor: pointer; position: relative;
}
.card:hover { border-color: var(--border-hi); transform: translateY(-3px); box-shadow: var(--shadow-lg); }
.card.favorited { border-color: rgba(240,169,74,0.35); }
.card.in-compare { border-color: rgba(62,207,178,0.35); }
.card.favorited.in-compare { border-color: rgba(62,207,178,0.5); }

.card-img {
  height: 168px; position: relative; overflow: hidden;
  background: linear-gradient(135deg, #1a1e26 0%, #13161b 100%);
  display: flex; align-items: center; justify-content: center;
}
.card-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.card-img-placeholder {
  font-size: 42px; opacity: 0.18;
  font-family: 'Syne', sans-serif;
}
.card-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13,15,18,0.85) 100%);
}
.card-img-actions { position: absolute; top: 10px; right: 10px; display: flex; gap: 6px; }
.card-img-left { position: absolute; top: 10px; left: 10px; display: flex; gap: 5px; flex-direction: column; }
.status-badge {
  font-size: 10px; font-weight: 700; font-family: 'Fira Code', monospace;
  padding: 3px 8px; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
}
.status-Active { background: rgba(91,207,138,0.2); color: var(--green); border: 1px solid rgba(91,207,138,0.3); }
.status-Pending { background: rgba(240,169,74,0.2); color: var(--amber); border: 1px solid rgba(240,169,74,0.3); }
.status-Sold { background: rgba(240,88,74,0.15); color: var(--red); border: 1px solid rgba(240,88,74,0.25); }
.status-OffMarket { background: rgba(255,255,255,0.08); color: var(--text2); border: 1px solid var(--border-hi); }
.source-badge {
  font-size: 10px; font-weight: 700; font-family: 'Fira Code', monospace;
  padding: 3px 8px; border-radius: 5px; text-transform: uppercase; letter-spacing: 0.5px;
  background: rgba(13,15,18,0.7); color: var(--text1); border: 1px solid var(--border-hi);
  backdrop-filter: blur(8px);
}
.icon-btn {
  background: rgba(13,15,18,0.75); border: 1px solid var(--border-hi);
  border-radius: 8px; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: all 0.15s; font-size: 15px;
  backdrop-filter: blur(8px);
}
.icon-btn:hover { background: rgba(255,255,255,0.12); transform: scale(1.1); }
.icon-btn.active { background: rgba(240,169,74,0.25); border-color: rgba(240,169,74,0.4); }

.card-body { padding: 16px 18px 14px; }
.card-price-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 2px; }
.card-price {
  font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
  color: var(--text0); letter-spacing: -0.5px;
}
.price-delta {
  font-family: 'Fira Code', monospace; font-size: 11px; font-weight: 500;
  padding: 2px 6px; border-radius: 4px;
}
.price-delta.down { color: var(--green); background: var(--green-dim); }
.price-delta.up { color: var(--red); background: var(--red-dim); }
.card-address { font-size: 13px; color: var(--text1); margin-bottom: 10px; line-height: 1.4; font-weight: 300; }
.card-specs { display: flex; gap: 12px; margin-bottom: 12px; flex-wrap: wrap; }
.spec { font-size: 12px; color: var(--text1); display: flex; align-items: center; gap: 4px; font-weight: 400; }
.spec-icon { font-size: 13px; }

/* SCORE ROW */
.card-score-row { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.score-pills { display: flex; gap: 5px; }
.score-pill {
  font-family: 'Fira Code', monospace; font-size: 10px; font-weight: 500;
  padding: 3px 7px; border-radius: 5px;
  border: 1px solid var(--border);
}
.score-pill.rated { background: var(--teal-dim); border-color: rgba(62,207,178,0.25); color: var(--teal); }

/* PROS/CONS TAGS */
.pc-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 12px; }
.tag {
  font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 20px;
  display: inline-flex; align-items: center; gap: 3px; letter-spacing: 0.2px;
  max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.tag.pro { background: var(--green-dim); color: var(--green); border: 1px solid rgba(91,207,138,0.2); }
.tag.con { background: var(--red-dim); color: var(--red); border: 1px solid rgba(240,88,74,0.2); }
.tag.more { background: var(--bg3); color: var(--text2); border: 1px solid var(--border); }

/* CARD FOOTER */
.card-footer {
  padding: 10px 18px 14px;
  display: flex; gap: 7px; flex-wrap: wrap;
  border-top: 1px solid var(--border);
}

/* ── EMPTY STATE ── */
.empty { text-align: center; padding: 80px 20px; }
.empty-icon { font-size: 52px; margin-bottom: 14px; opacity: 0.3; }
.empty-title { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 700; color: var(--text1); margin-bottom: 7px; }
.empty-sub { font-size: 13px; color: var(--text2); }

/* ── MODAL ── */
.overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(5,7,10,0.78); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px; animation: fadeIn 0.18s;
}
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
.modal {
  background: var(--bg1); border: 1px solid var(--border-hi);
  border-radius: 20px; width: 100%; max-width: 760px;
  max-height: 92vh; overflow-y: auto;
  box-shadow: var(--shadow-lg);
  animation: slideUp 0.22s cubic-bezier(.22,.68,0,1.2);
}
@keyframes slideUp { from { transform: translateY(18px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }

.modal-hero {
  position: relative; height: 200px;
  background: linear-gradient(135deg, #1a1e26 0%, #13161b 100%);
  overflow: hidden;
}
.modal-hero img { width: 100%; height: 100%; object-fit: cover; }
.modal-hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 30%, var(--bg1) 100%);
}
.modal-hero-content {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 20px 28px 0;
}
.modal-price {
  font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 800;
  color: var(--text0); letter-spacing: -1px; line-height: 1;
}
.modal-close-btn {
  position: absolute; top: 14px; right: 14px;
  background: rgba(13,15,18,0.7); border: 1px solid var(--border-hi);
  border-radius: 50%; width: 34px; height: 34px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; font-size: 16px; color: var(--text1);
  transition: all 0.15s; backdrop-filter: blur(8px);
}
.modal-close-btn:hover { background: var(--bg3); color: var(--text0); }

.modal-body { padding: 20px 28px 28px; }
.modal-address { font-size: 14px; color: var(--text1); margin-top: 4px; font-weight: 300; }
.modal-meta {
  display: flex; gap: 16px; flex-wrap: wrap; padding: 14px 0;
  border-bottom: 1px solid var(--border); margin-bottom: 4px;
}
.modal-spec { font-size: 13px; color: var(--text1); display: flex; align-items: center; gap: 5px; }
.modal-link {
  font-family: 'Fira Code', monospace; font-size: 11px;
  color: var(--teal); text-decoration: none; transition: opacity 0.15s;
}
.modal-link:hover { opacity: 0.75; }

.section-head {
  font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700;
  color: var(--text2); text-transform: uppercase; letter-spacing: 1px;
  margin-top: 22px; margin-bottom: 10px;
  display: flex; align-items: center; gap: 8px;
}
.section-head::after { content: ''; flex: 1; height: 1px; background: var(--border); }

/* RATINGS */
.ratings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.rating-row { display: flex; align-items: center; gap: 12px; background: var(--bg2); border-radius: 9px; padding: 10px 13px; }
.rating-label { font-size: 12px; font-weight: 700; color: var(--text1); min-width: 78px; }
.stars { display: flex; gap: 3px; }
.star { font-size: 18px; cursor: pointer; transition: transform 0.1s, opacity 0.1s; opacity: 0.35; }
.star.lit { opacity: 1; }
.star:hover { transform: scale(1.2); }

/* PROS/CONS */
.pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 6px; }
.pc-col {
  background: var(--bg2); border-radius: 12px; padding: 14px;
  border: 1px solid var(--border);
}
.pc-col.pros { border-color: rgba(91,207,138,0.15); }
.pc-col.cons { border-color: rgba(240,88,74,0.15); }
.pc-col-head {
  font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.7px;
  margin-bottom: 10px; display: flex; align-items: center; gap: 5px;
}
.pc-col-head.pros { color: var(--green); }
.pc-col-head.cons { color: var(--red); }
.pc-item {
  display: flex; align-items: flex-start; gap: 7px; padding: 6px 0;
  border-bottom: 1px solid var(--border); font-size: 13px; line-height: 1.4;
  color: var(--text1);
}
.pc-item:last-of-type { border-bottom: none; }
.pc-icon { flex-shrink: 0; margin-top: 1px; font-size: 12px; }
.pc-del {
  margin-left: auto; background: none; border: none; cursor: pointer;
  color: var(--text2); font-size: 13px; flex-shrink: 0; transition: color 0.12s;
  padding: 0 2px;
}
.pc-del:hover { color: var(--red); }
.pc-add { display: flex; gap: 7px; margin-top: 10px; }
.pc-add-input {
  flex: 1; background: var(--bg3); border: 1px solid var(--border-hi);
  border-radius: 7px; padding: 7px 10px;
  font-family: 'Lato', sans-serif; font-size: 12px; color: var(--text0);
  outline: none; transition: border-color 0.12s;
}
.pc-add-input:focus { border-color: var(--teal); }
.pc-add-input::placeholder { color: var(--text2); }
.btn-add-pro { background: rgba(91,207,138,0.15); color: var(--green); border: 1px solid rgba(91,207,138,0.25); padding: 7px 10px; font-size: 13px; border-radius: 7px; cursor: pointer; font-weight: 700; transition: all 0.12s; }
.btn-add-pro:hover { background: var(--green); color: #0d0f12; }
.btn-add-con { background: rgba(240,88,74,0.15); color: var(--red); border: 1px solid rgba(240,88,74,0.25); padding: 7px 10px; font-size: 13px; border-radius: 7px; cursor: pointer; font-weight: 700; transition: all 0.12s; }
.btn-add-con:hover { background: var(--red); color: white; }

/* NOTES */
.notes-ta {
  width: 100%; background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 10px; padding: 13px; resize: vertical; min-height: 88px;
  font-family: 'Lato', sans-serif; font-size: 13px; color: var(--text0);
  outline: none; line-height: 1.6; transition: border-color 0.12s;
  font-weight: 300;
}
.notes-ta:focus { border-color: var(--teal); background: var(--bg3); }
.notes-ta::placeholder { color: var(--text2); }

/* PRICE HISTORY */
.price-history { display: flex; flex-direction: column; gap: 6px; }
.price-entry {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg2); border-radius: 9px; padding: 10px 14px;
  border: 1px solid var(--border);
}
.price-entry-date { font-family: 'Fira Code', monospace; font-size: 11px; color: var(--text2); min-width: 80px; }
.price-entry-val { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: var(--text0); }
.price-entry-delta {
  font-family: 'Fira Code', monospace; font-size: 11px;
  padding: 2px 7px; border-radius: 4px; margin-left: 2px;
}
.price-entry-note { font-size: 12px; color: var(--text2); flex: 1; text-align: right; font-style: italic; }
.price-add-row { display: flex; gap: 8px; margin-top: 8px; flex-wrap: wrap; align-items: center; }
.price-add-row .form-input { flex: 1; min-width: 120px; }

/* ── COMPARE VIEW ── */
.compare-select { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; align-items: center; }
.compare-pill {
  display: flex; align-items: center; gap: 7px;
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 9px; padding: 8px 14px;
  font-size: 13px; font-weight: 700; color: var(--text1);
  cursor: pointer; transition: all 0.15s;
}
.compare-pill:hover { border-color: var(--teal); color: var(--text0); }
.compare-pill.on { background: var(--teal-dim); border-color: rgba(62,207,178,0.4); color: var(--teal); }
.compare-section-label { font-size: 11px; color: var(--text2); font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; margin-right: 4px; }

.compare-wrap { overflow-x: auto; border-radius: var(--r-lg); border: 1px solid var(--border); }
.compare-table { width: 100%; border-collapse: collapse; min-width: 580px; }
.compare-table th {
  background: var(--bg2); padding: 13px 18px; text-align: left;
  font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--text0);
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.compare-table th:first-child { color: var(--text2); font-size: 11px; text-transform: uppercase; letter-spacing: 0.7px; font-family: 'Fira Code', monospace; }
.compare-table td {
  padding: 11px 18px; font-size: 13px; color: var(--text1);
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}
.compare-table td:first-child { font-size: 11px; color: var(--text2); font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; font-family: 'Fira Code', monospace; white-space: nowrap; }
.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:nth-child(even) td { background: rgba(255,255,255,0.015); }
.compare-best { color: var(--teal); font-weight: 700; }

/* ── SHARE PANEL ── */
.share-panel {
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 12px; padding: 18px 20px; margin-top: 18px;
}
.share-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: var(--text0); margin-bottom: 10px; }
.share-sub { font-size: 12px; color: var(--text2); margin-bottom: 14px; line-height: 1.5; }
.share-link-row { display: flex; gap: 8px; }
.share-link-input {
  flex: 1; background: var(--bg3); border: 1px solid var(--border-hi);
  border-radius: 8px; padding: 9px 12px;
  font-family: 'Fira Code', monospace; font-size: 11px; color: var(--teal);
  outline: none; cursor: text;
}
.share-notice { font-size: 11px; color: var(--text2); margin-top: 10px; font-style: italic; }
.copied-badge {
  background: var(--green-dim); color: var(--green); border: 1px solid rgba(91,207,138,0.25);
  font-size: 11px; font-family: 'Fira Code', monospace;
  padding: 3px 9px; border-radius: 5px; align-self: center;
}

/* ── MODAL FOOTER ── */
.modal-footer { display: flex; gap: 8px; padding-top: 16px; border-top: 1px solid var(--border); margin-top: 18px; flex-wrap: wrap; }

/* ── RESPONSIVE ── */
@media (max-width: 680px) {
  .main { padding: 22px 14px 80px; }
  .header { padding: 0 16px; }
  .form-grid { grid-template-columns: 1fr 1fr; }
  .fg-full { grid-column: 1/-1; }
  .fg-half, .fg-3 { grid-column: 1/-1; }
  .listings-grid { grid-template-columns: 1fr; }
  .pc-grid { grid-template-columns: 1fr; }
  .ratings-grid { grid-template-columns: 1fr; }
  .modal { max-height: 98vh; }
}
`;

/* ─── SUPABASE ───────────────────────────────────────────────────── */
const SUPABASE_URL = "https://bifykhstrzdokkiqkjbr.supabase.co";
const SUPABASE_KEY = "sb_publishable_vJPpE29KGgj9F5qJmReBqQ_ZVepTbyv";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

/* ─── SAMPLE DATA ────────────────────────────────────────────────── */
const SAMPLE = [
  {
    id: 1, address: "2847 Maple Grove Drive, Austin, TX 78702",
    price: 485000, beds: 3, baths: 2, sqft: 1840, yearBuilt: 1998,
    url: "https://zillow.com", source: "Zillow", status: "Active",
    notes: "Great neighborhood, walkable. Master bath needs updating.",
    imageUrl: "", lotSize: "0.18 ac", hoaFees: "None", taxes: "$8,200/yr",
    favorited: true,
    pros: ["Quiet street", "Updated kitchen", "Big backyard"],
    cons: ["No garage", "Small master bath"],
    ratings: { overall: 4, location: 5, value: 3, condition: 4 },
    priceHistory: [
      { date: "2025-11-01", price: 510000, note: "Listed" },
      { date: "2026-01-20", price: 485000, note: "Reduced" },
    ],
  },
  {
    id: 2, address: "518 Rosewood Lane, Austin, TX 78745",
    price: 529000, beds: 4, baths: 2.5, sqft: 2100, yearBuilt: 2005,
    url: "https://redfin.com", source: "Redfin", status: "Active",
    notes: "Newer build. Good school district.",
    imageUrl: "", lotSize: "0.22 ac", hoaFees: "$120/mo", taxes: "$9,400/yr",
    favorited: false,
    pros: ["New roof (2022)", "4 bedrooms", "Top school district"],
    cons: ["HOA fees", "Far from downtown"],
    ratings: { overall: 3, location: 3, value: 3, condition: 5 },
    priceHistory: [
      { date: "2025-10-10", price: 545000, note: "Listed" },
      { date: "2026-01-05", price: 529000, note: "Price drop" },
    ],
  },
];

const STATUS_OPTIONS = ["Active", "Pending", "Sold", "Off Market"];
const DEF_FORM = {
  address: "", price: "", beds: "", baths: "", sqft: "", yearBuilt: "",
  url: "", source: "", status: "Active", notes: "", imageUrl: "",
  lotSize: "", hoaFees: "", taxes: "",
};

/* ─── LOCALSTORAGE HELPERS ───────────────────────────────────────── */
const STORAGE_KEY = "nesttrack_listings";
const COMPARE_KEY = "nesttrack_compare";
const ROOM_KEY = "nesttrack_room";

const loadListings = () => {
  try { const s = localStorage.getItem(STORAGE_KEY); return s ? JSON.parse(s) : SAMPLE; }
  catch { return SAMPLE; }
};
const saveListings = (ls) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ls)); } catch {} };
const loadCompare = () => {
  try { const s = localStorage.getItem(COMPARE_KEY); return s ? JSON.parse(s) : []; }
  catch { return []; }
};

/* ─── ROOM CODE GENERATOR ────────────────────────────────────────── */
const WORDS = ["MAPLE","CEDAR","BIRCH","WILLOW","PINE","OAK","RIVER","STONE","AMBER","CORAL"];
const genCode = () => `${WORDS[Math.floor(Math.random()*WORDS.length)]}-${Math.floor(1000+Math.random()*9000)}`;

/* ─── EXTRA CSS FOR ROOM UI ──────────────────────────────────────── */
const ROOM_CSS = `
.room-bar {
  background: var(--bg1); border-bottom: 1px solid var(--border);
  padding: 8px 32px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
}
.room-badge {
  display: flex; align-items: center; gap: 8px;
  background: var(--teal-dim); border: 1px solid rgba(62,207,178,0.3);
  border-radius: 8px; padding: 6px 14px;
  font-family: 'Fira Code', monospace; font-size: 12px; color: var(--teal);
}
.room-badge-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--teal);
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
.room-code { font-weight: 700; letter-spacing: 1px; font-size: 14px; }
.room-members { font-size: 11px; color: var(--text2); }
.room-actions { display: flex; gap: 6px; margin-left: auto; }

.room-modal-overlay {
  position: fixed; inset: 0; z-index: 300;
  background: rgba(5,7,10,0.85); backdrop-filter: blur(8px);
  display: flex; align-items: center; justify-content: center; padding: 20px;
  animation: fadeIn 0.18s;
}
.room-modal {
  background: var(--bg1); border: 1px solid var(--border-hi);
  border-radius: 20px; width: 100%; max-width: 480px;
  padding: 32px; box-shadow: var(--shadow-lg);
  animation: slideUp 0.22s cubic-bezier(.22,.68,0,1.2);
}
.room-modal-title {
  font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 800;
  color: var(--text0); margin-bottom: 6px;
}
.room-modal-sub { font-size: 13px; color: var(--text2); margin-bottom: 24px; line-height: 1.5; }
.room-option {
  background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 12px; padding: 18px 20px; cursor: pointer;
  transition: all 0.15s; margin-bottom: 10px;
}
.room-option:hover { border-color: var(--teal); background: var(--bg3); }
.room-option-title {
  font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
  color: var(--text0); margin-bottom: 4px; display: flex; align-items: center; gap: 8px;
}
.room-option-sub { font-size: 12px; color: var(--text2); }
.room-divider {
  display: flex; align-items: center; gap: 10px; margin: 16px 0;
}
.room-divider-line { flex: 1; height: 1px; background: var(--border); }
.room-divider-text { font-size: 11px; color: var(--text2); font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
.room-created-code {
  background: var(--bg3); border: 1px solid rgba(62,207,178,0.3);
  border-radius: 12px; padding: 20px; text-align: center; margin: 16px 0;
}
.room-created-label { font-size: 11px; color: var(--text2); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; font-weight: 700; }
.room-created-value {
  font-family: 'Fira Code', monospace; font-size: 28px; font-weight: 700;
  color: var(--teal); letter-spacing: 3px;
}
.room-created-hint { font-size: 12px; color: var(--text2); margin-top: 8px; }
.room-join-input {
  width: 100%; background: var(--bg2); border: 1px solid var(--border-hi);
  border-radius: 10px; padding: 12px 16px; margin: 12px 0;
  font-family: 'Fira Code', monospace; font-size: 16px; color: var(--teal);
  outline: none; text-align: center; text-transform: uppercase; letter-spacing: 2px;
  transition: border-color 0.15s;
}
.room-join-input:focus { border-color: var(--teal); background: var(--bg3); }
.room-join-input::placeholder { color: var(--text2); letter-spacing: 1px; font-size: 13px; text-transform: none; }
.room-error { color: var(--red); font-size: 12px; font-family: 'Fira Code', monospace; margin-top: 6px; text-align: center; }
.room-sync-indicator {
  font-family: 'Fira Code', monospace; font-size: 10px;
  padding: 3px 8px; border-radius: 5px; margin-left: 6px;
}
.room-sync-indicator.syncing { background: var(--amber-dim); color: var(--amber); }
.room-sync-indicator.synced { background: var(--green-dim); color: var(--green); }
`;

/* ─── APP ──────────────────────────────────────────────────────────── */
export default function NestTrack() {
  const [listings, setListingsRaw] = useState(loadListings);
  const [tab, setTab] = useState("all");
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(DEF_FORM);
  const [fetchUrl, setFetchUrl] = useState("");
  const [fetchStatus, setFetchStatus] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [compareIds, setCompareIdsRaw] = useState(loadCompare);
  const [statusFilter, setStatusFilter] = useState("All");
  const [copied, setCopied] = useState(false);
  const [priceAddForm, setPriceAddForm] = useState({ price: "", note: "" });

  // Room state
  const [roomId, setRoomId] = useState(() => localStorage.getItem(ROOM_KEY) || null);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const [roomStep, setRoomStep] = useState("choose"); // choose | creating | created | joining
  const [newRoomCode, setNewRoomCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [joinError, setJoinError] = useState("");
  const [syncStatus, setSyncStatus] = useState("synced"); // synced | syncing
  const [roomCopied, setRoomCopied] = useState(false);

  const proRefs = useRef({});
  const conRefs = useRef({});
  const realtimeRef = useRef(null);

  // Wrap setListings to persist locally and sync to Supabase if in a room
  const setListings = (updater) => {
    setListingsRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      saveListings(next);
      return next;
    });
  };

  const setCompareIds = (updater) => {
    setCompareIdsRaw(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      try { localStorage.setItem(COMPARE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  // Sync a single listing to Supabase
  const syncListing = async (listing) => {
    if (!roomId) return;
    setSyncStatus("syncing");
    await supabase.from("listings").upsert({
      id: listing.id,
      room_id: roomId,
      data: listing,
      updated_at: new Date().toISOString(),
    });
    setSyncStatus("synced");
  };

  // Sync all listings to Supabase
  const syncAllListings = async (ls, rid) => {
    if (!rid) return;
    setSyncStatus("syncing");
    const rows = ls.map(l => ({ id: l.id, room_id: rid, data: l, updated_at: new Date().toISOString() }));
    await supabase.from("listings").upsert(rows);
    setSyncStatus("synced");
  };

  // Wrapped upd that also syncs to Supabase
  const upd = (id, patch) => {
    setListingsRaw(prev => {
      const next = prev.map(l => {
        if (l.id !== id) return l;
        const updated = { ...l, ...patch };
        syncListing(updated);
        return updated;
      });
      saveListings(next);
      return next;
    });
  };

  // Load listings from Supabase room
  const loadRoomListings = async (rid) => {
    const { data, error } = await supabase
      .from("listings")
      .select("data")
      .eq("room_id", rid)
      .order("updated_at", { ascending: true });
    if (!error && data?.length > 0) {
      const ls = data.map(r => r.data);
      setListingsRaw(ls);
      saveListings(ls);
    }
  };

  // Subscribe to real-time changes
  const subscribeToRoom = (rid) => {
    if (realtimeRef.current) realtimeRef.current.unsubscribe();
    realtimeRef.current = supabase
      .channel(`room:${rid}`)
      .on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "listings",
        filter: `room_id=eq.${rid}`,
      }, (payload) => {
        if (payload.eventType === "DELETE") {
          setListingsRaw(prev => {
            const next = prev.filter(l => l.id !== payload.old.id);
            saveListings(next);
            return next;
          });
        } else {
          const incoming = payload.new.data;
          setListingsRaw(prev => {
            const exists = prev.find(l => l.id === incoming.id);
            const next = exists
              ? prev.map(l => l.id === incoming.id ? incoming : l)
              : [...prev, incoming];
            saveListings(next);
            return next;
          });
        }
      })
      .subscribe();
  };

  // Join room on load if stored
  useEffect(() => {
    if (roomId) {
      loadRoomListings(roomId);
      subscribeToRoom(roomId);
    }
    return () => { if (realtimeRef.current) realtimeRef.current.unsubscribe(); };
  }, []);

  // CREATE ROOM
  const createRoom = async () => {
    const code = genCode();
    setRoomStep("creating");
    const { error } = await supabase.from("rooms").insert({ id: code });
    if (error) { setRoomStep("choose"); return; }
    // Push current listings into the room
    await syncAllListings(listings, code);
    setRoomId(code);
    localStorage.setItem(ROOM_KEY, code);
    subscribeToRoom(code);
    setNewRoomCode(code);
    setRoomStep("created");
  };

  // JOIN ROOM
  const joinRoom = async () => {
    setJoinError("");
    const code = joinCode.trim().toUpperCase();
    if (!code) return;
    const { data, error } = await supabase.from("rooms").select("id").eq("id", code).single();
    if (error || !data) { setJoinError("Room not found. Check the code and try again."); return; }
    setRoomId(code);
    localStorage.setItem(ROOM_KEY, code);
    await loadRoomListings(code);
    subscribeToRoom(code);
    setShowRoomModal(false);
    setRoomStep("choose");
    setJoinCode("");
  };

  // LEAVE ROOM
  const leaveRoom = () => {
    if (realtimeRef.current) realtimeRef.current.unsubscribe();
    setRoomId(null);
    localStorage.removeItem(ROOM_KEY);
    setListingsRaw(SAMPLE);
    saveListings(SAMPLE);
  };

  const selected = listings.find(l => l.id === selectedId);

  /* FETCH LISTING FROM URL via RapidAPI */
  const fetchListing = async () => {
    if (!fetchUrl.trim()) return;
    setFetchStatus("loading");
    try {
      const [detailsRes, photosRes] = await Promise.all([
        fetch(`${API_BASE}/api/fetch-listing?url=${encodeURIComponent(fetchUrl)}`),
        fetch(`${API_BASE}/api/fetch-photos?url=${encodeURIComponent(fetchUrl)}`),
      ]);
      const data = await detailsRes.json();
      const photoData = await photosRes.json();
      console.log("PHOTO DATA:", JSON.stringify(photoData, null, 2));
      if (!data.success || !data.property) throw new Error("No property data");
      const p = data.property;
      const addr = p.address;
      const fullAddress = `${addr.streetAddress}, ${addr.city}, ${addr.state} ${addr.zipcode}`;
      const sqft = p.livingArea?.value || 0;
      const lotSize = p.lotArea ? `${p.lotArea.value.toFixed(2)} ${p.lotArea.units}` : "";
      const hoaFees = p.facts_features?.financial_hoa?.hoaFee || "None";
      const taxes = p.propertyTaxRate ? `${p.propertyTaxRate}% rate` : "";
      const status = p.homeStatus === "FOR_SALE" ? "Active"
        : p.homeStatus === "PENDING" ? "Pending"
        : p.homeStatus === "SOLD" ? "Sold" : "Active";
      const photos = photoData?.images || photoData?.photos || photoData?.data || [];
      const firstPhoto = Array.isArray(photos) && photos.length > 0
        ? (photos[0]?.url || photos[0]?.src || photos[0]?.mixedSources?.jpeg?.[0]?.url || "") : "";
      setForm(f => ({
        ...f, address: fullAddress, price: p.price || f.price,
        beds: p.bedrooms || f.beds, baths: p.bathrooms || f.baths,
        sqft, yearBuilt: p.yearBuilt || f.yearBuilt, lotSize, hoaFees, taxes, status,
        url: fetchUrl, source: "Zillow", imageUrl: firstPhoto || f.imageUrl,
        notes: p.description ? p.description.slice(0, 300) + "..." : "",
      }));
      setFetchStatus("success");
      setShowAdd(true);
    } catch (err) {
      console.error("Fetch error:", err);
      setFetchStatus("error");
      setForm(f => ({ ...f, url: fetchUrl }));
      setShowAdd(true);
    }
  };

  const addListing = async () => {
    if (!form.address || !form.price) return;
    const now = new Date().toISOString().split("T")[0];
    const p = Number(String(form.price).replace(/[^0-9.]/g, ""));
    const newL = {
      ...DEF_FORM, ...form, id: Date.now(), price: p,
      beds: Number(form.beds) || 0, baths: Number(form.baths) || 0,
      sqft: Number(form.sqft) || 0, yearBuilt: Number(form.yearBuilt) || 0,
      favorited: false, pros: [], cons: [],
      ratings: { overall: 0, location: 0, value: 0, condition: 0 },
      priceHistory: [{ date: now, price: p, note: "Listed" }],
    };
    setListings(ls => [newL, ...ls]);
    if (roomId) await syncListing(newL);
    setForm(DEF_FORM); setFetchUrl(""); setFetchStatus(null); setShowAdd(false);
  };

  const deleteListing = async (id) => {
    setListings(ls => ls.filter(l => l.id !== id));
    if (selectedId === id) setSelectedId(null);
    setCompareIds(c => c.filter(i => i !== id));
    if (roomId) await supabase.from("listings").delete().eq("id", id).eq("room_id", roomId);
  };

  const addPro = (id) => {
    const val = proRefs.current[id]?.value?.trim();
    if (!val) return;
    const l = listings.find(x => x.id === id);
    upd(id, { pros: [...(l.pros || []), val] });
    proRefs.current[id].value = "";
  };
  const addCon = (id) => {
    const val = conRefs.current[id]?.value?.trim();
    if (!val) return;
    const l = listings.find(x => x.id === id);
    upd(id, { cons: [...(l.cons || []), val] });
    conRefs.current[id].value = "";
  };
  const removePro = (id, i) => { const l = listings.find(x => x.id === id); upd(id, { pros: l.pros.filter((_, idx) => idx !== i) }); };
  const removeCon = (id, i) => { const l = listings.find(x => x.id === id); upd(id, { cons: l.cons.filter((_, idx) => idx !== i) }); };
  const setRating = (id, key, v) => { const l = listings.find(x => x.id === id); upd(id, { ratings: { ...l.ratings, [key]: v } }); };

  const addPriceEntry = (id) => {
    const p = Number(String(priceAddForm.price).replace(/[^0-9.]/g, ""));
    if (!p) return;
    const l = listings.find(x => x.id === id);
    const entry = { date: new Date().toISOString().split("T")[0], price: p, note: priceAddForm.note || "" };
    upd(id, { price: p, priceHistory: [...(l.priceHistory || []), entry] });
    setPriceAddForm({ price: "", note: "" });
  };

  const generateShareLink = (listing) => {
    const data = btoa(JSON.stringify({
      address: listing.address, price: listing.price,
      beds: listing.beds, baths: listing.baths, sqft: listing.sqft,
      pros: listing.pros, cons: listing.cons, notes: listing.notes,
      ratings: listing.ratings, source: listing.source, url: listing.url,
    }));
    return `${window.location.origin}${window.location.pathname}?share=${data}`;
  };

  const copyShareLink = (listing) => {
    navigator.clipboard.writeText(generateShareLink(listing)).then(() => {
      setCopied(true); setTimeout(() => setCopied(false), 2500);
    });
  };

  const shown = tab === "favorites" ? listings.filter(l => l.favorited)
    : tab === "compare" ? listings
    : statusFilter === "All" ? listings : listings.filter(l => l.status === statusFilter);

  const compareLs = listings.filter(l => compareIds.includes(l.id));

  const Stars = ({ id, rkey, val }) => (
    <div className="stars">
      {[1,2,3,4,5].map(n => (
        <span key={n} className={`star${n <= val ? " lit" : ""}`}
          onClick={() => setRating(id, rkey, n)}
          style={{ color: n <= val ? "#f0a94a" : "#2a3040" }}>★</span>
      ))}
    </div>
  );

  const fmt = n => n ? `$${Number(n).toLocaleString()}` : "—";
  const fmtDate = d => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const priceDiff = (history) => {
    if (!history || history.length < 2) return null;
    const sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));
    return sorted[sorted.length - 1].price - sorted[0].price;
  };

  return (
    <div>
      <style>{FONTS}{CSS}{ROOM_CSS}</style>

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span>NEST<span className="logo-dot">·</span>TRACK</span>
          <span className="logo-tag">beta</span>
        </div>
        <nav className="nav">
          <button className={`nav-btn${tab === "all" ? " active" : ""}`} onClick={() => setTab("all")}>
            All <span className="nav-badge">{listings.length}</span>
          </button>
          <button className={`nav-btn${tab === "favorites" ? " active" : ""}`} onClick={() => setTab("favorites")}>
            ⭐ Saved <span className="nav-badge">{listings.filter(l=>l.favorited).length}</span>
          </button>
          <button className={`nav-btn${tab === "compare" ? " active" : ""}`} onClick={() => setTab("compare")}>
            ⚖ Compare <span className="nav-badge">{compareIds.length}</span>
          </button>
          <button className={`nav-btn${roomId ? " active" : ""}`} onClick={() => setShowRoomModal(true)}>
            {roomId ? "🔗 Linked" : "🔗 Link Room"}
            {syncStatus === "syncing" && <span className="room-sync-indicator syncing">syncing</span>}
            {syncStatus === "synced" && roomId && <span className="room-sync-indicator synced">live</span>}
          </button>
        </nav>
      </header>

      {/* ROOM BAR — shown when in a room */}
      {roomId && (
        <div className="room-bar">
          <div className="room-badge">
            <div className="room-badge-dot" />
            <span className="room-members">Room</span>
            <span className="room-code">{roomId}</span>
          </div>
          <span style={{fontSize:12,color:"var(--text2)"}}>Share this code with your partner to collaborate in real-time</span>
          <div className="room-actions">
            <button className="btn btn-ghost btn-sm" onClick={() => {
              navigator.clipboard.writeText(roomId);
              setRoomCopied(true); setTimeout(() => setRoomCopied(false), 2000);
            }}>{roomCopied ? "✓ Copied" : "Copy Code"}</button>
            <button className="btn btn-danger btn-sm" onClick={leaveRoom}>Leave Room</button>
          </div>
        </div>
      )}

      <main className="main">
        {/* ── ALL / FAVORITES ── */}
        {(tab === "all" || tab === "favorites") && (<>
          <div className="page-head">
            <div>
              <div className="page-title">{tab === "all" ? "Your Listings" : "Saved Favorites"}</div>
              <div className="page-sub">{tab === "all" ? "Track, annotate, and compare homes you're considering." : "Homes you've starred for closer review."}</div>
            </div>
            {tab === "all" && <div className="page-actions"><button className="btn btn-primary" onClick={() => setShowAdd(v => !v)}>+ Add Listing</button></div>}
          </div>

          {/* ADD PANEL */}
          {tab === "all" && showAdd && (
            <div className="add-panel">
              <div className="add-panel-header" onClick={() => setShowAdd(v => !v)}>
                <div className="add-panel-title"><span style={{color:"var(--teal)"}}>+</span> New Listing</div>
                <span className={`panel-caret${showAdd ? " open" : ""}`}>▼</span>
              </div>
              <div className="add-panel-body">
                <div className="fetch-row">
                  <input className="fetch-input" placeholder="Paste a Zillow / Redfin / Realtor URL to auto-fill…"
                    value={fetchUrl} onChange={e => setFetchUrl(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && fetchListing()} />
                  <button className="btn btn-primary" onClick={fetchListing} disabled={fetchStatus === "loading"}>
                    {fetchStatus === "loading" ? "…" : "↓ Fetch"}
                  </button>
                  {fetchStatus && (
                    <span className={`fetch-status ${fetchStatus}`}>
                      {fetchStatus === "loading" && "Extracting…"}
                      {fetchStatus === "success" && "✓ Filled below"}
                      {fetchStatus === "error" && "Fill manually ↓"}
                    </span>
                  )}
                </div>
                <div className="fetch-divider">
                  <div className="fetch-divider-line" />
                  <span className="fetch-divider-text">or fill manually</span>
                  <div className="fetch-divider-line" />
                </div>
                <div className="form-grid">
                  <div className="form-group fg-half"><label className="form-label">Address *</label><input className="form-input" placeholder="123 Main St, City, State ZIP" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Price *</label><input className="form-input" placeholder="$450,000" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Status</label><select className="form-input" value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}>{STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}</select></div>
                  <div className="form-group"><label className="form-label">Beds</label><input className="form-input" placeholder="3" type="number" value={form.beds} onChange={e => setForm(f => ({ ...f, beds: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Baths</label><input className="form-input" placeholder="2" type="number" step="0.5" value={form.baths} onChange={e => setForm(f => ({ ...f, baths: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Sq Ft</label><input className="form-input" placeholder="1,800" value={form.sqft} onChange={e => setForm(f => ({ ...f, sqft: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Year Built</label><input className="form-input" placeholder="2001" value={form.yearBuilt} onChange={e => setForm(f => ({ ...f, yearBuilt: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">HOA Fees</label><input className="form-input" placeholder="None / $120/mo" value={form.hoaFees} onChange={e => setForm(f => ({ ...f, hoaFees: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Property Taxes</label><input className="form-input" placeholder="$8,000/yr" value={form.taxes} onChange={e => setForm(f => ({ ...f, taxes: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Lot Size</label><input className="form-input" placeholder="0.2 ac" value={form.lotSize} onChange={e => setForm(f => ({ ...f, lotSize: e.target.value }))} /></div>
                  <div className="form-group"><label className="form-label">Source</label><input className="form-input" placeholder="Zillow, Redfin…" value={form.source} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} /></div>
                  <div className="form-group fg-half"><label className="form-label">Listing URL</label><input className="form-input" placeholder="https://…" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} /></div>
                  <div className="form-group fg-half"><label className="form-label">Image URL (optional)</label><input className="form-input" placeholder="https://…" value={form.imageUrl} onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))} /></div>
                  <div className="form-group fg-full"><label className="form-label">Initial Notes</label><textarea className="form-input" rows={2} placeholder="First impressions…" value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} /></div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" onClick={addListing}>Add Listing</button>
                  <button className="btn btn-secondary" onClick={() => { setForm(DEF_FORM); setFetchUrl(""); setFetchStatus(null); setShowAdd(false); }}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          {tab === "all" && (
            <div className="filter-bar">
              {["All", ...STATUS_OPTIONS].map(s => (
                <button key={s} className={`filter-chip${statusFilter === s ? " active" : ""}`} onClick={() => setStatusFilter(s)}>{s}</button>
              ))}
              <div className="filter-spacer" />
              <span className="listings-count">{shown.length} listing{shown.length !== 1 ? "s" : ""}</span>
            </div>
          )}

          {shown.length === 0 ? (
            <div className="empty">
              <div className="empty-icon">{tab === "favorites" ? "⭐" : "🏠"}</div>
              <div className="empty-title">{tab === "favorites" ? "No favorites yet" : "No listings"}</div>
              <div className="empty-sub">{tab === "favorites" ? "Star a listing to save it here." : "Add a listing above to get started."}</div>
            </div>
          ) : (
            <div className="listings-grid">
              {shown.map(l => {
                const diff = priceDiff(l.priceHistory);
                return (
                  <div key={l.id} className={`card${l.favorited ? " favorited" : ""}${compareIds.includes(l.id) ? " in-compare" : ""}`} onClick={() => setSelectedId(l.id)}>
                    <div className="card-img">
                      {l.imageUrl ? <img src={l.imageUrl} alt="" onError={e => e.target.style.display="none"} /> : <div className="card-img-placeholder">⌂</div>}
                      <div className="card-img-overlay" />
                      <div className="card-img-left">
                        <span className={`status-badge status-${l.status.replace(" ","")}`}>{l.status}</span>
                        {l.source && <span className="source-badge">{l.source}</span>}
                      </div>
                      <div className="card-img-actions" onClick={e => e.stopPropagation()}>
                        <div className={`icon-btn${l.favorited ? " active" : ""}`} onClick={() => upd(l.id, { favorited: !l.favorited })}>
                          {l.favorited ? "⭐" : "☆"}
                        </div>
                        <div className={`icon-btn${compareIds.includes(l.id) ? " active" : ""}`}
                          style={compareIds.includes(l.id) ? { background: "var(--teal-dim)", borderColor: "rgba(62,207,178,0.4)" } : {}}
                          onClick={() => setCompareIds(c => c.includes(l.id) ? c.filter(i => i !== l.id) : [...c, l.id])}>⚖</div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="card-price-row">
                        <div className="card-price">{fmt(l.price)}</div>
                        {diff !== null && <span className={`price-delta ${diff < 0 ? "down" : "up"}`}>{diff < 0 ? "▼" : "▲"} {fmt(Math.abs(diff))}</span>}
                      </div>
                      <div className="card-address">{l.address}</div>
                      <div className="card-specs">
                        {l.beds > 0 && <span className="spec"><span className="spec-icon">🛏</span>{l.beds}bd</span>}
                        {l.baths > 0 && <span className="spec"><span className="spec-icon">🚿</span>{l.baths}ba</span>}
                        {l.sqft > 0 && <span className="spec"><span className="spec-icon">◻</span>{Number(l.sqft).toLocaleString()}sf</span>}
                        {l.yearBuilt > 0 && <span className="spec"><span className="spec-icon">🗓</span>{l.yearBuilt}</span>}
                      </div>
                      {l.ratings?.overall > 0 && (
                        <div className="card-score-row">
                          <div className="score-pills">
                            {[["overall","★"],["location","📍"],["value","💲"],["condition","🔧"]].map(([key,icon]) => (
                              l.ratings[key] > 0 && <span key={key} className="score-pill rated">{icon} {l.ratings[key]}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {(l.pros?.length > 0 || l.cons?.length > 0) && (
                        <div className="pc-tags">
                          {l.pros?.slice(0,2).map((p,i) => <span key={i} className="tag pro">✓ {p}</span>)}
                          {l.cons?.slice(0,2).map((c,i) => <span key={i} className="tag con">✗ {c}</span>)}
                          {(l.pros?.length + l.cons?.length) > 4 && <span className="tag more">+{l.pros.length + l.cons.length - 4}</span>}
                        </div>
                      )}
                    </div>
                    <div className="card-footer" onClick={e => e.stopPropagation()}>
                      <button className="btn btn-ghost btn-sm" onClick={() => setSelectedId(l.id)}>Open</button>
                      {l.url && <a href={l.url} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">↗ {l.source || "Link"}</a>}
                      <button className="btn btn-danger btn-sm" style={{marginLeft:"auto"}} onClick={() => deleteListing(l.id)}>🗑</button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>)}

        {/* ── COMPARE ── */}
        {tab === "compare" && (<>
          <div className="page-head">
            <div><div className="page-title">Side-by-Side Compare</div><div className="page-sub">Select homes below to compare key details at a glance.</div></div>
          </div>
          <div className="compare-select">
            <span className="compare-section-label">Select:</span>
            {listings.map(l => (
              <div key={l.id} className={`compare-pill${compareIds.includes(l.id) ? " on" : ""}`}
                onClick={() => setCompareIds(c => c.includes(l.id) ? c.filter(i => i !== l.id) : [...c, l.id])}>
                {compareIds.includes(l.id) ? "✓ " : ""}{l.address.split(",")[0]}
              </div>
            ))}
          </div>
          {compareLs.length < 2 ? (
            <div className="empty"><div className="empty-icon">⚖</div><div className="empty-title">Select 2 or more listings</div><div className="empty-sub">Use the chips above to pick which homes to compare.</div></div>
          ) : (
            <div className="compare-wrap">
              <table className="compare-table">
                <thead><tr><th>Detail</th>{compareLs.map(l => <th key={l.id}>{l.address.split(",")[0]}</th>)}</tr></thead>
                <tbody>
                  {[
                    ["Price", l => fmt(l.price), "price"],
                    ["Status", l => l.status],
                    ["Beds / Baths", l => `${l.beds||"—"} bd / ${l.baths||"—"} ba`],
                    ["Sq Ft", l => l.sqft ? `${Number(l.sqft).toLocaleString()}` : "—", "sqft"],
                    ["Year Built", l => l.yearBuilt || "—", "yearBuilt"],
                    ["Lot Size", l => l.lotSize || "—"],
                    ["HOA Fees", l => l.hoaFees || "—"],
                    ["Property Taxes", l => l.taxes || "—"],
                    ["Overall ★", l => l.ratings?.overall ? "★".repeat(l.ratings.overall) : "—", "overall"],
                    ["Location ★", l => l.ratings?.location ? "★".repeat(l.ratings.location) : "—", "location"],
                    ["Value ★", l => l.ratings?.value ? "★".repeat(l.ratings.value) : "—", "value"],
                    ["Condition ★", l => l.ratings?.condition ? "★".repeat(l.ratings.condition) : "—", "condition"],
                    ["Pros", l => l.pros?.join(" · ") || "—"],
                    ["Cons", l => l.cons?.join(" · ") || "—"],
                    ["Source", l => l.source || "—"],
                    ["Notes", l => l.notes ? l.notes.slice(0,80)+"…" : "—"],
                  ].map(([label, fn, cmp]) => {
                    let bestIdx = -1;
                    if (cmp === "price") { const ns = compareLs.map(l => l.price||Infinity); bestIdx = ns.indexOf(Math.min(...ns)); }
                    else if (cmp === "sqft") { const ns = compareLs.map(l => l.sqft||0); bestIdx = ns.indexOf(Math.max(...ns)); }
                    else if (cmp === "yearBuilt") { const ns = compareLs.map(l => l.yearBuilt||0); bestIdx = ns.indexOf(Math.max(...ns)); }
                    else if (["overall","location","value","condition"].includes(cmp)) { const ns = compareLs.map(l => l.ratings?.[cmp]||0); bestIdx = ns.indexOf(Math.max(...ns)); }
                    return (
                      <tr key={label}>
                        <td>{label}</td>
                        {compareLs.map((l,i) => <td key={l.id} className={i===bestIdx?"compare-best":""}>{fn(l)}</td>)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </>)}
      </main>

      {/* ── DETAIL MODAL ── */}
      {selectedId && selected && (
        <div className="overlay" onClick={() => setSelectedId(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-hero">
              {selected.imageUrl
                ? <img src={selected.imageUrl} alt="" onError={e => e.target.style.display="none"} />
                : <div style={{width:"100%",height:"100%",background:"linear-gradient(135deg,#1a1e26,#13161b)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,opacity:0.15,fontFamily:"Syne"}}>⌂</div>}
              <div className="modal-hero-overlay" />
              <div className="modal-hero-content"><div className="modal-price">{fmt(selected.price)}</div></div>
              <button className="modal-close-btn" onClick={() => setSelectedId(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:12}}>
                <div>
                  <div className="modal-address">{selected.address}</div>
                  <div style={{display:"flex",gap:6,marginTop:8}}>
                    <span className={`status-badge status-${selected.status.replace(" ","")}`}>{selected.status}</span>
                    {selected.source && <span className="source-badge">{selected.source}</span>}
                  </div>
                </div>
                <div style={{display:"flex",gap:7,flexShrink:0}}>
                  <div className={`icon-btn${selected.favorited?" active":""}`} style={{width:36,height:36,fontSize:16}} onClick={() => upd(selected.id,{favorited:!selected.favorited})}>{selected.favorited?"⭐":"☆"}</div>
                  <div className={`icon-btn${compareIds.includes(selected.id)?" active":""}`}
                    style={compareIds.includes(selected.id)?{width:36,height:36,fontSize:16,background:"var(--teal-dim)",borderColor:"rgba(62,207,178,0.4)"}:{width:36,height:36,fontSize:16}}
                    onClick={() => setCompareIds(c => c.includes(selected.id)?c.filter(i=>i!==selected.id):[...c,selected.id])}>⚖</div>
                </div>
              </div>
              <div className="modal-meta">
                {selected.beds>0&&<span className="modal-spec">🛏 {selected.beds} beds</span>}
                {selected.baths>0&&<span className="modal-spec">🚿 {selected.baths} baths</span>}
                {selected.sqft>0&&<span className="modal-spec">◻ {Number(selected.sqft).toLocaleString()} sqft</span>}
                {selected.yearBuilt>0&&<span className="modal-spec">🗓 {selected.yearBuilt}</span>}
                {selected.lotSize&&<span className="modal-spec">🌿 {selected.lotSize}</span>}
                {selected.hoaFees&&<span className="modal-spec">🏘 HOA: {selected.hoaFees}</span>}
                {selected.taxes&&<span className="modal-spec">💰 {selected.taxes}</span>}
                {selected.url&&<a href={selected.url} target="_blank" rel="noopener" className="modal-link">↗ View on {selected.source||"site"}</a>}
              </div>
              <div className="section-head">Ratings</div>
              <div className="ratings-grid">
                {[["overall","Overall"],["location","Location"],["value","Value"],["condition","Condition"]].map(([key,label]) => (
                  <div key={key} className="rating-row">
                    <span className="rating-label">{label}</span>
                    <Stars id={selected.id} rkey={key} val={selected.ratings?.[key]||0} />
                  </div>
                ))}
              </div>
              <div className="section-head">Pros & Cons</div>
              <div className="pc-grid">
                <div className="pc-col pros">
                  <div className="pc-col-head pros">✅ Pros ({selected.pros?.length||0})</div>
                  {selected.pros?.map((p,i) => (
                    <div key={i} className="pc-item">
                      <span className="pc-icon" style={{color:"var(--green)"}}>✓</span>
                      <span style={{flex:1}}>{p}</span>
                      <button className="pc-del" onClick={() => removePro(selected.id,i)}>✕</button>
                    </div>
                  ))}
                  <div className="pc-add">
                    <input className="pc-add-input" ref={el => proRefs.current[selected.id]=el} placeholder="Add a pro…" onKeyDown={e => e.key==="Enter"&&addPro(selected.id)} />
                    <button className="btn-add-pro" onClick={() => addPro(selected.id)}>+</button>
                  </div>
                </div>
                <div className="pc-col cons">
                  <div className="pc-col-head cons">❌ Cons ({selected.cons?.length||0})</div>
                  {selected.cons?.map((c,i) => (
                    <div key={i} className="pc-item">
                      <span className="pc-icon" style={{color:"var(--red)"}}>✗</span>
                      <span style={{flex:1}}>{c}</span>
                      <button className="pc-del" onClick={() => removeCon(selected.id,i)}>✕</button>
                    </div>
                  ))}
                  <div className="pc-add">
                    <input className="pc-add-input" ref={el => conRefs.current[selected.id]=el} placeholder="Add a con…" onKeyDown={e => e.key==="Enter"&&addCon(selected.id)} />
                    <button className="btn-add-con" onClick={() => addCon(selected.id)}>+</button>
                  </div>
                </div>
              </div>
              <div className="section-head">Notes</div>
              <textarea className="notes-ta" placeholder="Anything you want to remember…"
                value={selected.notes||""} onChange={e => upd(selected.id,{notes:e.target.value})} />
              <div className="section-head">Price History</div>
              <div className="price-history">
                {[...(selected.priceHistory||[])].sort((a,b)=>new Date(b.date)-new Date(a.date)).map((entry,i,arr) => {
                  const prev = arr[i+1];
                  const delta = prev ? entry.price - prev.price : null;
                  return (
                    <div key={i} className="price-entry">
                      <span className="price-entry-date">{fmtDate(entry.date)}</span>
                      <span className="price-entry-val">{fmt(entry.price)}</span>
                      {delta!==null&&<span className="price-entry-delta" style={{background:delta<0?"var(--green-dim)":"var(--red-dim)",color:delta<0?"var(--green)":"var(--red)"}}>{delta<0?"▼":"▲"} {fmt(Math.abs(delta))}</span>}
                      <span className="price-entry-note">{entry.note}</span>
                    </div>
                  );
                })}
              </div>
              <div className="price-add-row" style={{marginTop:10}}>
                <input className="form-input" style={{flex:1,minWidth:120}} placeholder="New price" value={priceAddForm.price} onChange={e => setPriceAddForm(f=>({...f,price:e.target.value}))} />
                <input className="form-input" style={{flex:2,minWidth:160}} placeholder="Note (e.g. Price reduced)" value={priceAddForm.note} onChange={e => setPriceAddForm(f=>({...f,note:e.target.value}))} />
                <button className="btn btn-secondary btn-sm" onClick={() => addPriceEntry(selected.id)}>+ Log Price</button>
              </div>
              <div className="section-head">Share with Partner</div>
              <div className="share-panel">
                <div className="share-title">Share this listing</div>
                <div className="share-sub">Copy a link with this listing's full details to send to a co-buyer.</div>
                <div className="share-link-row">
                  <input className="share-link-input" readOnly value={generateShareLink(selected)} />
                  <button className="btn btn-primary btn-sm" onClick={() => copyShareLink(selected)}>{copied?"✓ Copied!":"Copy Link"}</button>
                </div>
                {roomId && <div style={{marginTop:10,fontSize:12,color:"var(--teal)"}}>🔗 You're in room <strong>{roomId}</strong> — your partner sees all changes live.</div>}
                <div className="share-notice">⚠ Data is encoded in the URL, not stored on a server.</div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary btn-sm" onClick={() => setCompareIds(c=>c.includes(selected.id)?c.filter(i=>i!==selected.id):[...c,selected.id])}>
                  {compareIds.includes(selected.id)?"✓ In Compare":"+ Compare"}
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteListing(selected.id)}>🗑 Delete</button>
                <button className="btn btn-ghost btn-sm" style={{marginLeft:"auto"}} onClick={() => setSelectedId(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ROOM MODAL ── */}
      {showRoomModal && (
        <div className="room-modal-overlay" onClick={() => { setShowRoomModal(false); setRoomStep("choose"); setJoinCode(""); setJoinError(""); }}>
          <div className="room-modal" onClick={e => e.stopPropagation()}>

            {/* ALREADY IN A ROOM */}
            {roomId && roomStep !== "created" && (
              <>
                <div className="room-modal-title">🔗 Linked Room</div>
                <div className="room-modal-sub">You're currently linked in a room with your partner. All changes sync in real-time.</div>
                <div className="room-created-code">
                  <div className="room-created-label">Room Code</div>
                  <div className="room-created-value">{roomId}</div>
                  <div className="room-created-hint">Share this code with anyone you want to collaborate with</div>
                </div>
                <div style={{display:"flex",gap:8,marginTop:16}}>
                  <button className="btn btn-primary" style={{flex:1}} onClick={() => { navigator.clipboard.writeText(roomId); setRoomCopied(true); setTimeout(()=>setRoomCopied(false),2000); }}>{roomCopied?"✓ Copied!":"Copy Room Code"}</button>
                  <button className="btn btn-danger" onClick={() => { leaveRoom(); setShowRoomModal(false); }}>Leave Room</button>
                </div>
                <button className="btn btn-ghost" style={{width:"100%",marginTop:8}} onClick={() => setShowRoomModal(false)}>Close</button>
              </>
            )}

            {/* CHOOSE — not in a room */}
            {!roomId && roomStep === "choose" && (
              <>
                <div className="room-modal-title">🔗 Link a Room</div>
                <div className="room-modal-sub">Collaborate with a partner in real-time. Both of you can add listings, pros/cons, notes, and ratings — all synced live.</div>
                <div className="room-option" onClick={createRoom}>
                  <div className="room-option-title">✨ Create a New Room</div>
                  <div className="room-option-sub">Start a new shared room and get a code to send your partner</div>
                </div>
                <div className="room-divider"><div className="room-divider-line"/><span className="room-divider-text">or</span><div className="room-divider-line"/></div>
                <div style={{fontSize:13,color:"var(--text1)",marginBottom:8,fontWeight:600}}>Join an Existing Room</div>
                <input className="room-join-input" placeholder="Enter room code e.g. MAPLE-7842"
                  value={joinCode} onChange={e => { setJoinCode(e.target.value); setJoinError(""); }}
                  onKeyDown={e => e.key==="Enter"&&joinRoom()} />
                {joinError && <div className="room-error">{joinError}</div>}
                <button className="btn btn-primary" style={{width:"100%",marginTop:8}} onClick={joinRoom}>Join Room</button>
                <button className="btn btn-ghost" style={{width:"100%",marginTop:8}} onClick={() => setShowRoomModal(false)}>Cancel</button>
              </>
            )}

            {/* CREATING */}
            {roomStep === "creating" && (
              <>
                <div className="room-modal-title">Creating Room…</div>
                <div style={{textAlign:"center",padding:"32px 0",color:"var(--text2)",fontFamily:"Fira Code, monospace",fontSize:13}}>Setting up your room…</div>
              </>
            )}

            {/* CREATED */}
            {roomStep === "created" && (
              <>
                <div className="room-modal-title">🎉 Room Created!</div>
                <div className="room-modal-sub">Share this code with your partner. Once they join, all your listings will sync in real-time.</div>
                <div className="room-created-code">
                  <div className="room-created-label">Your Room Code</div>
                  <div className="room-created-value">{newRoomCode}</div>
                  <div className="room-created-hint">Your partner enters this code to join</div>
                </div>
                <button className="btn btn-primary" style={{width:"100%",marginTop:8}} onClick={() => { navigator.clipboard.writeText(newRoomCode); setRoomCopied(true); setTimeout(()=>setRoomCopied(false),2000); }}>{roomCopied?"✓ Copied!":"Copy Room Code"}</button>
                <button className="btn btn-ghost" style={{width:"100%",marginTop:8}} onClick={() => { setShowRoomModal(false); setRoomStep("choose"); }}>Done</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
