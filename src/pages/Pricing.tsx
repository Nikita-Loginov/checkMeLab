import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import { useModal } from '../context/ModalContext';

const Pricing: React.FC = () => {
  const [targetAudience, setTargetAudience] = useState<'owner' | 'manager' | 'personal'>('owner');
  const { openModal } = useModal();

  // Тарифы для бизнеса (Собственник и Руководитель)
  const businessPlans = [
    {
      name: 'Команда',
      description: 'для малого бизнеса до 25 человек',
      price: '15 000',
      priceLabel: '/ проект',
      features: [
        '~ 25 исследований сотрудников',
        'Типовой отчет по команде для руководителя по 5 ключевым метрикам (роли, коммуникация, потенциал, соответствие позиции, степень выгорания)'
      ],
      popular: false
    },
    {
      name: 'Команда 2.0»',
      description: 'для бизнеса до 100 человек',
      price: '75 000',
      priceLabel: '/ проект',
      features: [
        'Типовой отчет по команде для руководителя по 5 ключевым метрикам (роли, коммуникация, потенциал, соответствие позиции, степень выгорания)',
        'Персональные ответы по 10 ключевым сотрудникам (версия Check.me Pro)'
      ],
      popular: true
    },
    {
      name: 'Рекрутер',
      description: 'для подбора кандидатов на одну вакансию',
      price: '5 000 + 50%',
      priceLabel: 'месячной ЗП кандидата',
      features: [
        'Оценка на соответствие кандидата (непсихотестирование до 50 кандидатов)',
        'Интеграция с Head Hunter (системами отслеживания кандидатов)',
        'оптимизация бизнес-процесса для HR и рекрутера'
      ],
      popular: false
    },
    {
      name: 'Рекрутер 2.0»',
      description: 'для подбора кандидатов на 10 вакансий',
      price: '50 000',
      priceLabel: '/ проект на 6 месяцев',
      features: [
        '10 Пакетов "Рекрутер" + 1 пакет "Команда"'
      ],
      popular: false
    }
  ];

  // Тарифы для частных лиц
  const personalPlans = [
    {
      name: 'Check.me Start',
      description: 'Базовое тестирование. Типовой отчет с вашим психотипом, ключевыми сильными и зонами роста. Идеально для первого знакомства.',
      price: '500',
      originalPrice: '300',
      priceLabel: '',
      popular: false
    },
    {
      name: 'Check.me Pro',
      description: 'Бестселлер. Полный личностный профиль. Согласно запроса клиента: например, глубокий анализ мышления, эмоций, мотивации, внутренних ограничений и персональные рекомендации по развитию, карьере и преодолению выгорания.',
      price: '5 000',
      originalPrice: '3 000',
      priceLabel: '',
      popular: true
    },
    {
      name: 'Check.me Career',
      description: 'Профориентационный пакет. Анализ подходящих профессий, сфер деятельности, условий работы. План развития навыков для целевой карьеры.',
      price: '7 000',
      originalPrice: '4 000',
      priceLabel: '',
      popular: false
    },
    {
      name: 'Check.me Premium',
      description: 'Премиум-пакет «всё включено». Расширенный отчет Check.me Pro + 30-минутная онлайн-консультация со специалистом для разбора результатов и постановки целей.',
      price: '15 000',
      originalPrice: '13 000',
      priceLabel: '',
      popular: false
    }
  ];

  const currentPlans = targetAudience === 'personal' ? personalPlans : businessPlans;

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
            <button
              onClick={() => setTargetAudience('owner')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === 'owner'
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-secondary-600'
              }`}
            >
              Для Собственника
            </button>
            <button
              onClick={() => setTargetAudience('manager')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === 'manager'
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-secondary-600'
              }`}
            >
              Для Руководителя
            </button>
            <button
              onClick={() => setTargetAudience('personal')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                targetAudience === 'personal'
                  ? 'bg-secondary-500 text-white shadow-md'
                  : 'text-gray-500 hover:text-secondary-600'
              }`}
            >
              Для Себя
            </button>
          </motion.div>
        </motion.div>

        <div className={`grid grid-cols-1 ${targetAudience === 'personal' ? 'lg:grid-cols-4' : 'lg:grid-cols-4'} gap-6`}>
          {currentPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-secondary-500 scale-105' : ''
              }`}
            >
              {/* Популярный бейдж */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <StarIcon className="w-4 h-4" />
                    <span>Популярный</span>
                  </div>
                </motion.div>
              )}

              <div className="p-6 flex flex-col gap-4 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary-500 mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div>
                      <span className="text-3xl font-bold text-primary-500">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 ml-1">₽</span>
                    </div>
                    {plan.priceLabel && (
                      <div className="text-sm text-gray-500 mt-1">{plan.priceLabel}</div>
                    )}
                    {/* {targetAudience === 'personal' && 'originalPrice' in plan && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Цена со скидкой: {plan.originalPrice} ₽
                      </div>
                    )} */}
                  </div>
                </div>

                {targetAudience !== 'personal' && 'features' in plan && (
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 bg-green-100 text-green-600">
                          <CheckIcon className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-primary-500">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openModal}
                  className={`w-full py-3 px-6 rounded-lg mt-auto font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-teal hover:shadow-teal-lg'
                      : 'bg-gray-100 text-primary-500 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Начать сейчас' : 'Выбрать план'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
