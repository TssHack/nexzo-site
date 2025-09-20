"use client"

import { motion } from "framer-motion"
// import GlassCard from './ui/glass-card';

const About = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="neon-text">درباره ما</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">داستان ما</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                تیم NEXZO TM در سال 2023 با هدف ارائه راهکارهای دیجیتال خلاقانه و نوآورانه تأسیس شد. ما متخصص در طراحی و
                توسعه وبسایت‌های حرفه‌ای، اپلیکیشن‌های موبایل و دسکتاپ، طراحی گرافیک و موشن گرافیک هستیم.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                با ترکیب دانش فنی عمیق و خلاقیت هنری، پروژه‌هایی را اجرا می‌کنیم که نه تنها نیازهای مشتریان را برآورده
                می‌کنند، بلکه تجربه‌ای به یاد ماندنی برای کاربران ایجاد می‌کنند.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                مأموریت ما تبدیل ایده‌های شما به واقعیت‌های دیجیتال شگفت‌انگیز است.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 text-center rounded-xl glow-hover">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2+</div>
              <div className="text-gray-300">سال تجربه</div>
            </div>
            <div className="glass-card p-6 text-center rounded-xl glow-hover">
              <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
              <div className="text-gray-300">پروژه موفق</div>
            </div>
            <div className="glass-card p-6 text-center rounded-xl glow-hover">
              <div className="text-4xl font-bold text-pink-500 mb-2">2</div>
              <div className="text-gray-300">عضو تیم</div>
            </div>
            <div className="glass-card p-6 text-center rounded-xl glow-hover">
              <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
              <div className="text-gray-300">رضایت مشتری</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
