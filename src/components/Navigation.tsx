import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 sm:p-8 lg:p-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation Container */}
        <div className="bg-plant-green-dark/90 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-plant-green-dark">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href="#home"
                className="px-6 py-2.5 bg-white text-plant-green-dark rounded-full font-medium transition-all duration-300 hover:bg-plant-cream"
              >
                Home
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Contact
              </a>
              <a
                href="#blog"
                className="px-6 py-2.5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Blog
              </a>
            </div>
          </div>

          {/* Right: Search + Shop + Login */}
          <div className="hidden md:flex items-center gap-2">
            <button className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300">
              <Search size={22} />
            </button>
            <a
              href="#shop"
              className="px-6 py-2.5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Shop
            </a>
            <a
              href="#login"
              className="px-6 py-2.5 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              Log in
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
          <div className="md:hidden mt-4 bg-plant-green-dark/90 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
            <div className="space-y-3">
              <a
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 bg-white text-plant-green-dark rounded-full font-medium text-center"
              >
                Home
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Contact
              </a>
              <a
                href="#blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
              >
                Blog
              </a>
              <div className="pt-3 border-t border-white/20 space-y-3">
                <a
                  href="#shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Shop
                </a>
                <a
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 text-center"
                >
                  Log in
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