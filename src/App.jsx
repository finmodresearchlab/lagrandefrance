import { useEffect, useRef, useState } from 'react'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

const VineLeft = () => (
  <svg width="180" height="50" viewBox="0 0 180 50" fill="none">
    <path d="M180 25 Q150 8 120 20 Q90 32 60 15 Q40 5 20 22" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
    <ellipse cx="70" cy="12" rx="7" ry="4" fill="#4A6741" opacity="0.5" transform="rotate(-20 70 12)"/>
    <ellipse cx="110" cy="22" rx="6" ry="3.5" fill="#4A6741" opacity="0.4" transform="rotate(15 110 22)"/>
    <ellipse cx="40" cy="18" rx="5" ry="3" fill="#4A6741" opacity="0.5" transform="rotate(-10 40 18)"/>
    <circle cx="90" cy="32" r="3" fill="#C8A96E" opacity="0.4"/>
    <circle cx="130" cy="17" r="2.5" fill="#C8A96E" opacity="0.35"/>
  </svg>
)
const VineRight = () => (
  <svg width="180" height="50" viewBox="0 0 180 50" fill="none" style={{transform:'scaleX(-1)'}}>
    <path d="M180 25 Q150 8 120 20 Q90 32 60 15 Q40 5 20 22" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
    <ellipse cx="70" cy="12" rx="7" ry="4" fill="#4A6741" opacity="0.5" transform="rotate(-20 70 12)"/>
    <ellipse cx="110" cy="22" rx="6" ry="3.5" fill="#4A6741" opacity="0.4" transform="rotate(15 110 22)"/>
    <ellipse cx="40" cy="18" rx="5" ry="3" fill="#4A6741" opacity="0.5" transform="rotate(-10 40 18)"/>
    <circle cx="90" cy="32" r="3" fill="#C8A96E" opacity="0.4"/>
    <circle cx="130" cy="17" r="2.5" fill="#C8A96E" opacity="0.35"/>
  </svg>
)
const BaguetteHalf = ({ flip }) => (
  <svg width="130" height="32" viewBox="0 0 130 32" fill="none" style={flip ? {transform:'scaleX(-1)'} : {}}>
    <path d="M5 18 Q32 28 70 26 Q108 24 128 17 Q122 5 98 3 Q64 1 30 3 Q10 5 5 18Z" fill="#E8D4A8" opacity="0.55"/>
    <path d="M18 12 Q48 8 78 10 Q108 12 122 16" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M128 17 Q122 5 98 3 Q64 1 30 3 Q10 5 5 18" stroke="#9B8B7A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35"/>
  </svg>
)

function VineDivider({ label }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOpen(true); obs.disconnect() } }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`vine-divider ${open ? 'open' : ''}`}>
      <div className="vine-left"><VineLeft /></div>
      <div className="vine-center">{label}</div>
      <div className="vine-right"><VineRight /></div>
    </div>
  )
}

function BaguetteReveal() {
  const ref = useRef(null)
  const [broken, setBroken] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setBroken(true); obs.disconnect() } }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`baguette-reveal ${broken ? 'broken' : ''}`}>
      <div className="baguette-left"><BaguetteHalf /></div>
      <div className="baguette-right"><BaguetteHalf flip /></div>
    </div>
  )
}

const diagonalEst = [
  { name: 'Paris', desc: '3 or 5 days' },
  { name: 'Champagne', desc: '3 or 5 days' },
  { name: 'Lyon', desc: '3 or 5 days' },
  { name: 'Chamonix & Alps', desc: '3 or 5 days' },
  { name: 'Mediterranean ★', desc: '8 days — fixed block', special: true },
]
const diagonalOuest = [
  { name: 'Normandy & Brittany', desc: '3 or 5 days' },
  { name: 'Loire Valley', desc: '3 or 5 days' },
  { name: 'Périgord & Dordogne', desc: '3 or 5 days' },
  { name: 'Biarritz', desc: '3 or 5 days' },
  { name: 'Bordeaux & Saint-Émilion', desc: '3 or 5 days' },
]
const blocs = [
  { region: 'Île-de-France', name: 'Paris', desc: 'Haussmann apartment, Versailles without the crowds, hidden bistros, Seine at dusk', short: { days: '3 days', price: '€2,800' }, long: { days: '5 days', price: '€4,500' } },
  { region: 'Grand Est', name: 'Champagne', desc: 'Private cave tours, vineyard manor stays, Reims Cathedral, small family vignerons', short: { days: '3 days', price: '€1,800' }, long: { days: '5 days', price: '€2,800' } },
  { region: 'Auvergne-Rhône-Alpes', name: 'Lyon', desc: 'Secret traboules, Les Halles Bocuse, authentic bouchon lunch, Fourvière at sunset', short: { days: '3 days', price: '€1,900' }, long: { days: '5 days', price: '€3,000' } },
  { region: 'Alps', name: 'Chamonix', desc: 'Luxury chalet, Aiguille du Midi at 3,842m, alpine family hiking, Mont-Blanc at sunrise', short: { days: '3 days', price: '€3,500' }, long: { days: '5 days', price: '€5,800' } },
  { region: 'Normandy · Atlantic', name: 'Normandy & Brittany', desc: 'D-Day beaches, Mont Saint-Michel at low tide, Saint-Malo ramparts, real crêperies', short: { days: '3 days', price: '€2,200' }, long: { days: '5 days', price: '€3,500' } },
  { region: 'Centre-Val de Loire', name: 'Loire Valley', desc: 'Château de Chambord at dawn, private wine estates, river villages, truffle hunters', short: { days: '3 days', price: '€1,800' }, long: { days: '5 days', price: '€2,800' } },
  { region: 'Nouvelle-Aquitaine', name: 'Périgord & Dordogne', desc: 'Lascaux caves, bastide villages, foie gras at source, medieval Sarlat by night', short: { days: '3 days', price: '€1,900' }, long: { days: '5 days', price: '€3,000' } },
  { region: 'Pays Basque · Atlantic', name: 'Biarritz', desc: 'Ocean-view Basque villa, surfing lessons, pintxos in Saint-Jean-de-Luz, Bayonne chocolatiers', short: { days: '3 days', price: '€2,400' }, long: { days: '5 days', price: '€3,800' } },
  { region: 'Gironde', name: 'Bordeaux', desc: 'Sleep in a château, grand cru tastings, medieval Saint-Émilion on foot, Cité du Vin', short: { days: '3 days', price: '€2,200' }, long: { days: '5 days', price: '€3,500' } },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  useReveal()
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const toBook = () => document.getElementById('book').scrollIntoView({ behavior: 'smooth' })

  return (<>
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">La Grande France</div>
      <button className="nav-cta" onClick={toBook}>Book a Call</button>
    </nav>

    {/* HERO */}
    <section className="hero">
      <div className="hero-bg-text">FRANCE</div>
      <div className="hero-eyebrow">Private Journeys · Authentic France · Since 2025</div>
      <h1 className="hero-title">La Grande<br /><em>France</em></h1>
      <p className="hero-sub">Your guide. Your driver. Your France.</p>
      <div className="hero-pills">
        <div className="pill"><strong>100%</strong> Private</div>
        <div className="pill">Zero Tourist Traps</div>
        <div className="pill"><strong>Luxury</strong> Villas Only</div>
        <div className="pill">One Guide · Every Day</div>
        <div className="pill">Built Around <strong>You</strong></div>
      </div>
      <div className="hero-scroll"><span>Scroll</span><div className="scroll-line" /></div>
    </section>

    <VineDivider label="The Concept" />

    {/* CONCEPT */}
    <section className="concept-bg">
      <div className="concept-inner">
        <h2 className="concept-headline reveal">Not a tour.<br /><em>A way of experiencing France</em><br />the way it was meant to be seen.</h2>
        <div className="concept-grid">
          {[
            { n:'01', h:'One Person. All the Way.', p:'Paul is with your family from the airport to the farewell dinner. Driver, historian, translator, local insider — one trusted companion who becomes part of your story.' },
            { n:'02', h:'Zero Tourist Traps. Ever.', p:'No restaurant with photos on the menu. No audio guides. No tour buses. Every address is a place Paul knows personally — the vigneron who opens his cellar only for friends.' },
            { n:'03', h:'Your French Home, Everywhere.', p:'A private chalet in the Alps. A manor in Champagne vineyards. A bastide in Provence. Real homes with kitchens and gardens — not hotel rooms. You live in France.' },
          ].map((c,i) => (
            <div key={i} className={`concept-card reveal delay-${i+1}`}>
              <div className="concept-card-num">{c.n}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BaguetteReveal />

    {/* DIAGONALS */}
    <section className="diagonals-bg">
      <div className="diagonals-inner">
        <span className="section-label reveal" style={{color:'var(--gold)'}}>The Routes</span>
        <h2 className="diagonals-title reveal">Two <em>journeys</em> through France.<br />Build yours.</h2>
        <div className="diagonals-grid">
          <div className="diagonal-card reveal-left">
            <div className="diagonal-header">
              <div><h3>The Eastern Diagonal</h3><p>Paris → Alps → Riviera</p></div>
            </div>
            <div className="diagonal-stops">
              {diagonalEst.map((s,i) => (
                <div key={i} className="diagonal-stop">
                  <div className="stop-line">
                    <div className="stop-dot-sm" style={s.special ? {background:'var(--gold)',width:'9px',height:'9px'} : {}} />
                    {i < diagonalEst.length-1 && <div className="stop-connector" />}
                  </div>
                  <div className="stop-info"><h4>{s.name}</h4><span>{s.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="diagonal-card reveal-right">
            <div className="diagonal-header">
              <div><h3>The Western Diagonal</h3><p>Normandy → Atlantic → Bordeaux</p></div>
            </div>
            <div className="diagonal-stops">
              {diagonalOuest.map((s,i) => (
                <div key={i} className="diagonal-stop">
                  <div className="stop-line">
                    <div className="stop-dot-sm" />
                    {i < diagonalOuest.length-1 && <div className="stop-connector" />}
                  </div>
                  <div className="stop-info"><h4>{s.name}</h4><span>{s.desc}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <VineDivider label="Build Your Trip" />

    {/* BLOCS */}
    <section className="blocs-bg">
      <div className="blocs-inner">
        <span className="section-label reveal">Modular Blocks</span>
        <h2 className="section-title reveal"><em>Your trip,</em> your way</h2>
        <p className="blocs-intro reveal">Choose your regions. Pick Short (3 days) or Long (5 days) for each block. Mix both diagonals freely — we'll make sure the geography flows naturally.</p>
        <div className="blocs-rule reveal">All prices: 2 to 5 people · +10% for a 6th · TGV & transfers included · Villa pre-selected for you</div>
        <div className="blocs-grid">
          {blocs.map((b,i) => (
            <div key={i} className="bloc-card reveal" style={{transitionDelay:`${(i%3)*0.1}s`}}>
              <div className="bloc-top">
                <div className="bloc-region">{b.region}</div>
                <div className="bloc-name">{b.name}</div>
                <div className="bloc-desc">{b.desc}</div>
              </div>
              <div className="bloc-bottom">
                <div className="bloc-options">
                  <div className="bloc-option">
                    <div className="bloc-option-label">Short</div>
                    <div className="bloc-option-days">{b.short.days}</div>
                    <div className="bloc-option-price">{b.short.price}</div>
                  </div>
                  <div className="bloc-option">
                    <div className="bloc-option-label">Long</div>
                    <div className="bloc-option-days">{b.long.days}</div>
                    <div className="bloc-option-price">{b.long.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Mediterranean featured */}
          <div className="bloc-card featured reveal">
            <div className="bloc-top">
              <div className="bloc-region">Côte d'Azur · Calanques · Camargue</div>
              <div className="bloc-name">The Mediterranean</div>
              <div className="bloc-desc">Monaco glamour → secret calanques by private boat → wild flamingos in the salt marshes. Three worlds. One unforgettable week.</div>
            </div>
            <div className="bloc-bottom">
              <div className="bloc-options">
                <div className="bloc-option">
                  <div className="bloc-option-label">Fixed Block</div>
                  <div className="bloc-option-days">8 days · Monaco + Calanques + Camargue</div>
                  <div className="bloc-option-price">€10,000</div>
                </div>
              </div>
              <div className="bloc-note">This one doesn't come in short — it needs all 8 days to breathe.</div>
            </div>
          </div>
        </div>
        <div className="blocs-footer reveal">
          <p><strong>Not sure how to combine?</strong> That's exactly what the 30-minute call is for. Mathilde will build the perfect itinerary based on your family, your pace, and the time of year.</p>
        </div>
      </div>
    </section>

    <VineDivider label="How It Works" />

    {/* HOW IT WORKS */}
    <section className="how-bg">
      <div className="how-inner">
        <span className="section-label reveal">The Process</span>
        <h2 className="section-title reveal">Simple. <em>Seamless.</em> Stress-free.</h2>
        <div className="how-steps">
          {[
            { n:'1', h:'Build Your Blocks', p:'Browse regions. Choose short or long. See your price instantly. No commitment yet.' },
            { n:'2', h:'30-Min Call with Mathilde', p:'She walks through your selection, learns about your family, fine-tunes everything. Bilingual, human, real.' },
            { n:'3', h:'We Handle Everything', p:'Villas, trains, activities, restaurants — all booked. You receive your personalized travel book.' },
            { n:'4', h:'Live France', p:'Paul meets you at CDG. From that moment, France is yours. You just show up and enjoy.' },
          ].map((s,i) => (
            <div key={i} className={`how-step reveal delay-${i+1}`}>
              <div className="step-num">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <VineDivider label="Who We Are" />

    {/* ABOUT */}
    <section className="about-bg">
      <div className="about-inner">
        <div className="reveal-left">
          <span className="section-label">The Faces Behind the Trip</span>
          <h2 className="section-title">Not an agency.<br /><em>A family.</em></h2>
          <div className="about-body">
            <p>Paul grew up surrounded by the history, landscapes, and flavors of France. He has personally traveled every route in these blocks — not as a tourist, but as someone who stops to talk to the cheesemaker, knows which vineyard opens its cellar on Sunday mornings, and can tell you why that particular stretch of the Dordogne looks different at 7am.</p>
            <p>Mathilde handles everything behind the scenes — beautifully. Communication, logistics, villa selection, your personalized travel book. Bilingual, meticulous, and the kind of person who answers at 10pm because she cares about getting it right.</p>
            <p>Together, they built La Grande France around one belief: the best way to see a country is through the eyes of someone who loves it.</p>
          </div>
          <div className="about-signatures">
            <div className="about-sig"><div className="sig-name">Paul</div><div className="sig-role">Guide & On-the-road</div></div>
            <div className="about-sig"><div className="sig-name">Mathilde</div><div className="sig-role">Operations & Client Relations</div></div>
          </div>
        </div>
        <div className="about-stats reveal-right">
          {[
            { num:'9', label:'Regions covered across France' },
            { num:'21', label:'Maximum days of continuous accompaniment' },
            { num:'100%', label:'Private — your family only, always' },
            { num:'0', label:'Tourist traps. Ever.' },
          ].map((s,i) => (
            <div key={i} className="about-stat-card" style={{transitionDelay:`${i*0.12}s`}}>
              <div className="about-stat-num">{s.num}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* BOOK */}
    <section className="book-bg" id="book">
      <div className="book-inner">
        <h2 className="book-title reveal">Ready to discover<br /><em>your France?</em></h2>
        <p className="book-sub reveal delay-1">Start by building your blocks — then book a free 30-minute call with Mathilde. No commitment, no pressure. Just a conversation about what your perfect France looks like.</p>
        <button className="book-cta reveal delay-2" onClick={() => window.open('https://calendly.com','_blank')}>Book Your Free Call</button>
        <p className="book-note reveal delay-3">30 minutes · Free · No commitment · English & French</p>
      </div>
    </section>

    <footer>
      <div className="footer-logo">La Grande France</div>
      <div className="footer-copy">© 2025 La Grande France · Lyon, France · hello@lagrandefrance.com</div>
    </footer>
  </>)
}
