import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CpuChipIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { ServiceCard } from "../components/shared/ServiceCard/ServiceCard";

import { useModal } from "../context/ModalContext";

const Services: React.FC = () => {
  const { openModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState("soft");

  const categories = [
    {
      id: "soft",
      name: "Soft Skills",
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: "secondary",
      description: "Коммуникативные и межличностные навыки",
    },
    {
      id: "psy",
      name: "Psy Skills",
      icon: <CpuChipIcon className="w-6 h-6" />,
      color: "yellow",
      description: "Психологические характеристики и поведенческие паттерны",
    },
  ];

  const skillsData = {
    hard: [
      {
        name: "Программирование",
        positions: ["Разработчик", "Тимлид", "CTO"],
        now: 65,
        finish: 85,
      },
      {
        name: "Дизайн",
        positions: ["UI/UX дизайнер", "Арт-директор"],
        now: 45,
        finish: 75,
      },
      {
        name: "Маркетинг",
        positions: ["Маркетолог", "CMO", "SMM-специалист"],
        now: 70,
        finish: 90,
      },
      {
        name: "Продажи",
        positions: ["Менеджер по продажам", "Директор по продажам"],
        now: 55,
        finish: 80,
      },
      {
        name: "Финансы",
        positions: ["Аналитик", "CFO", "Бухгалтер"],
        now: 40,
        finish: 70,
      },
      {
        name: "HR",
        positions: ["HR-менеджер", "Рекрутер", "CHRO"],
        now: 60,
        finish: 85,
      },
    ],
    soft: [
      {
        name: "Лидерство",
        positions: ["Руководитель отдела", "CEO", "Тимлид"],
        now: 50,
        finish: 85,
      },
      {
        name: "Коммуникация",
        positions: ["PR-менеджер", "Account-менеджер"],
        now: 75,
        finish: 95,
      },
      {
        name: "Эмпатия",
        positions: ["HR-специалист", "Психолог", "Коуч"],
        now: 65,
        finish: 90,
      },
      {
        name: "Креативность",
        positions: ["Креативный директор", "Дизайнер"],
        now: 55,
        finish: 80,
      },
      {
        name: "Адаптивность",
        positions: ["Стартап команда", "Консультант"],
        now: 70,
        finish: 95,
      },
      {
        name: "Критическое мышление",
        positions: ["Аналитик", "Стратег"],
        now: 60,
        finish: 85,
      },
    ],
    psy: [
      {
        name: "Стрессоустойчивость",
        positions: ["Кризис-менеджер", "Хирург"],
        now: 45,
        finish: 75,
      },
      {
        name: "Мотивация",
        positions: ["Продавец", "Спортсмен", "Предприниматель"],
        now: 80,
        finish: 95,
      },
      {
        name: "Эмоциональный интеллект",
        positions: ["Психолог", "Лидер команды"],
        now: 60,
        finish: 90,
      },
      {
        name: "Внимательность",
        positions: ["Контролер качества", "Аудитор"],
        now: 70,
        finish: 95,
      },
      {
        name: "Инициативность",
        positions: ["Стартапер", "Инноватор"],
        now: 55,
        finish: 85,
      },
      {
        name: "Ответственность",
        positions: ["Менеджер проекта", "Директор"],
        now: 75,
        finish: 95,
      },
    ],
  };

  const benefits = [
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: "Научный подход",
      description: "Методика основана на научных исследованиях и практике",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Инновационность",
      description: "Современные технологии оценки и анализа данных",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Точность",
      description:
        "95% точности прогнозирования успешности сотрудника или кандидата",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Этичность",
      description: "Честная и прозрачная система оценки без дискриминации",
    },
  ];

  return (
    <section id="amazing" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            <span className="text-gradient">Обалдеть!</span> Как это работает
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Наша система анализирует кандидатов настолько точно, что вы
            удивитесь результатам. Типы навыков + ИИ = идеальное совпадение!
          </p>
        </motion.div>

        {/* Переключатель категорий */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-secondary-500 text-white shadow-teal"
                  : "bg-white text-gray-500 hover:bg-gray-100 shadow-md"
              }`}
            >
              <span
                className={
                  selectedCategory === category.id
                    ? "text-white"
                    : "text-secondary-500"
                }
              >
                {category.icon}
              </span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Специализации */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary-500 mb-2 text-center">
              {categories.find((c) => c.id === selectedCategory)?.name}
            </h3>
            <p className="text-gray-500 text-center mb-8">
              {categories.find((c) => c.id === selectedCategory)?.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData[selectedCategory as keyof typeof skillsData].map(
                (skill, index) => (
                  <ServiceCard skill={{ ...skill, id: index + 1 }} />
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={openModal}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-teal transition-all duration-300 cursor-pointer"
            >
              <div className="text-secondary-500 flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-500 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-500">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
