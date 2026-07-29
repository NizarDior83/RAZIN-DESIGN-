import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/20">
      <div className="flex justify-between items-center px-4 md:px-margin-desktop h-20 w-full max-w-container-max-width mx-auto">
        
        {/* Logo and Studio Name */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center gap-4 cursor-pointer group"
        >
          <img 
            alt="RAZIN Logo" 
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKyMaEbmrftF79wyTpwooKuIP5iDmYheLxTwSNLCv9CmNQ4yxSYHoWJCfDFALhGjLi1UjVd8aKDPrZAlL8J13LBi20J4XwD8c0_zUj8wH5IMzQSpiJJozXKZL0KIohWpee6NK2yiH_-5ugifF46lOz5VqmOo9E_X4_-_OeCVxkglb-_9jHRK4zzGhaX8UR81ikX4DUFqm45U4mFE3OAx5SiiyWVKaikmO4FAlGJxnxACrm82AfrQ0vgvd4s9T2Zog0kRI" 
          />
          <span className="font-headline-md text-headline-md font-extrabold text-on-surface tracking-tighter">
            RAZIN
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => setActiveTab('home')} 
            className={`font-label-md text-label-md transition-colors duration-300 ${
              activeTab === 'home' ? 'text-selective-gold font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Studio
          </button>
          
          <button 
            onClick={() => setActiveTab('work')} 
            className={`font-label-md text-label-md transition-colors duration-300 ${
              activeTab === 'work' ? 'text-selective-gold font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Work
          </button>

          <button 
            onClick={() => setActiveTab('methodology')} 
            className={`font-label-md text-label-md transition-colors duration-300 ${
              activeTab === 'methodology' ? 'text-selective-gold font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Methodology
          </button>

          <button 
            onClick={() => setActiveTab('planner')} 
            className={`font-label-md text-label-md transition-colors duration-300 ${
              activeTab === 'planner' ? 'text-selective-gold font-bold' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Project Planner
          </button>
        </div>

        {/* Start Project CTA Button */}
        <button 
          onClick={() => setActiveTab('planner')}
          className="bg-primary-container text-on-primary-container font-label-md text-label-md px-6 md:px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 active:scale-95 shadow-[0_0_20px_rgba(251,133,0,0.3)] font-bold"
        >
          Start Project
        </button>
      </div>
    </nav>
  );
};
