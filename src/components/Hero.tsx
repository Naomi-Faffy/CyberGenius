import { ChevronRight, Shield, Lock, Globe } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxuZXR3b3JrJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBjeWJlcnNlY3VyaXR5JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHwwfHxibGFja3wxNzYzNTQ1MDUwfDA&ixlib=rb-4.1.0&q=85"
          alt="Dark technology background with network connections, digital security, circuit patterns, futuristic cyber theme by GuerrillaBuzz on Unsplash"
          className="w-full h-full object-cover"
          style={{ 
            backgroundColor: '#f3d9d9',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-cyber-red-dark/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Main Glass Container - Matching reference design */}
      <div className="relative z-10 w-full max-w-[1400px] h-[85vh] min-h-[700px]">
        {/* Outer Glass Frame with white border like reference */}
        <div className="relative w-full h-full rounded-[48px] border-[3px] border-white/30 overflow-hidden glass-panel-strong shadow-2xl">
          
          {/* Top Navigation inside glass */}
          <div className="absolute top-0 left-0 right-0 p-8 z-20">
            <div className="flex items-center justify-between">
              {/* Left: Brand Name */}
              <div className="text-white text-sm font-medium tracking-widest uppercase">
                CYBERGENIUS
              </div>

              {/* Social Icons (like reference) */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              {/* Right: Navigation Links */}
              <div className="hidden lg:flex items-center gap-8">
                <a href="#home" className="text-white text-sm font-medium hover:text-cyber-red transition-colors">HOME</a>
                <a href="#about" className="text-white/70 text-sm font-medium hover:text-white transition-colors">ABOUT US</a>
                <a href="#contact" className="text-white/70 text-sm font-medium hover:text-white transition-colors">CONTACTS</a>
                <a href="#faq" className="text-white/70 text-sm font-medium hover:text-white transition-colors">FAQ</a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative h-full flex flex-col lg:flex-row p-8 lg:p-12 pt-28">
            
            {/* Left Side: Large Typography (like "african forest") */}
            <div className="flex-1 flex flex-col justify-center">
              <h1 
                className="text-white font-black leading-[0.85] mb-4 text-glow-white"
                style={{ fontSize: 'clamp(60px, 12vw, 160px)' }}
              >
                cyber
              </h1>
              <h1 
                className="text-white font-black leading-[0.85] text-glow-white"
                style={{ fontSize: 'clamp(60px, 12vw, 160px)' }}
              >
                security
              </h1>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 flex flex-col justify-between pt-8 lg:pt-0">
              {/* Empty space for balance */}
              <div></div>

              {/* Info Card (like the tour card in reference) */}
              <div className="glass-card rounded-[32px] p-8 max-w-md ml-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-cyber-red rounded-full"></div>
                    <span className="text-cyber-red text-xs font-bold tracking-wider uppercase">Premium Protection</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-2xl leading-tight">
                    Advanced Cybersecurity Solutions
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed">
                    Protect your digital assets with cutting-edge security measures. Our comprehensive 
                    solutions ensure your business stays safe from evolving cyber threats in today's 
                    connected world.
                  </p>

                  <button className="mt-4 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-300 border border-white/20">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              
              {/* Left: Feature Cards */}
              <div className="flex flex-wrap gap-4">
                <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                  <Shield className="text-cyber-red" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">24/7 Protection</div>
                    <div className="text-white/50 text-xs">Always Secure</div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                  <Lock className="text-cyber-red" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">Encrypted</div>
                    <div className="text-white/50 text-xs">End-to-End</div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                  <Globe className="text-cyber-red" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm">Global Network</div>
                    <div className="text-white/50 text-xs">Worldwide Coverage</div>
                  </div>
                </div>
              </div>

              {/* Right: Navigation Controls (like reference) */}
              <div className="flex items-center gap-4">
                {/* Vertical dots */}
                <div className="flex flex-col gap-2">
                  <button className="w-2.5 h-2.5 rounded-full bg-white shadow-lg"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                  <button className="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60 transition-all"></button>
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <button className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all group">
                    <ChevronRight className="text-white rotate-180 group-hover:scale-110 transition-transform" size={20} />
                  </button>
                  <button className="w-14 h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all group">
                    <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero