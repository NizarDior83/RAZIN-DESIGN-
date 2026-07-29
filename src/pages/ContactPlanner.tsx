import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactPlanner: React.FC = () => {
  const [selectedModes, setSelectedModes] = useState<string[]>(['Branding']);
  const [budgetValue, setBudgetValue] = useState<number>(50000);
  const [fullName, setFullName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [brief, setBrief] = useState<string>('');
  const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const toggleMode = (mode: string) => {
    if (selectedModes.includes(mode)) {
      setSelectedModes(selectedModes.filter((m) => m !== mode));
    } else {
      setSelectedModes([...selectedModes, mode]);
    }
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const formattedBudget =
    budgetValue >= 100000
      ? '$100,000+'
      : `$10,000 - ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(budgetValue)}`;

  return (
    <main className="pt-32 pb-section-gap px-4 md:px-margin-desktop max-w-container-max-width mx-auto min-h-screen">
      
      {/* Terminal Header */}
      <header className="mb-16">
        <h1 className="font-headline-xl text-headline-xl text-selective-gold mb-4 font-extrabold leading-tight">
          Begin Architectural Mapping
        </h1>
        <p className="font-body-lg text-body-lg text-muted-sky max-w-2xl leading-relaxed">
          Your data is handled with end-to-end encryption. RAZIN prioritizes corporate confidentiality and intellectual property security throughout the project definition phase.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        
        {/* Left Column: Interactive Planner */}
        <div className="lg:col-span-8 space-y-12">
          
          {submitted ? (
            <div className="glass-panel p-10 rounded-xl text-center space-y-4 border border-selective-gold/40">
              <span className="material-symbols-outlined text-6xl text-selective-gold">verified</span>
              <h3 className="text-2xl font-bold text-on-surface">Constraints Transmitted</h3>
              <p className="text-muted-sky text-sm max-w-md mx-auto">
                Project mapping payload successfully logged into the terminal queue. Our lead architect will reach out to <code className="text-selective-gold">{email}</code> within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleTransmit} className="space-y-8">
              
              <div className="glass-panel p-8 rounded-xl space-y-12">
                
                {/* Step 1: Functional Mode */}
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-6 uppercase tracking-widest font-semibold">
                    01. Select Functional Mode
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['Branding', 'Digital', 'Spatial'].map((mode) => {
                      const isActive = selectedModes.includes(mode);
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => toggleMode(mode)}
                          className={`px-8 py-3 rounded-full border font-label-md text-label-md transition-all ${
                            isActive
                              ? 'bg-secondary text-canvas border-secondary font-bold shadow-lg'
                              : 'border-secondary text-secondary hover:bg-secondary/10'
                          }`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget Constraints */}
                <div>
                  <div className="flex justify-between items-end mb-6">
                    <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-semibold">
                      02. Resource Allocation
                    </label>
                    <span className="text-selective-gold font-headline-md text-xl font-extrabold" id="budget-value">
                      {formattedBudget}
                    </span>
                  </div>

                  <input
                    type="range"
                    min={10000}
                    max={100000}
                    step={5000}
                    value={budgetValue}
                    onChange={(e) => setBudgetValue(Number(e.target.value))}
                    className="w-full h-2 rounded-lg cursor-pointer accent-selective-gold bg-[#011d2b]"
                  />

                  <div className="flex justify-between mt-2 text-label-md text-muted-sky font-mono">
                    <span>$10k</span>
                    <span>$100k+</span>
                  </div>
                </div>

                {/* Step 3: Technical Parameters */}
                <div>
                  <label className="font-label-md text-label-md text-on-surface-variant block mb-2 uppercase tracking-widest font-semibold">
                    03. Project Brief / Metadata
                  </label>
                  <textarea
                    rows={4}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Describe the structural goals of your inquiry..."
                    className="input-sunken w-full p-4 rounded-lg text-on-surface font-body-md bg-[#011d2b] border border-[#574335] focus:border-selective-gold focus:outline-none transition-all"
                  />
                </div>

              </div>

              {/* Step 4: Corporate Identity */}
              <div className="glass-panel p-8 rounded-xl">
                <label className="font-label-md text-label-md text-on-surface-variant block mb-6 uppercase tracking-widest font-semibold">
                  04. Corporate Identification
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label className="text-label-md text-muted-sky block">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Identity String"
                      className="input-sunken w-full p-4 rounded-lg text-on-surface bg-[#011d2b] border border-[#574335] focus:border-selective-gold focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-label-md text-muted-sky block">Organization</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="Entity Domain"
                      className="input-sunken w-full p-4 rounded-lg text-on-surface bg-[#011d2b] border border-[#574335] focus:border-selective-gold focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-label-md text-muted-sky block">Active Channels (Email)</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="comms@entity.com"
                      className="input-sunken w-full p-4 rounded-lg text-on-surface bg-[#011d2b] border border-[#574335] focus:border-selective-gold focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submission Area */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    checked={privacyAgreed}
                    onChange={(e) => setPrivacyAgreed(e.target.checked)}
                    className="w-5 h-5 rounded bg-surface-container border-outline-variant text-mint-highlight focus:ring-mint-highlight cursor-pointer"
                  />
                  <label className="text-body-md text-on-surface-variant cursor-pointer" htmlFor="privacy">
                    I verify that all transmitted constraints adhere to the{' '}
                    <a className="text-mint-highlight underline" href="#">
                      Privacy Protocol
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-full bg-primary-container text-on-primary-container font-headline-md uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(251,133,0,0.3)] font-bold text-lg"
                >
                  Transmit Project Constraints
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right Column: Visual Anchor */}
        <div className="lg:col-span-4 space-y-gutter">
          <div className="h-full min-h-[400px] rounded-xl overflow-hidden relative border border-outline-variant/30 group shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-canvas via-transparent to-transparent" />
            <div
              className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4cxskBJNr5wJsWGjuaS_EYRRGsSsj_cWZwuWiP4Ri0D5b01nCc33-wVje5z_OOItT-UjV0IBIr1ynSw1XOtxOk9W-oaHs-OpilBlfz1PIw0YyZmgaDFhb8Ol-uUZx4H8Oa35eVy0hdJ8wHR8amnkKYWltZWtsXCk45b2QanbdZu1G7Zi1ViBD1su8UH6KJhDdZSOoeoYVgu36StWWo-paMeYqvOIGQbuyq2D92kEXRI4rdq20VHKNAg')",
              }}
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="font-label-md text-selective-gold mb-2 font-mono">SYSTEM STATUS</p>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-mint-highlight animate-pulse" />
                <span className="text-on-surface font-body-md font-semibold">Architectural Core Online</span>
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
};
