import React from 'react'

export function VineBranchLeft({ style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', ...style }} className={className}
      aria-hidden="true">
      {/* Main stem */}
      <path d="M160 580 C150 480 130 400 120 320 C110 240 100 180 90 100 C85 60 80 30 75 0"
        stroke="#2c4a2e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* Tendrils */}
      <path d="M130 460 C110 450 80 455 60 440 C40 425 30 410 20 390"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M115 360 C95 370 70 360 55 345"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M105 260 C85 275 65 265 50 250 C35 235 28 218 25 200"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M95 160 C115 150 125 130 120 110"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35"/>
      {/* Leaves */}
      <ellipse cx="55" cy="398" rx="18" ry="12" transform="rotate(-30 55 398)"
        fill="#3d6340" opacity="0.25"/>
      <ellipse cx="42" cy="252" rx="16" ry="10" transform="rotate(-45 42 252)"
        fill="#3d6340" opacity="0.25"/>
      <ellipse cx="118" cy="108" rx="14" ry="9" transform="rotate(20 118 108)"
        fill="#3d6340" opacity="0.2"/>
      {/* Grapes cluster */}
      <circle cx="18" cy="394" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="26" cy="400" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="10" cy="402" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="22" cy="408" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="14" cy="408" r="3" fill="#2c4a2e" opacity="0.15"/>
    </svg>
  )
}

export function VineBranchRight({ style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', transform: 'scaleX(-1)', ...style }} className={className}
      aria-hidden="true">
      <path d="M160 580 C150 480 130 400 120 320 C110 240 100 180 90 100 C85 60 80 30 75 0"
        stroke="#2c4a2e" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      <path d="M130 460 C110 450 80 455 60 440 C40 425 30 410 20 390"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M115 360 C95 370 70 360 55 345"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M105 260 C85 275 65 265 50 250 C35 235 28 218 25 200"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
      <path d="M95 160 C115 150 125 130 120 110"
        stroke="#2c4a2e" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.35"/>
      <ellipse cx="55" cy="398" rx="18" ry="12" transform="rotate(-30 55 398)"
        fill="#3d6340" opacity="0.25"/>
      <ellipse cx="42" cy="252" rx="16" ry="10" transform="rotate(-45 42 252)"
        fill="#3d6340" opacity="0.25"/>
      <ellipse cx="118" cy="108" rx="14" ry="9" transform="rotate(20 118 108)"
        fill="#3d6340" opacity="0.2"/>
      <circle cx="18" cy="394" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="26" cy="400" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="10" cy="402" r="4" fill="#2c4a2e" opacity="0.2"/>
      <circle cx="22" cy="408" r="4" fill="#2c4a2e" opacity="0.2"/>
    </svg>
  )
}

export function BaguetteParting({ scrolled = false }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none', overflow: 'hidden',
    }}>
      {/* Left baguette half */}
      <svg viewBox="0 0 300 60" style={{
        width: 300, height: 60,
        transform: scrolled ? 'translateX(-120%) rotate(-8deg)' : 'translateX(-10%) rotate(-3deg)',
        transition: 'transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: scrolled ? 0 : 0.18,
      }} aria-hidden="true">
        <path d="M20 30 C60 15 120 10 180 14 C220 17 260 24 290 30"
          stroke="#c8a96e" strokeWidth="18" strokeLinecap="round" fill="none"/>
        <path d="M20 30 C60 15 120 10 180 14 C220 17 260 24 290 30"
          stroke="#e8d4a8" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M60 22 L80 20 M110 16 L130 15 M160 14 L180 14"
          stroke="#c8a96e" strokeWidth="1.5" opacity="0.5"/>
      </svg>
      {/* Right baguette half */}
      <svg viewBox="0 0 300 60" style={{
        width: 300, height: 60, marginLeft: -20,
        transform: scrolled ? 'translateX(120%) rotate(8deg)' : 'translateX(10%) rotate(3deg)',
        transition: 'transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: scrolled ? 0 : 0.18,
      }} aria-hidden="true">
        <path d="M10 30 C40 24 80 17 120 14 C160 10 220 15 260 30 C270 34 280 36 290 34"
          stroke="#c8a96e" strokeWidth="18" strokeLinecap="round" fill="none"/>
        <path d="M10 30 C40 24 80 17 120 14 C160 10 220 15 260 30 C270 34 280 36 290 34"
          stroke="#e8d4a8" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M120 15 L140 14 M170 13 L190 14 M220 18 L240 22"
          stroke="#c8a96e" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    </div>
  )
}

export function WineBottle({ style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 60 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={style} className={className} aria-hidden="true">
      {/* Neck */}
      <rect x="24" y="0" width="12" height="8" rx="2" fill="#2c4a2e" opacity="0.3"/>
      <rect x="22" y="8" width="16" height="30" rx="3" fill="#2c4a2e" opacity="0.25"/>
      {/* Shoulder */}
      <path d="M22 38 C18 45 14 52 12 60 L12 140 C12 148 18 155 30 155 C42 155 48 148 48 140 L48 60 C46 52 42 45 38 38 Z"
        fill="#2c4a2e" opacity="0.2"/>
      {/* Wine level */}
      <path d="M14 90 C14 90 14 140 14 140 C14 148 18 153 30 153 C42 153 46 148 46 140 L46 90 Z"
        fill="#2c4a2e" opacity="0.15"/>
      {/* Label */}
      <rect x="16" y="95" width="28" height="35" rx="2" fill="#f7f2e9" opacity="0.6"/>
      <line x1="20" y1="108" x2="40" y2="108" stroke="#2c4a2e" strokeWidth="0.8" opacity="0.4"/>
      <line x1="22" y1="115" x2="38" y2="115" stroke="#2c4a2e" strokeWidth="0.8" opacity="0.3"/>
    </svg>
  )
}

export function OliveLeaf({ style = {}, className = '' }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={style} className={className} aria-hidden="true">
      <path d="M10 70 C30 50 60 20 110 10" stroke="#2c4a2e" strokeWidth="1.2" opacity="0.5" fill="none"/>
      <ellipse cx="35" cy="50" rx="14" ry="7" transform="rotate(-40 35 50)" fill="#3d6340" opacity="0.22"/>
      <ellipse cx="60" cy="32" rx="13" ry="6" transform="rotate(-45 60 32)" fill="#3d6340" opacity="0.22"/>
      <ellipse cx="85" cy="18" rx="12" ry="6" transform="rotate(-40 85 18)" fill="#3d6340" opacity="0.2"/>
      <circle cx="30" cy="53" r="3" fill="#2c4a2e" opacity="0.15"/>
      <circle cx="55" cy="35" r="3" fill="#2c4a2e" opacity="0.15"/>
    </svg>
  )
}
