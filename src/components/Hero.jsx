import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiDownload, FiChevronDown } from 'react-icons/fi'
import profile from '../assets/profile.png'
import Particles from './Particles'
import cvPdf from '../assets/Samiran-Biswas-CV-U.pdf' // Import the PDF file directly

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section
      id="hero"
      ref={ref}
      className="section flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      <Particles />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light/30 to-light dark:via-dark/30 dark:to-dark z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl mb-3 md:mb-4 text-primary font-medium"
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block"
              >
                Samiran
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-primary inline-block"
              >
                Biswas
              </motion.span>
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-secondary dark:text-primary"
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0"
            >
              I build exceptional digital experiences with modern technologies like
              React.js, Node.js, and MongoDB. Currently working on innovative
              solutions at Dinajpur Nidhi Limited.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300 text-center text-sm sm:text-base"
              >
                Contact Me
              </a>
              <a
                href={cvPdf}
                download="Samiran-Biswas-Resume.pdf"
                className="px-4 sm:px-6 py-2 sm:py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Download CV <FiDownload />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl group">
              <img
                src={profile}
                alt="Samiran Biswas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full border-8 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary z-20"
      >
        <span className="mb-1 text-sm sm:text-base">Scroll Down</span>
        <FiChevronDown className="animate-bounce" size={20} />
      </motion.a>
    </section>
  )
}

export default Hero