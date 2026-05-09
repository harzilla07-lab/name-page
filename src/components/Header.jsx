export default function Header({ onLogoClick }) {
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
}