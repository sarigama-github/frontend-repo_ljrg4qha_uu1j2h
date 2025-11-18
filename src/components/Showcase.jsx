import { motion } from 'framer-motion'

const items = [
  { title: 'Before → After: SaaS Landing', tag: 'Conversion +68%', color: 'from-sky-500 to-blue-600' },
  { title: 'Ecommerce Revamp', tag: 'Revenue +41%', color: 'from-cyan-400 to-sky-600' },
  { title: 'B2B Site Refresh', tag: 'Leads +55%', color: 'from-indigo-400 to-blue-500' },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected work</h2>
            <p className="text-white/60 mt-2">Before/after transformations that drive measurable results.</p>
          </div>
          <a href="#cta" className="text-sm text-cyan-200/80 hover:text-cyan-100">Request a quote →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-md perspective-1000"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{card.title}</h3>
                  <span className="text-xs rounded-full border border-white/15 px-2 py-1 text-white/80">Case study</span>
                </div>
                <div className="mt-4 h-40 rounded-xl bg-slate-900/60 ring-1 ring-white/10 relative overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(300px circle at 70% 30%, rgba(56,189,248,0.18), rgba(30,64,175,0.2) 35%, rgba(15,23,42,0) 60%)',
                    }}
                  />
                </div>
                <div className="mt-4 text-sm text-cyan-200/90">{card.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
