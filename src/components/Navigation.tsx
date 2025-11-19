import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-12 py-10">
        <div className="flex items-start justify-between">
          {/* Logo & Branding - Top Left */}
          <div className="space-y-2">
            {/* Leaf icons above logo */}
            <div className="flex items-center gap-1.5 ml-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-cyber-red-neon">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89C8 14 10 6 17 8z" fill="currentColor"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-cyber-red-neon">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89C8 14 10 6 17 8z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Logo Text */}
            <h1 className="text-2xl font-semibold uppercase tracking-wide leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              <span className="text-white">CYBER</span>
              <span className="text-cyber-red-neon">GENIUS</span>
            </h1>
            
            {/* Leaf icons above tagline */}
            <div className="flex items-center gap-1.5 ml-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-cyber-red-neon">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89C8 14 10 6 17 8z" fill="currentColor"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-cyber-red-neon">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89C8 14 10 6 17 8z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Tagline */}
            <p className="text-xs uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300, letterSpacing: '0.15em' }}>
              <span className="text-white/70">YOU </span>
              <span className="text-cyber-red-neon">CAN</span>
              <span className="text-white/70"> SECURE YOUR FUTURE</span>
            </p>
          </div>

          {/* Navigation Menu - Top Right */}
          <div className="hidden lg:flex items-center gap-10 pt-2">
            <a 
              href="#home" 
              className="text-white text-sm uppercase tracking-wider transition-colors hover:text-cyber-red-neon"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-white/60 text-sm uppercase tracking-wider transition-colors hover:text-white"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-white/60 text-sm uppercase tracking-wider transition-colors hover:text-white"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
            >
              SERVICES
            </a>
            <a 
              href="#testimonials" 
              className="text-white/60 text-sm uppercase tracking-wider transition-colors hover:text-white"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
            >
              TESTIMONIALS
            </a>
            <a 
              href="#contact" 
              className="text-white/60 text-sm uppercase tracking-wider transition-colors hover:text-white"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, letterSpacing: '0.1em' }}
            >
              CONTACT
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-6 bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="space-y-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="block text-white text-sm font-semibold uppercase tracking-widest">
                HOME
              </a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-white/60 text-sm font-medium uppercase tracking-widest">
                ABOUT
              </a>
              <a href="#services" onClick={() => setIsOpen(false)} className="block text-white/60 text-sm font-medium uppercase tracking-widest">
                SERVICES
              </a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="block text-white/60 text-sm font-medium uppercase tracking-widest">
                TESTIMONIALS
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-white/60 text-sm font-medium uppercase tracking-widest">
                CONTACT
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation