import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const PersonalPlans: React.FC = () => {
  const { openModal } = useModal();

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

  return (
    <section id="personal-plans" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary-500 mb-4">
                Самопознание для частных лиц
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Откройте свой потенциал с помощью персональных психометрических исследований
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {personalPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-3">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Бестселлер
                      </span>
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-primary-500 mb-2 text-center">{plan.name}</h4>
                  <p className="text-xs text-gray-500 mb-4 text-center">{plan.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary-500">{plan.price} ₽</div>
                    {/* <div className="text-sm text-green-600 font-medium">со скидкой: {plan.originalPrice} ₽</div> */}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={openModal}
                    className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-gray-100 text-primary-500 hover:bg-gray-200'
                    }`}
                  >
                    Выбрать
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalPlans;

