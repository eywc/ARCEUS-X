'use client'

import { useState } from 'react'

const films = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260908_073327_03643c0a-db33-417a-ae8f-4a39259c7f9c.mp4',
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Arceus-X home">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arceus-x-logo-M505go0Xwo5xiY7UoiqEAhGEd7BU1w.png" alt="Arceus-X" />
        <span>AI SECURITY PLATFORM</span>
      </a>
      <button className="menu-toggle" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#platform" onClick={() => setOpen(false)}>Platform</a>
        <a href="#modes" onClick={() => setOpen(false)}>Operating modes</a>
        <a href="#controls" onClick={() => setOpen(false)}>Controls</a>
        <a className="nav-cta" href=" https://discord.gg/crV5nQAm4t" onClick={() => setOpen(false)}>Request access <Arrow /></a>
      </nav>
    </header>
  )
}

function Film({ src, className = '' }: { src: string; className?: string }) {
  return <video className={className} autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src={src} type="video/mp4" /></video>
}

function SignalMark() {
  return <div className="signal-mark" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /></div>
}

export function ArceusHome() {
  return (
    <main id="top" className="wellness-page">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <Film src={films[0]} className="hero-film" />
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light"><span className="status-dot" /> Autonomous security. Human control.</p>
          <h1 id="hero-title">Know your<br /><em>next move.</em></h1>
          <p className="hero-sub">AI-assisted security testing, built around the boundaries you set.</p>
          <div className="hero-actions"><a className="button button-light" href="#platform">Explore the platform <Arrow /></a><a className="hero-secondary" href="#controls">See how control works <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-console" aria-label="Arceus-X control overview">
          <div className="console-head"><span><i /> CONTROL PLANE</span><span>SESSION 01</span></div>
          <div className="console-rule" />
          <div className="console-row"><span>Engagement</span><b>Authorized scope</b></div>
          <div className="console-row"><span>Operating mode</span><b>Governed</b></div>
          <div className="console-row"><span>Approval gates</span><b>Active <i /></b></div>
          <div className="console-foot"><span>READY WHEN YOU ARE</span><SignalMark /></div>
        </div>
        <div className="hero-foot"><span>ARCEUS-X / AUTONOMOUS RED-TEAM ENGINE</span><span>01 — 06</span></div>
        <a className="scroll-cue" href="#platform" aria-label="Scroll to platform"><span /></a>
      </section>

      <section id="platform" className="intro section-pad">
        <p className="eyebrow">A clearer view of your security</p>
        <h2>Find the gaps.<br /><em>Keep the guardrails.</em></h2>
        <p className="intro-body">Arceus-X brings AI-assisted analysis and controlled security testing into one governed workflow. Your scope. Your rules. Your approval at every critical step.</p>
        <a className="text-link" href="#controls">Meet the control plane <Arrow /></a>
      </section>

      <section className="platform-split">
        <div className="platform-copy">
          <p className="eyebrow">01 / The platform</p>
          <h2>Move with<br /><em>intent.</em></h2>
          <p>One place to define authorized scope, choose approved tools, set testing limits, and review findings. The AI works inside the boundaries. Your team stays in charge.</p>
          <a className="text-link" href="#modes">See the operating modes <Arrow /></a>
        </div>
        <div className="platform-visual">
          <Film src={films[1]} />
          <div className="visual-shade" />
          <div className="visual-caption"><span className="status-dot" /> Scope checked <span>Policy active</span></div>
          <div className="visual-index">01 / CONTROLLED TESTING</div>
        </div>
      </section>

      <section className="quote-band">
        <p className="eyebrow light">The principle is simple</p>
        <blockquote>“Autonomy should expand<br /><em>your control. Not replace it.”</em></blockquote>
        <span className="quote-mark" aria-hidden="true">✳</span>
      </section>

      <section id="modes" className="modes section-pad">
        <div className="modes-heading"><p className="eyebrow">02 / One engine. Clear modes.</p><h2>Choose how far<br /><em>to go.</em></h2><p>Match the mode to the moment. Scope and control-plane protections stay in place.</p></div>
        <div className="mode-list">
          <article><span className="mode-number">01</span><div><div className="mode-title"><h3>Advisory</h3><span>READ ONLY</span></div><p>Review context and surface security insights. No target-facing actions.</p></div><span className="mode-mark">↗</span></article>
          <article className="mode-featured"><span className="mode-number">02</span><div><div className="mode-title"><h3>Governed</h3><span>DEFAULT MODE</span></div><p>Work through defined scope, approved tools, rate limits, phase gates, and human approvals.</p></div><span className="mode-mark">↗</span></article>
          <article><span className="mode-number">03</span><div><div className="mode-title"><h3>Execution</h3><span>AUTHORIZED SCOPE</span></div><p>Run active security assessments only within the engagement scope and its configured safeguards.</p></div><span className="mode-mark">↗</span></article>
        </div>
      </section>

      <section id="controls" className="controls">
        <div className="controls-visual">
          <Film src={films[2]} />
          <div className="visual-shade" />
          <div className="control-orbit" aria-hidden="true"><span /><span /><span /><b>HUMAN<br />IN CONTROL</b></div>
          <div className="visual-index">POLICY / APPROVAL / AUDIT</div>
        </div>
        <div className="controls-copy">
          <p className="eyebrow">03 / Built around boundaries</p>
          <h2>Guardrails<br /><em>are the point.</em></h2>
          <p>Each engagement starts with an explicit scope. Policy checks, approval gates, and a clear stop control shape what the system can do.</p>
          <div className="control-points"><span><b>01</b> Declared scope</span><span><b>02</b> Human approvals</span><span><b>03</b> Stop at any time</span></div>
        </div>
      </section>

      <section className="principles">
        <div className="principles-heading"><p className="eyebrow">Designed for security teams</p><h2>Intelligence<br /><em>with restraint.</em></h2></div>
        <div className="principle-list">
          <article><span>01</span><div><h3>Scope is explicit.</h3><p>Assess only the assets your team has authorized.</p></div><span className="principle-icon">＋</span></article>
          <article><span>02</span><div><h3>People stay in the loop.</h3><p>Keep consequential steps behind approval gates.</p></div><span className="principle-icon">＋</span></article>
          <article><span>03</span><div><h3>Every action has context.</h3><p>Make policy, limits, and outcomes easier to review.</p></div><span className="principle-icon">＋</span></article>
        </div>
      </section>

      <section id="access" className="closing">
        <div className="closing-glow" />
        <p className="eyebrow light">A stronger posture starts with clarity</p>
        <h2>Test with purpose.<br /><em>Stay in control.</em></h2>
        <p>Bring governed AI into your security workflow.</p>
        <a className="button button-light" href="https://discord.gg/crV5nQAm4t">Talk to our team <Arrow /></a>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top">ARCEUS-X<span>AUTONOMOUS RED-TEAM ENGINE</span></a>
        <p>AI security. Within your boundaries.</p>
        <div><a href="#platform">Platform</a><a href="#controls">Control plane</a><a href=" https://discord.gg/crV5nQAm4t">Contact</a></div>
        <small>© 2026 Arceus-X. Authorized testing. Human oversight.</small>
      </footer>
    </main>
  )
}
