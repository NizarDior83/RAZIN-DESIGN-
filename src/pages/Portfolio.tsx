import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects = [
    {
      id: 'lumina',
      title: 'Lumina Tech Framework',
      category: 'branding',
      categoryLabel: 'Identity / Systems',
      description: 'Systemic branding framework for high-scale enterprise tech.',
      colSpan: 'md:col-span-7',
      height: 'h-[500px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCphAenOqY6Kmxgj7x9QO_FynR-7On4umO7Wl_swmGD4U_jRVRC-B9jBXsf60nn3Gle0wTetyxvjG7x4uF7mkdL8myZImu8jMf9V88tK-dkODF6Pa_62lqYuu0PVtacHPwj26epKjOdEMBKGMtDDsPQrikoonWx6KZr3RHCLAusujyUFlt1tbLNG75BGoMZBwdee3xOvVtnMSgMxgY-U27bUgrdrazpILrMPxxDWsFdUrlFKqRP4IvYKQ')",
      tags: ['Constraint: Scalability', 'Tools: Figma, React', 'Impact: +40% UX'],
    },
    {
      id: 'aero',
      title: 'Aero Dynamics Rebrand',
      category: 'branding',
      categoryLabel: 'Branding',
      description: 'Engineering a motion-first visual language for an aerospace innovator.',
      colSpan: 'md:col-span-5',
      height: 'h-[500px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnn7Js6f28mn-uysnRqDaesmoRGfHs-ANnUZ0_EbsKjFWIY9sGb76VEsCtP0_TP3U41imdcJsJllhADy5ZU4IXJ5IDB7ene0WiDpcUzKVraAC36Uzndp_9QAUwOf_yBQcjLOgmhYRi5qwthUSF8ZSwXhPdxc1QR3raG9ZJ6buOzSyEZijdoHF6GP0WipnekzaHmcnykRQqZDtFXCONkzDRc021NWVNc4AjA2w2ziNdysZpO43PQoXZSQ')",
      tags: ['Impact: Global Launch'],
    },
    {
      id: 'quant',
      title: 'Quant Portal',
      category: 'digital',
      categoryLabel: 'Digital Products',
      description: 'High-contrast data visualization portal.',
      colSpan: 'md:col-span-4',
      height: 'h-[400px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdHZF1HzCF45-Ry0EraLeIUYNIO_1CZO1vLtu9vvftFihL0Zr6HaYVpuC6lhuY0Td8FUreXogLT4gN-R1z0h3fdzK3G9I_ldmjt1oXS2WwqQlzbvLhhSBQQv6bJg3z3UljeEUrNqPAW9V5L9gl3_h6AFR43fgWqL-JKnQgxq1MjsEzf9DdMeUUfwyLo-nScUKwFavCT1ycbBWgcqq8xFuwaTJguj4RTtOda3n45GBYBNBoHeiScgNMOg')",
      tags: ['Tools: D3.js, WebGL'],
    },
    {
      id: 'vortex',
      title: 'Vortex Pavilion',
      category: 'spatial',
      categoryLabel: 'Spatial Architecture',
      description: 'Floating spatial exhibition environment.',
      colSpan: 'md:col-span-4',
      height: 'h-[400px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC0x-MGW6j25OW5r5fEIgi_RRGSIIx8mwG9zkOeyh-0dIpcc_YwzU9BfpCA_NsMDE0HvjDuUUXJ5-SepfR3jT0fqkORzhSqsJXkSrOx19lA-0qO_oSWsjTBtJCSh-aAlgNzpi4cqXXu2fbyv_SAyZ9WegLTPwSxPDcNcmQHpYAWn4dLiGY3AZoY_Yspe_7SuybImjPHT2TB7L0uw2-zAnMGRAEPB9WXcnaCxbZqnKcUHeilMBuQBEZtdw')",
      tags: ['Impact: 1.2M Visitors'],
    },
    {
      id: 'nexus',
      title: 'Nexus Core',
      category: 'digital',
      categoryLabel: 'Digital Products',
      description: 'Origami light structure render.',
      colSpan: 'md:col-span-4',
      height: 'h-[400px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPFjm_vj6AsBZWYN8KdFQZlSeVmaQlI-YxnyfxoKVoLmXeODhlYMyPg573jaR8Gob_DQdXBozeaGnMDmGi89givavidvZxmBc386qQi_yZ8FyV5BuZAk2oIIgXRC9OpoLoF3SJLyneAIULjFNy9bmCQVP4JzGu9U-50Acft7OJGoLT-DAKgQ0xBI_2abbIryR8ntBoh9CtygUGX9_tdngF942z3e3T6pcwa_6sF8rdeKsYIJQxWXn3wA')",
      tags: ['Constraint: 0.2ms Latency'],
    },
    {
      id: 'razin-method',
      title: 'The RAZIN Method',
      category: 'branding',
      categoryLabel: 'Publication',
      description: 'Monochromatic design system publication.',
      colSpan: 'md:col-span-5',
      height: 'h-[450px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0hQbqHG1YphDwRTf-8uNMoYMcCr6raGOyr1FFYUark0Sep3MkaWRe7k1X2rQL5ctLxEYeW8LM4El2KEHcdYg-3jgTiUT0LkygJH1CkhkXgIehvyx0o02Ed86WHkmE3wXEjVcTsQmYfIjoYAbFGCRbjkwGUDvllrwQev-VZjrnnHfqM7U34x12lgHZp0eEsNIubKnzTvfgNoqmXFSMtBc06zB4_wYLckaHBzHtJn6EbLkbQdQBJQLrKA')",
      tags: ['Edition: 04 (Sold Out)'],
    },
    {
      id: 'urban-grid',
      title: 'Urban Grid OS',
      category: 'spatial',
      categoryLabel: 'Infrastructure',
      description: 'City-wide digital infrastructure OS.',
      colSpan: 'md:col-span-7',
      height: 'h-[450px]',
      bgImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7N5gEWHuY5dbBSr96DqOr__7nC3j764htviWhT1-Z4pLaiyMwoK4u--P4JxdVyshZVg7iEF0UKMouTBsuajxCtpPRhpvGgALrFKTkYBkKIPWF1L_xA2THi3Mrrb8yk9jlLtxHirVt6C50yuxyit6lq8Ly0wx6fJU2vJYSvuAX2BuZWm2SVcviYriZ8EXYRNwjIkmcN2Pgsm1mnnNtGOQTfu_1rT2F5DiD549U0ka6tZCAVpKKDuneVQ')",
      tags: ['Scale: City-Wide', 'Impact: Net Zero'],
    },
  ];

  const filteredProjects = projects.filter((p) => activeFilter === 'all' || p.category === activeFilter);

  return (
    <main className="mt-20">
      
      {/* Introduction Header */}
      <section className="relative py-section-gap px-4 md:px-margin-desktop max-w-container-max-width mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <span className="material-symbols-outlined text-[300px] leading-none select-none">architecture</span>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-selective-gold" />
            <span className="text-selective-gold font-label-md text-label-md uppercase tracking-widest">
              Portfolio Index
            </span>
          </div>

          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-8 leading-tight font-extrabold">
            Selected Works &amp; <br />
            <span className="text-primary">Structural Assets</span>
          </h1>

          <div className="flex flex-wrap gap-8 md:gap-12 border-l border-outline-variant/30 pl-6 md:pl-8 mt-12">
            <div>
              <p className="text-selective-gold font-headline-md text-headline-md font-extrabold">50+</p>
              <p className="text-on-surface-variant font-label-md text-label-md uppercase">Systems Delivered</p>
            </div>
            <div>
              <p className="text-selective-gold font-headline-md text-headline-md font-extrabold">12</p>
              <p className="text-on-surface-variant font-label-md text-label-md uppercase">Global Awards</p>
            </div>
            <div>
              <p className="text-selective-gold font-headline-md text-headline-md font-extrabold">98%</p>
              <p className="text-on-surface-variant font-label-md text-label-md uppercase">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Ribbon */}
      <section className="px-4 md:px-margin-desktop max-w-container-max-width mx-auto mb-16">
        <div className="flex flex-wrap gap-3 py-4 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All' },
            { id: 'branding', label: 'Branding Systems' },
            { id: 'digital', label: 'Digital Products' },
            { id: 'spatial', label: 'Spatial Architecture' },
          ].map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-8 py-2.5 rounded-full font-label-md text-label-md transition-all ${
                  isActive
                    ? 'bg-selective-gold text-canvas font-bold shadow-lg'
                    : 'bg-surface-variant/50 text-on-surface-variant border border-outline-variant hover:border-selective-gold'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Grid (Asymmetrical Layout from Stitch) */}
      <section className="px-4 md:px-margin-desktop max-w-container-max-width mx-auto mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`${project.colSpan} group relative ${project.height} rounded-xl overflow-hidden cursor-pointer bg-secondary-container shadow-2xl`}
            >
              {/* Background Image with Hover Scale */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: project.bgImage }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#023047]/95 via-[#023047]/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                <span className="text-muted-sky font-label-md text-label-md mb-2 block uppercase tracking-tighter">
                  {project.categoryLabel}
                </span>

                <h3 className="text-selective-gold font-headline-md text-headline-md font-bold mb-3">
                  {project.title}
                </h3>

                {project.description && (
                  <p className="text-on-surface/80 text-sm mb-4 line-clamp-2 hidden sm:block">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-muted-sky text-xs font-mono bg-canvas/80 px-2.5 py-1 rounded border border-outline-variant/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-margin-desktop mb-section-gap">
        <div className="max-w-container-max-width mx-auto bg-secondary-container rounded-[2rem] p-8 md:p-24 relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold leading-tight">
              Ready to engineer your brand architecture?
            </h2>

            <p className="text-on-surface-variant font-body-lg text-body-lg">
              We specialize in turning complex creative challenges into authoritative, structured visual realities for world-class innovators.
            </p>

            <button className="bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-headline-md text-headline-md font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(251,133,0,0.4)] mt-4">
              Initiate Consultation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};
