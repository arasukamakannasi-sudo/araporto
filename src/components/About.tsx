import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Heart, Lightbulb, Coffee } from 'lucide-react'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const personalInfo = [
    {
      icon: BookOpen,
      title: "Hobi Membaca",
      description: "Saya sangat menikmati membaca novel fiksi dan non-fiksi. Buku adalah jendela dunia yang membuka wawasan dan imajinasi."
    },
    {
      icon: Heart,
      title: "Kepribadian",
      description: "Saya adalah pribadi yang tenang, reflektif, dan selalu berusaha untuk terus belajar dan berkembang."
    },
    {
      icon: Lightbulb,
      title: "Filosofi Hidup",
      description: "Percaya bahwa setiap hari adalah kesempatan untuk menjadi versi terbaik dari diri sendiri."
    },
    {
      icon: Coffee,
      title: "Keseharian",
      description: "Menikmati momen-momen sederhana dalam hidup, seperti secangkir kopi di pagi hari atau membaca buku di sore hari."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -20 }}
              animate={isInView ? { scale: 1, opacity: 1, rotateY: 0 } : { scale: 0.8, opacity: 0, rotateY: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img
                  src="https://i.ibb.co.com/H8bzy4G/Whats-App-Image-2025-10-14-at-21-42-09-7d9cd9c5.jpg"
                  alt="Faizah Azzahra - About"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/20 to-transparent"></div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-navy-200 rounded-full opacity-50"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-navy-300 rounded-full opacity-30"
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-navy-800 mb-6 font-poppins">
                Tentang Saya
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Halo, saya Faizah Azzahra. Saya adalah seseorang yang percaya bahwa 
                  kehidupan adalah perjalanan yang penuh dengan pembelajaran dan pertumbuhan.
                </p>
                
                <p>
                  Sebagai pribadi yang introvert namun penuh semangat, saya menemukan 
                  kedamaian dalam aktivitas yang memungkinkan saya untuk merenung dan 
                  mengembangkan diri. Membaca novel adalah salah satu passion terbesar 
                  saya, karena melalui buku, saya dapat menjelajahi dunia yang berbeda 
                  dan memperluas perspektif saya tentang kehidupan.
                </p>
                
                <p>
                  Saya percaya bahwa setiap individu memiliki cerita unik yang layak 
                  untuk didengar. Portofolio ini adalah cara saya untuk berbagi 
                  sedikit tentang diri saya, nilai-nilai yang saya pegang, dan 
                  hal-hal yang membuat saya bersemangat dalam menjalani hidup.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Personal Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {personalInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -10 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 3,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg mb-4">
                <item.icon className="w-6 h-6 text-navy-800" />
              </div>
              <h3 className="text-lg font-semibold text-navy-800 mb-3 font-poppins">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
