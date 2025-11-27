import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Images } from "@/components/Images";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Главная", href: "#hero" },
    { name: "Технология", href: "#technology" },
    { name: "Для кого", href: "#for-who" },
    { name: "Тарифы", href: "#pricing" },
  ];

  const serviceLinks = [
    { name: "Check.me Start", href: "#personal-plans" },
    { name: "Check.me Pro", href: "#personal-plans" },
    { name: "Check.me Career", href: "#personal-plans" },
    { name: "Check.me Loy", href: "#personal-plans" },
    { name: "Check.me Premium", href: "#personal-plans" },
  ];

  const supportLinks = [
    { name: "Политика конфиденциальности", href: "/policy", isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Информация о компании */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <a href="#">
                <img
                  src={Images.Logo}
                  alt="check.me-lab"
                  style={{ width: "170px", height: "70px" }}
                />
              </a>
            </motion.div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Исследования ЛЮДЕЙ И БИЗНЕСА, которые ЭКОНОМЯТ вам деньги и
              ЗАРАБАТЫВАЮТ вам прибыль
            </p>
            <div className="flex space-x-4">
              {/* Социальные сети - заглушки */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary-600 transition-colors"
              >
                <span className="text-sm">VK</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary-600 transition-colors"
              >
                <span className="text-sm">TG</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary-600 transition-colors"
              >
                <span className="text-sm">YT</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Навигация */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-secondary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Услуги */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-secondary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Поддержка */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-secondary-500 transition-colors text-sm block text-left"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        link.href.startsWith("#")
                          ? scrollToSection(link.href)
                          : null
                      }
                      className="text-gray-300 hover:text-secondary-500 transition-colors text-sm text-left"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <p className="text-xs text-gray-400 leading-relaxed">
                Вся информация, размещенная на сайте, не является публичной
                офертой, определяемой положениями Статьи 437 Гражданского
                кодекса РФ.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400">Телефон:</p>
              <a
                href="tel:+79843333435"
                className="text-white hover:text-secondary-400 transition-colors"
              >
                +7 (984) 333-34-35
              </a>
            </div>
          </motion.div>
        </div>

        {/* Нижняя часть */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} check.me-lab. Все права защищены.
            </div>

            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              {/* <span>ИНН: 1234567890</span> */}
              <span>ОГРН: 319402700004019</span>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center md:text-left">
            Работаем по всей России и русскоязычному СНГ, ЕАЭС
          </div>
        </motion.div>
      </div>

      {/* Вверх */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-secondary-500 text-white p-3 rounded-full shadow-lg hover:bg-secondary-600 transition-colors z-40"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
