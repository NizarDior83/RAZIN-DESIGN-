import React from 'react';
import { motion } from 'framer-motion';

export const Methodology: React.FC = () => {
  return (
    <main className="bg-canvas pt-32 md:pt-40 pb-section-gap overflow-hidden min-h-screen">
      
      {/* Philosophy Hero Section */}
      <section className="max-w-container-max-width mx-auto px-4 md:px-margin-desktop text-center mb-section-gap">
        <div className="inline-block px-4 py-1.5 border border-selective-gold rounded-full mb-8">
          <span className="text-selective-gold font-label-md text-label-md uppercase tracking-widest font-semibold">
            ENGINEERING FIRST
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 max-w-4xl mx-auto font-extrabold leading-tight">
          Design is an Exact <span className="text-selective-gold">Engineering Discipline.</span>
        </h1>

        <p className="font-body-lg text-body-lg text-muted-sky max-w-3xl mx-auto leading-relaxed">
          We reject the industry's reliance on artistic ambiguity and "gut feeling." At RAZIN, every pixel is the result of mathematical structure, geometric logic, and structural integrity. Our work isn't just felt—it is calculated.
        </p>
      </section>

      {/* Sequential Blueprint Timeline Section */}
      <section className="max-w-container-max-width mx-auto px-4 md:px-margin-desktop pb-section-gap">
        <div className="relative space-y-16 lg:space-y-24">
          
          {/* Timeline Vertical Line Accent */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-muted-sky/20 hidden lg:block -translate-x-1/2" />

          {/* 01: Discovery & DNA Analysis */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div className="lg:order-1">
              <div className="bg-surface-container/30 border border-muted-sky/20 p-8 md:p-10 rounded-xl hover:bg-surface-container/50 transition-all duration-500 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 font-headline-xl text-5xl opacity-10 text-selective-gold select-none font-extrabold">
                  01
                </div>

                <span className="text-selective-gold font-headline-md text-2xl font-bold block mb-4">
                  01
                </span>

                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 font-bold">
                  Discovery &amp; DNA Analysis
                </h3>

                <p className="font-body-md text-muted-sky mb-6 leading-relaxed">
                  We begin by dissecting the brand's core architecture. This stage involves deep-tissue research into site context, competitive spatial logic, and target demographic behavior patterns.
                </p>

                {/* Blueprint Grid Graphic */}
                <div className="grid grid-cols-3 gap-3 p-4 bg-[#011d2b] rounded-lg border border-outline-variant/30">
                  <div className="h-16 rounded bg-on-secondary-fixed-variant/50 border border-muted-sky/20 flex flex-col items-center justify-center">
                    <span className="text-selective-gold text-[10px] font-bold">DATA</span>
                    <div className="w-8 h-1 bg-selective-gold/60 mt-1 rounded-full" />
                  </div>
                  <div className="h-16 rounded bg-on-secondary-fixed-variant/50 border border-muted-sky/20 flex flex-col items-center justify-center">
                    <span className="text-selective-gold text-[10px] font-bold">DNA</span>
                    <div className="w-6 h-1 bg-selective-gold/60 mt-1 rounded-full" />
                  </div>
                  <div className="h-16 rounded bg-on-secondary-fixed-variant/50 border border-muted-sky/20 flex flex-col items-center justify-center">
                    <span className="text-selective-gold text-[10px] font-bold">MAP</span>
                    <div className="w-4 h-1 bg-selective-gold/60 mt-1 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 flex justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 border border-outline-variant/30 shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  alt="Architectural Blueprints on Navy Paper"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnsfKeEWsSXdVxggMkfRUfhj2EMjiKM6C5IdeuNl0bqwM0QRXRW8hXXReVBQJ376XCGeqPO-3pH7Q4LhZ1IjEA2uVC6uvT_5mNgL947h6OZ-Z-RNNgr42hOOPScqjyjjBPskUYJTnRPUZuQwTL69rAv49UhP70bER73fBZrheTZqdT93R8U4tfPWQ8evpz-UtF28Yzs3iMYC6mWDW3SGY82k1p41TI_fTWANbuoagSeoNftthkM-o9Tw"
                />
              </div>
            </div>
          </div>

          {/* 02: Structural Blueprinting */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
            <div className="lg:order-2">
              <div className="bg-surface-container/30 border border-muted-sky/20 p-8 md:p-10 rounded-xl hover:bg-surface-container/50 transition-all duration-500 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-4 font-headline-xl text-5xl opacity-10 text-selective-gold select-none font-extrabold">
                  02
                </div>

                <span className="text-selective-gold font-headline-md text-2xl font-bold block mb-4">
                  02
                </span>

                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4 font-bold">
                  Structural Blueprinting
                </h3>

                <p className="font-body-md text-muted-sky mb-6 leading-relaxed">
                  Strategy is translated into structural skeletons. Wireframes are built on a rigid 12-column grid, prioritizing cognitive load reduction and seamless user navigation pathways.
                </p>

                <div className="flex gap-4 p-4 bg-[#011d2b] rounded-lg border border-outline-variant/30">
                  <div className="flex-1 h-12 border border-muted-sky/40 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-mono text-selective-gold">GRID MATRIX 12-COL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 flex justify-center">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 border border-outline-variant/30 shadow-2xl bg-surface-container">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#023047] via-[#209dbb]/20 to-[#1b110a] p-8">
                  <div className="border border-selective-gold/40 rounded-xl p-6 w-full h-full flex flex-col justify-between">
                    <div className="flex justify-between items-center text-xs font-mono text-selective-gold">
                      <span>SYSTEM_BLUEPRINT_V3</span>
                      <span>LATENCY: 0.1ms</span>
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-selective-gold/30 rounded" />
                      <div className="w-3/4 h-2 bg-muted-sky/30 rounded" />
                      <div className="w-1/2 h-2 bg-muted-sky/20 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
