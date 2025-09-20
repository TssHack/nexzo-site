"use client"

import { motion } from "framer-motion"
import { FaCode, FaMobileAlt, FaPaintBrush, FaVideo } from "react-icons/fa"

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-cyan-400" />,
      title: "توسعه وب",
      description: "طراحی و توسعه وبسایت‌های مدرن و ریسپانسیو با آخرین تکنولوژی‌ها",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      title: "اپلیکیشن موبایل",
      description: "توسعه اپلیکیشن‌های نیتیو و کراس پلتفرم برای iOS و Android",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-500" />,
      title: "طراحی گرافیک",
      description: "طراحی لوگو، هویت بصری برند و گرافیک‌های تبلیغاتی خلاقانه",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <FaVideo className="text-4xl text-cyan-400" />,
      title: "موشن گرافیک",
      description: "تولید ویدیوهای تبلیغاتی، انیمیشن‌های دوبعدی و جلوه‌های ویژه",
      color: "from-cyan-500 to-purple-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="neon-text">خدمات ما</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="glass-card h-full flex flex-col items-center text-center p-8 rounded-xl glow-hover">
                <div className={`mb-6 p-4 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
