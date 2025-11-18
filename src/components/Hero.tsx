import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-12"
      style={{ background: 'linear-gradient(135deg, #5a9b8a 0%, #4a8b7f 100%)' }}
    >
      {/* Main Content Card */}
      <div className="relative w-full max-w-[1400px] h-[85vh] rounded-[48px] border-4 border-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613392913142-d90cd00f1831?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMGxlYXZlcyUyMG1vbnN0ZXJhJTIwYmFuYW5hJTIwbGVhdmVzJTIwZ3JlZW4lMjBmb2xpYWdlfGVufDB8MHx8Z3JlZW58MTc2MzQ4NTk3Mnww&ixlib=rb-4.1.0&q=85"
            alt="lush tropical green leaves by Christhian Gruhn on Unsplash"
            className="w-full h-full object-cover"
            style={{ 
              backgroundColor: '#264026',
              filter: 'brightness(0.7) saturate(1.2)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col p-8 lg:p-12">
          {/* Hero Text */}
          <div className="flex-1 flex flex-col justify-center max-w-4xl">
            <p className="text-white/90 text-xl mb-6 font-light tracking-wide">
              Petal power
            </p>
            
            <h1 
              className="text-white font-black leading-[0.85] mb-8"
              style={{ fontSize: 'clamp(80px, 15vw, 220px)' }}
            >
              growth
            </h1>

            <p className="text-white/90 text-lg max-w-2xl leading-relaxed">
              We're your online houseplant destination. We offer a wide range of houseplants and 
              accessories shipped directly from our (green)house to yours!
            </p>
          </div>

          {/* Bottom Section */}
          <div className="flex items-end justify-between gap-8">
            {/* Stats Card with Plants */}
            <div className="flex items-center gap-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 max-w-sm">
              <div className="flex-1">
                <h3 className="text-white font-bold text-4xl mb-2 whitespace-nowrap">
                  100+Plants
                </h3>
                <p className="text-white/80 text-sm leading-snug">
                  We want our visitors to be inspired to get their hands dirty
                </p>
              </div>
              
              {/* Plant Thumbnails */}
              <div className="flex flex-col gap-3">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/40">
                  <img
                    src="https://images.unsplash.com/photo-1637424592613-0a99407a4925?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwb3R0ZWQlMjBwbGFudCUyMGhvdXNlcGxhbnQlMjBpbmRvb3IlMjBwbGFudHxlbnwwfDJ8fGdyZWVufDE3NjM0ODU5NzJ8MA&ixlib=rb-4.1.0&q=85"
                    alt="potted plant by Daniel Salcius on Unsplash"
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: '#405926' }}
                  />
                </div>
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/40">
                  <img
                    src="https://images.unsplash.com/photo-1661001782555-aa6526c3744b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBwb3R0ZWQlMjBwbGFudCUyMHNtYWxsJTIwcGxhbnR8ZW58MHwyfHxncmVlbnwxNzYzNDg1OTcyfDA&ixlib=rb-4.1.0&q=85"
                    alt="succulent plant by Kai Vu on Unsplash"
                    className="w-full h-full object-cover"
                    style={{ backgroundColor: '#407326' }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side: CTA + Scroll */}
            <div className="flex flex-col items-end gap-6">
              {/* CTA Button */}
              <a
                href="#shop"
                className="inline-block px-10 py-4 bg-white text-plant-green-dark rounded-full font-semibold text-lg shadow-2xl hover:bg-plant-cream transition-all duration-300 hover:scale-105"
              >
                Shop tropical plants
              </a>

              {/* Scroll Indicator */}
              <a href="#services" className="block">
                <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300">
                  <ChevronDown className="text-white" size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero