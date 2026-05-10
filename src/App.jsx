import { useState } from 'react'
import Header from './components/Header'
import PostCard from './components/PostCard'
import PostView from './components/PostView'
import { posts } from './data'
import './App.css'

export default function App() {
  const [currentPost, setCurrentPost] = useState(null)
  const [featured, ...rest] = posts

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
            <p className="hero-subtitle">Thoughts on design, development, and living deliberately.</p>
          </div>
          {featured && (
            <article className="featured" onClick={() => setCurrentPost(featured)}>
              <div className="featured-badge">
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
      <footer className="footer"><div className="container"><span>© 2026 harmanc</span></div></footer>
    </div>
  )
}
