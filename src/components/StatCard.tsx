import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  subtext: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass-card p-6 rounded-2xl relative overflow-hidden group border border-[#8ecae6]/20 bg-gradient-to-br from-[#281d15]/80 to-[#1b110a]/90"
    >
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-[#fb8500]">
        {icon}
      </div>

      <div className="text-xs font-mono text-[#8ecae6] uppercase tracking-wider mb-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#fb8500]" />
        {label}
      </div>

      <div className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2 font-sans group-hover:text-[#ffb703] transition-colors">
        {value}
      </div>

      <p className="text-xs text-[#dec1ae] font-light leading-relaxed">
        {subtext}
      </p>

      {/* Dynamic bottom line highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#fb8500] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};
