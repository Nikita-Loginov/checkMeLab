import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  TrophyIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import { useModal } from '../context/ModalContext';

const ForWho: React.FC = () => {
  const { openModal } = useModal();
  
  // Калькулятор ROI
  const [salary, setSalary] = useState(120000);
  const [months, setMonths] = useState(3);
  const [training, setTraining] = useState(80000);
  const [rehire, setRehire] = useState(60000);
  const [totalLoss, setTotalLoss] = useState(0);

  useEffect(() => {
    const loss = salary * months + training + rehire;
    setTotalLoss(loss);
  }, [salary, months, training, rehire]);

  const ownerProblems = [
    {
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      title: 'Текучка кадров',
      description: 'Высокие затраты на поиск и обучение новых сотрудников',
      cost: 'до 2 млн ₽/год'
    },
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: 'Низкая эффективность',
      description: 'Сотрудники не показывают ожидаемых результатов',
      cost: 'до 40% потерь'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Долгий подбор',
      description: 'Вакансии висят месяцами, бизнес простаивает',
      cost: 'до 6 месяцев'
    }
  ];

  const managerChallenges = [
    {
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      title: 'Субъективность оценки',
      description: 'Трудно объективно оценить потенциал кандидата на собеседовании',
      impact: 'До 40% неудачных наймов'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Много времени на подбор',
      description: 'Бесконечные собеседования отнимают время от основных задач',
      impact: 'До 20 часов на позицию'
    },
    {
      icon: <UserGroupIcon className="w-6 h-6" />,
      title: 'Сложности с командой',
      description: 'Непонятно на что способна текущая команда',
      impact: 'Выгорания и снижение мотивации'
    }
  ];

  const ownerSolutions = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Снижение рисков найма',
      benefits: ['95% точность прогноза', 'Снижение текучки на 60%', 'Экономия на переобучении'],
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: 'Повышение качества команды',
      benefits: ['Лучшая совместимость', 'Рост продуктивности', 'Улучшение атмосферы'],
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Ускорение подбора',
      benefits: ['В 3 раза быстрее', 'Меньше собеседований', 'Автоматизация процесса'],
    }
  ];

  const managerSolutions = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Объективная оценка',
      benefits: ['Анализ hard и soft skills', 'Психологический портрет', 'Совместимость с командой'],
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Быстрое принятие решений',
      benefits: ['Предварительный скрининг', 'Готовые рекомендации', 'Сравнение кандидатов'],
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: 'Эффективное управление',
      benefits: ['Индивидуальный подход', 'Планы развития', 'Предотвращение конфликтов'],
    }
  ];


  return (
    <section id="for-who" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            <span className="text-gradient">Для кого</span> это решение
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Превратите HR из центра затрат в центр прибыли. Сократите расходы на персонал 
            и увеличьте эффективность команды.
          </p>
        </motion.div>

        {/* ДЛЯ СОБСТВЕННИКА */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-3 rounded-full mr-4">
              <CurrencyDollarIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500">
              Для собственника бизнеса
            </h3>
          </div>

          {/* Проблемы собственника */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ownerProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={openModal}
                className="bg-red-50 border border-red-200 rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-red-500 flex justify-center mb-4">
                  {problem.icon}
                </div>
                <h4 className="text-lg font-bold text-red-700 mb-3">
                  {problem.title}
                </h4>
                <p className="text-red-600 mb-4 text-sm">
                  {problem.description}
                </p>
                <div className="bg-red-100 rounded-lg p-3">
                  <div className="text-red-800 font-bold">{problem.cost}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Решения для собственника */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {ownerSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={openModal}
                className="bg-white rounded-xl p-8 hover:shadow-teal transition-all duration-300 cursor-pointer"
              >
                <div className="text-secondary-500 flex justify-center mb-6">
                  {solution.icon}
                </div>
                
                <h4 className="text-xl font-bold text-primary-500 mb-6 text-center">
                  {solution.title}
                </h4>

                <ul className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Калькулятор ROI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h4 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-8 text-center">
              Калькулятор стоимости плохого найма
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Месячная зарплата (₽):
                  </label>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Месяцев до «разворота»:
                  </label>
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Обучение и простой (₽):
                  </label>
                  <input
                    type="number"
                    value={training}
                    onChange={(e) => setTraining(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Повторный поиск (₽):
                  </label>
                  <input
                    type="number"
                    value={rehire}
                    onChange={(e) => setRehire(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
                  <div className="text-sm font-semibold mb-3 opacity-90">
                    Итого потери:
                  </div>
                  <div className="text-5xl font-bold mb-4">
                    {totalLoss.toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-sm opacity-90">
                    от одного неудачного найма
                  </div>
                </div>

                <div className="mt-6 bg-green-50 rounded-lg p-6 border border-green-200">
                  <h5 className="font-semibold text-green-700 mb-3">Что меняется с пилотом:</h5>
                  <ul className="space-y-2 text-sm text-green-600">
                    <li>• Меньше замен и ошибок найма</li>
                    <li>• 90-day retention выше</li>
                    <li>• Вакансии закрываются быстрее и дешевле</li>
                  </ul>
                  <p className="text-xs text-green-600 mt-4">
                    Окупаемость — в первый месяц при входящем потоке ≥ 30 кандидатов
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ДЛЯ РУКОВОДИТЕЛЯ */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="bg-gradient-to-r from-secondary-500 to-primary-500 p-3 rounded-full mr-4">
              <UserGroupIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500">
              Для руководителя команды
            </h3>
          </div>

          {/* Вызовы руководителя */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {managerChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={openModal}
                className="bg-red-50 border border-orange-200 rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-orange-500 flex justify-center mb-4">
                  {challenge.icon}
                </div>
                <h4 className="text-lg font-bold text-orange-700 mb-3">
                  {challenge.title}
                </h4>
                <p className="text-orange-600 mb-4 text-sm">
                  {challenge.description}
                </p>
                <div className="bg-orange-100 rounded-lg p-3">
                  <div className="text-orange-800 font-semibold text-sm">{challenge.impact}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Решения для руководителя */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {managerSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={openModal}
                className="bg-white rounded-xl p-8 hover:shadow-teal transition-all duration-300 cursor-pointer"
              >
                <div className="text-secondary-500 flex justify-center mb-6">
                  {solution.icon}
                </div>
                
                <h4 className="text-xl font-bold text-primary-500 mb-6 text-center">
                  {solution.title}
                </h4>

                <ul className="space-y-3">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-secondary-50 to-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-4">
              Готовы увеличить прибыль?
            </h3>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
              Получите персональный расчет экономии для вашего бизнеса и узнайте, 
              как наша система окупится уже через 3 месяца.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold btn-hover shadow-teal"
            >
              Получить расчет экономии
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForWho;
