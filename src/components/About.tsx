import { Target, Heart, Users, Zap } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Ubuntu',
      description: 'We serve communities, not just companies',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Our currency is trust',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Good is never enough; we aim higher',
    },
    {
      icon: Zap,
      title: 'Dynamism',
      description: 'Agile in thought, bold in execution',
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-gray to-cyber-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We <span className="text-gradient-red">Are</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Vision & Mission */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyber-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="text-cyber-red" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                  <p className="text-text-secondary leading-relaxed">
                    To be Africa's most trusted cybersecurity and transformation partner, 
                    enabling communities and businesses to innovate securely and thrive digitally.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyber-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="text-cyber-red" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                  <p className="text-text-secondary leading-relaxed">
                    To deliver world-class security, governance, and transformation services, 
                    tailored to the African business environment, while upholding integrity, 
                    excellence, teamwork, and Ubuntu.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Company Info */}
          <div className="glass-card p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Bridging Communities & Technology
            </h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              CyberGenius is a Cybersecurity and Digital Transformation Advisory firm 
              headquartered in Zimbabwe, with operations across Africa. We exist to bridge 
              communities and technology — ensuring organizations achieve security, resilience, 
              and growth in a digital-first era.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Our work is built around four service pillars that ensure our clients are not 
              only compliant and protected, but also future-ready and competitive in an 
              increasingly digital world.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm">
                ISO 27001 Certified
              </span>
              <span className="px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm">
                NIST Framework
              </span>
              <span className="px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm">
                GDPR Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="glass-card p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-cyber-red/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyber-red/30 transition-colors duration-300">
                    <Icon className="text-cyber-red" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-text-muted text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About