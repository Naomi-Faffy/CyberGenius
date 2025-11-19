import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-8 lg:p-12">
      <div className="flex items-center justify-between">
        {/* Logo - Top Left */}
        <div>
          <h1 className="text-white text-sm font-bold uppercase tracking-wider leading-tight">
            CYBER<span className="text-cyber-red">GENIUS</span>
          </h1>
          <p className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
            You can secure your future
          </p>
        </div>

        {/* Desktop Navigation - Top Right */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#home" className="text-white text-sm font-medium uppercase tracking-wider hover:text-cyber-red transition-colors">
            Home
          </a>
          <a href="#about" className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors">
            Services
          </a>
          <a href="#testimonials" className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors">
            Contact
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
        <div className="lg:hidden mt-6 bg-black/80 backdrop-blur-md rounded-lg p-6">
          <div className="space-y-4">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm font-medium uppercase tracking-wider hover:text-cyber-red transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-white/80 text-sm font-medium uppercase tracking-wider hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation