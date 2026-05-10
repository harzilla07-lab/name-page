export default function About() {
  return (
    <main className="about-view">
      <div className="about-inner">
        <div className="about-header">
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
            <span className="about-tag">Financial Accounting</span>
            <span className="about-tag">Bookkeeping</span>
            <span className="about-tag">Tax Preparation</span>
            <span className="about-tag">Financial Reporting</span>
            <span className="about-tag">Accounts Payable & Receivable</span>
            <span className="about-tag">Payroll Processing</span>
            <span className="about-tag">Audit & Compliance</span>
            <span className="about-tag">QuickBooks</span>
            <span className="about-tag">ERP Systems</span>
            <span className="about-tag">Excel & Data Modelling</span>
            <span className="about-tag">Workflow Automation</span>
            <span className="about-tag">Cloud Accounting Software</span>
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
