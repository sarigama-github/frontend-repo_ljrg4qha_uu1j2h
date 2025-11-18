import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Showcase from './components/Showcase'
import Process from './components/Process'
import About from './components/About'
import CTA from './components/CTA'
import GameFX from './components/GameFX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      {/* global blue game-y ambience */}
      <GameFX />
      <main>
        <Hero />
        <Logos />
        <Showcase />
        <Process />
        <About />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 mt-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-cyan-200/70 text-sm">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-sky-400 to-blue-500" />
            <span>Nexuno</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-cyan-100">Work</a>
            <a href="#process" className="hover:text-cyan-100">Process</a>
            <a href="#about" className="hover:text-cyan-100">About</a>
          </div>
          <div>© {new Date().getFullYear()} Nexuno Studio</div>
        </div>
      </footer>
    </div>
  )
}

export default App
