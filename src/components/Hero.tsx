import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      
      {/* BACKGROUND - Split into two halves */}
      <div className="absolute inset-0 flex">
        {/* LEFT HALF - Blurred, dark with glassmorphism */}
        <div className="w-1/2 h-full relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?w=1920&q=80)',
              filter: 'blur(10px) brightness(0.25) saturate(0.6)'
            }}
          />
          {/* Glassmorphism overlay - translucent gradient */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25))'
            }}
          />
        </div>

        {/* RIGHT HALF - Bright, crisp, vivid */}
        <div className="w-1/2 h-full relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?w=1920&q=80)',
              filter: 'brightness(1.5) saturate(1.8) contrast(1.2)'
            }}
          />
        </div>

        {/* CENTER GLASS EDGE - vertical glow */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.2) 70%, transparent)',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.15)'
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col px-20 py-10">
        
        {/* MAIN CONTENT - Vertically centered, LEFT-ALIGNED */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-4xl">
            
            {/* Section label */}
            <p 
              className="text-white/80 mb-10"
              style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: 300,
                letterSpacing: '0.3em',
                textTransform: 'uppercase'
              }}
            >
              AMAZING SOLUTIONS
            </p>

            {/* MAIN HEADLINE - EXACT LAYOUT */}
            <div className="mb-14">
              {/* Line 1: CYBER (textured) + SECURITY (white) - SAME LINE */}
              <div className="flex items-baseline gap-8 flex-wrap">
                <h1 
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: 'clamp(120px, 20vw, 280px)',
                    fontWeight: 400,
                    lineHeight: 0.9,
                    letterSpacing: '0.02em',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?w=1920&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                    filter: 'brightness(2.5) contrast(1.8) saturate(2.2)'
                  }}
                >
                  CYBER
                </h1>
                <h1 
                  className="text-white"
                  style={{
                    fontFamily: 'Bebas Neue',
                    fontSize: 'clamp(120px, 20vw, 280px)',
                    fontWeight: 400,
                    lineHeight: 0.9,
                    letterSpacing: '0.02em'
                  }}
                >
                  SECURITY
                </h1>
              </div>

              {/* Line 2: SOLUTIONS (textured, larger) */}
              <h1 
                style={{
                  fontFamily: 'Bebas Neue',
                  fontSize: 'clamp(130px, 22vw, 300px)',
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: '0.02em',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?w=1920&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                  filter: 'brightness(2.5) contrast(1.8) saturate(2.2)'
                }}
              >
                SOLUTIONS
              </h1>
            </div>

            {/* Subtext */}
            <p 
              className="text-white/75 mb-12 max-w-xl"
              style={{
                fontFamily: 'Playfair Display',
                fontSize: '20px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.8
              }}
            >
              There is a moment in the life of any aspiring organization that it is time to secure their digital future.
            </p>

            {/* CTA */}
            <a 
              href="#services"
              className="inline-block text-white hover:text-cyber-red-neon underline underline-offset-8"
              style={{
                fontFamily: 'Montserrat',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase'
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex items-end justify-end gap-6">
          
          {/* Vertical slider */}
          <div className="flex flex-col items-center gap-5">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <button className="w-4 h-4 rotate-45 border-2 border-white/50 bg-transparent" />
            <button className="w-4 h-4 rotate-45 bg-white border-2 border-white" />
            <button className="w-4 h-4 rotate-45 border-2 border-white/50 bg-transparent" />
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button 
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              <ChevronLeft className="text-white" size={28} />
            </button>
            <button 
              className="w-16 h-16 rounded-lg flex items-center justify-center"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}
            >
              <ChevronRight className="text-white" size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT-SIDE INDICATOR */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <button className="w-4 h-4 rotate-45 border-2 border-white/50 bg-transparent" />
        <button className="w-4 h-4 rotate-45 bg-white border-2 border-white" />
        <button className="w-4 h-4 rotate-45 border-2 border-white/50 bg-transparent" />
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  )
}

export default Hero