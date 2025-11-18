import { Menu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-sky-400/20 bg-slate-900/60 backdrop-blur-md px-4 py-3">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 shadow-[0_0_16px_4px_rgba(56,189,248,0.35)]" />
            <span className="font-semibold tracking-tight text-white">Nexuno</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm text-cyan-200/80">
            <a href="#work" className="hover:text-cyan-100 transition-colors">Work</a>
            <a href="#process" className="hover:text-cyan-100 transition-colors">Process</a>
            <a href="#about" className="hover:text-cyan-100 transition-colors">About</a>
          </div>

          <motion.a
            href="#cta"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 px-4 py-2 text-sm font-medium text-slate-900 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition"
          >
            Book a meeting
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <button className="md:hidden size-9 grid place-items-center rounded-lg border border-sky-400/20 text-cyan-200/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
