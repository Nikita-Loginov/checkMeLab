import React from "react";
import { motion } from "framer-motion";

import { CVETS } from "@/config";

import { CvetType } from "@/types";
interface SpeedometerProps {
  percent: number;
  color?: CvetType;
  bgCvet?: CvetType;
}



const Speedometer: React.FC<SpeedometerProps> = ({
  percent,
  color = "yellow",
  bgCvet = "yellow",
}) => {
  const value = Math.min(Math.max(percent, 0), 100);
  const transparentBgCvet = (CVETS[bgCvet]) + "80";

  const radius = 90;
  const circumference = Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="w-full h-[100px] relative flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-full h-full transform">
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke={transparentBgCvet}
          strokeWidth="20"
          strokeLinecap="round"
        />

        <motion.path
          d="M10,100 A90,90 0 0,1 190,100"
          fill="none"
          stroke={CVETS[color]}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute bottom-0 translate-y-1/2 text-center">
        <div className="font-bold text-primary-500">{value}%</div>
      </div>
    </div>
  );
};

export default Speedometer;
