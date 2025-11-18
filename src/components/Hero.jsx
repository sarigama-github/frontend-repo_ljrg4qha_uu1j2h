import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* blue gradient overlay that doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/10 to-slate-950" />
        {/* animated grid shimmer */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.15]" style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), rgba(15,23,42,0) 40%)',
          maskImage:
            'repeating-linear-gradient( to right, black 0, black 1px, transparent 1px, transparent 32px), repeating-linear-gradient( to bottom, black 0, black 1px, transparent 1px, transparent 32px)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-white"
          >
            Build web experiences that feel like a game
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-lg md:text-xl text-white/85"
          >
            Nexuno crafts animated, interactive sites in electric blues — playful, fast, and conversion-focused.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 text-slate-900 font-semibold text-slate-900/90">
              Start a project
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-cyan-100 font-medium backdrop-blur-sm">
              See our work
            </a>
          </motion.div>

          {/* trust logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center gap-6 text-cyan-200/80 text-sm"
          >
            <span>Trusted by teams like</span>
            <div className="flex items-center gap-4 opacity-80">
              <span className="font-semibold">Acme</span>
              <span className="font-semibold">Nimbus</span>
              <span className="font-semibold">Orbit</span>
              <span className="font-semibold">Pulse</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
