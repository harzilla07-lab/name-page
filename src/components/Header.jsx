export default function Header({ onLogoClick, onAboutClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <button className="logo" onClick={onLogoClick}>
          <span className="logo-mark">●</span>
          <span>harmanc</span>
        </button>
        <nav className="header-nav">
          <button className="nav-link" onClick={onLogoClick}>Posts</button>
          <button className="nav-link" onClick={onAboutClick}>About Me</button>
        </nav>
      </div>
    </header>
  )
}