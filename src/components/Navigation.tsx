import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Container */}
        <div className="glass-panel rounded-full px-6 py-4 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyber-red rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="text-white" size={20} />
            </div>
            <span className="hidden sm:block text-white font-bold text-lg">
              CYBER<span className="text-cyber-red">GENIUS</span>
            </span>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#home"
              className="px-5 py-2 bg-white/10 text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-white/20"
            >
              Home
            </a>
            <a
              href="#services"
              className="px-5 py-2 text-white/80 rounded-full font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#about"
              className="px-5 py-2 text-white/80 rounded-full font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-white/80 rounded-full font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-cyber-red hover:bg-cyber-red-bright text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-panel rounded-3xl p-6">
            <div className="space-y-3">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 bg-white/10 text-white rounded-full font-medium text-center"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Contact
              </a>
              <div className="pt-3 border-t border-white/20">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 bg-cyber-red text-white rounded-full font-semibold text-center"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation