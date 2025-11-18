import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Cyber Leadership', href: '#services' },
      { name: 'Security Testing', href: '#services' },
      { name: 'Resilience & Response', href: '#services' },
      { name: 'Digital Transformation', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Values', href: '#about' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'ISO 27001', href: '#' },
      { name: 'NIST Framework', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
      { name: 'Best Practices', href: '#' },
    ],
  }

  return (
    <footer className="relative overflow-hidden bg-cyber-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-cyber-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CG</span>
              </div>
              <span className="text-white font-bold text-xl">CyberGenius</span>
            </div>
            <p className="text-text-muted mb-6 leading-relaxed">
              Securing Africa's digital future through world-class cybersecurity and transformation services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyber-red/20 border border-white/10 hover:border-cyber-red/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="text-text-secondary hover:text-cyber-red" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyber-red/20 border border-white/10 hover:border-cyber-red/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="text-text-secondary hover:text-cyber-red" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-cyber-red/20 border border-white/10 hover:border-cyber-red/30 rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="text-text-secondary hover:text-cyber-red" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-cyber-red transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-cyber-red transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-cyber-red flex-shrink-0 mt-1" size={18} />
                <span className="text-text-muted">Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-cyber-red flex-shrink-0 mt-1" size={18} />
                <a href="tel:+263719095296" className="text-text-muted hover:text-cyber-red transition-colors">
                  +263 719 095 296
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-cyber-red flex-shrink-0 mt-1" size={18} />
                <a href="mailto:info@cybergenius.co.zw" className="text-text-muted hover:text-cyber-red transition-colors">
                  info@cybergenius.co.zw
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              © {currentYear} CyberGenius. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-text-muted hover:text-cyber-red transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-text-muted hover:text-cyber-red transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-text-muted hover:text-cyber-red transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-red to-transparent opacity-50"></div>
    </footer>
  )
}

export default Footer