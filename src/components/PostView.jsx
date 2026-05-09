function renderBlock(block, i) {
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
}