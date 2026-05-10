import React, { useState, useEffect } from 'react'
import { VineBranchLeft, VineBranchRight } from './Decorations'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll) }
  }, [])

  const parted = scrollY > 80

  return (
    <section style={{
      minHeight: '100vh', background: 'var(--cream)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '120px 24px 80px',
    }}>

      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.06) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(44,74,46,0.04) 0%, transparent 50%)`,
        pointerEvents: 'none',
      }}/>

      {/* Left vine — parts outward on scroll */}
      <div style={{
        position: 'absolute', left: 0, top: '10%', width: '180px', height: '600px',
        transform: parted ? 'translateX(-60px)' : 'translateX(0px)',
        transition: 'transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: 'none',
      }}>
        <VineBranchLeft style={{ width: '100%', height: '100%', top: 0, left: 0 }}/>
      </div>

      {/* Right vine — parts outward on scroll */}
      <div style={{
        position: 'absolute', right: 0, top: '10%', width: '180px', height: '600px',
        transform: parted ? 'translateX(60px)' : 'translateX(0px)',
        transition: 'transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        pointerEvents: 'none',
      }}>
        <VineBranchRight style={{ width: '100%', height: '100%', top: 0, right: 0 }}/>
      </div>

      {/* Eyebrow */}
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: '0.68rem',
        letterSpacing: '0.35em', textTransform: 'uppercase',
        color: 'var(--gold)', marginBottom: '20px',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
      }}>
        Private Guided Journeys · France
      </div>

      {/* Main title */}
      <h1 style={{
        fontFamily: 'var(--font-display)', fontWeight: 300,
        fontSize: 'clamp(3.5rem, 9vw, 8rem)',
        color: 'var(--green)', lineHeight: 1.0,
        textAlign: 'center', letterSpacing: '-0.02em',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(24px)',
        transition: 'all 1.1s cubic-bezier(0.25,0.46,0.45,0.94) 0.4s',
      }}>
        La Grande
        <br/>
        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>France</em>
      </h1>

      {/* Ornamental divider */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        margin: '32px 0',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'all 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.6s',
      }}>
        <div style={{ width: 60, height: 1, background: 'var(--gold)', opacity: 0.5 }}/>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" fill="var(--gold)" opacity="0.6"/>
        </svg>
        <div style={{ width: 60, height: 1, background: 'var(--gold)', opacity: 0.5 }}/>
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
        color: 'var(--earth-mid)', textAlign: 'center',
        maxWidth: 600, lineHeight: 1.6,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.7s',
      }}>
        Your personal guide, driver & local insider —<br/>
        the France no travel agency can show you
      </p>

      {/* Pills */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 10,
        justifyContent: 'center', marginTop: 40,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 1s cubic-bezier(0.25,0.46,0.45,0.94) 0.9s',
      }}>
        {['2 Weeks', 'All-Inclusive', 'Private Villas', 'Zero Tourist Traps', 'Families'].map(tag => (
          <span key={tag} style={{
            padding: '7px 18px',
            border: '1px solid rgba(44,74,46,0.25)',
            borderRadius: '100px',
            fontSize: '0.72rem', letterSpacing: '0.1em',
            fontFamily: 'var(--font-body)', fontWeight: 300,
            color: 'var(--green)', textTransform: 'uppercase',
          }}>{tag}</span>
        ))}
      </div>

      {/* CTA buttons */}
      <div style={{
        display: 'flex', gap: 16, marginTop: 48, flexWrap: 'wrap', justifyContent: 'center',
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 1s cubic-bezier(0.25,0.46,0.45,0.94) 1.1s',
      }}>
        <a href="#regions" style={{
          background: 'var(--green)', color: 'var(--white)',
          padding: '14px 36px', textDecoration: 'none',
          fontFamily: 'var(--font-body)', fontSize: '0.78rem',
          fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase',
          borderRadius: '2px', transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => e.target.style.background = 'var(--green-light)'}
          onMouseLeave={e => e.target.style.background = 'var(--green)'}>
          Explore the Journey
        </a>
        <a href="#book" style={{
          background: 'transparent', color: 'var(--green)',
          padding: '14px 36px', textDecoration: 'none',
          fontFamily: 'var(--font-body)', fontSize: '0.78rem',
          fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase',
          borderRadius: '2px', border: '1px solid rgba(44,74,46,0.35)',
          transition: 'all 0.3s ease',
        }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.background = 'rgba(44,74,46,0.04)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(44,74,46,0.35)'; e.target.style.background = 'transparent' }}>
          Book a Free Call
        </a>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: loaded && !parted ? 0.5 : 0,
        transition: 'opacity 0.5s ease',
      }}>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll</span>
        <div style={{
          width: 1, height: 40, background: 'linear-gradient(to bottom, var(--muted), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }}/>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
      `}</style>
    </section>
  )
}
