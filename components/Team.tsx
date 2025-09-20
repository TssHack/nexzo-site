"use client"

// components/Team.tsx
import { motion } from "framer-motion"
import Image from "next/image"
import { DiPhp, DiNodejs, DiReact, DiPython } from "react-icons/di"
import {
  SiFlutter,
  SiDart,
  SiGo,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiTelegram,
} from "react-icons/si"
import { FaGraduationCap, FaGlobe, FaAward, FaCode } from "react-icons/fa"

const Team = () => {
  const teamMembers = [
    {
      name: "احسان فضلی",
      role: "توسعه‌دهنده فرانت‌اند و بک‌اند",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/ehsan.png",
      telegram: "@Devehsan",
      website: "https://ehsanjs.ir",
      education: "دانشجوی مهندسی کامپیوتر",
      experience: "+6 سال تجربه",
      projects: "+50 پروژه",
      skills: [
        { name: "PHP", icon: <DiPhp className="text-2xl" />, level: 90 },
        { name: "Node.js", icon: <DiNodejs className="text-2xl" />, level: 85 },
        { name: "React.js", icon: <DiReact className="text-2xl" />, level: 88 },
        { name: "Flutter", icon: <SiFlutter className="text-2xl" />, level: 80 },
        { name: "Dart", icon: <SiDart className="text-2xl" />, level: 75 },
        { name: "Python", icon: <DiPython className="text-2xl" />, level: 82 },
        { name: "Go", icon: <SiGo className="text-2xl" />, level: 70 },
      ],
      description:
        "طراحی و توسعه وبسایت با وردپرس، برنامه‌نویس بک‌اند و فرانت‌اند، توسعه‌دهنده ربات تلگرام، توسعه اپلیکیشن موبایل و دسکتاپ",
    },
    {
      name: "علی بیگی",
      role: "طراح گرافیک و موشن گرافیک",
      image: "https://raw.githubusercontent.com/TssHack/naxel/refs/heads/main/img/ali.png",
      telegram: "@n6xel",
      website: "https://naxel.ir",
      education: "دانشجوی مهندسی کامپیوتر",
      experience: "+7 سال تجربه",
      projects: "+30 پروژه",
      skills: [
        { name: "After Effects", icon: <SiAdobeaftereffects className="text-2xl" />, level: 92 },
        { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-2xl" />, level: 88 },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-2xl" />, level: 90 },
      ],
      description: "طراحی گرافیک، طراحی لوگو، ادیت ویدیو، موشن گرافیک",
    },
  ]

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 gradient-text relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            تیم ما
            <div className="absolute inset-0 gradient-text blur-2xl opacity-20 -z-10">تیم ما</div>
          </motion.h2>
          <motion.div
            className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 sm:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            با تیم متخصص و حرفه‌ای نکزو آشنا شوید که با تجربه و خلاقیت، پروژه‌های شما را به بهترین شکل پیاده‌سازی می‌کنند
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glass-card-premium rounded-3xl overflow-hidden glow-hover deep-shadow relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 relative">
                  <div className="aspect-square relative overflow-hidden">
                    <div className="absolute inset-4 rounded-full overflow-hidden z-10">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-4 rounded-full border-2 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse"></div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-6 sm:p-8 lg:p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 neon-text-purple">{member.name}</h3>
                    <p className="text-cyan-400 mb-2 text-lg sm:text-xl font-medium">{member.role}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaAward className="text-yellow-400" />
                        {member.experience}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCode className="text-green-400" />
                        {member.projects}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">{member.description}</p>

                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold mb-6 flex items-center gap-3">
                      <span className="text-purple-400">مهارت‌ها</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {member.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className="glass-card p-4 rounded-xl hover:scale-[1.02] transition-all duration-300 group/skill"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="text-cyan-400 group-hover/skill:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </div>
                              <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                            </div>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 + 0.5 }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3">
                      <FaGraduationCap className="text-pink-400" />
                      <span className="text-pink-400">تحصیلات</span>
                    </h4>
                    <div className="glass-card p-4 rounded-xl">
                      <p className="text-gray-300 text-base sm:text-lg">{member.education}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://t.me/${member.telegram.substring(1)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 button-premium px-6 py-3 rounded-xl text-white hover:scale-105 transition-all duration-300 group/link"
                    >
                      <SiTelegram className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="text-sm sm:text-base">{member.telegram}</span>
                    </a>
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 glass-card-premium border border-cyan-400/30 px-6 py-3 rounded-xl text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 group/link"
                    >
                      <FaGlobe className="group-hover/link:rotate-12 transition-transform duration-300" />
                      <span className="text-sm sm:text-base">وبسایت</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
