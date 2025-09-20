"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaRocket, FaFolderOpen, FaStar } from "react-icons/fa"

const Hero = () => {
  const [text, setText] = useState("")
  const fullText = "NEXZO TM | نکزو تیم"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-20 left-0 right-0 z-20 text-center">
        
        
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-pink-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/5 via-transparent to-transparent"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor:
                i % 5 === 0
                  ? "#00ffff"
                  : i % 5 === 1
                    ? "#9d00ff"
                    : i % 5 === 2
                      ? "#ff00de"
                      : i % 5 === 3
                        ? "#00ff88"
                        : "#ff6b35",
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
            }}
            animate={{
              y: [0, Math.random() * 200 - 100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.8, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute border border-cyan-400/20 rounded-lg"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="gradient-text drop-shadow-2xl">{text}</span>
          <span className="animate-pulse text-cyan-400 drop-shadow-lg">|</span>
          <div className="absolute inset-0 gradient-text blur-xl opacity-30 -z-10">{text}</div>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          تیم توسعه و طراحی حرفه‌ای وبسایت، اپلیکیشن و ربات‌های تلگرامی
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-8 mb-12 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="text-gray-300">+5 سال تجربه</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <FaFolderOpen className="text-cyan-400" />
            <span className="text-gray-300">+100 پروژه</span>
          </div>
          <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
            <FaRocket className="text-purple-400" />
            <span className="text-gray-300">24/7 پشتیبانی</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="#portfolio"
            className="group flex items-center justify-center gap-3 px-12 py-5 glass-card-premium border-2 border-cyan-400/50 text-cyan-400 rounded-2xl hover:border-cyan-400 transition-all duration-500 text-lg font-bold deep-shadow hover:scale-105"
          >
            <FaFolderOpen className="group-hover:rotate-12 transition-transform duration-300" />
            نمونه کارها
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 px-12 py-5 button-premium text-white rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-500 relative overflow-hidden"
          >
            <FaRocket className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            تماس با ما
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 cursor-pointer group"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "easeInOut" }}
        onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-colors duration-300"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
