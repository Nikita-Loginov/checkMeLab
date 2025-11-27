import React from "react";
import { motion } from "framer-motion";
import {
  UserPlusIcon,
  ClipboardDocumentListIcon,
  ChartBarIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useModal } from "@/context/ModalContext";

const HowItWorks: React.FC = () => {
  const { openModal } = useModal();

  const steps = [
    {
      number: "01",
      icon: <UserPlusIcon className="w-8 h-8" />,
      title: "Заявка",
      description:
        "Оставьте нам заявку, укажите в ней основную информацию о компании и вашу «боль»",
      features: [
        "Быстрое оформление",
        "Описание потребностей",
        "Выбор решения",
      ],
    },
    {
      number: "02",
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
      title: "Тестирование",
      description:
        "Сотрудник или кандидат проходит комплексное исследование SOFT и PSY навыков в удобное для них время",
      features: ["Онлайн", "2 типа навыков", "объективная оценка"],
    },
    {
      number: "03",
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: "Анализ результатов",
      description:
        "Подробный отчет с анализом способностей сотрудника или кандидата и рекомендации",
      features: [
        "Детальная аналитика",
        "Сравнение с эталоном",
        "прогноз успешности",
      ],
    },
    {
      number: "04",
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      title: "Принятие решения",
      description:
        "Принимайте кадровые решения на основе объективных данных и потенциала сотрудников",
      features: [
        "Объективная оценка",
        "Снижение рисков",
        "Повышение эффективности",
      ],
    },
  ];

  const features = [
    { text: "Время тестирования: от 9 минут", highlight: true },
    { text: "Оперативный отчет после завершения", highlight: true },
    { text: "Возможность пересдачи через 1 месяц", highlight: true },
    { text: "Интеграция с HR-системами", highlight: false },
    { text: "Поддержка 24/7", highlight: false },
    { text: "Безопасность данных", highlight: true },
  ];

  return (
    <section id="getting-started" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            <span className="text-gradient">Принцип работы</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            От идеи до результата за 4 шага. Начните сегодня!
          </p>
        </motion.div>

        {/* Шаги процесса */}
        <div className="relative">
          {/* Соединительная линия для десктопа */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-secondary-400 to-primary-200"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Номер шага */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-teal"
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Контент шага */}
                <motion.div
                  whileHover={{ y: -5 }}
                  onClick={openModal}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-teal-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="text-secondary-500 flex justify-center mb-4">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary-500 mb-3 text-center">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 mb-6 text-center">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Стрелка для мобильных устройств */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-6">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-secondary-400 to-secondary-200"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Дополнительные функции */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary-500 mb-8">
            Что внутри системы
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-3 p-4 rounded-lg ${
                  feature.highlight
                    ? "bg-white shadow-md border-2 border-secondary-200"
                    : "bg-white/50"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    feature.highlight ? "bg-secondary-500" : "bg-gray-400"
                  }`}
                ></div>
                <span
                  className={`text-sm ${
                    feature.highlight
                      ? "font-semibold text-primary-500"
                      : "text-gray-500"
                  }`}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
