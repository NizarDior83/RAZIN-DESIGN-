import React from 'react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-background border-t border-outline-variant py-section-gap">
      <div className="max-w-container-max-width mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
        
        {/* Left Column: Brand & Copyright */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img 
              alt="RAZIN Logo Small" 
              className="h-8 w-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMepgfoI2pEs_Ve5vIfDeZKZIeU-EVxer3xZL0JHaMWbAqt3SO90AuzMRH-3FEix0dmlviV8bkT_TWQBAiD3hCRWR4Rix4YPct6TQqiUTZ5Oc9y1CT8cDVlgdAGuW1db1RUyK5l1lK0GmYEnyfKo6A0TbklyPeQgQeLzDirEX82qMNV5QaX85ljFhWhmgFkyhbS3pIgp4uITEs1Ixmv8oyOGyu4e_ZVnEOg13bPy05sx3wVQ2ctZe5WsuD5-dSQEngMI8" 
            />
            <span className="font-headline-md text-headline-md font-extrabold text-on-surface tracking-tighter">
              RAZIN
            </span>
          </div>

          <p className="text-on-surface-variant font-body-md text-body-md max-w-sm leading-relaxed">
            Defining the intersection of corporate structure and creative intuition. Designed and built for the digital future.
          </p>

          <p className="text-on-surface-variant font-label-md text-label-md">
            © 2026 RAZIN Design Company. All rights reserved.
          </p>
        </div>

        {/* Right Column: Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-on-surface font-label-md text-label-md uppercase tracking-widest">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <button onClick={() => setActiveTab('work')} className="text-left text-on-surface-variant font-label-md text-label-md hover:text-selective-gold transition-colors">
                Work
              </button>
              <button onClick={() => setActiveTab('methodology')} className="text-left text-on-surface-variant font-label-md text-label-md hover:text-selective-gold transition-colors">
                Methodology
              </button>
              <button onClick={() => setActiveTab('home')} className="text-left text-on-surface-variant font-label-md text-label-md hover:text-selective-gold transition-colors">
                Studio
              </button>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-on-surface font-label-md text-label-md uppercase tracking-widest">Company</h4>
            <nav className="flex flex-col gap-3">
              <a className="text-on-surface-variant font-label-md text-label-md hover:text-selective-gold transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-on-surface-variant font-label-md text-label-md hover:text-selective-gold transition-colors" href="#">
                Contact
              </a>
              <div className="flex gap-4 pt-4">
                <a className="text-on-surface-variant hover:text-selective-gold transition-colors" href="#">
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a className="text-on-surface-variant hover:text-selective-gold transition-colors" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  );
};
