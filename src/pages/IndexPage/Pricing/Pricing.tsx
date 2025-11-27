import React, { useState } from "react";
import { motion } from "framer-motion";

import { PricingCard } from "@/components/shared/PricingCard/PricingCard";

import { Files } from "@/components/files";

const Pricing: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<
    "owner" | "manager" | "personal"
  >("manager");

  const businessPlans = [
    {
      name: "Check.me Loy ",
      description:
        "ENPS, ER, ES. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса и бизнес отчет.",
      price: "3 500",
      priceLabel: "/ сотрудник",
      listTextHead: "Структура отчета:",
      features: [
        "лояльность",
        "вовлеченность",
        "удовлетворенность",
        " потенциальные причины увольнения",
      ],
      popular: false,
      link: Files.LoyFile,
      btnText: "Купить",
    },
    {
      name: "Check.me Group",
      description:
        "Групповое тестирование до 25 сотрудников. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса, краткий общий отчет по команде для руководителя.",
      price: "50 000",
      priceLabel: "/ проект",
      listTextHead: "Структура отчета:",
      features: [
        "соответствие позиции",
        "степень выгорания",
        "gерсональные отчеты сотрудникам (версия Check.me Start)",
      ],
      popular: false,
      link: Files.GroupFile,
      btnText: "Купить",
    },
    {
      name: "Check.me Team",
      description:
        "Комплексное тестирование до 100 сотрудников. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса, краткий общий отчет по команде для руководителя.",
      price: "75 000",
      priceLabel: "/ проект",
      listTextHead: "Структура отчета:",
      features: [
        "соответствие позиции",
        "степень выгорания",
        "персональные отчеты сотрудникам (версия Check.me Pro)",
      ],
      popular: true,
      link: Files.GroupFile,
      btnText: "Купить",
    },
    {
      name: "Check.me HR",
      description:
        "Массовое тестирование до 50 кандидатов на одну вакансию для отбора релевантных кандидатов на собеседование. Ссылка на тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса. Краткий отчет для специалиста. Структура отчета: фио, возраст, уровень энергозатрат, телефон, эл. почта. ",
      price: "5 000",
      priceLabel: "/ месяц",
      listTextHead: "Структура отчета:",
      features: [
        "фио",
        "возраст",
        "уровень энергозатрат",
        "телефон",
        "эл. почта",
      ],
      popular: false,
      btnText: "Купить",
    },
    {
      name: "Check.me HRBP",
      description:
        "5 (пять) массовых исследований кандидатов на вакансию (версия Сheck.me HR). 15 (пятнадцать) отчетов лучших кандидатов на собеседования (версия Check.me Pro). ",
      price: "50 000",
      priceLabel: "/ месяц",
      // features: ['10 Пакетов "Рекрутер" + 1 пакет "Команда"'],
      popular: false,
      btnText: "Купить",
    },
  ];

  const personalPlans = [
    {
      name: "Check.me Start",
      description:
        "Базовое тестирование личности. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса и типовой отчет.",
      price: "500",
      originalPrice: "300",
      listTextHead: "Структура отчета:",
      features: [
        "уровень энергозатрат (актуализация/потенциал)",
        "ключевые сильные стороны",
        "зоны роста.",
      ],
      priceLabel: "",
      popular: false,
      link: Files.StartFile,
      btnText: "Купить",
    },
    {
      name: "Check.me Pro",
      description:
        "Профессиональное тестирование личности. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса и отчет.",
      price: "5 000",
      listTextHead: "Структура отчета:",
      features: [
        "профиль доминирующих компетенций (актуализация /потенциал)",
        "психотип",
        "мешающие работе особенности личности",
        "прогноз поведения на 1 год",
        "психологическая устойчивость",
        "возможные риски выгорания",
        "степень осознанности",
        "рекомендации по повышению личной эффективности (ИПР)",
        "дополнительный блок согласно запросу клиента",
      ],
      originalPrice: "3 000",
      priceLabel: "психотип",
      popular: true,
      link: Files.ProFile,
      btnText: "Купить",
    },
    {
      name: "Check.me Career",
      description:
        "Профориентационное тестирование карьеры для детей 10+ и взрослых. Тестирование бессознательных семантических конструктов с использованием нейрокомпьютерного интерфейса и карьерный отчет.",
      price: "9 000",
      listTextHead: "Структура отчета:",
      features: [
        "профиль доминирующих компетенций (актуализация /потенциал)",
        "список подходящих профессий",
        "сфер деятельности",
        "план развития навыков для построения/улучшения карьеры",
        "рекомендации",
      ],
      originalPrice: "4 000",
      priceLabel: "",
      popular: false,
      link: Files.CareerFile,
      btnText: "Купить",
    },
    {
      name: "Check.me Service",
      description: "Онлайн консультация - 45 минут (по всем услугам) ",
      price: "15 000",
      originalPrice: "13 000",
      priceLabel: "",
      popular: false,
      btnText: "Купить",
    },
  ];

  const currentPlans =
    targetAudience === "personal" ? personalPlans : businessPlans;

  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            Выберите свой <span className="text-gradient">тариф</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
            Гибкие тарифные планы для компаний любого размера
          </p>

          {/* Переключатель целевой аудитории */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center bg-white rounded-lg p-1 shadow-md"
          >
            {/* <button
              onClick={() => setTargetAudience('owner')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === 'owner'
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-secondary-600'
              }`}
            >
              Для Собственника
            </button> */}
            <button
              onClick={() => setTargetAudience("manager")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === "manager"
                  ? "bg-secondary-500 text-white shadow-md"
                  : "text-gray-500 hover:text-secondary-600"
              }`}
            >
              Для Руководителя
            </button>
            <button
              onClick={() => setTargetAudience("personal")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === "personal"
                  ? "bg-secondary-500 text-white shadow-md"
                  : "text-gray-500 hover:text-secondary-600"
              }`}
            >
              Для Себя
            </button>
          </motion.div>
        </motion.div>

        <div
          className={`grid grid-cols-1 ${
            targetAudience === "personal" ? "lg:grid-cols-4" : "lg:grid-cols-4"
          } gap-6`}
        >
          {currentPlans.map((plan, index) => (
            <PricingCard plan={plan} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
