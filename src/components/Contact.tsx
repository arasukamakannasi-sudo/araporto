import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Heart } from 'lucide-react'

const Contact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "faizahazzahra506@gmail.com",
      link: "mailto:faizahazzahra506@gmail.com"
    },
    {
      icon: Phone,
      title: "Telepon",
      value: "+6287896693574",
      link: "tel:+6287896693574"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Liwa, Lampung Barat",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/faizah-azzahra",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/faizah.azzahra",
      color: "hover:text-pink-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:faizahazzahra506@gmail.com",
      color: "hover:text-navy-600"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy-800 mb-6 font-poppins">
            Mari Berbicara
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Terima kasih telah mengunjungi portofolio pribadi saya. Saya senang mendengar 
            dari Anda dan berbagi cerita. Silakan kirim pesan atau hubungi saya melalui 
            kontak yang tersedia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-navy-800 mb-6 font-poppins">
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="masukkan@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    boxShadow: "0 10px 25px rgba(30, 58, 138, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-navy-800 text-white py-3 px-6 rounded-lg font-medium hover:bg-navy-700 transition-all duration-300 flex items-center justify-center gap-2"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Send size={20} />
                  Kirim Pesan
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-navy-800 font-poppins">
                Informasi Kontak
              </h3>
              
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 20, rotateX: -10 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    rotateY: 3,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                  }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-navy-100 rounded-lg group-hover:bg-navy-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-navy-800" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-navy-800 mb-4 font-poppins">
                Media Sosial
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full text-gray-600 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Thank You Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-navy-50 to-gray-50 p-6 rounded-lg border border-navy-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-navy-600" />
                <h4 className="font-semibold text-navy-800">Terima Kasih</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Terima kasih telah mengunjungi portofolio pribadi saya. Saya sangat menghargai 
                waktu Anda dan berharap dapat terhubung dengan Anda segera.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
