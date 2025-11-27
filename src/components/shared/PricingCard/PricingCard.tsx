import { motion } from "framer-motion";
import { rc } from "@/utils/rc";

import { CheckIcon, StarIcon } from "@heroicons/react/24/outline";

import { PriceType } from "@/types";

import { useModal } from "@/context/ModalContext";

type PricingCardProps = {
  plan: PriceType;
  className?: string;
  index?: number;
};

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  index,
  className,
}) => {
  const { openModal } = useModal();

  const openReport = (link: string) => {
    if (!link) return;

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index ? index * 0.15 : 0.15 }}
      viewport={{ once: true }}
      className={rc([
        `relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
          plan.popular ? "ring-2 ring-secondary-500 scale-105" : ""
        }`,
        className,
      ])}
      style={{
        backgroundColor: plan.variant === "white" ? "#ffffff" : "#eeeeee",
      }}
    >
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute z-20 -top-4 left-1/2 transform -translate-x-1/2"
        >
          <div className={rc([""])}></div>
          <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
            <StarIcon className="w-4 h-4" />

            <span>Популярный</span>
          </div>
        </motion.div>
      )}

      <div className="p-6 flex flex-col gap-4 h-full">
        <div className="text-center flex flex-col gap-2">
          <h3 className="text-xl font-bold text-primary-500">{plan.name}</h3>

          <div className="flex flex-col gap-2">
            <div>
              <span className="text-3xl font-bold text-primary-500">
                {plan.price}
              </span>
              <span className="text-gray-500">₽</span>
            </div>
            {plan.priceLabel && (
              <div className="text-sm text-gray-500">{plan.priceLabel}</div>
            )}
            {/* {targetAudience === 'personal' && 'originalPrice' in plan && (
                <div className="text-sm text-green-600 font-medium mt-2">
                  Цена со скидкой: {plan.originalPrice} ₽
                </div>
              )} */}
          </div>

          <p className="text-sm text-gray-500">{plan.description}</p>
        </div>

        {plan.listTextHead && plan?.features && plan?.features.length > 0 ? (
          <p className="text-left font-bold">{plan.listTextHead}</p>
        ) : null}

        {plan.features && (
          <ul className="flex flex-col gap-1">
            {plan.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-2 bg-green-100 text-green-600">
                  <CheckIcon className="w-3 h-3" />
                </div>

                <span className="text-sm text-primary-500 text-left">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div
          className={`grid ${
            plan.link ? "grid-cols-2" : "grid-cols-1"
          } gap-2.5 mt-auto`}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
            className={`w-full py-3 px-6 rounded-lg mt-auto font-semibold transition-all duration-300 ${
              plan.popular
                ? "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-teal hover:shadow-teal-lg"
                : `${
                    plan.variant === "white" ? "bg-light" : "bg-white"
                  } text-primary-500 hover:bg-gray-200`
            }`}
          >
            {plan.btnText ? plan.btnText : "Купить"}
          </motion.button>

          {plan.link && (
            <motion.a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-6 rounded-lg mt-auto font-semibold transition-all duration-300 ${`${
                plan.variant === "white" ? "bg-light" : "bg-white"
              } text-primary-500 hover:bg-gray-200`}`}
            >
              {"Отчет"}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
