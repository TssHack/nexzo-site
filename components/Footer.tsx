// components/Footer.tsx
import { motion } from 'framer-motion';
import { FaTelegram, FaInstagram, FaGlobe } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 border-t border-cyan-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 neon-text">NEXZO TM</h3>
            <p className="text-gray-400 mb-4">
              تیم توسعه و طراحی حرفه‌ای وبسایت، اپلیکیشن و ربات‌های تلگرامی
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://t.me/nexzoteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegram className="text-xl" />
              </a>
              <a 
                href="https://instagram.com/nexzoteam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a 
                href="https://nexzo.ir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Website"
              >
                <FaGlobe className="text-xl" />
              </a>
              <a 
                href="mailto:support@nexzo.ir" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                aria-label="Email"
              >
                <MdEmail className="text-xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 neon-purple">لینک‌های سریع</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">درباره ما</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">خدمات</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-cyan-400 transition-colors">تیم</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">نمونه کارها</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">تماس با ما</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 neon-pink">خدمات</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">توسعه وبسایت</li>
              <li className="text-gray-400">توسعه اپلیکیشن</li>
              <li className="text-gray-400">ربات‌های تلگرامی</li>
              <li className="text-gray-400">طراحی گرافیک</li>
              <li className="text-gray-400">موشن گرافیک</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4 neon-text">تماس با ما</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MdEmail className="text-cyan-400 mt-1 ml-2" />
                <a href="mailto:support@nexzo.ir" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  support@nexzo.ir
                </a>
              </li>
              <li className="flex items-start">
                <FaTelegram className="text-cyan-400 mt-1 ml-2" />
                <a href="https://t.me/nexzoteam" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  @nexzoteam
                </a>
              </li>
              <li className="flex items-start">
                <FaGlobe className="text-cyan-400 mt-1 ml-2" />
                <a href="https://nexzo.ir" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  nexzo.ir
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} NEXZO TM. تمامی حقوق محفوظ است.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
