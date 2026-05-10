import { useEffect, useRef, useState, useCallback } from 'react'

// ── SCROLL REVEAL HOOK ──
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ── SVG ILLUSTRATIONS ──
const illustrations = {
  Paris: () => (
    <svg viewBox="0 0 300 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="150" cy="200" rx="140" ry="18" fill="#E8D4A8" opacity="0.3"/>
      {/* Sky wash */}
      <rect x="0" y="0" width="300" height="180" fill="#EEF2F8" opacity="0.6"/>
      {/* Seine */}
      <path d="M0 185 Q75 178 150 183 Q225 188 300 181" stroke="#B8CDE8" strokeWidth="8" fill="none" opacity="0.5"/>
      {/* Eiffel Tower */}
      <path d="M150 60 L138 160 L162 160 Z" fill="#2C4A2E" opacity="0.15"/>
      <path d="M143 60 L133 160 L167 160 L157 60 Z" fill="#4A6741" opacity="0.2"/>
      <rect x="133" y="155" width="34" height="5" rx="2" fill="#2C4A2E" opacity="0.3"/>
      <rect x="136" y="120" width="28" height="4" rx="1" fill="#2C4A2E" opacity="0.25"/>
      <rect x="140" y="90" width="20" height="3" rx="1" fill="#2C4A2E" opacity="0.2"/>
      <path d="M148 35 L150 60 L152 35" stroke="#2C4A2E" strokeWidth="2" fill="none" opacity="0.4"/>
      <circle cx="150" cy="32" r="2" fill="#C8A96E" opacity="0.6"/>
      {/* Buildings */}
      <rect x="30" y="130" width="40" height="50" rx="2" fill="#E8D4A8" opacity="0.5"/>
      <rect x="35" y="120" width="30" height="15" rx="1" fill="#C8A96E" opacity="0.3"/>
      <rect x="220" y="125" width="50" height="55" rx="2" fill="#E8D4A8" opacity="0.5"/>
      <rect x="225" y="115" width="40" height="15" rx="1" fill="#C8A96E" opacity="0.3"/>
      <rect x="80" y="140" width="30" height="40" rx="1" fill="#EDE5D3" opacity="0.6"/>
      <rect x="195" y="135" width="28" height="45" rx="1" fill="#EDE5D3" opacity="0.6"/>
      {/* Windows */}
      {[40,50,60].map(x => [135,145,155].map(y => <rect key={`${x}${y}`} x={x} y={y} width="5" height="6" rx="0.5" fill="#2C4A2E" opacity="0.2"/>))}
      {/* Trees */}
      <ellipse cx="110" cy="168" rx="12" ry="15" fill="#4A6741" opacity="0.35"/>
      <ellipse cx="190" cy="165" rx="12" ry="15" fill="#4A6741" opacity="0.35"/>
      <ellipse cx="70" cy="172" rx="8" ry="10" fill="#4A6741" opacity="0.3"/>
      {/* Gold accents */}
      <circle cx="80" cy="140" r="2" fill="#C8A96E" opacity="0.4"/>
      <circle cx="220" cy="125" r="2" fill="#C8A96E" opacity="0.4"/>
    </svg>
  ),
  Champagne: () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#F0EEE8" opacity="0.5"/>
      {/* Rolling hills */}
      <path d="M0 160 Q50 120 100 140 Q150 160 200 130 Q250 100 300 120 L300 220 L0 220Z" fill="#4A6741" opacity="0.15"/>
      <path d="M0 175 Q60 145 120 155 Q180 165 240 145 Q270 135 300 140 L300 220 L0 220Z" fill="#4A6741" opacity="0.2"/>
      {/* Vineyard rows */}
      {[0,1,2,3,4,5].map(i => (
        <path key={i} d={`M${20+i*15} 170 Q${50+i*15} 155 ${80+i*15} 165 Q${110+i*15} 175 ${140+i*15} 162`}
          stroke="#2C4A2E" strokeWidth="1" fill="none" opacity="0.2"/>
      ))}
      {/* Champagne bottle */}
      <rect x="138" y="80" width="10" height="6" rx="3" fill="#2C4A2E" opacity="0.4"/>
      <path d="M135 86 Q134 95 133 110 L133 155 Q133 162 143 162 Q153 162 153 155 L153 110 Q152 95 151 86Z" fill="#2C4A2E" opacity="0.25"/>
      <rect x="133" y="105" width="20" height="18" rx="1" fill="#C8A96E" opacity="0.4"/>
      {/* Bubbles */}
      {[[130,95],[145,88],[155,100],[125,110]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="3" fill="#C8A96E" opacity="0.3"/>)}
      {/* Cathedral silhouette */}
      <path d="M60 140 L60 100 L70 80 L80 100 L80 140Z" fill="#E8D4A8" opacity="0.4"/>
      <path d="M65 80 L70 65 L75 80Z" fill="#C8A96E" opacity="0.5"/>
      <rect x="62" y="120" width="8" height="20" rx="0" fill="#2C4A2E" opacity="0.15"/>
      {/* Manor */}
      <rect x="190" y="120" width="70" height="50" rx="2" fill="#E8D4A8" opacity="0.5"/>
      <path d="M188 120 L225 100 L262 120Z" fill="#C8A96E" opacity="0.35"/>
      {[200,215,230,245].map(x => <rect key={x} x={x} y={130} width="8" height="12" rx="1" fill="#2C4A2E" opacity="0.2"/>)}
      {/* Gold dots - grapes */}
      {[[100,155],[115,148],[105,162],[120,158]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="3.5" fill="#C8A96E" opacity="0.5"/>)}
    </svg>
  ),
  Lyon: () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#F5F0E8" opacity="0.5"/>
      {/* Saone river */}
      <path d="M0 170 Q150 160 300 168" stroke="#B8CDE8" strokeWidth="20" fill="none" opacity="0.4"/>
      {/* Fourvière hill */}
      <path d="M0 175 Q60 130 120 120 Q160 115 180 125 L180 220 L0 220Z" fill="#4A6741" opacity="0.18"/>
      {/* Basilica */}
      <rect x="75" y="105" width="60" height="50" rx="1" fill="#E8D4A8" opacity="0.6"/>
      <path d="M73 105 L105 80 L137 105Z" fill="#C8A96E" opacity="0.4"/>
      <circle cx="88" cy="105" r="12" fill="none" stroke="#C8A96E" strokeWidth="2" opacity="0.5"/>
      <circle cx="122" cy="105" r="12" fill="none" stroke="#C8A96E" strokeWidth="2" opacity="0.5"/>
      <rect x="97" y="85" width="5" height="20" fill="#C8A96E" opacity="0.4"/>
      <rect x="94" y="93" width="11" height="4" fill="#C8A96E" opacity="0.4"/>
      {/* Old town buildings */}
      {[[170,130,25,70],[200,125,20,75],[225,135,18,65],[248,120,22,80]].map(([x,y,w,h],i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="1" fill="#E8D4A8" opacity={0.5+i*0.05}/>
          <path d={`M${x-2} ${y} L${x+w/2} ${y-15} L${x+w+2} ${y}Z`} fill="#C8A96E" opacity="0.35"/>
        </g>
      ))}
      {/* Windows - traboules hint */}
      <rect x="178" y="140" width="6" height="8" rx="2" fill="#2C4A2E" opacity="0.2"/>
      <rect x="188" y="138" width="6" height="8" rx="2" fill="#2C4A2E" opacity="0.2"/>
      <rect x="205" y="135" width="5" height="7" rx="1" fill="#2C4A2E" opacity="0.2"/>
      {/* Bridge */}
      <path d="M140 172 Q170 165 200 172" stroke="#9B8B7A" strokeWidth="4" fill="none" opacity="0.4"/>
      {[148,158,168,178,188].map(x => <line key={x} x1={x} y1="172" x2={x} y2="165" stroke="#9B8B7A" strokeWidth="1.5" opacity="0.3"/>)}
      {/* Gastronomic touches */}
      <path d="M250 90 Q255 80 260 90 Q265 80 270 90" stroke="#C8A96E" strokeWidth="1.5" fill="none" opacity="0.5"/>
      <circle cx="260" cy="95" r="8" fill="#C8A96E" opacity="0.15" stroke="#C8A96E" strokeWidth="1" />
    </svg>
  ),
  Chamonix: () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#EEF2F8" opacity="0.6"/>
      {/* Sky gradient */}
      <path d="M0 0 L300 0 L300 120 L0 120Z" fill="#D4E4F4" opacity="0.3"/>
      {/* Mont Blanc massif */}
      <path d="M50 180 L100 80 L130 110 L150 55 L170 90 L200 70 L230 95 L260 180Z" fill="white" opacity="0.7"/>
      <path d="M50 180 L100 80 L115 100 L130 110 L145 70 L150 55 L155 70 L170 90 L185 75 L200 70 L215 82 L230 95 L260 180Z" fill="#E8EEF4" opacity="0.5"/>
      {/* Snow peaks */}
      <path d="M140 55 L150 35 L160 55" fill="white" opacity="0.9"/>
      <path d="M195 70 L205 52 L215 70" fill="white" opacity="0.8"/>
      <path d="M95 80 L105 62 L115 80" fill="white" opacity="0.75"/>
      {/* Pine trees */}
      {[30,45,60,240,255,270].map((x,i) => (
        <g key={i}>
          <path d={`M${x} 190 L${x+8} 155 L${x+16} 190Z`} fill="#2C4A2E" opacity="0.4"/>
          <path d={`M${x+2} 175 L${x+8} 148 L${x+14} 175Z`} fill="#4A6741" opacity="0.35"/>
        </g>
      ))}
      {/* Cable car */}
      <line x1="80" y1="160" x2="200" y2="80" stroke="#9B8B7A" strokeWidth="1" opacity="0.4"/>
      <rect x="133" y="113" width="14" height="10" rx="2" fill="#C8A96E" opacity="0.6"/>
      {/* Village */}
      <rect x="95" y="170" width="20" height="20" rx="1" fill="#E8D4A8" opacity="0.6"/>
      <path d="M93 170 L105 158 L117 170Z" fill="#C8A96E" opacity="0.45"/>
      <rect x="120" y="165" width="18" height="25" rx="1" fill="#E8D4A8" opacity="0.55"/>
      <path d="M118 165 L129 152 L140 165Z" fill="#9B8B7A" opacity="0.4"/>
      {/* Gold stars */}
      <circle cx="150" cy="35" r="3" fill="#C8A96E" opacity="0.7"/>
      <circle cx="205" cy="52" r="2.5" fill="#C8A96E" opacity="0.6"/>
    </svg>
  ),
  'Normandy & Brittany': () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#EEF2F8" opacity="0.5"/>
      {/* Sea */}
      <path d="M0 145 Q75 135 150 140 Q225 145 300 135 L300 220 L0 220Z" fill="#B8CDE8" opacity="0.35"/>
      <path d="M0 155 Q75 148 150 152 Q225 156 300 148 L300 220 L0 220Z" fill="#B8CDE8" opacity="0.25"/>
      {/* Cliffs */}
      <path d="M0 145 Q30 100 60 110 Q80 115 90 145Z" fill="#E8D4A8" opacity="0.6"/>
      <path d="M200 135 Q230 90 260 95 Q280 100 300 135Z" fill="#E8D4A8" opacity="0.6"/>
      {/* Mont Saint-Michel */}
      <path d="M130 145 L130 60 L150 45 L170 60 L170 145Z" fill="#E8D4A8" opacity="0.5"/>
      <path d="M128 145 L115 145 L110 135 L128 125Z" fill="#EDE5D3" opacity="0.4"/>
      <path d="M172 145 L185 145 L190 135 L172 125Z" fill="#EDE5D3" opacity="0.4"/>
      <path d="M140 60 L150 30 L160 60Z" fill="#C8A96E" opacity="0.55"/>
      <circle cx="150" cy="29" r="4" fill="#C8A96E" opacity="0.6"/>
      {[135,140,145,150,155,160,165].map((x,i) => (
        <rect key={i} x={x} y={70+i%3*15} width="8" height="12" rx="1" fill="#2C4A2E" opacity="0.15"/>
      ))}
      {/* Lighthouse */}
      <rect x="55" y="90" width="12" height="40" rx="2" fill="white" opacity="0.7"/>
      <path d="M53 90 L61 78 L69 90Z" fill="#C8A96E" opacity="0.6"/>
      <circle cx="61" cy="89" r="5" fill="#C8A96E" opacity="0.4"/>
      {/* Boats */}
      <path d="M200 148 Q215 143 230 148 L225 155 L205 155Z" fill="white" opacity="0.6"/>
      <line x1="215" y1="143" x2="215" y2="130" stroke="#9B8B7A" strokeWidth="1" opacity="0.4"/>
      {/* Waves */}
      {[0,1,2].map(i => <path key={i} d={`M${20+i*90} 160 Q${40+i*90} 155 ${60+i*90} 160`} stroke="white" strokeWidth="1.5" fill="none" opacity="0.4"/>)}
    </svg>
  ),
  'Loire Valley': () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#F0EEE8" opacity="0.5"/>
      {/* Loire river */}
      <path d="M0 175 Q150 165 300 172" stroke="#B8CDE8" strokeWidth="15" fill="none" opacity="0.4"/>
      {/* Château de Chambord */}
      <rect x="80" y="110" width="140" height="80" rx="1" fill="#E8D4A8" opacity="0.55"/>
      {/* Turrets */}
      {[80,110,140,170,200,220].map((x,i) => (
        <g key={i}>
          <rect x={x} y={90+i%2*8} width="18" height="25" rx="1" fill="#EDE5D3" opacity="0.6"/>
          <path d={`M${x-1} ${90+i%2*8} L${x+9} ${75+i%2*8} L${x+19} ${90+i%2*8}Z`} fill="#C8A96E" opacity="0.4"/>
          <circle cx={x+9} cy={73+i%2*8} r="3" fill="#C8A96E" opacity="0.5"/>
        </g>
      ))}
      {/* Windows */}
      {[90,110,130,150,170,190].map(x => (
        <g key={x}>
          <rect x={x} y={120} width="10" height="14" rx="4" fill="#B8CDE8" opacity="0.4"/>
          <rect x={x} y={142} width="10" height="14" rx="4" fill="#B8CDE8" opacity="0.35"/>
        </g>
      ))}
      {/* Gardens */}
      <path d="M60 175 Q150 168 240 175" stroke="#4A6741" strokeWidth="6" fill="none" opacity="0.3"/>
      {[70,100,130,160,190,220].map((x,i) => (
        <ellipse key={i} cx={x} cy={178} rx="8" ry="6" fill="#4A6741" opacity="0.3"/>
      ))}
      {/* Reflection */}
      <rect x="100" y="178" width="100" height="30" rx="1" fill="#E8D4A8" opacity="0.15"/>
      {/* Sunflowers hint */}
      <circle cx="40" cy="160" r="8" fill="#C8A96E" opacity="0.4"/>
      <circle cx="260" cy="158" r="8" fill="#C8A96E" opacity="0.4"/>
      {[0,60,120,180,240,300].map((a,i) => (
        <line key={i} x1={40+Math.cos(a*Math.PI/180)*8} y1={160+Math.sin(a*Math.PI/180)*8}
          x2={40+Math.cos(a*Math.PI/180)*13} y2={160+Math.sin(a*Math.PI/180)*13}
          stroke="#C8A96E" strokeWidth="2" opacity="0.4"/>
      ))}
    </svg>
  ),
  'Périgord & Dordogne': () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#F5EEE0" opacity="0.5"/>
      {/* Cliff face */}
      <path d="M0 100 Q50 80 100 90 Q130 95 150 85 Q170 75 200 80 Q240 85 300 70 L300 220 L0 220Z" fill="#E8D4A8" opacity="0.4"/>
      <path d="M0 110 Q50 95 100 102 Q150 108 200 95 Q250 83 300 85 L300 220 L0 220Z" fill="#C8A96E" opacity="0.2"/>
      {/* Dordogne river */}
      <path d="M0 175 Q100 165 150 170 Q200 175 300 168" stroke="#B8CDE8" strokeWidth="12" fill="none" opacity="0.45"/>
      {/* Cliff village - Les Eyzies style */}
      <rect x="60" y="95" width="180" height="60" rx="0" fill="#E8D4A8" opacity="0.5"/>
      <path d="M58 95 L150 65 L242 95Z" fill="#C8A96E" opacity="0.3"/>
      {[70,90,110,130,150,170,190,210].map((x,i) => (
        <g key={i}>
          <rect x={x} y={100+i%2*5} width="14" height="20" rx="1" fill="#EDE5D3" opacity="0.7"/>
          <rect x={x+3} y={105+i%2*5} width="5" height="7" rx="1" fill="#B8CDE8" opacity="0.4"/>
        </g>
      ))}
      {/* Cave entrance */}
      <ellipse cx="40" cy="115" rx="20" ry="25" fill="#3D2C1E" opacity="0.2"/>
      <ellipse cx="40" cy="118" rx="15" ry="20" fill="#3D2C1E" opacity="0.15"/>
      {/* Cave drawings hint */}
      <path d="M30 110 Q35 105 40 110 Q45 115 50 108" stroke="#9B8B7A" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <ellipse cx="260" cy="108" rx="15" ry="18" fill="#3D2C1E" opacity="0.15"/>
      {/* Walnut trees */}
      {[20,280].map((x,i) => (
        <g key={i}>
          <ellipse cx={x} cy={160} rx="18" ry="22" fill="#4A6741" opacity="0.3"/>
          <line x1={x} y1={182} x2={x} y2={200} stroke="#6B4F38" strokeWidth="3" opacity="0.3"/>
        </g>
      ))}
      {/* Foie gras / truffle hint */}
      <circle cx="150" cy="195" r="6" fill="#3D2C1E" opacity="0.2"/>
      <circle cx="165" cy="192" r="5" fill="#3D2C1E" opacity="0.18"/>
    </svg>
  ),
  Biarritz: () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#EEF2F8" opacity="0.5"/>
      {/* Ocean */}
      <path d="M0 130 Q150 118 300 125 L300 220 L0 220Z" fill="#B8CDE8" opacity="0.4"/>
      <path d="M0 145 Q150 135 300 140 L300 220 L0 220Z" fill="#B8CDE8" opacity="0.3"/>
      {/* Waves */}
      {[0,1,2,3].map(i => (
        <path key={i} d={`M${i*80} 132 Q${i*80+20} 126 ${i*80+40} 132 Q${i*80+60} 138 ${i*80+80} 132`}
          stroke="white" strokeWidth="2.5" fill="none" opacity="0.5"/>
      ))}
      {/* Cliff */}
      <path d="M220 130 Q240 100 260 105 Q280 110 300 130Z" fill="#E8D4A8" opacity="0.5"/>
      {/* Villa Belza style */}
      <rect x="225" y="80" width="50" height="55" rx="1" fill="#E8D4A8" opacity="0.6"/>
      <path d="M223 80 L250 60 L277 80Z" fill="#C8A96E" opacity="0.5"/>
      <rect x="235" y="90" width="10" height="14" rx="3" fill="#B8CDE8" opacity="0.5"/>
      <rect x="255" y="90" width="10" height="14" rx="3" fill="#B8CDE8" opacity="0.5"/>
      {/* Basque villa */}
      <rect x="30" y="95" width="60" height="55" rx="1" fill="white" opacity="0.7"/>
      <path d="M28 95 L60 72 L92 95Z" fill="#C8A96E" opacity="0.5"/>
      {/* Red beams - Basque style */}
      <line x1="30" y1="112" x2="90" y2="112" stroke="#9B2020" strokeWidth="3" opacity="0.35"/>
      <line x1="30" y1="128" x2="90" y2="128" stroke="#9B2020" strokeWidth="3" opacity="0.35"/>
      <line x1="55" y1="95" x2="55" y2="150" stroke="#9B2020" strokeWidth="2" opacity="0.3"/>
      {/* Surf */}
      <path d="M80 138 Q100 130 120 138" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
      {/* Surfer silhouette */}
      <path d="M150 132 Q155 126 162 130 Q158 135 152 137Z" fill="#2C4A2E" opacity="0.4"/>
      {/* Beach */}
      <path d="M0 155 Q150 148 300 152 L300 165 Q150 162 0 168Z" fill="#E8D4A8" opacity="0.45"/>
      {/* Pyrenees hint */}
      <path d="M0 120 Q40 95 70 105 Q90 112 100 125" stroke="#9B8B7A" strokeWidth="1" fill="none" opacity="0.25"/>
    </svg>
  ),
  Bordeaux: () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#F5EEE0" opacity="0.5"/>
      {/* Vineyards */}
      <path d="M0 160 Q150 145 300 155 L300 220 L0 220Z" fill="#4A6741" opacity="0.15"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <path key={i} d={`M${i*40} 170 Q${i*40+10} 155 ${i*40+20} 162 Q${i*40+30} 169 ${i*40+40} 158`}
          stroke="#2C4A2E" strokeWidth="1" fill="none" opacity="0.2"/>
      ))}
      {/* Château main building */}
      <rect x="90" y="95" width="120" height="85" rx="1" fill="#E8D4A8" opacity="0.6"/>
      {/* Wings */}
      <rect x="60" y="110" width="35" height="70" rx="1" fill="#EDE5D3" opacity="0.5"/>
      <rect x="205" y="110" width="35" height="70" rx="1" fill="#EDE5D3" opacity="0.5"/>
      {/* Roof */}
      <path d="M88 95 L150 68 L212 95Z" fill="#C8A96E" opacity="0.4"/>
      <path d="M58 110 L78 95 L97 110Z" fill="#9B8B7A" opacity="0.35"/>
      <path d="M203 110 L222 95 L242 110Z" fill="#9B8B7A" opacity="0.35"/>
      {/* Turrets */}
      {[90,200].map((x,i) => (
        <g key={i}>
          <rect x={x} y={80} width="16" height="30" rx="1" fill="#EDE5D3" opacity="0.6"/>
          <path d={`M${x-1} 80 L${x+8} 65 L${x+17} 80Z`} fill="#C8A96E" opacity="0.5"/>
          <circle cx={x+8} cy={64} r="3" fill="#C8A96E" opacity="0.6"/>
        </g>
      ))}
      {/* Windows */}
      {[100,125,150,175,195].map(x => (
        <g key={x}>
          <rect x={x} y={108} width="12" height="16" rx="5" fill="#B8CDE8" opacity="0.45"/>
          <rect x={x} y={132} width="12" height="16" rx="5" fill="#B8CDE8" opacity="0.4"/>
        </g>
      ))}
      {/* Wine barrels */}
      <ellipse cx="40" cy="180" rx="16" ry="12" fill="#6B4F38" opacity="0.3"/>
      <ellipse cx="260" cy="178" rx="16" ry="12" fill="#6B4F38" opacity="0.3"/>
      {[35,42,49].map(x => <line key={x} x1={x} y1={170} x2={x} y2={192} stroke="#3D2C1E" strokeWidth="1" opacity="0.2"/>)}
      {/* Grape clusters */}
      {[[120,165],[150,158],[180,163]].map(([x,y],i) => (
        <g key={i}>
          {[0,1,2,3,4,5].map(j => <circle key={j} cx={x+j%3*5-5} cy={y+Math.floor(j/3)*5} r="3" fill="#C8A96E" opacity="0.45"/>)}
        </g>
      ))}
    </svg>
  ),
  'The Mediterranean': () => (
    <svg viewBox="0 0 300 220" fill="none">
      <rect x="0" y="0" width="300" height="220" fill="#EEF2F8" opacity="0.5"/>
      {/* Sea */}
      <path d="M0 140 Q150 130 300 137 L300 220 L0 220Z" fill="#7AB4D4" opacity="0.3"/>
      <path d="M0 152 Q150 144 300 150 L300 220 L0 220Z" fill="#7AB4D4" opacity="0.2"/>
      {/* Monaco cliff and palace */}
      <path d="M200 140 Q220 100 240 95 Q260 90 280 105 L280 140Z" fill="#E8D4A8" opacity="0.55"/>
      <rect x="215" y="90" width="50" height="55" rx="1" fill="#EDE5D3" opacity="0.6"/>
      <path d="M213 90 L240 72 L267 90Z" fill="#C8A96E" opacity="0.4"/>
      {/* Calanques cliff */}
      <path d="M0 140 Q20 90 45 85 Q65 82 75 100 Q80 115 70 140Z" fill="#E8D4A8" opacity="0.5"/>
      <path d="M60 140 Q75 95 95 88 Q110 83 115 105 L110 140Z" fill="#E8D4A8" opacity="0.45"/>
      {/* Turquoise water between calanques */}
      <path d="M70 140 Q90 128 110 135 L110 150 Q90 145 70 150Z" fill="#7AB4D4" opacity="0.5"/>
      {/* Flamingos - Camargue */}
      {[[145,115],[155,112],[165,118]].map(([x,y],i) => (
        <g key={i}>
          <path d={`M${x} ${y+10} Q${x+3} ${y} ${x+2} ${y-5}`} stroke="#E8A0A0" strokeWidth="2" fill="none" opacity="0.6"/>
          <ellipse cx={x+1} cy={y-5} rx="6" ry="4" fill="#E8A0A0" opacity="0.4" transform={`rotate(-20 ${x+1} ${y-5})`}/>
          <circle cx={x+4} cy={y-9} r="3" fill="#E8A0A0" opacity="0.5"/>
          <line x1={x} y1={y+10} x2={x-1} y2={y+18} stroke="#E8A0A0" strokeWidth="1.5" opacity="0.4"/>
          <line x1={x} y1={y+10} x2={x+2} y2={y+18} stroke="#E8A0A0" strokeWidth="1.5" opacity="0.4"/>
        </g>
      ))}
      {/* Boat */}
      <path d="M120 143 Q140 137 160 143 L155 150 L125 150Z" fill="white" opacity="0.7"/>
      <line x1="140" y1="137" x2="140" y2="122" stroke="#9B8B7A" strokeWidth="1" opacity="0.5"/>
      {/* Sun */}
      <circle cx="250" cy="40" r="18" fill="#C8A96E" opacity="0.25"/>
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i}
          x1={250+Math.cos(a*Math.PI/180)*20} y1={40+Math.sin(a*Math.PI/180)*20}
          x2={250+Math.cos(a*Math.PI/180)*28} y2={40+Math.sin(a*Math.PI/180)*28}
          stroke="#C8A96E" strokeWidth="1.5" opacity="0.3"/>
      ))}
      {/* Salt marshes */}
      <path d="M10 170 Q50 163 90 168" stroke="#9B8B7A" strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M15 178 Q55 172 95 176" stroke="#9B8B7A" strokeWidth="1" fill="none" opacity="0.25"/>
    </svg>
  ),
}

// ── WICKER BASKET SVG ──
const BasketIcon = ({ count, shake }) => (
  <svg viewBox="0 0 60 60" fill="none" style={{
    width: 52, height: 52,
    animation: shake ? 'basketShake 0.4s ease' : 'none',
  }}>
    <style>{`@keyframes basketShake { 0%,100%{transform:rotate(0)} 25%{transform:rotate(-12deg)} 75%{transform:rotate(12deg)} }`}</style>
    {/* Handle */}
    <path d="M18 22 Q18 8 30 8 Q42 8 42 22" stroke="#6B4F38" strokeWidth="3" fill="none" strokeLinecap="round"/>
    {/* Basket body */}
    <path d="M10 22 Q10 48 30 50 Q50 48 50 22Z" fill="#C8A96E" opacity="0.3"/>
    <path d="M10 22 Q10 48 30 50 Q50 48 50 22Z" stroke="#6B4F38" strokeWidth="2" fill="none"/>
    {/* Weave horizontal */}
    {[28,34,40,46].map(y => <path key={y} d={`M${12+(y-28)*0.5} ${y} Q30 ${y-2} ${48-(y-28)*0.5} ${y}`} stroke="#9B8B7A" strokeWidth="1" fill="none" opacity="0.5"/>)}
    {/* Weave vertical */}
    {[15,20,25,30,35,40,45].map(x => <path key={x} d={`M${x} 24 Q${x+2} 37 ${x} 48`} stroke="#9B8B7A" strokeWidth="0.8" fill="none" opacity="0.4"/>)}
    {/* Rim */}
    <path d="M8 24 Q30 20 52 24" stroke="#6B4F38" strokeWidth="2.5" fill="none"/>
    {count > 0 && <>
      <circle cx="44" cy="12" r="10" fill="#2C4A2E"/>
      <text x="44" y="17" textAnchor="middle" fill="white" fontSize="11" fontFamily="'DM Sans',sans-serif" fontWeight="500">{count}</text>
    </>}
  </svg>
)

// ── DATA ──
const blocsData = [
  { id:'paris', region:'Île-de-France', name:'Paris', emoji:'🗼',
    tagline:'Where the journey begins',
    desc:'Haussmann apartment with rooftop views, Versailles before the crowds, hidden bistros only locals know, Seine at dusk from a private boat.',
    details: ['3-4 bedroom Haussmann apartment in Le Marais or Saint-Germain','Versailles private entrance — no queues, garden picnic','Hidden bistros, morning market at Aligre, croissant workshop','Private Seine dinner cruise as the city lights up'],
    short:{days:'3 days',price:2800}, long:{days:'5 days',price:4500} },
  { id:'champagne', region:'Grand Est', name:'Champagne', emoji:'🍾',
    tagline:'Where bubbles are born',
    desc:'Private cave tours at legendary houses, a manor in the vineyards at dawn, UNESCO vines, Reims Cathedral and its Chagall windows.',
    details:['Manor house in the Montagne de Reims vineyards','Private cave tour — Moët, Taittinger or Veuve Clicquot','Small family vignerons, no appointments needed','Reims Cathedral — Chagall stained glass, royal history'],
    short:{days:'3 days',price:1800}, long:{days:'5 days',price:2800} },
  { id:'lyon', region:'Auvergne-Rhône-Alpes', name:'Lyon', emoji:'🍽️',
    tagline:'Gastronomy capital of the world',
    desc:'Secret traboules, Les Halles Paul Bocuse, an authentic bouchon lunch, Fourvière basilica glowing at sunset over the Saône.',
    details:['Loft apartment on the Quais de Saône, walking distance to everything','Secret Renaissance traboules — hidden passages tourists miss','Les Halles Bocuse — morning market, provisions for dinner','Real bouchon lyonnais lunch, quenelles and silk worker history'],
    short:{days:'3 days',price:1900}, long:{days:'5 days',price:3000} },
  { id:'chamonix', region:'Alps', name:'Chamonix', emoji:'🏔️',
    tagline:'The roof of Europe',
    desc:'Luxury chalet with Mont-Blanc views, Aiguille du Midi cable car at 3,842m, alpine family hike with marmots, mountain village at dusk.',
    details:['Private chalet with outdoor jacuzzi and direct Mont-Blanc view','Aiguille du Midi at 3,842m — the view that stops time','Alpine guided hike for all ages — marmots, ibex, wildflowers','Chamonix village, local cheese, fondue in a 200-year-old chalet'],
    short:{days:'3 days',price:3500}, long:{days:'5 days',price:5800} },
  { id:'normandy', region:'Normandy · Atlantic', name:'Normandy & Brittany', emoji:'🏖️',
    tagline:'Where history meets the sea',
    desc:'D-Day beaches at dawn before the buses arrive, Mont Saint-Michel at low tide, Saint-Malo ramparts, real crêperies in fishing villages.',
    details:['Private farmhouse or coastal villa in Normandy','D-Day beaches — Omaha, Pointe du Hoc — before the crowds arrive','Mont Saint-Michel at low tide, early morning, just the three of us','Saint-Malo ramparts, Cancale oysters, real Breton crêperies'],
    short:{days:'3 days',price:2200}, long:{days:'5 days',price:3500} },
  { id:'loire', region:'Centre-Val de Loire', name:'Loire Valley', emoji:'🏰',
    tagline:'A thousand châteaux, one river',
    desc:'Château de Chambord at dawn, private wine estates, river villages untouched by time, a truffle hunter who goes out at 5am.',
    details:['Manor house or château gîte in the valley','Chambord at dawn — the double helix staircase, no tourist buses yet','Private wine estate — Vouvray or Chinon, owner pours the wine','Truffle hunter morning walk, medieval village of Loches at sunset'],
    short:{days:'3 days',price:1800}, long:{days:'5 days',price:2800} },
  { id:'perigord', region:'Nouvelle-Aquitaine', name:'Périgord & Dordogne', emoji:'🦕',
    tagline:'France at its most ancient',
    desc:'Lascaux cave paintings, cliff-face bastide villages, foie gras straight from the farm, medieval Sarlat by night when the day-trippers leave.',
    details:['Bastide or farmhouse in the Dordogne valley','Lascaux IV — 17,000-year-old paintings, the cave that stopped time','Foie gras producer — from field to table, a real conversation','Sarlat by night — golden stone, no crowds, best dinner of the trip'],
    short:{days:'3 days',price:1900}, long:{days:'5 days',price:3000} },
  { id:'biarritz', region:'Pays Basque · Atlantic', name:'Biarritz', emoji:'🌊',
    tagline:'Where the Basques meet the Atlantic',
    desc:'Ocean-view Basque villa, surfing lessons on La Grande Plage, pintxos in Saint-Jean-de-Luz at a bar only locals know, Bayonne chocolatiers.',
    details:['Traditional Basque villa with Atlantic ocean view and terrace','Surfing lesson on La Grande Plage — the birthplace of European surf','Saint-Jean-de-Luz pintxos bar, txakoli wine, Basque conversation','Bayonne chocolatiers, pelota basque initiation, Pyrenees backdrop'],
    short:{days:'3 days',price:2400}, long:{days:'5 days',price:3800} },
  { id:'bordeaux', region:'Gironde', name:'Bordeaux', emoji:'🍷',
    tagline:'Sleep among the grand crus',
    desc:'Sleep in a working château vineyard, grand cru tastings with the owner, medieval Saint-Émilion on foot, and Cité du Vin for the kids.',
    details:['Château estate rental in Saint-Émilion or Médoc — waking in the vines','Grand cru tasting with the winemaker — Pichon Baron or Lynch-Bages','Saint-Émilion village on foot — monolithic church, macarons, limestone','Cité du Vin — world-class wine museum that works for the whole family'],
    short:{days:'3 days',price:2200}, long:{days:'5 days',price:3500} },
]

const medBloc = {
  id:'mediterranean', region:"Côte d'Azur · Calanques · Camargue", name:'The Mediterranean', emoji:'🌊',
  tagline:'Three worlds, one unforgettable week',
  desc:'Monaco glamour, secret calanques by private boat, wild flamingos in the Camargue salt marshes. This block exists in one size only — 8 days — because it needs to breathe.',
  details:['Monaco — casino, circuit F1 drive, Grimaldi palace, infinity pool villa on the Corniche','Les Calanques by private boat — En-Vau, Morgiou, snorkeling in 25°C water','Camargue — private mas in the reeds, flamingos on horseback at sunrise','Aigues-Mortes salt marshes, pink salt harvest, medieval rampart walk at dusk'],
  fixed:{days:'8 days',price:10000}
}

// ── NAV ──
function Nav({ basketCount, onBasket }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:200,
      padding:'18px 48px',display:'flex',justifyContent:'space-between',alignItems:'center',
      background: scrolled ? 'rgba(247,242,233,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(200,169,110,0.2)' : 'none',
      transition:'all 0.4s ease'
    }}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:scrolled?'var(--forest)':'var(--cream)',transition:'color 0.3s'}}>
        La Grande France
      </div>
      <div style={{display:'flex',gap:16,alignItems:'center'}}>
        <button onClick={onBasket} style={{background:'none',border:'none',cursor:'pointer',padding:'4px',position:'relative'}}>
          <BasketIcon count={basketCount} />
        </button>
        <button className="nav-cta" onClick={() => document.getElementById('book').scrollIntoView({behavior:'smooth'})}>
          Book a Call
        </button>
      </div>
    </nav>
  )
}

// ── VINE DIVIDER ──
function VineDivider({ label, dark }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOpen(true); obs.disconnect() } }, {threshold:0.5})
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const bg = dark ? 'var(--earth)' : 'var(--white)'
  return (
    <div ref={ref} style={{position:'relative',height:70,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',background:bg}}>
      <div style={{position:'absolute',right:'50%',transition:'transform 1.2s cubic-bezier(0.16,1,0.3,1)',transform:open?'translateX(0)':'translateX(80px)'}}>
        <svg width="170" height="44" viewBox="0 0 170 44" fill="none">
          <path d="M170 22 Q140 7 110 18 Q80 29 50 13 Q30 3 10 20" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
          <ellipse cx="62" cy="10" rx="7" ry="4" fill="#4A6741" opacity="0.45" transform="rotate(-20 62 10)"/>
          <ellipse cx="105" cy="20" rx="6" ry="3.5" fill="#4A6741" opacity="0.4" transform="rotate(15 105 20)"/>
          <circle cx="85" cy="30" r="3" fill="#C8A96E" opacity="0.4"/>
        </svg>
      </div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:11,letterSpacing:5,color:'var(--gold)',textTransform:'uppercase',position:'relative',zIndex:1,transition:'opacity 0.6s ease 0.7s',opacity:open?1:0}}>
        {label}
      </div>
      <div style={{position:'absolute',left:'50%',transition:'transform 1.2s cubic-bezier(0.16,1,0.3,1)',transform:open?'translateX(0)':'translateX(-80px)'}}>
        <svg width="170" height="44" viewBox="0 0 170 44" fill="none" style={{transform:'scaleX(-1)'}}>
          <path d="M170 22 Q140 7 110 18 Q80 29 50 13 Q30 3 10 20" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
          <ellipse cx="62" cy="10" rx="7" ry="4" fill="#4A6741" opacity="0.45" transform="rotate(-20 62 10)"/>
          <ellipse cx="105" cy="20" rx="6" ry="3.5" fill="#4A6741" opacity="0.4" transform="rotate(15 105 20)"/>
          <circle cx="85" cy="30" r="3" fill="#C8A96E" opacity="0.4"/>
        </svg>
      </div>
    </div>
  )
}

// ── BAGUETTE ──
function BaguetteReveal() {
  const ref = useRef(null)
  const [broken, setBroken] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setBroken(true); obs.disconnect() } }, {threshold:0.5})
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const half = (flip) => (
    <svg width="130" height="30" viewBox="0 0 130 30" fill="none" style={flip?{transform:'scaleX(-1)'}:{}}>
      <path d="M5 16 Q32 26 70 24 Q108 22 128 15 Q122 3 98 1 Q64-1 30 1 Q10 3 5 16Z" fill="#E8D4A8" opacity="0.55"/>
      <path d="M18 10 Q48 6 78 8 Q108 10 122 14" stroke="#C8A96E" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M128 15 Q122 3 98 1 Q64-1 30 1 Q10 3 5 16" stroke="#9B8B7A" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35"/>
    </svg>
  )
  return (
    <div ref={ref} style={{display:'flex',alignItems:'center',justifyContent:'center',height:72,position:'relative',overflow:'visible',background:'var(--white)'}}>
      <div style={{position:'absolute',right:'calc(50% + 4px)',transition:'transform 1s cubic-bezier(0.16,1,0.3,1)',transform:broken?'translateX(-100px) rotate(-10deg)':'translateX(0)'}}>{half(false)}</div>
      <div style={{position:'absolute',left:'calc(50% + 4px)',transition:'transform 1s cubic-bezier(0.16,1,0.3,1)',transform:broken?'translateX(100px) rotate(10deg)':'translateX(0)'}}>{half(true)}</div>
    </div>
  )
}

// ── BLOC DETAIL PANEL ──
function BlocPanel({ bloc, onClose, onAdd, basketItems }) {
  const [choice, setChoice] = useState(bloc.fixed ? 'fixed' : 'long')
  const Illu = illustrations[bloc.name] || illustrations['Paris']
  const inBasket = basketItems.find(b => b.id === bloc.id)
  const price = bloc.fixed ? bloc.fixed.price : (choice === 'short' ? bloc.short.price : bloc.long.price)
  const days = bloc.fixed ? bloc.fixed.days : (choice === 'short' ? bloc.short.days : bloc.long.days)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={{position:'fixed',inset:0,zIndex:300,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={onClose}>
      {/* Backdrop */}
      <div style={{position:'absolute',inset:0,background:'rgba(61,44,30,0.6)',backdropFilter:'blur(8px)',animation:'fadeIn 0.3s ease'}}/>
      {/* Panel */}
      <div onClick={e=>e.stopPropagation()} style={{
        position:'relative',width:'min(680px,95vw)',maxHeight:'90vh',
        background:'var(--white)',borderRadius:8,overflow:'hidden',
        animation:'panelUp 0.45s cubic-bezier(0.16,1,0.3,1)',
        boxShadow:'0 40px 120px rgba(61,44,30,0.25)',
        display:'flex',flexDirection:'column'
      }}>
        <style>{`
          @keyframes fadeIn{from{opacity:0}to{opacity:1}}
          @keyframes panelUp{from{opacity:0;transform:translateY(40px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
        `}</style>

        {/* Illustration header */}
        <div style={{height:200,background:'var(--cream)',position:'relative',overflow:'hidden',flexShrink:0}}>
          <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'100%',maxWidth:360}}><Illu /></div>
          </div>
          {/* Gradient overlay */}
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(254,252,248,0.8) 0%, transparent 60%)'}}/>
          <div style={{position:'absolute',top:16,left:20,background:'var(--forest)',color:'var(--cream)',padding:'4px 12px',borderRadius:100,fontSize:10,letterSpacing:3,textTransform:'uppercase'}}>
            {bloc.region}
          </div>
          <button onClick={onClose} style={{position:'absolute',top:14,right:16,background:'rgba(255,255,255,0.8)',border:'none',borderRadius:'50%',width:34,height:34,cursor:'pointer',fontSize:18,display:'flex',alignItems:'center',justifyContent:'center',color:'var(--earth-mid)'}}>×</button>
        </div>

        {/* Content */}
        <div style={{padding:'28px 32px',overflowY:'auto',flex:1}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:300,color:'var(--earth)',lineHeight:1.1}}>
            {bloc.emoji} {bloc.name}
          </div>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:16,color:'var(--gold)',marginTop:6,marginBottom:16}}>
            {bloc.tagline}
          </div>
          <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.8,fontWeight:300,marginBottom:24}}>
            {bloc.desc}
          </p>

          {/* Details */}
          <div style={{borderTop:'1px solid var(--cream-dark)',paddingTop:20,marginBottom:24}}>
            <div style={{fontSize:9,letterSpacing:4,textTransform:'uppercase',color:'var(--gold)',marginBottom:14}}>What you'll experience</div>
            {bloc.details.map((d,i) => (
              <div key={i} style={{display:'flex',gap:12,marginBottom:10,alignItems:'flex-start'}}>
                <div style={{width:6,height:6,borderRadius:'50%',background:'var(--gold)',flexShrink:0,marginTop:5}}/>
                <div style={{fontSize:13,color:'var(--earth-mid)',lineHeight:1.6,fontWeight:300}}>{d}</div>
              </div>
            ))}
          </div>

          {/* Duration selector */}
          {!bloc.fixed && (
            <div style={{marginBottom:24}}>
              <div style={{fontSize:9,letterSpacing:4,textTransform:'uppercase',color:'var(--gold)',marginBottom:12}}>Choose your duration</div>
              <div style={{display:'flex',gap:12}}>
                {['short','long'].map(opt => (
                  <button key={opt} onClick={()=>setChoice(opt)} style={{
                    flex:1,padding:'14px 16px',border:`1.5px solid ${choice===opt?'var(--forest)':'var(--cream-dark)'}`,
                    borderRadius:4,background:choice===opt?'var(--forest-pale)':'var(--cream)',cursor:'pointer',
                    transition:'all 0.2s',textAlign:'left'
                  }}>
                    <div style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:choice===opt?'var(--forest)':'var(--muted)',marginBottom:3}}>{opt}</div>
                    <div style={{fontSize:11,color:'var(--muted)',marginBottom:4,fontWeight:300}}>{bloc[opt].days}</div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,color:choice===opt?'var(--forest)':'var(--earth-mid)'}}>{bloc[opt].price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {bloc.fixed && (
            <div style={{background:'var(--forest-pale)',border:'1px solid var(--forest)',borderRadius:4,padding:'16px 20px',marginBottom:24,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div>
                <div style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--forest)',marginBottom:4}}>Fixed Block</div>
                <div style={{fontSize:12,color:'var(--muted)',fontWeight:300}}>{bloc.fixed.days}</div>
              </div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:'var(--forest)'}}>
                {bloc.fixed.price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}
              </div>
            </div>
          )}

          {/* Add to basket */}
          <button onClick={() => { onAdd(bloc, choice); onClose() }} style={{
            width:'100%',padding:'16px',
            background: inBasket ? 'var(--muted)' : 'var(--forest)',
            color:'var(--cream)',border:'none',borderRadius:4,cursor:'pointer',
            fontFamily:"'DM Sans',sans-serif",fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:500,
            transition:'all 0.2s'
          }}>
            {inBasket ? '✓ Already in your basket' : `Add to Basket — ${price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}`}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── BASKET PANEL ──
function BasketPanel({ items, onClose, onRemove }) {
  const total = items.reduce((s,i) => s + i.price, 0)
  const totalDays = items.reduce((s,i) => s + parseInt(i.days), 0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div style={{position:'fixed',inset:0,zIndex:300,display:'flex',justifyContent:'flex-end'}} onClick={onClose}>
      <div style={{position:'absolute',inset:0,background:'rgba(61,44,30,0.5)',backdropFilter:'blur(6px)'}}/>
      <div onClick={e=>e.stopPropagation()} style={{
        position:'relative',width:'min(460px,95vw)',height:'100vh',
        background:'var(--white)',overflowY:'auto',
        animation:'slideIn 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow:'-20px 0 60px rgba(61,44,30,0.15)'
      }}>
        <style>{`@keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}`}</style>
        <div style={{padding:'28px 32px',borderBottom:'1px solid var(--cream-dark)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <BasketIcon count={items.length}/>
            <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:300,color:'var(--earth)'}}>Your Basket</div>
          </div>
          <button onClick={onClose} style={{background:'none',border:'none',fontSize:24,cursor:'pointer',color:'var(--muted)'}}>×</button>
        </div>

        <div style={{padding:'24px 32px'}}>
          {items.length === 0 ? (
            <div style={{textAlign:'center',padding:'60px 20px',color:'var(--muted)'}}>
              <div style={{fontSize:40,marginBottom:16}}>🧺</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,marginBottom:8}}>Your basket is empty</div>
              <div style={{fontSize:12,fontWeight:300}}>Click on any block to add it to your journey</div>
            </div>
          ) : (
            <>
              {items.map((item,i) => (
                <div key={i} style={{background:'var(--cream)',borderRadius:4,padding:'16px 18px',marginBottom:12,display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:'var(--earth)',marginBottom:2}}>{item.emoji} {item.name}</div>
                    <div style={{fontSize:10,color:'var(--muted)',letterSpacing:1}}>{item.type.toUpperCase()} · {item.days}</div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:'var(--forest)'}}>
                      {item.price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}
                    </div>
                    <button onClick={()=>onRemove(item.id)} style={{background:'none',border:'none',cursor:'pointer',color:'var(--muted)',fontSize:16,padding:4}}>×</button>
                  </div>
                </div>
              ))}

              <div style={{borderTop:'2px solid var(--cream-dark)',paddingTop:20,marginTop:8}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
                  <div style={{fontSize:11,color:'var(--muted)',letterSpacing:2,textTransform:'uppercase'}}>Total duration</div>
                  <div style={{fontSize:13,color:'var(--earth)',fontWeight:500}}>{totalDays} days</div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:24}}>
                  <div style={{fontSize:11,color:'var(--muted)',letterSpacing:2,textTransform:'uppercase'}}>Total</div>
                  <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:40,color:'var(--forest)',fontWeight:300}}>
                    {total.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}
                  </div>
                </div>
                <div style={{fontSize:11,color:'var(--muted)',marginBottom:20,lineHeight:1.6,fontWeight:300,fontStyle:'italic'}}>
                  Fixed price for 2–5 people · +10% for a 6th person · All villas, trains and transfers included
                </div>
                <button onClick={() => { onClose(); document.getElementById('book').scrollIntoView({behavior:'smooth'}) }} style={{
                  width:'100%',padding:'16px',background:'var(--gold)',color:'var(--earth)',
                  border:'none',borderRadius:4,cursor:'pointer',
                  fontFamily:"'DM Sans',sans-serif",fontSize:11,letterSpacing:3,textTransform:'uppercase',fontWeight:600
                }}>
                  Book a Call with Mathilde
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

// ── BLOC CARD ──
function BlocCard({ bloc, onOpen, inBasket }) {
  const Illu = illustrations[bloc.name] || illustrations['Paris']
  return (
    <div onClick={() => onOpen(bloc)}
      style={{
        background:'var(--white)',borderRadius:6,overflow:'hidden',
        boxShadow:'0 2px 20px rgba(61,44,30,0.06)',
        cursor:'pointer',transition:'transform 0.3s ease, box-shadow 0.3s ease',
        border: inBasket ? '2px solid var(--forest)' : '2px solid transparent',
        gridColumn: bloc.featured ? 'span 2' : 'span 1',
      }}
      onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 50px rgba(61,44,30,0.15)' }}
      onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 20px rgba(61,44,30,0.06)' }}
    >
      {/* Illustration */}
      <div style={{height:160,background: bloc.featured ? 'var(--forest)' : 'var(--cream)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',padding:'0 20px'}}>
          <div style={{width:'100%',maxWidth:320}}><Illu /></div>
        </div>
        {inBasket && (
          <div style={{position:'absolute',top:10,right:10,background:'var(--forest)',color:'var(--cream)',borderRadius:100,padding:'3px 10px',fontSize:9,letterSpacing:2,textTransform:'uppercase'}}>
            ✓ In basket
          </div>
        )}
        <div style={{position:'absolute',bottom:0,left:0,right:0,height:40,background:'linear-gradient(to top,rgba(254,252,248,0.9),transparent)'}}/>
      </div>

      {/* Content */}
      <div style={{padding:'18px 20px'}}>
        <div style={{fontSize:8,letterSpacing:4,textTransform:'uppercase',color:'var(--gold)',marginBottom:4}}>{bloc.region}</div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize: bloc.featured?30:24,fontWeight:400,color: bloc.featured?'var(--cream)':'var(--earth)',marginBottom:4}}>
          {bloc.emoji} {bloc.name}
        </div>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:13,color:'var(--gold)',marginBottom:10}}>{bloc.tagline}</div>
        <div style={{fontSize:11,color:'var(--muted)',lineHeight:1.6,fontWeight:300,marginBottom:14,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>
          {bloc.desc}
        </div>

        {/* Prices */}
        {!bloc.fixed ? (
          <div style={{display:'flex',gap:10}}>
            {['short','long'].map(opt => (
              <div key={opt} style={{flex:1,background:'var(--cream)',borderRadius:3,padding:'10px 12px'}}>
                <div style={{fontSize:8,letterSpacing:3,textTransform:'uppercase',color:'var(--muted)',marginBottom:2}}>{opt}</div>
                <div style={{fontSize:10,color:'var(--muted)',marginBottom:4,fontWeight:300}}>{bloc[opt].days}</div>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:'var(--forest)'}}>
                  {bloc[opt].price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{background:'rgba(247,242,233,0.15)',borderRadius:3,padding:'10px 12px',border:'1px solid rgba(200,169,110,0.3)'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
              <div style={{fontSize:10,color:'rgba(247,242,233,0.5)',fontWeight:300}}>{bloc.fixed.days} — fixed block</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,color:'var(--gold)'}}>
                {bloc.fixed.price.toLocaleString('fr',{style:'currency',currency:'EUR',maximumFractionDigits:0})}
              </div>
            </div>
          </div>
        )}

        <div style={{textAlign:'center',marginTop:14,fontSize:10,color:'var(--muted)',letterSpacing:2,opacity:0.6}}>
          ↗ Click to explore
        </div>
      </div>
    </div>
  )
}

// ── MAIN APP ──
export default function App() {
  useReveal()
  const [panel, setPanel] = useState(null)
  const [basket, setBasket] = useState([])
  const [showBasket, setShowBasket] = useState(false)
  const [shakeBasket, setShakeBasket] = useState(false)

  const addToBasket = useCallback((bloc, choice) => {
    const existing = basket.find(b => b.id === bloc.id)
    if (existing) return
    const type = bloc.fixed ? 'fixed' : choice
    const price = bloc.fixed ? bloc.fixed.price : bloc[choice].price
    const days = bloc.fixed ? bloc.fixed.days : bloc[choice].days
    setBasket(prev => [...prev, { id:bloc.id, name:bloc.name, emoji:bloc.emoji, type, price, days }])
    setShakeBasket(true)
    setTimeout(() => setShakeBasket(false), 500)
  }, [basket])

  const removeFromBasket = useCallback((id) => {
    setBasket(prev => prev.filter(b => b.id !== id))
  }, [])

  const allBlocs = [...blocsData, {...medBloc, featured:true}]

  return (<>
    <Nav basketCount={basket.length} onBasket={()=>setShowBasket(true)} />

    {/* HERO */}
    <section style={{minHeight:'100vh',background:'var(--earth)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',position:'relative',overflow:'hidden',textAlign:'center',padding:'120px 24px 80px'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 20% 60%, rgba(200,169,110,0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, rgba(44,74,46,0.2) 0%, transparent 50%)'}}/>
      <div style={{position:'absolute',fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(120px,20vw,280px)',fontWeight:300,color:'rgba(255,255,255,0.03)',letterSpacing:-10,userSelect:'none',top:'50%',left:'50%',transform:'translate(-50%,-50%)',whiteSpace:'nowrap'}}>FRANCE</div>
      <div style={{fontSize:10,letterSpacing:6,textTransform:'uppercase',color:'var(--gold)',marginBottom:24,opacity:0,animation:'heroUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',position:'relative'}}>Private Journeys · Authentic France</div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(60px,10vw,130px)',fontWeight:300,color:'var(--cream)',lineHeight:0.95,letterSpacing:-3,opacity:0,animation:'heroUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',position:'relative'}}>La Grande<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>France</em></h1>
      <p style={{fontFamily:"'Cormorant Garamond',serif",fontStyle:'italic',fontSize:'clamp(18px,2.5vw,26px)',color:'rgba(247,242,233,0.5)',marginTop:20,fontWeight:300,opacity:0,animation:'heroUp 1s cubic-bezier(0.16,1,0.3,1) 0.7s forwards',position:'relative'}}>Your guide. Your driver. Your France.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',marginTop:48,opacity:0,animation:'heroUp 1s cubic-bezier(0.16,1,0.3,1) 0.9s forwards',position:'relative'}}>
        {['100% Private','Zero Tourist Traps','Luxury Villas Only','One Guide · Every Day','Built Around You'].map(t => (
          <div key={t} style={{padding:'8px 20px',border:'1px solid rgba(200,169,110,0.3)',borderRadius:100,fontSize:11,letterSpacing:1.5,color:'rgba(247,242,233,0.65)',fontWeight:300}}>{t}</div>
        ))}
      </div>
      <div style={{position:'absolute',bottom:40,left:'50%',transform:'translateX(-50%)',display:'flex',flexDirection:'column',alignItems:'center',gap:8,opacity:0,animation:'heroUp 1s ease 1.4s forwards'}}>
        <span style={{fontSize:9,letterSpacing:4,textTransform:'uppercase',color:'rgba(247,242,233,0.3)'}}>Scroll</span>
        <div style={{width:1,height:50,background:'linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)',animation:'scrollPulse 2s ease infinite'}}/>
      </div>
      <style>{`
        @keyframes heroUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scrollPulse{0%,100%{opacity:0.3}50%{opacity:1}}
      `}</style>
    </section>

    <VineDivider label="The Concept" />

    {/* CONCEPT */}
    <section style={{background:'var(--white)',padding:'110px 48px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <h2 className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,68px)',fontWeight:300,lineHeight:1.1,color:'var(--earth)',maxWidth:780}}>
          Not a tour.<br /><em style={{fontStyle:'italic',color:'var(--forest)'}}>A way of experiencing France</em><br />the way it was meant to be seen.
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:60,marginTop:80}}>
          {[
            {n:'01',h:'One Person. All the Way.',p:'Paul is with your family from the airport to the farewell dinner. Driver, historian, translator, local insider — one trusted companion who becomes part of your story.'},
            {n:'02',h:'Zero Tourist Traps. Ever.',p:'No restaurant with photos on the menu. No audio guides. No tour buses. Every address is a place Paul knows personally — the vigneron who opens only for friends.'},
            {n:'03',h:'Your French Home, Everywhere.',p:'A private chalet in the Alps. A manor in Champagne vineyards. A bastide in Provence. Real homes with kitchens and gardens — not hotel rooms.'},
          ].map((c,i) => (
            <div key={i} className={`reveal delay-${i+1}`} style={{borderTop:'1px solid var(--cream-dark)',paddingTop:28}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:48,fontWeight:300,color:'var(--gold)',lineHeight:1,marginBottom:16}}>{c.n}</div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:400,color:'var(--earth)',marginBottom:12}}>{c.h}</h3>
              <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.8,fontWeight:300}}>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BaguetteReveal />

    {/* DIAGONALS */}
    <section style={{background:'var(--earth)',padding:'110px 48px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <span className="reveal" style={{fontSize:9,letterSpacing:6,textTransform:'uppercase',color:'var(--gold)',display:'block',marginBottom:16}}>The Routes</span>
        <h2 className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(42px,5vw,72px)',fontWeight:300,color:'var(--cream)',marginBottom:70,lineHeight:1.05}}>
          Two <em style={{fontStyle:'italic',color:'var(--gold)'}}>journeys</em> through France.<br />Build yours.
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32}}>
          {[
            {title:'The Eastern Diagonal',sub:'Paris → Alps → Riviera',stops:[{name:'Paris',desc:'3 or 5 days'},{name:'Champagne',desc:'3 or 5 days'},{name:'Lyon',desc:'3 or 5 days'},{name:'Chamonix & Alps',desc:'3 or 5 days'},{name:'Mediterranean ★',desc:'8 days — fixed',special:true}]},
            {title:'The Western Diagonal',sub:'Normandy → Atlantic → Bordeaux',stops:[{name:'Normandy & Brittany',desc:'3 or 5 days'},{name:'Loire Valley',desc:'3 or 5 days'},{name:'Périgord & Dordogne',desc:'3 or 5 days'},{name:'Biarritz',desc:'3 or 5 days'},{name:'Bordeaux & Saint-Émilion',desc:'3 or 5 days'}]},
          ].map((d,di) => (
            <div key={di} className={di===0?'reveal-left':'reveal-right'} style={{background:'rgba(247,242,233,0.04)',border:'1px solid rgba(200,169,110,0.18)',borderRadius:4,overflow:'hidden'}}>
              <div style={{background:'rgba(200,169,110,0.08)',padding:'26px 30px',borderBottom:'1px solid rgba(200,169,110,0.12)'}}>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:300,color:'var(--cream)'}}>{d.title}</h3>
                <p style={{fontSize:10,color:'rgba(247,242,233,0.35)',letterSpacing:3,textTransform:'uppercase',marginTop:4}}>{d.sub}</p>
              </div>
              <div style={{padding:'22px 30px',display:'flex',flexDirection:'column',gap:14}}>
                {d.stops.map((s,i) => (
                  <div key={i} style={{display:'flex',alignItems:'flex-start',gap:14}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0,paddingTop:5}}>
                      <div style={{width:s.special?9:7,height:s.special?9:7,borderRadius:'50%',background:'var(--gold)'}}/>
                      {i<d.stops.length-1 && <div style={{width:1,height:18,background:'rgba(200,169,110,0.2)',marginTop:3}}/>}
                    </div>
                    <div>
                      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:400,color:'var(--cream)'}}>{s.name}</div>
                      <div style={{fontSize:10,color:'rgba(247,242,233,0.3)',letterSpacing:1}}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <VineDivider label="Build Your Trip" dark />

    {/* BLOCS */}
    <section style={{background:'var(--cream)',padding:'110px 48px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <span className="reveal" style={{fontSize:9,letterSpacing:6,textTransform:'uppercase',color:'var(--gold)',display:'block',marginBottom:16}}>Modular Blocks</span>
        <h2 className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(42px,5vw,72px)',fontWeight:300,lineHeight:1.05,color:'var(--earth)'}}>
          <em style={{fontStyle:'italic',color:'var(--forest)'}}>Your trip,</em> your way
        </h2>
        <p className="reveal" style={{fontSize:13,color:'var(--muted)',lineHeight:1.8,maxWidth:600,marginTop:18,fontWeight:300}}>
          Click any block to explore it in detail and add it to your basket. Short = 3 days. Long = 5 days. Mix freely — we keep the geography logical.
        </p>
        <div className="reveal" style={{fontSize:11,color:'var(--forest)',background:'var(--forest-pale)',borderLeft:'2px solid var(--forest)',padding:'10px 16px',marginTop:32,display:'inline-block'}}>
          All prices: 2 to 5 people · +10% for a 6th · TGV & transfers included · Villa pre-selected
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))',gap:22,marginTop:56}}>
          {allBlocs.map((bloc,i) => (
            <div key={bloc.id} className="reveal" style={{transitionDelay:`${(i%3)*0.1}s`,gridColumn:bloc.featured?'span 2':'span 1'}}>
              <BlocCard bloc={bloc} onOpen={setPanel} inBasket={!!basket.find(b=>b.id===bloc.id)}/>
            </div>
          ))}
        </div>

        <div className="reveal" style={{marginTop:48,padding:'18px 22px',background:'var(--forest-pale)',borderRadius:4}}>
          <p style={{fontSize:12,color:'var(--forest)',lineHeight:1.7,fontWeight:300}}>
            <strong style={{fontWeight:500}}>Not sure how to combine?</strong> That's exactly what the 30-minute call is for. Mathilde will build the perfect itinerary based on your family, your pace, and the time of year.
          </p>
        </div>
      </div>
    </section>

    <VineDivider label="How It Works" />

    {/* HOW IT WORKS */}
    <section style={{background:'var(--white)',padding:'110px 48px'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <span className="reveal" style={{fontSize:9,letterSpacing:6,textTransform:'uppercase',color:'var(--gold)',display:'block',marginBottom:16}}>The Process</span>
        <h2 className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(42px,5vw,72px)',fontWeight:300,lineHeight:1.05,color:'var(--earth)',marginBottom:80}}>
          Simple. <em style={{fontStyle:'italic',color:'var(--forest)'}}>Seamless.</em> Stress-free.
        </h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:0,position:'relative'}}>
          <div style={{position:'absolute',top:23,left:'12%',right:'12%',height:1,background:'linear-gradient(to right, transparent, var(--gold), var(--gold), transparent)'}}/>
          {[
            {n:'1',h:'Build Your Blocks',p:'Browse regions. Click to explore. Choose short or long. Add to your basket.'},
            {n:'2',h:'30-Min Call with Mathilde',p:'She walks through your basket, learns about your family, fine-tunes everything. Bilingual, human, real.'},
            {n:'3',h:'We Handle Everything',p:'Villas, trains, activities, restaurants — all booked. You receive your personalized travel book.'},
            {n:'4',h:'Live France',p:'Paul meets you at CDG. From that moment, France is yours. You just show up and enjoy.'},
          ].map((s,i) => (
            <div key={i} className={`reveal delay-${i+1}`} style={{padding:'0 20px',textAlign:'center'}}>
              <div style={{width:48,height:48,borderRadius:'50%',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:'var(--gold)',margin:'0 auto 24px',position:'relative',zIndex:1,background:'var(--white)'}}>{s.n}</div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:400,color:'var(--earth)',marginBottom:10}}>{s.h}</h3>
              <p style={{fontSize:12,color:'var(--muted)',lineHeight:1.7,fontWeight:300}}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <VineDivider label="Who We Are" />

    {/* ABOUT */}
    <section style={{background:'var(--cream)',padding:'110px 48px'}}>
      <div style={{maxWidth:1200,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:100,alignItems:'center'}}>
        <div className="reveal-left">
          <span style={{fontSize:9,letterSpacing:6,textTransform:'uppercase',color:'var(--gold)',display:'block',marginBottom:16}}>The Faces Behind the Trip</span>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(42px,5vw,72px)',fontWeight:300,lineHeight:1.05,color:'var(--earth)'}}>Not an agency.<br /><em style={{fontStyle:'italic',color:'var(--forest)'}}>A family.</em></h2>
          <div style={{fontSize:15,color:'var(--earth-mid)',lineHeight:1.9,fontWeight:300,marginTop:32}}>
            <p>Paul grew up surrounded by the history, landscapes, and flavors of France. He has personally traveled every route in these blocks — not as a tourist, but as someone who stops to talk to the cheesemaker, knows which vineyard opens its cellar on Sunday mornings, and can tell you why that particular stretch of the Dordogne looks different at 7am.</p>
            <p style={{marginTop:20}}>Mathilde handles everything behind the scenes — beautifully. Communication, logistics, villa selection, your personalized travel book. Bilingual, meticulous, and the kind of person who answers at 10pm because she cares about getting it right.</p>
          </div>
          <div style={{marginTop:40,display:'flex',gap:40}}>
            {[{n:'Paul',r:'Guide & On-the-road'},{n:'Mathilde',r:'Operations & Client Relations'}].map(s => (
              <div key={s.n}>
                <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontStyle:'italic',color:'var(--forest)'}}>{s.n}</div>
                <div style={{fontSize:9,letterSpacing:3,textTransform:'uppercase',color:'var(--muted)',marginTop:4}}>{s.r}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal-right" style={{display:'flex',flexDirection:'column',gap:18}}>
          {[{num:'9',label:'Regions covered across France'},{num:'21',label:'Maximum days of continuous accompaniment'},{num:'100%',label:'Private — your family only, always'},{num:'0',label:'Tourist traps. Ever.'}].map((s,i) => (
            <div key={i} style={{background:'var(--white)',padding:'24px 28px',borderRadius:4,borderLeft:'3px solid var(--gold)',boxShadow:'0 2px 16px rgba(61,44,30,0.06)',transitionDelay:`${i*0.12}s`}}>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:48,fontWeight:300,color:'var(--forest)',lineHeight:1}}>{s.num}</div>
              <div style={{fontSize:11,color:'var(--muted)',marginTop:6,fontWeight:300}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* BOOK */}
    <section id="book" style={{background:'var(--earth)',padding:'140px 48px',textAlign:'center',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.12) 0%, transparent 70%)'}}/>
      <div style={{maxWidth:700,margin:'0 auto',position:'relative'}}>
        <h2 className="reveal" style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(42px,6vw,80px)',fontWeight:300,color:'var(--cream)',lineHeight:1.05,marginBottom:24}}>
          Ready to discover<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>your France?</em>
        </h2>
        <p className="reveal delay-1" style={{fontSize:14,color:'rgba(247,242,233,0.5)',lineHeight:1.8,fontWeight:300,marginBottom:48}}>
          Start by building your blocks above — then book a free 30-minute call with Mathilde. No commitment, no pressure. Just a conversation about what your perfect France looks like.
        </p>
        <button className="reveal delay-2" onClick={() => window.open('https://calendly.com','_blank')} style={{
          background:'var(--gold)',color:'var(--earth)',border:'none',padding:'18px 48px',
          fontFamily:"'DM Sans',sans-serif",fontSize:12,letterSpacing:3,textTransform:'uppercase',
          cursor:'pointer',transition:'all 0.3s',borderRadius:2,fontWeight:600,
        }}
          onMouseEnter={e=>{e.target.style.background='var(--gold-light)';e.target.style.transform='translateY(-2px)'}}
          onMouseLeave={e=>{e.target.style.background='var(--gold)';e.target.style.transform='translateY(0)'}}>
          Book Your Free Call
        </button>
        <p className="reveal delay-3" style={{fontSize:11,color:'rgba(247,242,233,0.22)',marginTop:20,letterSpacing:1}}>30 minutes · Free · No commitment · English & French</p>
      </div>
    </section>

    {/* FOOTER */}
    <footer style={{background:'var(--earth)',borderTop:'1px solid rgba(200,169,110,0.12)',padding:'36px 48px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontStyle:'italic',color:'var(--gold)'}}>La Grande France</div>
      <div style={{fontSize:11,color:'rgba(247,242,233,0.22)'}}>© 2025 La Grande France · Lyon, France · hello@lagrandefrance.com</div>
    </footer>

    {/* PANELS */}
    {panel && <BlocPanel bloc={panel} onClose={()=>setPanel(null)} onAdd={addToBasket} basketItems={basket}/>}
    {showBasket && <BasketPanel items={basket} onClose={()=>setShowBasket(false)} onRemove={removeFromBasket}/>}
  </>)
}
