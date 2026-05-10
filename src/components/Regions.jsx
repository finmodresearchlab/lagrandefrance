import React, { useState } from 'react'
import { VineBranchLeft } from './Decorations'

const eastBlocks = [
  { id: 'paris', name: 'Paris', region: 'Île-de-France', short: '3 days', long: '5 days', shortPrice: 2800, longPrice: 4500, emoji: '🗼', desc: 'Haussmanian apartment with rooftop views. Versailles without the crowd, dawn markets, private Seine dinner.' },
  { id: 'champagne', name: 'Champagne', region: 'Grand Est', short: '3 days', long: '5 days', shortPrice: 1800, longPrice: 2800, emoji: '🍾', desc: 'A manor house in the vines. Private cave visits at Moët or Taittinger, Reims cathedral, champagne dinners.' },
  { id: 'lyon', name: 'Lyon', region: 'Auvergne', short: '3 days', long: '5 days', shortPrice: 1900, longPrice: 3000, emoji: '🍳', desc: 'Loft on the Saône quays. Secret traboules, Paul Bocuse market, an authentic bouchon lunch, Fourvière at dusk.' },
  { id: 'chamonix', name: 'Chamonix', region: 'Alps', short: '3 days', long: '5 days', shortPrice: 3500, longPrice: 5800, emoji: '🏔️', desc: 'A chalet with Mont-Blanc view and outdoor jacuzzi. Aiguille du Midi, family hike, a morning the kids will never forget.' },
  { id: 'med', name: 'Mediterranean', region: 'Monaco · Calanques · Camargue', short: null, long: '8 days', shortPrice: null, longPrice: 10000, emoji: '🌊', desc: 'The unmissable bloc. Monaco, the Calanques by private boat, flamingos at dawn in the Camargue. Fixed 8-day experience — no short version.' },
]

const westBlocks = [
  { id: 'normandy', name: 'Normandy & Brittany', region: 'North-West', short: '3 days', long: '5 days', shortPrice: 2200, longPrice: 3500, emoji: '⚓', desc: 'D-Day beaches with real emotion, Mont Saint-Michel before the tourists arrive, Saint-Malo ramparts at sunset.' },
  { id: 'loire', name: 'Loire Valley', region: 'Centre-Val de Loire', short: '3 days', long: '5 days', shortPrice: 1800, longPrice: 2800, emoji: '🏰', desc: 'The châteaux of kings — Chambord, Chenonceau — with private access. A manor house in the vine-covered countryside.' },
  { id: 'perigord', name: 'Périgord', region: 'Dordogne', short: '3 days', long: '5 days', shortPrice: 1900, longPrice: 3000, emoji: '🦕', desc: 'Lascaux caves, medieval bastides, truffle markets, foie gras producers. The deep France most Americans never discover.' },
  { id: 'biarritz', name: 'Biarritz', region: 'Basque Country', short: '3 days', long: '5 days', shortPrice: 2400, longPrice: 3800, emoji: '🏄', desc: 'Basque villa with Atlantic views. Surf lessons, pintxos in Saint-Jean-de-Luz, Bayonne chocolate — a France that surprises.' },
  { id: 'bordeaux', name: 'Bordeaux', region: 'Gironde', short: '3 days', long: '5 days', shortPrice: 2200, longPrice: 3500, emoji: '🍷', desc: 'Sleep in a vineyard château in Saint-Émilion. Grand cru tastings, medieval village streets, the perfect final chapter.' },
]

function BlockCard({ block, selected, onToggle, version, onVersion }) {
  const isMed = block.id === 'med'
  const isSelected = selected.includes(block.id)
  const currentPrice = isMed ? block.longPrice : (version[block.id] === 'long' ? block.longPrice : block.shortPrice)

  return (
    <div style={{
      border: isSelected ? '1.5px solid var(--green)' : '1px solid rgba(44,74,46,0.15)',
      borderRadius: 4, background: isSelected ? 'rgba(44,74,46,0.03)' : 'var(--white)',
      padding: '28px 28px 24px',
      cursor: 'pointer',
      transition: 'all 0.35s ease',
      boxShadow: isSelected ? '0 4px 24px rgba(44,74,46,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
    }} onClick={() => onToggle(block.id)}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <span style={{ fontSize: '1.5rem' }}>{block.emoji}</span>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: '1.4rem', color: 'var(--green)', marginTop: 8, marginBottom: 4,
          }}>{block.name}</h3>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: '0.68rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>{block.region}</div>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          border: isSelected ? 'none' : '1.5px solid rgba(44,74,46,0.3)',
          background: isSelected ? 'var(--green)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: 4,
          transition: 'all 0.3s ease',
        }}>
          {isSelected && <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>}
        </div>
      </div>

      <p style={{
        fontFamily: 'var(--font-body)', fontWeight: 300,
        fontSize: '0.85rem', color: 'var(--earth-mid)',
        lineHeight: 1.7, marginBottom: 20,
      }}>{block.desc}</p>

      {/* Version toggle */}
      {!isMed && (
        <div style={{
          display: 'flex', gap: 6, marginBottom: 16,
        }} onClick={e => e.stopPropagation()}>
          {['short', 'long'].map(v => (
            <button key={v} onClick={() => onVersion(block.id, v)} style={{
              padding: '5px 14px', borderRadius: '100px',
              border: '1px solid',
              borderColor: version[block.id] === v ? 'var(--green)' : 'rgba(44,74,46,0.2)',
              background: version[block.id] === v ? 'var(--green)' : 'transparent',
              color: version[block.id] === v ? 'var(--white)' : 'var(--muted)',
              fontFamily: 'var(--font-body)', fontSize: '0.72rem',
              letterSpacing: '0.08em', cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}>
              {v === 'short' ? block.short : block.long}
            </button>
          ))}
        </div>
      )}
      {isMed && (
        <div style={{
          padding: '5px 14px', display: 'inline-block',
          borderRadius: '100px', background: 'var(--green)',
          color: 'var(--white)', fontFamily: 'var(--font-body)',
          fontSize: '0.72rem', letterSpacing: '0.08em', marginBottom: 16,
        }}>
          8 days · Fixed experience
        </div>
      )}

      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '1.4rem',
        fontWeight: 400, color: 'var(--green)',
      }}>
        from €{currentPrice.toLocaleString()}
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', color: 'var(--muted)', marginLeft: 6 }}>
          for 2–5 guests
        </span>
      </div>
    </div>
  )
}

export default function Regions() {
  const [selected, setSelected] = useState([])
  const [version, setVersion] = useState({})

  const toggle = (id) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
    if (!version[id]) setVersion(prev => ({ ...prev, [id]: 'long' }))
  }

  const setVer = (id, v) => setVersion(prev => ({ ...prev, [id]: v }))

  const allBlocks = [...eastBlocks, ...westBlocks]
  const total = selected.reduce((sum, id) => {
    const block = allBlocks.find(b => b.id === id)
    if (!block) return sum
    if (block.id === 'med') return sum + block.longPrice
    return sum + (version[id] === 'long' ? block.longPrice : block.shortPrice)
  }, 0)

  const totalDays = selected.reduce((sum, id) => {
    const block = allBlocks.find(b => b.id === id)
    if (!block) return sum
    if (block.id === 'med') return sum + 8
    return sum + (version[id] === 'long' ? 5 : 3)
  }, 0)

  return (
    <section id="regions" style={{
      background: 'var(--cream)', padding: '120px 48px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="reveal" style={{
            fontFamily: 'var(--font-body)', fontSize: '0.68rem',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: 16,
          }}>Build Your Journey</div>
          <h2 className="reveal delay-1" style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
            color: 'var(--green)', lineHeight: 1.1,
          }}>
            Choose your<br/><em style={{ fontStyle: 'italic' }}>regions</em>
          </h2>
          <p className="reveal delay-2" style={{
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: '0.9rem', color: 'var(--muted)',
            maxWidth: 480, margin: '20px auto 0', lineHeight: 1.7,
          }}>
            Each block is a self-contained experience — 3 or 5 days. Pick yours, stay within a geographical diagonal, and we handle everything else.
          </p>
        </div>

        {/* East diagonal */}
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32,
          }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--green)', fontWeight: 500,
            }}>East Diagonal — Paris to the Riviera</div>
            <div style={{ flex: 1, height: 1, background: 'rgba(44,74,46,0.15)' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {eastBlocks.map((b, i) => (
              <div key={b.id} className={`reveal delay-${i + 1}`}>
                <BlockCard block={b} selected={selected} onToggle={toggle} version={version} onVersion={setVer}/>
              </div>
            ))}
          </div>
        </div>

        {/* West diagonal */}
        <div className="reveal" style={{ marginBottom: 60 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: '0.68rem',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'var(--green)', fontWeight: 500,
            }}>West Diagonal — Atlantic & History</div>
            <div style={{ flex: 1, height: 1, background: 'rgba(44,74,46,0.15)' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {westBlocks.map((b, i) => (
              <div key={b.id} className={`reveal delay-${i + 1}`}>
                <BlockCard block={b} selected={selected} onToggle={toggle} version={version} onVersion={setVer}/>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky total */}
        {selected.length > 0 && (
          <div style={{
            position: 'sticky', bottom: 24, zIndex: 50,
            background: 'var(--green)', borderRadius: 4,
            padding: '24px 36px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 16,
            boxShadow: '0 8px 40px rgba(44,74,46,0.25)',
            animation: 'slideUp 0.4s ease',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(247,242,233,0.5)', marginBottom: 4 }}>
                {selected.length} block{selected.length > 1 ? 's' : ''} · {totalDays} days
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--cream)' }}>
                €{total.toLocaleString()}
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(247,242,233,0.5)', marginLeft: 8 }}>for 2–5 guests · all-inclusive</span>
              </div>
            </div>
            <a href="#book" style={{
              background: 'var(--gold)', color: 'var(--earth)',
              padding: '14px 32px', textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: '0.78rem',
              fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
              borderRadius: '2px', whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
            }}>
              Book a Call →
            </a>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
