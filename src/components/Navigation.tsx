import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Cyber<span className="text-cyber-red">Genius</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-cyber-red transition-colors text-sm font-medium uppercase tracking-wider">
              Home
            </a>
            <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Services
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              About
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Testimonials
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cyber-black-light border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-cyber-red transition-colors text-sm font-medium uppercase tracking-wider py-2"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="block text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-white/70 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider py-2"
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