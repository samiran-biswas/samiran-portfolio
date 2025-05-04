// src/App.jsx
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FiArrowUp } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

function App() {
 
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  useEffect(() => {
  
    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true)
      } else {
        setShowScrollToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

 

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart'
    })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/919851215184', '_blank')
  }

  return (
    <div className="relative">
      {/* WhatsApp button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-secondary text-white shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </button>
      )}

      <Navbar  />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App