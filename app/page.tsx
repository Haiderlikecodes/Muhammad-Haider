import React from 'react';

export default function Portfolio() {
  return (
    <div className="page-container">
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>

        {/* --- HERO SECTION --- */}
        <section style={{ padding: '6rem 0 5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <span className="badge badge-featured">
                <span className="badge-dot"></span>Download CV
              </span>
            </a>

            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '1.5rem 0 1rem' }}>
              Muhammad Haider
            </h1>

            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Full-Stack & AI Engineer • Next.js & Django Specialist
            </p>

            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
              Software engineer building modern web applications and local AI integrations.
              Experienced in Next.js, Django REST framework, and deploying private local LLM chatbot workflows.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:muhhaider906@gmail.com" className="project-link">✉ Email</a>
              <a href="https://github.com" className="project-link" target="_blank" rel="noopener noreferrer">◈ GitHub</a>
              <a href="https://linkedin.com" className="project-link" target="_blank" rel="noopener noreferrer">◉ LinkedIn</a>
            </div>
          </div>
        </section>

        {/* --- HIGHLIGHT CARDS --- */}
        <section style={{ paddingBottom: '5rem' }}>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">◇</div>
              <h3 className="feature-title">Full-Stack Dev</h3>
              <p className="feature-description">Building responsive UIs and robust REST APIs with Next.js & Django</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">◈</div>
              <h3 className="feature-title">Local LLM Chatbots</h3>
              <p className="feature-description">Deploying privacy-focused, low-latency AI assistants locally</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">○</div>
              <h3 className="feature-title">React & Python</h3>
              <p className="feature-description">Deep integration with modern JavaScript frameworks and Python backends</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">△</div>
              <h3 className="feature-title">Systems & Security</h3>
              <p className="feature-description">Foundational experience in system vulnerability and API architecture</p>
            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECT --- */}
        <section style={{ paddingBottom: '5rem' }}>
          <h2 className="section-header" data-icon="├─">
            Featured Project<span className="section-header-line"></span>
          </h2>

          <div className="project-card" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span className="badge badge-featured"><span className="badge-dot"></span>Featured</span>
                <span className="badge"><span className="badge-dot"></span>AI Solution</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Local LLM Chatbot Integration
              </h3>
              <p style={{ color: 'var(--accent-teal)', marginBottom: '1rem', fontSize: '0.95rem' }}>
                Privacy-first AI chatbot powered by locally hosted language models
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Developed a full-stack interface and streaming pipeline to interface directly with locally executed open-source LLMs, ensuring zero external data leakage and zero API subscription dependency.
              </p>
              <ul className="project-highlights">
                <li>Local execution pipeline with zero external API calls or third-party data latency</li>
                <li>Next.js dynamic frontend paired with a fast Django backend endpoint</li>
                <li>Custom prompt templating and streaming chat UI</li>
              </ul>
            </div>

            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Core Components
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Frontend</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>Next.js, React, Tailwind CSS for real-time chat interface</p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Backend & Model</span>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0.25rem 0 0' }}>Django REST Framework & locally executed LLM runtime</p>
                </div>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Local LLMs</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section style={{ paddingBottom: '5rem' }}>
          <h2 className="section-header" data-icon="→">
            Experience<span className="section-header-line"></span>
          </h2>

          <div className="timeline">
            {/* Recent Internship */}
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-company">Software Development Company</span>
                <span className="timeline-role">Full-Stack & AI Engineering Intern</span>
                <span className="timeline-period">Recent (3 Months)</span>
              </div>
              <ul className="timeline-highlights">
                <li>Built full-stack web applications and API endpoints using Django backends and Next.js frontends.</li>
                <li>Designed and integrated custom chatbot workflows using locally run LLMs for low-latency responses and complete data privacy.</li>
                <li>Developed interactive, modern UI components with React and Tailwind CSS.</li>
              </ul>
            </div>

            {/* Past Pentester Role */}
            <div className="timeline-item">
              <div className="timeline-header">
                <span className="timeline-company">Zeroxinnovation</span>
                <span className="timeline-role">Junior Pentester</span>
                <span className="timeline-period">2024 – 2026</span>
              </div>
              <ul className="timeline-highlights">
                <li>Conducted web application, network, and API penetration tests aligned with OWASP Top 10 and NIST frameworks.</li>
                <li>Identified vulnerability vectors (SQLi, XSS, misconfigurations) and collaborated with developers to implement secure coding fixes.</li>
                <li>Utilized industry-standard tools including Burp Suite, Nmap, Metasploit, and Wireshark for security assessments.</li>
                <li>Wrote automated reconnaissance and testing scripts using Python and Bash.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section style={{ paddingBottom: '5rem' }}>
          <h2 className="section-header" data-icon="◇">
            Technical Skills<span className="section-header-line"></span>
          </h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h3 className="feature-title" style={{ marginBottom: '0.75rem' }}>Frontend</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">jQuery</span>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="feature-title" style={{ marginBottom: '0.75rem' }}>Backend & AI</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Local LLMs</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">C++</span>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="feature-title" style={{ marginBottom: '0.75rem' }}>Tools & Security</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Burp Suite</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section style={{ paddingBottom: '6rem' }}>
          <h2 className="section-header" data-icon="◎">
            Education<span className="section-header-line"></span>
          </h2>
          <div className="contact-grid">
            <div className="contact-item" style={{ cursor: 'default' }}>
              <span className="contact-icon">◈</span>
              <div>
                <div className="contact-value">Bachelor of Computer Science (BSCS)</div>
                <div className="contact-label">NUML (National University of Modern Languages)</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer style={{ borderTop: '1px solid var(--border-subtle)', padding: '2rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          <p style={{ margin: 0 }}>Built with Next.js • Designed with intention • © 2026 Muhammad Haider</p>
        </footer>

      </div>
    </div>
  );
}
