"use client"

import { motion } from "framer-motion"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Team from "../components/Team"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <motion.a
        href="#"
        className="fixed bottom-8 right-8 p-4 glass-card rounded-full shadow-lg z-50 glow-hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.a>
    </div>
  )
}
