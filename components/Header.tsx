"use client"

// components/Header.tsx
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaCogs, FaUsers, FaFolderOpen, FaEnvelope } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { title: "خانه", href: "/", icon: <FaHome /> },
    { title: "درباره ما", href: "#about", icon: <FaInfoCircle /> },
    { title: "خدمات", href: "#services", icon: <FaCogs /> },
    { title: "تیم", href: "#team", icon: <FaUsers /> },
    { title: "نمونه کارها", href: "#portfolio", icon: <FaFolderOpen /> },
    { title: "تماس", href: "#contact", icon: <FaEnvelope /> },
  ]

  return (
    <header className="fixed top-0 w-full sticky-header z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-bold hover:scale-105 transition-transform duration-300 relative text-white"
        >
          {/* متن اصلی با گرادیان */}
          <motion.span
            className="relative z-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            NEXZO TM
          </motion.span>
          {/* سایه گرادیانی محو در پس‌زمینه */}
          <span className="absolute inset-0 blur-lg opacity-30 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent -z-10">
            NEXZO TM
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 space-x-reverse">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="flex items-center gap-2 text-white hover:text-cyan-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 glow-hover relative group"
              >
                <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <span className="relative">
                  {item.title}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-xl p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <FaTimes className="text-cyan-400" /> : <FaBars className="text-cyan-400" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-card border-t border-cyan-500 border-opacity-30"
        >
          <nav className="flex flex-col py-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-3 px-6 py-3 text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:text-cyan-400 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="relative">
                    {item.title}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}

export default Header
