import React from 'react'
import { OliveLeaf } from './Decorations'

const pillars = [
  {
    icon: '🗺️',
    title: 'Your Guide',
    body: 'A real person who knows every region, speaks to the locals, and takes you where no GPS ever could. History, stories, secrets — all day, every day.',
  },
  {
    icon: '🚄',
    title: 'Your Driver',
    body: 'Train first class wherever possible — a French experience in itself. Private transfers for the last mile. You never touch a steering wheel or a timetable.',
  },
  {
    icon: '🏡',
    title: 'Your Home',
    body: 'Private villas, mas, châteaux and chalets — never a hotel room. A real kitchen, a real garden, a real terrace. You live in France, you don\'t just pass through.',
  },
  {
    icon: '🌿',
    title: 'Your Pace',
    body: 'Slow mornings, one activity a day, dinners cooked at home. Quiet Luxury means you\'re not rushing — you\'re breathing.',
  },
]

export default function Concept() {
  return (
    <section id="concept" style={{
      background: 'var(--white)', padding: '120px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative olive branch */}
      <OliveLeaf style={{
        position: 'absolute', top: 40, right: 60,
        width: 200, opacity: 0.6,
      }}/>
      <OliveLeaf style={{
        position: 'absolute', bottom: 40, left: 40,
        width: 160, opacity: 0.4,
        transform: 'rotate(180deg)',
      }}/>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.68rem',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 16,
          }}>
            The Concept
          </div>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            color: 'var(--green)', lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Not a tour.<br/>
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>A relationship.</em>
          </h2>
          <p className="reveal delay-2" style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: '1.15rem', color: 'var(--muted)',
            maxWidth: 560, margin: '24px auto 0',
            lineHeight: 1.7,
          }}>
            "I don't show you France. I share it with you — the way a French friend would, if you had one."
          </p>
        </div>

        {/* Four pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 40,
        }}>
          {pillars.map((p, i) => (
            <div key={p.title} className={`reveal delay-${i + 2}`} style={{
              borderTop: '1px solid rgba(200,169,110,0.35)',
              paddingTop: 32,
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: '1.5rem', color: 'var(--green)',
                marginBottom: 12,
              }}>{p.title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 300,
                fontSize: '0.9rem', color: 'var(--earth-mid)',
                lineHeight: 1.75,
              }}>{p.body}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="reveal" style={{
          marginTop: 100, background: 'var(--green)',
          borderRadius: 4, padding: '60px 80px',
          textAlign: 'center', position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 2rem)',
            fontStyle: 'italic', fontWeight: 300,
            color: 'var(--cream)', lineHeight: 1.6,
          }}>
            "You won't remember the monuments.<br/>
            You'll remember <em style={{ color: 'var(--gold-light)' }}>the market at 7am</em>, the vigneron who opened his best bottle,<br/>
            and the road through the Périgord nobody else knows."
          </div>
          <div style={{
            marginTop: 28, fontFamily: 'var(--font-body)',
            fontSize: '0.72rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'rgba(247,242,233,0.45)',
          }}>
            Paul — Your guide
          </div>
        </div>
      </div>
    </section>
  )
}
