export default function PostCard({ post, onClick }) {
  return (
    <article className="post-card" onClick={onClick}>
      <div className="post-card-meta">
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
}