import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Global game-y ambience: cursor spotlight, scanlines and drifting particles
export default function GameFX() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mx', `${x}px`)
        spotlightRef.current.style.setProperty('--my', `${y}px`)
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const particles = Array.from({ length: 18 })

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen">
      {/* Cursor spotlight with electric blue glow */}
      <div
        ref={spotlightRef}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(56,189,248,0.25), rgba(59,130,246,0.12) 25%, rgba(15,23,42,0) 55%)',
          transition: 'background-position 120ms linear',
        }}
      />

      {/* Subtle scanlines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient( to bottom, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 2px, transparent 4px )',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const delay = (i % 6) * 0.6
          const size = 2 + (i % 4)
          const left = `${(i * 53) % 100}%`
          const duration = 14 + (i % 5) * 2
          return (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '-10%', opacity: [0, 1, 0.8, 0] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration, delay }}
              className="absolute rounded-full bg-cyan-300/60 shadow-[0_0_12px_2px_rgba(34,211,238,0.45)]"
              style={{ left, width: size, height: size }}
            />
          )
        })}
      </div>
    </div>
  )
}
