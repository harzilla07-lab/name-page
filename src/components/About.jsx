export default function About() {
  return (
    <main className="about-view">
      <div className="about-inner">
        <div className="about-header">
          <div className="about-avatar">H</div>
          <div>
            <h1 className="about-name">Harman</h1>
            <p className="about-role">Accountant & Capital Markets Analyst</p>
          </div>
        </div>

        <section className="about-section">
          <p className="about-bio">
            Hey, I'm Harman. I write about productivity, design, and the craft of building things.
            This is my corner of the internet — a place to think out loud and share what I'm learning.
          </p>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">What I'm interested in</h2>
          <div className="about-tags">
            <span className="about-tag">Design</span>
            <span className="about-tag">Development</span>
            <span className="about-tag">Productivity</span>
            <span className="about-tag">Writing</span>
            <span className="about-tag">Technology</span>
          </div>
        </section>

        <section className="about-section">
          <h2 className="about-section-title">Get in touch</h2>
          <p className="about-bio">Have a question or just want to say hello? Feel free to reach out.</p>
          <a className="about-contact-btn" href="mailto:info@harmanc.com">info@harmanc.com</a>
        </section>
      </div>
    </main>
  )
}
