import { useState } from 'react'
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
              <button key={cat} className={`cat-btn${activeCategory === cat ? ' active' : ''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
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
}