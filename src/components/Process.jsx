import { motion } from 'framer-motion'

const steps = [
  { id: 1, title: 'Discover', desc: 'We map goals, constraints, and success metrics in a fast kickoff.' },
  { id: 2, title: 'Design', desc: 'Blueprint UX, visual direction, and micro-interactions with prototypes.' },
  { id: 3, title: 'Build', desc: 'Implement fast, scalable frontends with a robust backend.' },
  { id: 4, title: 'Launch', desc: 'Ship, test, and iterate with performance tuned for conversions.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Process</h2>
          <p className="text-white/60 mt-2">A clear path from idea to impact.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-6"
            >
              <div className="absolute -top-8 -right-8 size-24 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-600/20" />
              <div className="text-sm text-cyan-300">0{s.id}</div>
              <div className="mt-2 font-medium text-white">{s.title}</div>
              <div className="mt-1 text-white/70 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
