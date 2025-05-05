import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="contact" ref={ref} className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="heading"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <p className="mb-8 text-gray-600 dark:text-gray-300">
            Feel free to reach out to me for any questions or opportunities. I'll
            get back to you as soon as possible!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:samiranbiswas124@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  samiranbiswas124@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:9851215184"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  +91 9851215184
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 text-primary rounded-full">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Siliguri, India</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/samiran-biswas/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com/samiran-biswas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-dark/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          <form 
            action="https://formsubmit.co/samiranbiswas124@gmail.com" 
            method="POST"
            className="space-y-4"
          >
            {/* Add your email as hidden input to receive the submissions */}
            <input 
              type="hidden" 
              name="_next" 
              value="https://samiran.vercel.app/"  // Replace with your thank you page
            />
            <input 
              type="hidden" 
              name="_captcha" 
              value="false"  // Disable captcha
            />
            <input 
              type="text" 
              name="_honey" 
              style={{ display: 'none' }}  // Honeypot for spam
            />
            
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="_subject"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact