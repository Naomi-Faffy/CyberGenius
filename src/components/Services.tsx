import { ShieldCheck, Search, RefreshCw, Rocket } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: 'Cyber Leadership & Governance',
      description: 'Executive-level cyber leadership, ISMS implementation, and compliance management.',
      features: [
        'Virtual CISO Services',
        'Data Protection Officer (DPOaaS)',
        'ISO 27001/NIST Implementation',
        'Risk & Compliance Advisory',
      ],
    },
    {
      icon: Search,
      title: 'Security Assurance & Testing',
      description: 'Comprehensive security assessments and independent audits to protect your assets.',
      features: [
        'Vulnerability Assessments & Penetration Testing',
        'IT & Compliance Audits',
        'Third-Party Risk Management',
        'System Validation & Reviews',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Resilience & Response',
      description: 'Build organizational resilience and prepare for cyber incidents with confidence.',
      features: [
        'Incident Response & Forensics',
        'Business Continuity & Disaster Recovery',
        'Awareness & Training Programs',
        'Tabletop Exercises',
      ],
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Secure modernization and innovation to future-proof your organization.',
      features: [
        'Cloud Security & DevSecOps',
        'Process Re-engineering',
        'Secure Integrations',
        'Technology Advisory',
      ],
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Four Pillars of <span className="text-gradient-red">Excellence</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Comprehensive cybersecurity and transformation services designed for African businesses
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glass-card p-8 transition-all duration-300 hover:scale-105 glass-card-hover group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-cyber-red/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyber-red/30 transition-colors duration-300">
                  <Icon className="text-cyber-red" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyber-red rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-cyber-red-light hover:text-cyber-red mt-6 font-medium group/link"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 glass-card p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Why CyberGenius?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-cyber-red text-4xl font-bold mb-2">🌍</div>
              <h4 className="text-white font-semibold mb-2">African Reach</h4>
              <p className="text-text-muted text-sm">Solutions tailored for mobile-first economies</p>
            </div>
            <div className="text-center">
              <div className="text-cyber-red text-4xl font-bold mb-2">🏆</div>
              <h4 className="text-white font-semibold mb-2">Global Standards</h4>
              <p className="text-text-muted text-sm">ISO 27001, GDPR, and NIST alignment</p>
            </div>
            <div className="text-center">
              <div className="text-cyber-red text-4xl font-bold mb-2">💼</div>
              <h4 className="text-white font-semibold mb-2">Sector Experience</h4>
              <p className="text-text-muted text-sm">Trusted across multiple industries</p>
            </div>
            <div className="text-center">
              <div className="text-cyber-red text-4xl font-bold mb-2">⚡</div>
              <h4 className="text-white font-semibold mb-2">Excellence</h4>
              <p className="text-text-muted text-sm">Technical expertise meets business clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services