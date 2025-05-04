import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-dark text-light py-12"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Samiran Biswas</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Full Stack Developer specializing in building exceptional digital
          experiences with modern web technologies.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/samiran-biswas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samiran-biswas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:samiranbiswas124@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Samiran Biswas. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer