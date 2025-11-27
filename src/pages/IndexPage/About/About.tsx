import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-500 mb-6">
            Закройте вакансию за несколько минут — найдите сотрудника со{' '}
            <span className="text-gradient">100% совместимостью</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Изображения */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                  alt="Работа подождет"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm rounded px-3 py-2">
                    от "Работа подождет"
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Работаем на результат"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm rounded px-3 py-2">
                    к "Работаем на результат"
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Текстовый контент */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-500 mb-6">
              Автоматический отбор «лучших» в 3 шага
            </h3>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-500 leading-relaxed">
                <strong className="text-primary-500">74% соискателей преувеличивают свои компетенции</strong> на собеседовании
              </p>
              
              <p className="text-lg text-gray-500 leading-relaxed">
                Наша инновационная методика позволяет объективно оценить Hard, Soft и Psy навыки кандидатов, 
                выявить их истинный потенциал и найти идеальное совпадение с требованиями вашей компании.
              </p>

              <div className="bg-secondary-50 rounded-lg p-6 border-l-4 border-secondary-500">
                <p className="text-secondary-800 font-medium">
                  Защитите себя — доверьте отбор инновационной системе
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold btn-hover shadow-teal">
                Узнать больше о методике
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
