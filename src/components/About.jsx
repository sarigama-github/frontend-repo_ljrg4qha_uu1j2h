import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">We craft interfaces that feel alive</h2>
            <p className="mt-3 text-white/70">Nexuno blends design, engineering, and motion to produce websites that both convert and delight. We obsess over performance and polish so your brand stands out.</p>
            <div className="mt-6 flex gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/15 px-3 py-1">React</span>
              <span className="rounded-full border border-white/15 px-3 py-1">Next.js</span>
              <span className="rounded-full border border-white/15 px-3 py-1">FastAPI</span>
              <span className="rounded-full border border-white/15 px-3 py-1">Framer Motion</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative"
          >
            <div className="relative h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-blue-600/10">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="border border-white/5" />
                ))}
              </div>
              <div className="absolute inset-0" style={{
                background:
                  'radial-gradient(400px circle at 30% 30%, rgba(56,189,248,0.25), rgba(37,99,235,0.18) 30%, rgba(15,23,42,0) 60%)'
              }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
