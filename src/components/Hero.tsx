import { ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background - Split Design */}
      <div className="absolute inset-0 flex">
        {/* LEFT HALF - Blurred, dark, glassmorphism */}
        <div className="w-1/2 h-full relative">
          {/* Background image - blurred */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px) brightness(0.25) saturate(0.5)'
            }}
          />
          {/* Translucent overlay with gradient - glassmorphism */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25))',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)'
            }}
          />
        </div>

        {/* RIGHT HALF - Bright, crisp, no blur */}
        <div className="w-1/2 h-full relative">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(1.5) saturate(1.8) contrast(1.2)'
            }}
          />
        </div>

        {/* CENTER VERTICAL GLASS EDGE - light reflection glow */}
        <div 
          className="absolute top-0 bottom-0 left-1/2 w-px"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.2) 70%, transparent)',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.15)',
            transform: 'translateX(-50%)'
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col px-16 xl:px-20">
        
        {/* MAIN CONTENT - Vertically centered */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-[1800px] mx-auto">
            
            {/* Left side content */}
            <div className="max-w-4xl">
              
              {/* SECTION LABEL - "AMAZING TRIPS" equivalent */}
              <p 
                className="text-white/80 mb-10"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase'
                }}
              >
                AMAZING SOLUTIONS
              </p>

              {/* MAIN HEADLINE - Split typography like "AFRI CAN FOREST" */}
              <div className="mb-14">
                {/* First line: CYBER (textured) + SECURITY (white) */}
                <div className="flex flex-wrap items-baseline gap-x-10 mb-2">
                  {/* CYBER - textured like "AFRIC" */}
                  <h1 
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(140px, 24vw, 360px)',
                      fontWeight: 400,
                      lineHeight: 0.85,
                      letterSpacing: '0.01em',
                      backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'brightness(2.5) contrast(1.8) saturate(2.2)'
                    }}
                  >
                    CYBER
                  </h1>
                </div>

                {/* Second line: SECURITY (white) + SOLUTIONS (textured) */}
                <div className="flex flex-wrap items-baseline gap-x-10">
                  {/* SECURITY - white like "CAN" */}
                  <h1 
                    className="text-white"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      fontSize: 'clamp(140px, 24vw, 360px)',
                      fontWeight: 400,
                      lineHeight: 0.85,
                      letterSpacing: '0.01em'
                    }}
                  >
                    SECURITY
                  </h1>
                </div>

                {/* Third line: SOLUTIONS (textured like "FOREST") */}
                <h1 
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(150px, 26vw, 380px)',
                    fontWeight: 400,
                    lineHeight: 0.85,
                    letterSpacing: '0.01em',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1657622185369-a5a0190f151e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjaXJjdWl0JTIwYm9hcmQlMjByZWQlMjBwYXRod2F5cyUyMHRlY2hub2xvZ3klMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwwfDF8fHJlZHwxNzYzNTQ2MjAwfDA&ixlib=rb-4.1.0&q=85)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'brightness(2.5) contrast(1.8) saturate(2.2)'
                  }}
                >
                  SOLUTIONS
                </h1>
              </div>

              {/* SUBTEXT - Elegant serif italic */}
              <p 
                className="text-white/75 mb-12 max-w-xl"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '20px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.8
                }}
              >
                There is a moment in the life of any aspiring organization that it is time to secure their digital future.
              </p>

              {/* CTA - "LEARN MORE" */}
              <a 
                href="#services"
                className="inline-block text-white hover:text-cyber-red-neon transition-colors"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  textDecoration: 'underline',
                  textUnderlineOffset: '8px'
                }}
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pb-16">
          <div className="w-full max-w-[1800px] mx-auto flex items-end justify-between">
            
            {/* INFO CARD - Bottom left with glassmorphism */}
            <div 
              className="rounded-3xl p-10 max-w-lg"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-cyber-red-neon" />
                <span 
                  className="text-cyber-red-neon"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase'
                  }}
                >
                  PREMIUM PROTECTION
                </span>
              </div>

              <h3 
                className="text-white mb-6"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '26px',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                Advanced Cybersecurity Solutions
              </h3>

              <p 
                className="text-white/70 mb-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 1.7
                }}
              >
                Bridging communities and technology across Africa. We deliver world-class cybersecurity, governance, and digital transformation services.
              </p>

              <button 
                className="px-8 py-3.5 text-white rounded-full transition-all hover:bg-white/20"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                View Details
              </button>
            </div>

            {/* NAVIGATION CONTROLS - Bottom right */}
            <div className="flex items-center gap-6">
              
              {/* Vertical slider indicator with diamonds */}
              <div className="flex flex-col items-center gap-5 relative">
                <div 
                  className="w-px h-32 absolute top-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.3) 70%, transparent)'
                  }}
                />
                <button 
                  className="w-4 h-4 rotate-45 relative z-10 transition-all hover:border-white"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)'
                  }}
                />
                <button 
                  className="w-4 h-4 rotate-45 relative z-10"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '2px solid white',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 0 16px rgba(255, 255, 255, 0.4)'
                  }}
                />
                <button 
                  className="w-4 h-4 rotate-45 relative z-10 transition-all hover:border-white"
                  style={{
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)'
                  }}
                />
              </div>

              {/* Arrow buttons - different backgrounds */}
              <div className="flex gap-3">
                {/* Left arrow - lighter background */}
                <button 
                  className="w-16 h-16 rounded-lg flex items-center justify-center transition-all hover:bg-white/25"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <ChevronLeft className="text-white" size={28} strokeWidth={1.5} />
                </button>
                {/* Right arrow - darker background */}
                <button 
                  className="w-16 h-16 rounded-lg flex items-center justify-center transition-all hover:bg-black/70"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  <ChevronRight className="text-white" size={28} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT-SIDE VERTICAL INDICATOR */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <div className="flex flex-col items-center gap-6">
          <div 
            className="w-px h-24"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.3) 70%, transparent)'
            }}
          />
          <button 
            className="w-4 h-4 rotate-45 transition-all hover:border-white"
            style={{
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)'
            }}
          />
          <button 
            className="w-4 h-4 rotate-45"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '2px solid white',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 0 16px rgba(255, 255, 255, 0.4)'
            }}
          />
          <button 
            className="w-4 h-4 rotate-45 transition-all hover:border-white"
            style={{
              background: 'transparent',
              border: '2px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.1)'
            }}
          />
          <div 
            className="w-px h-24"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0.3) 70%, transparent)'
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero