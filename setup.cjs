const fs = require('fs')
const path = require('path')

const files = {
'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>The Daily Read</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,

'src/index.css': `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #fafaf9; --surface: #ffffff; --text: #111827; --text-muted: #6b7280;
  --accent: #4f46e5; --accent-light: #eef2ff; --border: #e5e7eb; --radius: 12px;
  --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
  --max-w: 1100px;
}
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; min-height: 100vh; }
button { cursor: pointer; border: none; background: none; font: inherit; }
a { color: var(--accent); text-decoration: none; }`,

'src/data.js': `export const posts = [
  {
    id: 1, title: 'Building Habits That Actually Stick',
    excerpt: "Most habit advice focuses on motivation. The problem is motivation is temporary. Here's what the research says about lasting change.",
    category: 'Productivity', date: 'May 6, 2026', readTime: '5 min read', featured: true,
    content: [
      { type: 'p', text: "Most advice about habits focuses on motivation. The problem is that motivation ebbs and flows—it's tied to how rested you are, how stressed you feel, whether the weather is nice. Relying on it is like relying on the tide to move your boat." },
      { type: 'p', text: "James Clear's research, popularized in Atomic Habits, points toward a more reliable driver: environment design. When the cue for a behavior is unavoidable, the behavior becomes almost automatic." },
      { type: 'h2', text: 'The Two-Minute Rule' },
      { type: 'p', text: "The hardest part of any habit is starting. Make it take less than two minutes. Don't go for a run—just put on your shoes. The action is a door, and the two-minute version is the key." },
      { type: 'blockquote', text: "Motivation is what gets you started. Habit is what keeps you going." },
      { type: 'h2', text: 'Tracking Without Obsessing' },
      { type: 'p', text: "The real rule isn't never miss—it's never miss twice. One bad day is noise. Two is the start of a new pattern. The goal isn't a perfect record. It's a long one." },
    ],
  },
  {
    id: 2, title: 'The Case for Slow Design',
    excerpt: "Fast design tools have made it easier than ever to produce something that looks polished. But there's a growing case for going deliberately slower.",
    category: 'Design', date: 'April 28, 2026', readTime: '4 min read', featured: false,
    content: [
      { type: 'p', text: "We live in an era of fast design. Figma templates in thirty seconds, AI-generated UI in minutes. But there's a growing case for going slower—deliberately, on purpose." },
      { type: 'h2', text: 'The Problem with Instant' },
      { type: 'p', text: "Speed tends to surface the obvious. Real insights usually live past the point of comfort. They require sitting with a problem long enough to get bored with the easy answers." },
      { type: 'blockquote', text: "The best solutions often feel inevitable once you find them. That feeling doesn't come from the first sketch." },
      { type: 'h2', text: 'When Speed Wins' },
      { type: 'p', text: "Fast design has its place: prototyping hypotheses, validating direction, shipping something to learn from. The trick is knowing which mode you're in." },
    ],
  },
  {
    id: 3, title: 'Why Side Projects Keep You Sharp',
    excerpt: "Side projects have a reputation as procrastination in disguise. But the best engineers I know all have them.",
    category: 'Dev', date: 'April 15, 2026', readTime: '6 min read', featured: false,
    content: [
      { type: 'p', text: "Side projects are where the most interesting learning happens. The distinction is usually intent—a project built to solve a real problem teaches you something genuine." },
      { type: 'h2', text: 'Learning Without Permission' },
      { type: 'p', text: "At work, the stack is chosen and the patterns are established. Side projects are where you can try the thing you've been curious about—the new language, the weird architecture." },
      { type: 'blockquote', text: "The projects that teach you the most are the ones where you hit walls you didn't expect." },
      { type: 'h2', text: 'The Compounding Effect' },
      { type: 'p', text: "The engineers I most respect have a long history of side projects—a graveyard of half-finished experiments and lessons learned. That graveyard is the credential." },
    ],
  },
  {
    id: 4, title: 'Learning in Public: One Year Later',
    excerpt: "A year ago I started sharing my work online before I felt ready. Here's what actually happened.",
    category: 'Career', date: 'April 3, 2026', readTime: '7 min read', featured: false,
    content: [
      { type: 'p', text: "A year ago I started sharing what I was working on before I felt ready. The fear was that I'd look incompetent. The reality was almost the opposite." },
      { type: 'h2', text: 'What Actually Happened' },
      { type: 'p', text: "The posts I was most uncertain about often got the best responses—because readers aren't looking for finished knowledge, they're looking for honest thinking." },
      { type: 'blockquote', text: "Learning in public isn't about broadcasting your ignorance. It's about making your curiosity visible." },
      { type: 'h2', text: 'The Compound Interest' },
      { type: 'p', text: "Something you write once can help someone for years. That asymmetry—small effort, long tail of value—is hard to find in most activities." },
    ],
  },
  {
    id: 5, title: 'Getting Better at Deep Work',
    excerpt: "Cal Newport's ideas changed how I think about focus. Here's how I actually put them into practice.",
    category: 'Productivity', date: 'March 20, 2026', readTime: '5 min read', featured: false,
    content: [
      { type: 'p', text: "Deep work isn't the default. It requires deliberate construction. Most knowledge workers switch contexts every eight minutes." },
      { type: 'h2', text: 'Scheduling It Like a Meeting' },
      { type: 'p', text: "Treat deep work blocks like appointments. Not I'll find time but Tuesday 9 to 11am: deep work. The block is non-negotiable." },
      { type: 'blockquote', text: "Clarity about what you're protecting is a prerequisite for protecting it." },
      { type: 'h2', text: 'The Shutdown Ritual' },
      { type: 'p', text: "A deliberate end-of-workday process closes all open loops and lets you actually disengage. Without it, work bleeds into evenings." },
    ],
  },
  {
    id: 6, title: 'The Tech I Actually Use in 2026',
    excerpt: "A practical rundown of the tools that have earned a permanent spot in my workflow.",
    category: 'Tech', date: 'March 8, 2026', readTime: '4 min read', featured: false,
    content: [
      { type: 'p', text: "Every year I audit what's actually in my workflow. The delta is usually enlightening. Here's what made the cut in 2026." },
      { type: 'h2', text: 'Daily Drivers' },
      { type: 'p', text: "For writing, it's still plain text and Markdown. The portability is unbeatable and the friction is basically zero." },
      { type: 'h2', text: 'What I Dropped' },
      { type: 'p', text: "Three task management apps I no longer use. I spent more time organizing tasks than doing them. A plain text file with today's three priorities won." },
      { type: 'blockquote', text: "The best tool is usually the one with the smallest gap between intention and action." },
    ],
  },
]`,

'src/App.jsx': `import { useState } from 'react'
import Header from './components/Header'
import PostCard from './components/PostCard'
import PostView from './components/PostView'
import { posts } from './data'
import './App.css'

const CATEGORIES = ['All', ...new Set(posts.map(p => p.category))]

export default function App() {
  const [currentPost, setCurrentPost] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory)
  const [featured, ...rest] = filtered

  if (currentPost) return (
    <div className="app">
      <Header onLogoClick={() => setCurrentPost(null)} />
      <PostView post={currentPost} onBack={() => setCurrentPost(null)} />
    </div>
  )

  return (
    <div className="app">
      <Header onLogoClick={() => setCurrentPost(null)} />
      <main className="home">
        <div className="container">
          <div className="hero">
            <h1 className="hero-title">The Daily Read</h1>
            <p className="hero-subtitle">Thoughts on design, development, and living deliberately.</p>
          </div>
          <nav className="category-nav">
            {CATEGORIES.map(cat => (
              <button key={cat} className={\`cat-btn\${activeCategory === cat ? ' active' : ''}\`} onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </nav>
          {featured && (
            <article className="featured" onClick={() => setCurrentPost(featured)}>
              <div className="featured-badge">
                <span className="category-tag">{featured.category}</span>
                <span className="read-time">{featured.readTime}</span>
              </div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              <div className="featured-footer">
                <span className="date">{featured.date}</span>
                <span className="read-more">Read article →</span>
              </div>
            </article>
          )}
          {rest.length > 0 && (
            <div className="grid">
              {rest.map(post => <PostCard key={post.id} post={post} onClick={() => setCurrentPost(post)} />)}
            </div>
          )}
        </div>
      </main>
      <footer className="footer"><div className="container"><span>© 2026 The Daily Read</span></div></footer>
    </div>
  )
}`,

'src/App.css': `.app { min-height: 100vh; display: flex; flex-direction: column; }
.header { position: sticky; top: 0; z-index: 100; background: rgba(250,250,249,0.88); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.header-inner { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; height: 60px; display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 1.05rem; color: var(--text); transition: opacity 0.15s; }
.logo:hover { opacity: 0.65; }
.logo-mark { color: var(--accent); font-size: 0.55rem; }
.header-nav { display: flex; align-items: center; gap: 4px; }
.nav-link { font-size: 0.875rem; color: var(--text-muted); padding: 6px 12px; border-radius: 8px; transition: background 0.15s, color 0.15s; font-weight: 500; text-decoration: none; display: inline-block; }
.nav-link:hover { background: var(--accent-light); color: var(--accent); }
.container { max-width: var(--max-w); margin: 0 auto; padding: 0 24px; }
.home { flex: 1; padding: 64px 0 96px; }
.hero { margin-bottom: 48px; }
.hero-title { font-family: Georgia, serif; font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; margin-bottom: 14px; }
.hero-subtitle { font-size: 1.1rem; color: var(--text-muted); max-width: 460px; }
.category-nav { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 40px; }
.cat-btn { padding: 6px 18px; border-radius: 100px; font-size: 0.85rem; font-weight: 500; color: var(--text-muted); background: var(--surface); border: 1px solid var(--border); transition: all 0.15s; }
.cat-btn:hover { border-color: var(--accent); color: var(--accent); }
.cat-btn.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.featured { background: linear-gradient(135deg, #eef2ff 0%, #f0fdf4 100%); border: 1px solid #dde5ff; border-radius: 20px; padding: 44px 48px; cursor: pointer; margin-bottom: 40px; transition: box-shadow 0.2s, transform 0.2s; }
.featured:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.featured-badge { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
.featured-title { font-family: Georgia, serif; font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 700; line-height: 1.25; margin-bottom: 16px; }
.featured-excerpt { font-size: 1.05rem; color: var(--text-muted); line-height: 1.7; max-width: 620px; margin-bottom: 28px; }
.featured-footer { display: flex; align-items: center; justify-content: space-between; }
.read-more { font-size: 0.9rem; font-weight: 600; color: var(--accent); }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.post-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; cursor: pointer; transition: box-shadow 0.2s, transform 0.2s; display: flex; flex-direction: column; }
.post-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
.post-card-meta { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
.post-card-title { font-family: Georgia, serif; font-size: 1.1rem; font-weight: 700; line-height: 1.4; margin-bottom: 10px; color: var(--text); }
.post-card-excerpt { font-size: 0.9rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 22px; flex: 1; }
.post-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
.read-more-link { font-size: 0.85rem; font-weight: 600; color: var(--accent); }
.category-tag { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--accent); background: var(--accent-light); padding: 3px 10px; border-radius: 100px; }
.read-time, .date { font-size: 0.85rem; color: var(--text-muted); }
.dot { color: #d1d5db; font-size: 0.75rem; }
.post-view { flex: 1; padding: 48px 0 96px; }
.post-view-inner { max-width: 700px; margin: 0 auto; padding: 0 24px; }
.back-btn { font-size: 0.9rem; font-weight: 500; color: var(--text-muted); margin-bottom: 36px; padding: 6px 0; display: inline-flex; align-items: center; gap: 6px; transition: color 0.15s; }
.back-btn:hover { color: var(--text); }
.post-view-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 22px; }
.post-title { font-family: Georgia, serif; font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.025em; margin-bottom: 20px; }
.post-lead { font-size: 1.15rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 36px; }
.post-divider { border: none; border-top: 1px solid var(--border); margin-bottom: 40px; }
.post-body { display: flex; flex-direction: column; gap: 22px; }
.post-p { font-size: 1.05rem; line-height: 1.85; color: #1f2937; }
.post-h2 { font-family: Georgia, serif; font-size: 1.45rem; font-weight: 700; margin-top: 14px; }
.post-quote { border-left: 3px solid var(--accent); padding: 10px 0 10px 24px; font-size: 1.05rem; font-style: italic; color: var(--text-muted); line-height: 1.7; }
.footer { border-top: 1px solid var(--border); padding: 28px 0; }
.footer .container { display: flex; justify-content: center; }
.footer span { font-size: 0.85rem; color: var(--text-muted); }
@media (max-width: 900px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .grid { grid-template-columns: 1fr; } .featured { padding: 28px 24px; } .header-inner, .container { padding-left: 16px; padding-right: 16px; } }`,

'src/components/Header.jsx': `export default function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="logo" onClick={onLogoClick}>
          <span className="logo-mark">●</span>
          <span>The Daily Read</span>
        </button>
        <nav className="header-nav">
          <button className="nav-link" onClick={onLogoClick}>Posts</button>
          <a className="nav-link" href="https://github.com/harzilla07-lab" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  )
}`,

'src/components/PostCard.jsx': `export default function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={onClick}>
      <div className="post-card-meta">
        <span className="category-tag">{post.category}</span>
        <span className="dot">·</span>
        <span className="read-time">{post.readTime}</span>
      </div>
      <h3 className="post-card-title">{post.title}</h3>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <div className="post-card-footer">
        <span className="date">{post.date}</span>
        <span className="read-more-link">Read →</span>
      </div>
    </article>
  )
}`,

'src/components/PostView.jsx': `function renderBlock(block, i) {
  if (block.type === 'h2') return <h2 key={i} className="post-h2">{block.text}</h2>
  if (block.type === 'blockquote') return <blockquote key={i} className="post-quote">{block.text}</blockquote>
  return <p key={i} className="post-p">{block.text}</p>
}

export default function PostView({ post, onBack }) {
  return (
    <main className="post-view">
      <div className="post-view-inner">
        <button className="back-btn" onClick={onBack}>← Back to posts</button>
        <div className="post-view-meta">
          <span className="category-tag">{post.category}</span>
          <span className="dot">·</span>
          <span className="read-time">{post.readTime}</span>
          <span className="dot">·</span>
          <span className="date">{post.date}</span>
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-lead">{post.excerpt}</p>
        <hr className="post-divider" />
        <div className="post-body">{post.content.map(renderBlock)}</div>
      </div>
    </main>
  )
}`,

'.github/workflows/deploy.yml': `name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment`,

'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()], base: '/name-page/' })`,
}

for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath)
  if (dir !== '.') fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(filePath, content)
  console.log('Created:', filePath)
}
console.log('\nAll done! Now run: npm run dev')