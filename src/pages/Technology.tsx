import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon,
  EyeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { useModal } from '../context/ModalContext';

const Technology: React.FC = () => {
  const { openModal } = useModal();
  
  const techFeatures = [
    {
      icon: <CpuChipIcon className="w-8 h-8" />,
      title: 'Кодированные изображения',
      description: 'Мозг декодирует подсознательно, сознание не успевает «играть роль»',
      features: ['Нейротестирование', 'Подсознательные реакции', 'Защита от обмана']
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Реакция за 10 минут',
      description: 'Кандидат кликает при смене картинок — собираем сотни реакций',
      features: ['Быстрое тестирование', 'Сотни точек данных', 'Онлайн 24/7']
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'AI-аналитика и отчёт',
      description: 'Статистика → рейтинг, риски, рекомендации.',
      features: ['Автоматический анализ', 'Прогнозирование', 'Готовые рекомендации']
    }
  ];

  const techStats = [
    {
      value: '≈95%',
      label: 'точность прогноза',
      description: 'подтверждено исследованиями'
    },
    {
      value: '10 мин',
      label: 'среднее время тестирования',
      description: 'удобно для сотрудника'
    },
    {
      value: '100%',
      label: 'онлайн',
      description: 'без датчиков и оборудования'
    }
  ];

  const advantages = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: 'Невозможно обмануть',
      description: 'Подсознательные реакции не контролируются сознанием',
    },
    {
      icon: <BeakerIcon className="w-6 h-6" />,
      title: 'Научная база',
      description: 'Методика основана на нейронауке и психометрии',
    },
    {
      icon: <EyeIcon className="w-6 h-6" />,
      title: 'Прозрачность',
      description: 'Понятные отчеты с объяснением каждого показателя',
    }
  ];


  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 p-4 rounded-full">
              <CpuChipIcon className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            <span className="text-gradient">Технология</span> нового поколения
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          Нейротест подсознания +AI- объективная оценка сотрудника и кандидата сегодня и его потенциала в онлайн режиме
          </p>
        </motion.div>

        {/* Основные возможности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={openModal}
              className="bg-light rounded-xl p-8 text-center hover:shadow-teal transition-all duration-300 cursor-pointer"
            >
              <div className="text-secondary-500 flex justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary-500 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-500 mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.features.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center justify-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            {techStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-primary-500 mb-12">
            Почему это работает
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={openModal}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-secondary-500 transition-all duration-300 cursor-pointer"
              >
                <div className="text-secondary-500 flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h4 className="text-xl font-bold text-primary-500 mb-3">
                  {advantage.title}
                </h4>
                <p className="text-gray-500 text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4">
              Попробуйте технологию в действии
            </h3>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Убедитесь в эффективности 
              нейротестирования для вашего бизнеса за 10 минут.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold btn-hover shadow-teal"
            >
              Попробуй
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
