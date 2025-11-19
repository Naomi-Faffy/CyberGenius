import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App