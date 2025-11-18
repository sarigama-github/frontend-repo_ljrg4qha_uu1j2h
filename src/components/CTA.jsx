import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-blue-600/10 p-8 md:p-12"
        >
          <div className="md:flex items-center justify-between gap-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">Ready to build something powerful?</h3>
              <p className="mt-2 text-cyan-200/80">Tell us about your goals — we’ll send a tailored plan and timeline within 24 hours.</p>
            </div>
            <form className="mt-6 md:mt-0 grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" placeholder="Work email" className="h-11 rounded-xl bg-white text-slate-900 px-4 outline-none"/>
              <button className="h-11 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-5 text-slate-900 font-medium shadow-lg shadow-sky-500/20">Get proposal</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
