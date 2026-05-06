import React from 'react';
import { motion } from 'framer-motion';
import { Target, Microscope, Globe } from 'lucide-react';

const pillars = [
  {
    icon: Microscope,
    title: 'Precision Science',
    description:
      'Our drugs are designed to selectively bind G-quadruplex DNA structures found in the promoter regions of cancer genes — a fundamentally new approach to stopping tumour growth at the genetic level.',
  },
  {
    icon: Target,
    title: 'Targeting the Untreatable',
    description:
      'Pancreatic cancer has a 5-year survival rate of just 7%. G4 Therapeutics is focused on bringing effective treatments to patients with the most challenging and resistant cancers.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With scientific foundations in London and clinical operations expanding into China, we bridge two of the world\'s leading centres of biomedical innovation.',
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
            Our Mission
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Redefining Cancer Treatment
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-white border border-border shadow-sm hover:border-primary/40 hover:shadow-md transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}