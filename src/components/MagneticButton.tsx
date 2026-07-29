import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  id?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  id,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * 0.25;
    const distanceY = (e.clientY - centerY) * 0.25;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = 'relative inline-flex items-center justify-center font-medium px-6 py-3 rounded-full cursor-pointer transition-all duration-200 overflow-hidden group select-none';
  
  const variantStyles = {
    primary: 'bg-[#fb8500] text-[#023047] font-semibold hover:bg-[#ff9b26] shadow-[0_0_20px_rgba(251,133,0,0.3)] hover:shadow-[0_0_30px_rgba(251,133,0,0.5)]',
    secondary: 'bg-[#219ebc] text-white hover:bg-[#209dbb] border border-[#8ecae6]/20',
    outline: 'bg-transparent text-[#8ecae6] border border-[#8ecae6]/40 hover:border-[#fb8500] hover:text-[#fb8500]',
    ghost: 'bg-transparent text-[#f4ded2] hover:text-[#fb8500]',
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.button
        id={id}
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 250, damping: 15, mass: 0.5 }}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Subtle shine effect on hover */}
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
      </motion.button>
    </div>
  );
};
