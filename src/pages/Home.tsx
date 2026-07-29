import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center px-4 md:px-margin-desktop max-w-container-max-width mx-auto py-16 md:py-section-gap overflow-hidden relative">
        <div className="max-w-4xl z-10 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-headline-xl text-4xl sm:text-6xl md:text-[80px] leading-tight text-selective-gold font-extrabold tracking-tight"
          >
            Structured. Modern.<br />
            <span className="text-selective-gold">Precise Design.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body-lg text-body-lg text-muted-sky max-w-2xl leading-relaxed"
          >
            We bridge the gap between architectural rigor and digital expression. Our studio crafts high-performance digital environments where structural precision meets uncompromising creative vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-6 pt-4"
          >
            <button
              onClick={() => setActiveTab('planner')}
              className="bg-primary-container text-on-primary-container font-label-md text-label-md px-10 py-5 rounded-full hover:shadow-[0_0_25px_rgba(251,133,0,0.5)] transition-all duration-300 flex items-center gap-3 group font-bold"
            >
              Partner with Razin
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <button
              onClick={() => setActiveTab('methodology')}
              className="border border-muted-sky/30 text-muted-sky font-label-md text-label-md px-10 py-5 rounded-full hover:bg-muted-sky/10 transition-all duration-300"
            >
              View Methodology
            </button>
          </motion.div>
        </div>

        {/* Atmospheric Accent Blur */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Methodology Section */}
      <section className="py-section-gap px-4 md:px-margin-desktop bg-surface-container-lowest/30" id="methodology">
        <div className="max-w-container-max-width mx-auto">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Our Methodology</h2>
            <div className="w-20 h-1 bg-selective-gold rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            {/* Phase 1: Discovery */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-secondary-container/5 border border-outline-variant/30 p-10 rounded-xl hover:border-secondary-fixed transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">search</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Discovery</h3>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                Deep diving into your architectural DNA. We identify core values and functional requirements through rigorous stakeholder alignment and research.
              </p>
            </motion.div>

            {/* Phase 2: Strategy */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-secondary-container/5 border border-outline-variant/30 p-10 rounded-xl hover:border-secondary-fixed transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Strategy</h3>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                Crafting the structural blueprint. We define user flows and design systems that ensure scalability and aesthetic longevity.
              </p>
            </motion.div>

            {/* Phase 3: Execution */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-secondary-container/5 border border-outline-variant/30 p-10 rounded-xl hover:border-secondary-fixed transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-lg bg-secondary-container/20 flex items-center justify-center mb-8 text-secondary group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">draw</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Execution</h3>
              <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
                High-fidelity implementation. Our designers and developers work in unison to build immersive digital experiences with pixel-perfect precision.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-section-gap px-4 md:px-margin-desktop max-w-container-max-width mx-auto" id="work">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Selected Case Studies</h2>
            <div className="w-20 h-1 bg-selective-gold rounded-full" />
          </div>
          <button 
            onClick={() => setActiveTab('work')}
            className="text-muted-sky font-label-md flex items-center gap-2 hover:text-selective-gold transition-colors"
          >
            View Portfolio <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>

        {/* Case Study 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-section-gap">
          <div className="aspect-video bg-surface-container-high rounded-xl overflow-hidden shadow-2xl group border border-outline-variant/30">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Apex Living Platform UI" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBorKvLuRboVCOaAU4iEayKVx6HJI15boXkQ0xYvKEKWgbE1tC0tBCc5gNoPB6e6AbgUMoQbNh61rqoPM4S7PHGWV1U0ZzGAQXL7-WiEm59hXNXOG95MeazeKd_FbjGCoPEOtK1VY0ZdTgQS4RisXvry9JoC_HFZmz4BJkY10FbURWyX46paI1SWLGhRUAGGRj_VH4tKOnfc3sPOGLlVNnIaVRaqc_ffwh9YwFhXBHaGgClr3v7uL121w" 
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-selective-gold font-label-md tracking-widest uppercase">Structural Innovation</span>
              <h3 className="font-headline-xl text-headline-xl text-on-surface">Apex Living Platform</h3>
            </div>
            <p className="text-muted-sky font-body-lg">
              A complete digital ecosystem for premium property management, focusing on minimal friction and architectural-grade aesthetics.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant pt-8">
              <div>
                <div className="text-headline-md text-on-surface font-bold">140%</div>
                <div className="text-on-surface-variant font-label-md">Engagement Lift</div>
              </div>
              <div>
                <div className="text-headline-md text-on-surface font-bold">2.4s</div>
                <div className="text-on-surface-variant font-label-md">Avg. Load Speed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
          <div className="lg:order-2 aspect-video bg-surface-container-high rounded-xl overflow-hidden shadow-2xl group border border-outline-variant/30">
            <img 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Engine Core Dashboard UI" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQeuUT4-G-bnhIKD4JvrDWYGdTmTJabARNIC6BUMse1EoJe1eg8y97vc_oG7xBJ5f0yE411rSQZsyN5A97d10-LiB09myM4GykOv5vDbWujxLbyTThOFzRjtjsJlKCD7jbTRo8AKdfCa_kuwXaEaUILThslRbXWcfGGCo_VWfVvkgtd-MnkPwaVA_c53Q0Zw4HK4j5Fi9C7q35PVr0xYKT5o_gDNRUOnhjWgs_DCKE0Piqz5D0Y8Pryw" 
            />
          </div>
          <div className="lg:order-1 space-y-8">
            <div className="space-y-2">
              <span className="text-selective-gold font-label-md tracking-widest uppercase">Systemic Design</span>
              <h3 className="font-headline-xl text-headline-xl text-on-surface">Engine Core Dashboard</h3>
            </div>
            <p className="text-muted-sky font-body-lg">
              Streamlining complex engineering data into a high-contrast, intuitive management tool for global industrial operations.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-outline-variant pt-8">
              <div>
                <div className="text-headline-md text-on-surface font-bold">32+</div>
                <div className="text-on-surface-variant font-label-md">Modular Assets</div>
              </div>
              <div>
                <div className="text-headline-md text-on-surface font-bold">Global</div>
                <div className="text-on-surface-variant font-label-md">System Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-section-gap px-4 md:px-margin-desktop bg-canvas relative overflow-hidden" id="studio">
        <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-6">Build the Future.</h2>
          <p className="text-muted-sky font-body-lg">Ready to elevate your digital presence? Inquire about our quarterly project openings.</p>
        </div>

        <div className="max-w-2xl mx-auto relative z-10 bg-surface-container/50 p-8 md:p-12 rounded-2xl border border-outline-variant/30 backdrop-blur-sm shadow-2xl">
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <span className="material-symbols-outlined text-6xl text-selective-gold">task_alt</span>
              <h3 className="text-2xl font-bold text-on-surface">Inquiry Received</h3>
              <p className="text-muted-sky text-sm">Thank you for reaching out. Our engineering team will review your inquiry within 4 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant px-1">Full Name</label>
                  <input 
                    required
                    className="w-full bg-[#001e30] border-transparent rounded-lg p-4 text-on-surface placeholder:text-outline-variant glow-gold transition-all duration-300 focus:outline-none focus:border-selective-gold" 
                    placeholder="John Doe" 
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant px-1">Email Address</label>
                  <input 
                    required
                    className="w-full bg-[#001e30] border-transparent rounded-lg p-4 text-on-surface placeholder:text-outline-variant glow-gold transition-all duration-300 focus:outline-none focus:border-selective-gold" 
                    placeholder="john@example.com" 
                    type="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant px-1">Project Category</label>
                <select className="w-full bg-[#001e30] border-transparent rounded-lg p-4 text-on-surface glow-gold transition-all duration-300 focus:outline-none">
                  <option>Identity & Brand System</option>
                  <option>Product Design (UX/UI)</option>
                  <option>Architectural Visualization</option>
                  <option>Full Digital Ecosystem</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant px-1">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#001e30] border-transparent rounded-lg p-4 text-on-surface placeholder:text-outline-variant glow-gold transition-all duration-300 focus:outline-none" 
                  placeholder="Tell us about your structural goals..."
                />
              </div>

              <button className="w-full bg-primary-container text-on-primary-container font-headline-md text-headline-md py-5 rounded-full hover:shadow-[0_0_25px_rgba(251,133,0,0.5)] transition-all duration-300 active:scale-95 font-bold">
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Structural Accent SVG */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none">
          <svg className="w-full h-full fill-selective-gold" viewBox="0 0 100 100">
            <path d="M0,100 L100,100 L100,0 Z" />
          </svg>
        </div>
      </section>

    </div>
  );
};
