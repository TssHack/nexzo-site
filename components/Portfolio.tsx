"use client"

// components/Portfolio.tsx
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "همه" },
    { id: "bot", name: "ربات" },
    { id: "web", name: "وبسایت" },
    { id: "api", name: "API" },
    { id: "logo", name: "لوگو" },
    { id: "video", name: "ویدیو" },
    { id: "motion", name: "موشن گرافیک" },
  ]

  const projects = [
    {
      id: 1,
      title: "Nexzo Coder",
      category: "bot",
      description: "ربات تلگرامی برای کد نویسی با هوش مصنوعی",
      image: "/ai-coding-bot-telegram-interface.jpg",
      link: "https://t.me/naxelaibot",
    },
    {
      id: 2,
      title: "Nexzo Line",
      category: "bot",
      description:
        "ربات تلگرامی با هوش مصنوعی قوی و پیشرفته با قابلیت تحلیل عکس و سرچ در اینترنت و همچنین دانلود اهنگ و دانلود از اینستاگرام و تیکتاک و پینترست و اسپاتیفای و ساندکلاد",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/nexzoline.png",
      link: "https://t.me/nexzolinebot",
    },
    {
      id: 3,
      title: "FUSION",
      category: "web",
      description: "طراحی سایت با HTML, CSS, JS",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/fusion.png",
      link: "https://fusion.naxel.ir/",
    },
    {
      id: 4,
      title: "Ehsan GPT-4 API",
      category: "api",
      description: "توسعه API هوش مصنوعی",
      image: "/img/api-gpt.jpg",
      link: "https://api-ehsan-gpt4.vercel.app/",
    },
    {
      id: 5,
      title: "Instagram API",
      category: "api",
      description: "توسعه API اینستاگرام",
      image: "/img/api-insta.jpg",
      link: "https://insta-ehsan.vercel.app/",
    },
    {
      id: 6,
      title: "حسابچی",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo30.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo30.png",
    },
    {
      id: 7,
      title: "حسابچی",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
    },
    {
      id: 7,
      title: "صراط",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo15.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo15.png",
    },
    {
      id: 7,
      title: "شفق",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo14.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo14.png",
    },
    {
      id: 7,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo2.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo2.png",
    },
    {
      id: 7,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo12.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo12.png",
    },
    {
      id: 7,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo25.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo25.png",
    },
    {
      id: 8,
      title: "Video Editing",
      category: "video",
      description: "ادیت حرفه‌ای ویدیو",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
      link: "#",
    },
    {
      id: 9,
      title: "Motion Graphics",
      category: "motion",
      description: "طراحی موشن گرافیک",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">نمونه کارها</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">نمونه‌ای از پروژه‌های انجام شده توسط تیم نکزو</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-cyan-500 text-black font-bold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 bg-opacity-70 rounded-xl overflow-hidden border border-cyan-500 hover:border-cyan-300 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500 text-black text-sm font-bold rounded-full">
                    {categories.find((cat) => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 neon-text">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>مشاهده پروژه</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-all duration-300 font-bold"
          >
            سفارش پروژه
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

