"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { FaTelegram, FaInstagram, FaGlobe, FaEnvelope, FaSpinner } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaTelegram className="text-2xl" />,
      title: "تلگرام تیم",
      value: "@nexzoteam",
      link: "https://t.me/nexzoteam",
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      title: "اینستاگرام",
      value: "nexzoteam",
      link: "https://instagram.com/nexzoteam",
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "وبسایت رسمی",
      value: "nexzo.ir",
      link: "https://nexzo.ir",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "ایمیل",
      value: "support@nexzo.ir",
      link: "mailto:support@nexzo.ir",
    },
  ]

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 neon-text">تماس با ما</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            برای سفارش پروژه یا مشاوره با ما در تماس باشید
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-cyan-400">اطلاعات تماس</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 sm:p-6 rounded-xl glow-hover transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-cyan-400">{info.icon}</div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white">{info.title}</h4>
                    <p className="text-sm sm:text-base text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-12 glass-card p-6 sm:p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">چرا NEXZO TM؟</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  تیم متخصص و با تجربه
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  کیفیت بالا و قیمت مناسب
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  پشتیبانی ۲۴ ساعته
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  تحویل به موقع پروژه‌ها
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 rounded-xl"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-cyan-400">فرم تماس</h3>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
              >
                پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
              >
                خطا در ارسال پیام. لطفاً دوباره تلاش کنید.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white text-sm sm:text-base"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  ایمیل
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white text-sm sm:text-base"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  موضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white text-sm sm:text-base"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  پیام
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black bg-opacity-50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white resize-none text-sm sm:text-base"
                  required
                  disabled={isLoading}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 glow-hover disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    در حال ارسال...
                  </>
                ) : (
                  "ارسال پیام"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-card p-6 rounded-xl">
            <p className="text-gray-400 text-sm sm:text-base">Ⓒ NEXZO TM 2025 – All Rights Reserved</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
