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
            I'm a senior accountant focused on maintaining accurate financial records and producing clear, reliable financial statements. My work includes reconciliations, data entry, and supporting tax preparation, with close attention to detail and reporting standards. I approach accounting with a focus on organization and consistency—reviewing data carefully, resolving discrepancies, and improving how information is managed over time. I make practical use of accounting systems and tools to keep workflows efficient, while ensuring the integrity of the numbers remains the priority.
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
