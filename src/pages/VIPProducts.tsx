import React from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon, 
  SparklesIcon, 
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useModal } from '../context/ModalContext';

const VIPProducts: React.FC = () => {
  const { openModal } = useModal();
  const vipServices = [
    {
      icon: <StarIcon className="w-12 h-12" />,
      title: 'Персональный аудит команды',
      description: 'Комплексная оценка всей команды с персональными рекомендациями для каждого сотрудника',
      features: [
        'Полный анализ команды до 50 человек',
        'Индивидуальные планы развития',
        'Карта взаимодействий в команде',
        'Рекомендации по оптимизации'
      ],
      price: 'от 500 000 ₽',
      duration: '2-4 недели',
      highlight: true
    },
    {
      icon: <SparklesIcon className="w-12 h-12" />,
      title: 'Создание эталона "идеального сотрудника"',
      description: 'Анализ ваших лучших сотрудников и создание профиля для поиска аналогичных кандидатов',
      features: [
        'Анализ топ-5 сотрудников',
        'Создание эталонного профиля',
        'Настройка системы под ваши критерии',
        'Обучение HR-команды'
      ],
      price: 'от 300 000 ₽',
      duration: '1-2 недели',
      highlight: false
    },
    {
      icon: <UserGroupIcon className="w-12 h-12" />,
      title: 'VIP подбор руководителей',
      description: 'Эксклюзивный поиск и оценка кандидатов на топ-позиции с гарантией результата',
      features: [
        'Поиск кандидатов на C-level позиции',
        'Углубленная психологическая оценка',
        'Проверка референсов',
        'Гарантия замены в течение года'
      ],
      price: 'от 1 000 000 ₽',
      duration: '4-8 недель',
      highlight: false
    },
    {
      icon: <ChartBarIcon className="w-12 h-12" />,
      title: 'Аналитика производительности',
      description: 'Мониторинг и анализ эффективности сотрудников с предсказанием потенциальных проблем',
      features: [
        'Ежемесячные отчеты по команде',
        'Прогнозирование увольнений',
        'Рекомендации по мотивации',
        'Интеграция с корпоративными системами'
      ],
      price: 'от 150 000 ₽/мес',
      duration: 'Постоянно',
      highlight: false
    }
  ];

  const benefits = [
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Экономия времени',
      text: 'До 80% сокращение времени на подбор персонала'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Гарантия качества',
      text: '99% точность прогнозирования успешности'
    },
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Эксклюзивность',
      text: 'Индивидуальный подход к каждому клиенту'
    }
  ];


  return (
    <section id="vip" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-full">
              <StarIcon className="w-12 h-12 text-gray-900" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">VIP</span> продукты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Эксклюзивные решения для компаний, которые ценят индивидуальный подход и максимальный результат
          </p>
        </motion.div>

        {/* VIP услуги */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {vipServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                service.highlight 
                  ? 'border-yellow-400 shadow-lg shadow-yellow-400/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    ПРЕМИУМ
                  </div>
                </div>
              )}

              <div className="text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-gray-300">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  service.highlight
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-lg hover:shadow-yellow-400/25'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                Узнать подробности
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Преимущества VIP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center"
            >
              <div className="text-yellow-400 flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA секция */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl p-8 border border-yellow-400/20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Готовы к индивидуальному решению?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашими экспертами для обсуждения уникальных потребностей вашей компании
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={openModal}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold btn-hover"
            >
              Связаться с экспертом
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300"
            >
              Скачать презентацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VIPProducts;
