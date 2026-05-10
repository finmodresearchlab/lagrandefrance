import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'The Journey', href: '#concept' },
    { label: 'Regions', href: '#regions' },
    { label: 'How It Works', href: '#how' },
    { label: 'About', href: '#about' },
    { label: 'Book a Call', href: '#book', cta: true },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 48px' : '24px 48px',
      background: scrolled ? 'rgba(247,242,233,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,169,110,0.2)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
    }}>
      {/* Logo */}
      <a href="#" style={{ textDecoration: 'none' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '1.4rem',
          fontWeight: 400, color: 'var(--green)', letterSpacing: '0.02em',
          fontStyle: 'italic',
        }}>
          La Grande France
        </div>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}
        className="nav-links">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'var(--font-body)', fontSize: '0.78rem',
            fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none',
            color: l.cta ? 'var(--white)' : 'var(--green)',
            background: l.cta ? 'var(--green)' : 'transparent',
            padding: l.cta ? '10px 22px' : '0',
            borderRadius: l.cta ? '2px' : '0',
            border: l.cta ? 'none' : 'none',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={e => {
              if (!l.cta) e.target.style.color = 'var(--gold)'
              else e.target.style.background = 'var(--green-light)'
            }}
            onMouseLeave={e => {
              if (!l.cta) e.target.style.color = 'var(--green)'
              else e.target.style.background = 'var(--green)'
            }}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        className="menu-btn"
        style={{
          display: 'none', background: 'none', border: 'none',
          cursor: 'pointer', padding: '8px', color: 'var(--green)',
        }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5"/>
            </>
          ) : (
            <>
              <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5"/>
              <line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--cream)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '32px', zIndex: 99,
        }}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--green)', fontSize: '1.5rem' }}>✕</button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300,
                fontStyle: 'italic', color: 'var(--green)', textDecoration: 'none',
              }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
