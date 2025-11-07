import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Icons } from "../components/Icons";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Технология", href: "#technology" },
    { name: "Для кого", href: "#for-who" },
    { name: "Обалдеть", href: "#amazing" },
    { name: "Принцип работы", href: "#getting-started" },
    { name: "Тарифы", href: "#pricing" },
    { name: "VIP", href: "#vip" },
    { name: "Контакты", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-header shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 custom-desktop:px-8">
        <div className="flex justify-between items-center py-4 gap-4">
          {/* Логотип */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg lg:text-custom-desktop">
                C
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-custom-desktop font-bold text-primary-500 drop-shadow-lg">
                check.me-lab
              </span>
              <span
                className={`text-xs hidden sm:block transition-colors ${
                  isScrolled ? "text-gray-500" : "text-white/80 drop-shadow-md"
                }`}
              >
                Тестирование навыков
              </span>
            </div>
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden custom-desktop:flex items-center space-x-4 custom-desktop:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm custom-desktop:text-base font-medium transition-all duration-200 relative group text-white hover:text-secondary-500 drop-shadow-lg whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-secondary-500"></span>
              </button>
            ))}
          </nav>

          <div className="hidden custom-desktop:flex items-center gap-4">
            <div className="flex flex-col items-center gap-1 text-white">
              <a
                href="tel:+79843333435"
                aria-label="Позвонить по номеру +7 (984) 333-34-35"
                title="+7 (984) 333-34-35"
                className="text-white hover:text-white/80 transition-colors font-bold"
              >
                +7 (984) 333-34-35
              </a>

              <div className="flex items-center gap-2 ">
                <a
                  href="https://t.me/CheckMeLab_bot"
                  aria-label="Написать нам в бот"
                  title="CheckMe-Lab_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-bold"
                >
                  <Icons.TelegrammIcon className="w-6 h-6 text-white" />
                  CheckMe-Lab_bot
                </a>
              </div>
            </div>

            {/* Кнопка */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-4 custom-desktop:px-6 py-2 custom-desktop:py-3 rounded-lg text-sm custom-desktop:text-base font-semibold btn-hover shadow-teal whitespace-nowrap"
            >
              Узнать больше
            </motion.button>
          </div>

          {/* Мобильное меню - кнопка */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="custom-desktop:hidden p-2 rounded-md transition-colors text-white hover:bg-white/20 drop-shadow-lg"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="custom-desktop:hidden bg-black/40 backdrop-blur-lg border-t border-white/20 py-4"
          >
            <nav className="gap-2 flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-white hover:text-secondary-500 font-medium py-2 px-4 hover:bg-white/10 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}

              <div className="flex flex-col items-start gap-2 px-4 text-white mb-4">
                <a
                  href="tel:+79843333435"
                  aria-label="Позвонить по номеру +7 (984) 333-34-35"
                  title="+7 (984) 333-34-35"
                  className="text-white font-bold hover:text-secondary-400 transition-colors"
                >
                  +7 (984) 333-34-35
                </a>
                <a
                  href="https://t.me/CheckMeLab_bot"
                  aria-label="Написать нам в бот"
                  title="CheckMe-Lab_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-bold hover:text-secondary-400 transition-colors"
                >
                  <Icons.TelegrammIcon className="w-6 h-6 text-white" />
                  CheckMe-Lab_bot
                </a>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold mx-4"
              >
                Узнать больше
              </motion.button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
