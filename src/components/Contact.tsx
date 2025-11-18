import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-gray to-cyber-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full text-cyber-red-light text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-gradient-red">Connect</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Ready to secure and transform your organization? Reach out to our team
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyber-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyber-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-text-secondary">Harare, Zimbabwe</p>
                    <p className="text-text-muted text-sm mt-1">Operations across Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyber-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-cyber-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+263719095296" className="text-text-secondary hover:text-cyber-red transition-colors">
                      +263 719 095 296
                    </a>
                    <p className="text-text-muted text-sm mt-1">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyber-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-cyber-red" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:info@cybergenius.co.zw" className="text-text-secondary hover:text-cyber-red transition-colors">
                      info@cybergenius.co.zw
                    </a>
                    <p className="text-text-muted text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-text-secondary">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-white">Closed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-cyber-red-light font-semibold">Emergency Support: 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-secondary mb-2 text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cyber-red/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-secondary mb-2 text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cyber-red/50 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-text-secondary mb-2 text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cyber-red/50 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-text-secondary mb-2 text-sm font-medium">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyber-red/50 transition-colors"
                >
                  <option value="" className="bg-cyber-gray">Select a service</option>
                  <option value="leadership" className="bg-cyber-gray">Cyber Leadership & Governance</option>
                  <option value="assurance" className="bg-cyber-gray">Security Assurance & Testing</option>
                  <option value="resilience" className="bg-cyber-gray">Resilience & Response</option>
                  <option value="transformation" className="bg-cyber-gray">Digital Transformation</option>
                  <option value="other" className="bg-cyber-gray">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-text-secondary mb-2 text-sm font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-cyber-red/50 transition-colors resize-none"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyber-red hover:bg-cyber-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyber-red/50 flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact