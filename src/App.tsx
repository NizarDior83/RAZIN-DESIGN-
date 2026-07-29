import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Methodology } from './pages/Methodology';
import { ContactPlanner } from './pages/ContactPlanner';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'work':
      case 'portfolio':
        return <Portfolio />;
      case 'methodology':
        return <Methodology />;
      case 'planner':
        return <ContactPlanner />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-canvas text-on-surface font-body-md selection:bg-selective-gold/30 relative overflow-x-hidden flex flex-col">
      {/* Header Navigation */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content View with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
