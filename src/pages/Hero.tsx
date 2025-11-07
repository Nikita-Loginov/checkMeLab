import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ShieldCheckIcon, GlobeAltIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';
import { useModal } from '../context/ModalContext';

const Hero: React.FC = () => {
  const { openModal } = useModal();
  
  const features = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      text: '95% достоверность данных'
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      text: 'Работаем по всему миру'
    },
    {
      icon: <CurrencyRupeeIcon className="w-6 h-6" />,
      text: 'Прибыль до +30% за счет повышения эффективности сотрудников'
    },
    {
      icon: <CheckCircleIcon className="w-6 h-6" />,
      text: 'Наличие патентов и сертификатов на метод'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
       {/* Фоновое изображение */}
       <div className="absolute inset-0 z-0">
         <img 
           src="/assets/hero.jpg"
           alt="Business team"
           className="w-full h-full object-cover"
         />
         {/* Затемнение */}
         <div className="absolute inset-0 bg-black/75 z-5"></div>
        {/* Градиентное затемнение */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 to-secondary-700/20 z-10"></div>
       </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            CHECK.ME-LAB - повышаем эффективность вашей компании через людей
          </motion.h1>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto text-left space-y-4 bg-black/80 p-8 rounded-lg"
           >
             <p className="flex items-start">
               <span className="text-secondary-400 font-bold mr-3 text-2xl flex-shrink-0">•</span>
               <span><span className="font-bold">Нанимайте лучших:</span> находите сотрудников, которые действительно подходят вашей компании</span>
             </p>
             <p className="flex items-start">
               <span className="text-secondary-400 font-bold mr-3 text-2xl flex-shrink-0">•</span>
               <span><span className="font-bold">Развивайте команду:</span> выявляйте потенциал и зоны роста текущих сотрудников</span>
             </p>
             <p className="flex items-start">
               <span className="text-secondary-400 font-bold mr-3 text-2xl flex-shrink-0">•</span>
               <span><span className="font-bold">Повышайте эффективность:</span> создавайте сильные, сплоченные команды, которые работают на результат</span>
             </p>
           </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold btn-hover shadow-lg hover:shadow-secondary-500/25 inline-flex items-center space-x-2"
            >
              <span>Заказать исследование</span>
            </button>
          </motion.div>

          {/* Фичи */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={openModal}
                className="glass-dark rounded-xl p-6 text-center shadow-2xl border-[3px] border-[#14b8a6] bg-gradient-to-br from-secondary-900/20 to-primary-900/20 transition-all cursor-pointer"
                style={{ borderColor: '#14b8a6' }}
              >
                <div className="text-secondary-400 flex justify-center mb-3">
                  {feature.icon}
                </div>
                <p className="text-white text-sm font-semibold drop-shadow-lg">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-secondary-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
