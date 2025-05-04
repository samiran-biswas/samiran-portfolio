import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full bg-light/80 dark:bg-dark/80 backdrop-blur-md z-40 shadow-sm transition-all ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
            onClick={closeMobileMenu}
          >
            Samiran Biswas
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium text-sm lg:text-base"
                activeClass="text-primary dark:text-primary"
                spy={true}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/samiran-biswas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/samiran-biswas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
           
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
          
            <button
              onClick={toggleMobileMenu}
              className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors cursor-pointer font-medium py-2 px-3 rounded-lg"
                  activeClass="bg-primary/10 text-primary dark:text-primary"
                  spy={true}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/samiran-biswas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors p-2"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/samiran-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="mailto:samiranbiswas124@gmail.com"
                  className="text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors p-2"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar