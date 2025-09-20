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
    { id: "app", name: "اپلیکیشن"},
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
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo22.png",
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
      title: "NEXZO VPN",
      category: "app",
      description: "v2ray clinet",
      image: "https://raw.githubusercontent.com/TssHack/NEXZO-VPN/refs/heads/main/assets/images/logo.png",
      link: "https://github.com/TssHack/NEXZO-VPN/releases/tag/v1.0.0",
    },
    {
      id: 4,
      title: "کارینکس",
      category: "app",
      description: "دفتریاداشت هوشمند و زیبا",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/app_icon.png",
      link: "https://myket.ir/app/com.note.fazli",
    },
    {
      id: 5,
      title: "ماشین حساب",
      category: "app",
      description: "ماشین حساب پیشرفته با تم فانتزی",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/app_icon1.png",
      link: "https://myket.ir/app/com.calculator.fazli",
    },
    {
      id: 6,
      title: "FUSION",
      category: "web",
      description: "طراحی سایت با HTML, CSS, JS",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/fusion.png",
      link: "https://fusion.naxel.ir/",
    },
    {
      id: 7,
      title: "Accjet",
      category: "web",
      description: "طراحس سایت با Next.js",
      image: "https://accjet.com/assets/images/logo.jpg",
      link: "https://accjet.ehsanjs.ir/",
    },
    {
      id: 8,
      title: "Doctor Cam",
      category: "web",
      description: "طراحی ابزار محاصبه گر با فرمون اختصاصی دور آتش مییل سوپاپ",
      image: "https://vercel.com/api/v0/deployments/dpl_2uYXmCMfg9EU2Xw3dV94ARw6T38i/favicon?project=doctor-cam-v3&readyState=READY&teamId=team_qlKJpfMxf5DYmiCnrEDgkef1",
      link: "https://doctorcam.ehsanjs.ir/",
    },
    {
      id: 9,
      title: "Qr Miker",
      category: "web",
      description: "طراحی ابزار ساخت کیو آر کد پیشرفته با فریم ری اکت",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png",
      link: "https://qr.ehsanjs.ir/",
    },
    {
      id: 10,
      title: "GPT-4 API",
      category: "api",
      description: "توسعه API هوش مصنوعی",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2RI90rWARpM4Lwq2we8XO83pIoqhZRKYtA&s",
      link: "https://api-ehsan-gpt4.vercel.app/",
    },
    {
      id: 11,
      title: "Instagram API",
      category: "api",
      description: "توسعه API اینستاگرام",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5giGtcSkaJJj7GCB2lqSqPFm00SSwsPhWK4hObwVpKpteqyHXUxs6sCwKdYKZm-gyFs&usqp=CAU",
      link: "https://insta-ehsan.vercel.app/",
    },
     {
      id: 12,
      title: "LLaMA Models Chat API",
      category: "api",
      description: "API چت با هوش مصنوعی قدرتمند LLaMA",
      image: "https://uploads-ssl.webflow.com/6473d8d02a3cf26273f2787d/64d091329aca4e12ad195d09_fLbbhY4c1UqaWVKx8GMa9nazBAjK4QDdSQJoG92gNnAA5kE5o0D-i1uOUNx1sKaRQnBf6AfEtGbsMehf_Y2NSi9cUhw3Rf4iXqTxfdb2l8rRm6Ej751nIKsZBWsOPRFHUC4eroCIvm9wV4bm9TCaVCY.png",
      link: "https://lama-ehsan.vercel.app/",
    },
     {
      id: 13,
      title: "SoundCloud API",
      category: "api",
      description: "API دانلود از ساندکلاد",
      image: "data:image/png;base64,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",
      link: "https://nexzo.ehsanjs.ir/soundcloud.php",
    },
     {
      id: 14,
      title: "Spotify API",
      category: "api",
      description: "API دانلود از اسپاتیفای",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXNNsJI9GdI57N2hShwPvUAY1xP258kcmbgTH661I1PET3DoS2jRckOkmiIPQHHgThpY&usqp=CAU",
      link: "http://nexzo.ehsanjs.ir/spotify.php",
    },
     {
      id: 15,
      title: "Pinterest API",
      category: "api",
      description: "API دانلود از پینترست",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa64gtEVaX3KYre8pOG15geSJQINU8MKQejA&s",
      link: "https://nexzo.ehsanjs.ir/pinterest.php",
    },
     {
      id: 16,
      title: "Tiktok API",
      category: "api",
      description: "API دانلود از تیکتاک",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5OPfyEUeUvYSBuqCrpe-1F4bqW7QVh2Png&s",
      link: "https://nexzo.ehsanjs.ir/Tiktok.php",
    },
    {
      id: 17,
      title: "حسابچی",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo30.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo30.png",
    },
    {
      id: 18,
      title: "حسابچی",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
    },
    {
      id: 19,
      title: "صراط",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo15.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo15.png",
    },
    {
      id: 20,
      title: "شفق",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo14.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo14.png",
    },
    {
      id: 21,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo2.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo2.png",
    },
    {
      id: 22,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo12.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo12.png",
    },
    {
      id: 23,
      title: "Logo Design",
      category: "logo",
      description: "طراحی لوگو حرفه‌ای",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo25.png",
      link: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo25.png",
    },
    {
      id: 24,
      title: "Video Editing",
      category: "video",
      description: "ادیت حرفه‌ای ویدیو",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/logo31.png",
      link: "#",
    },
    {
      id: 25,
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

