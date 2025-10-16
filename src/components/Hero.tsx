import { motion } from 'framer-motion'
import { ChevronDown, User, Mail } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-navy-800 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-navy-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-navy-700 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 border-4 border-white shadow-2xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/H8bzy4G/Whats-App-Image-2025-10-14-at-21-42-09-7d9cd9c5.jpg"
                alt="Faizah Azzahra"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 border-2 border-navy-300 rounded-full opacity-30"
            ></motion.div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ 
            rotateY: 2,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-800 mb-4 font-poppins"
          style={{ transformStyle: 'preserve-3d' }}
        >
          Faizah Azzahra
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-600 mb-8 font-lato max-w-2xl mx-auto"
        >
          Personal Portfolio
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Selamat datang di portofolio pribadi saya. Temukan lebih banyak tentang saya, 
          karya-karya, dan perjalanan hidup yang telah membentuk saya menjadi diri saya saat ini.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#about"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <User size={20} />
            Tentang Saya
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              rotateY: -5,
              boxShadow: "0 10px 25px rgba(30, 58, 138, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Mail size={20} />
            Hubungi Saya
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-navy-600 hover:text-navy-800 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
