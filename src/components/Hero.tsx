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
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-cyber-red-dark/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Main Glass Container */}
      <div className="relative z-10 w-full max-w-[1400px] h-[85vh] min-h-[700px]">
        {/* Outer Glass Frame */}
        <div className="relative w-full h-full rounded-[48px] border-[3px] border-white/30 overflow-hidden glass-panel-strong shadow-2xl">
          
          {/* Main Content Grid */}
          <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            
            {/* Left Column: Large Typography */}
            <div className="flex flex-col justify-center">
              <h1 
                className="text-white font-black leading-[0.85] mb-4 text-glow-white"
                style={{ fontSize: 'clamp(70px, 14vw, 180px)' }}
              >
                cyber
              </h1>
              <h1 
                className="text-white font-black leading-[0.85] text-glow-white"
                style={{ fontSize: 'clamp(70px, 14vw, 180px)' }}
              >
                security
              </h1>
            </div>

            {/* Right Column: Content Card */}
            <div className="flex flex-col justify-center items-end">
              <div className="glass-card rounded-[32px] p-8 lg:p-10 max-w-lg w-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-red rounded-full"></div>
                    <span className="text-cyber-red text-xs font-bold tracking-wider uppercase">Premium Protection</span>
                  </div>
                  
                  <h3 className="text-white font-bold text-2xl lg:text-3xl leading-tight">
                    Advanced Cybersecurity Solutions
                  </h3>
                  
                  <p className="text-white/70 text-sm lg:text-base leading-relaxed">
                    Protect your digital assets with cutting-edge security measures. Our comprehensive 
                    solutions ensure your business stays safe from evolving cyber threats in today's 
                    connected world.
                  </p>

                  <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-300 border border-white/20">
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
                  <Shield className="text-cyber-red flex-shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm whitespace-nowrap">24/7 Protection</div>
                    <div className="text-white/50 text-xs">Always Secure</div>
                  </div>
                </div>
                
                <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                  <Lock className="text-cyber-red flex-shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm whitespace-nowrap">Encrypted</div>
                    <div className="text-white/50 text-xs">End-to-End</div>
                  </div>
                </div>

                <div className="glass-card rounded-2xl px-5 py-4 flex items-center gap-3">
                  <Globe className="text-cyber-red flex-shrink-0" size={24} />
                  <div>
                    <div className="text-white font-bold text-sm whitespace-nowrap">Global Network</div>
                    <div className="text-white/50 text-xs">Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Right: Navigation Controls */}
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