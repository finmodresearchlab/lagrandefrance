import React from 'react'

const steps = [
  { num: '01', title: 'Build your journey', body: 'Select your regions and versions online. The interactive map shows your route, your days, your total. No commitment yet.' },
  { num: '02', title: 'Meet Mathilde', body: 'Book a free 30-minute video call. She\'ll understand your family, your pace, your expectations — and refine the itinerary with you.' },
  { num: '03', title: 'We handle everything', body: 'Villa selection, train tickets, restaurant reservations, activity bookings. You receive a beautiful journey booklet. You just pack.' },
  { num: '04', title: 'Arrive & let go', body: 'Paul meets you at the airport. From that moment, you\'re in good hands. Your only job is to enjoy every single day.' },
]

export function HowItWorks() {
  return (
    <section id="how" style={{
      background: 'var(--green)', padding: '120px 48px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(200,169,110,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }}/>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.68rem',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 16,
          }}>How It Works</div>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            color: 'var(--cream)', lineHeight: 1.1,
          }}>
            You see <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>nothing</em><br/>of the organisation
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.num} className={`reveal delay-${i + 1}`} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr',
              gap: 32, padding: '40px 0',
              borderBottom: i < steps.length - 1 ? '1px solid rgba(247,242,233,0.1)' : 'none',
              alignItems: 'start',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '3rem',
                fontWeight: 300, color: 'rgba(200,169,110,0.3)',
                lineHeight: 1,
              }}>{s.num}</div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400,
                  fontSize: '1.6rem', color: 'var(--cream)',
                  marginBottom: 12,
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontWeight: 300,
                  fontSize: '0.9rem', color: 'rgba(247,242,233,0.6)',
                  lineHeight: 1.75,
                }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" style={{
      background: 'var(--cream-mid)', padding: '120px 48px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }}
          className="about-grid">
          {/* Text */}
          <div>
            <div className="reveal" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem',
              letterSpacing: '0.35em', textTransform: 'uppercase',
              color: 'var(--gold)', marginBottom: 16,
            }}>Your Hosts</div>
            <h2 className="reveal delay-1" style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: 'var(--green)', lineHeight: 1.1,
              marginBottom: 32,
            }}>
              Paul <em style={{ fontStyle: 'italic' }}>&</em> Mathilde
            </h2>
            <p className="reveal delay-2" style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '0.92rem', color: 'var(--earth-mid)',
              lineHeight: 1.8, marginBottom: 20,
            }}>
              We lived in the United States and came back to France with one certainty: Americans love France, but they rarely get to see the real thing.
            </p>
            <p className="reveal delay-3" style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '0.92rem', color: 'var(--earth-mid)',
              lineHeight: 1.8, marginBottom: 36,
            }}>
              Paul knows every back road, every local producer, every hidden story behind every stone. Mathilde manages everything before you arrive — so all you have to do is show up and let France do the rest.
            </p>
            <div className="reveal delay-4" style={{
              display: 'flex', gap: 40,
            }}>
              {[['100%', 'English spoken'], ['10+', 'Regions covered'], ['0', 'Tourist traps']].map(([num, label]) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem',
                    fontWeight: 300, color: 'var(--green)',
                  }}>{num}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                    color: 'var(--muted)', letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative card */}
          <div className="reveal-right" style={{
            background: 'var(--white)',
            borderRadius: 4, padding: '48px',
            boxShadow: '0 8px 40px rgba(61,44,30,0.08)',
            borderTop: '3px solid var(--gold)',
            position: 'relative',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '3.5rem',
              color: 'var(--gold)', opacity: 0.2,
              lineHeight: 1, marginBottom: 16,
            }}>"</div>
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: '1.25rem', color: 'var(--earth)',
              lineHeight: 1.65,
            }}>
              I don't drive you through France.<br/>
              I walk you into it — into the boulangerie, into the vineyard, into the conversation with the fisherman in Cassis.
            </p>
            <div style={{
              marginTop: 28, display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'var(--green)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--cream)', fontFamily: 'var(--font-display)',
                fontSize: '1.1rem', fontStyle: 'italic',
              }}>P</div>
              <div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--green)' }}>Paul</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--muted)' }}>Guide · Driver · Your French friend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}

export function Book() {
  return (
    <section id="book" style={{
      background: 'var(--cream)', padding: '120px 48px',
      textAlign: 'center', position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative rings */}
      {[300, 500, 700].map((size, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%',
          border: '1px solid rgba(200,169,110,0.12)',
          width: size, height: size,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}/>
      ))}

      <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.68rem',
          letterSpacing: '0.35em', textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: 16,
        }}>Ready to Begin?</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          color: 'var(--green)', lineHeight: 1.1, marginBottom: 24,
        }}>
          Meet <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Mathilde</em>
        </h2>

        <p className="reveal delay-2" style={{
          fontFamily: 'var(--font-body)', fontWeight: 300,
          fontSize: '0.95rem', color: 'var(--earth-mid)',
          lineHeight: 1.75, marginBottom: 48,
        }}>
          Book a free 30-minute call. Tell us about your family, your dream trip, your questions. No obligation — just a conversation with someone who loves France as much as you want to.
        </p>

        <div className="reveal delay-3">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--green)', color: 'var(--white)',
              padding: '18px 48px', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.82rem',
              fontWeight: 400, letterSpacing: '0.18em', textTransform: 'uppercase',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 24px rgba(44,74,46,0.2)',
            }}
            onMouseEnter={e => { e.target.style.background = 'var(--green-light)'; e.target.style.boxShadow = '0 8px 32px rgba(44,74,46,0.3)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--green)'; e.target.style.boxShadow = '0 4px 24px rgba(44,74,46,0.2)' }}>
            Book Your Free Call
          </a>
        </div>

        <p className="reveal delay-4" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.75rem',
          color: 'var(--muted)', marginTop: 20, letterSpacing: '0.05em',
        }}>
          Free · 30 minutes · No commitment · In English
        </p>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{
      background: 'var(--earth)', padding: '60px 48px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: 16,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1.6rem',
        fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300,
      }}>La Grande France</div>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: '0.7rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(247,242,233,0.3)',
      }}>Private Guided Journeys · Based in Lyon, France</div>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: '0.72rem',
        color: 'rgba(247,242,233,0.2)', marginTop: 8,
      }}>© 2025 La Grande France — All rights reserved</div>
    </footer>
  )
}
