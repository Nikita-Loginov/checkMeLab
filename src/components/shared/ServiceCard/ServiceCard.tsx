import { motion } from "framer-motion";

import Speedometer from "../Speedometer/Speedometer";

import { CvetType } from "@/types";

interface ServiceCardProps {
  skill: {
    name: string;
    positions: string[];
    id: number;
    now: number;
    finish: number;
    speedometerFirstColor?: CvetType;
    speedometerSecondColor?: CvetType;
  };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ skill }) => {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: skill.id * 0.1 }}
       className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow xl:grid xl:grid-cols-2 xl:gap-2 flex flex-col gap-4"
    >
      <h4 className="font-semibold text-primary-500">{skill.name}</h4>

      <div className="grid grid-cols-2 h-[140px] gap-4">
        <div className="flex flex-col items-center">
          <Speedometer percent={skill.now}  color={skill.speedometerFirstColor || "yellow"}
            bgCvet={skill.speedometerFirstColor || "yellow"}/>

          <p className="text-primary-500 font-semibold text-xs">Сейчас</p>
        </div>

        <div className="flex flex-col items-center">
          <Speedometer
            percent={skill.finish}
            color={skill.speedometerSecondColor || "yellow"}
            bgCvet={skill.speedometerSecondColor || "yellow"}
          />

          <p className="text-primary-500 font-semibold text-xs">Потенциал</p>
        </div>
      </div>
    </motion.div>
  );
};
