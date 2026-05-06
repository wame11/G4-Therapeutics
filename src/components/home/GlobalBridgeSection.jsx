const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';

export default function GlobalBridgeSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
            Global Presence
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            London to China
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Bridging world-class drug discovery at University College London with 
            clinical testing infrastructure in China — one of the world's most 
            important markets for new cancer treatments
          </p>
        </motion.div>

        {/* Split image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-lg"
        >
          <img
            src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/4bb1fa675_generated_3ae805e2.png"
            alt="London and Shanghai skylines connected - representing G4 Therapeutics' global bridge"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

          {/* Labels */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/70 text-xs font-body font-medium uppercase tracking-widest mb-1">
                  Discovery
                </p>
                <h3 className="font-heading font-semibold text-xl text-white">
                  London, UK
                </h3>
                <p className="text-white/70 text-sm font-body mt-1">
                  UCL School of Pharmacy
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30" />
              <div className="text-right">
                <p className="text-white/70 text-xs font-body font-medium uppercase tracking-widest mb-1">
                  Clinical Trials
                </p>
                <h3 className="font-heading font-semibold text-xl text-white">
                  China
                </h3>
                <p className="text-white/70 text-sm font-body mt-1">
                  Clinical Testing Centres
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* China context callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-1">100,000+</div>
              <div className="text-muted-foreground text-sm font-body">New pancreatic cancer cases per year in China</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-1">#1</div>
              <div className="text-muted-foreground text-sm font-body">China is a critical market for innovative cancer drugs</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-semibold text-primary mb-1">7%</div>
              <div className="text-muted-foreground text-sm font-body">5-year survival rate for pancreatic cancer — a major unmet need</div>
            </div>
          </div>
        </motion.div>

        {/* Two-column detail */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/85540c052_generated_bf27a7f1.png"
              alt="Modern pharmaceutical research laboratory"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent rounded-2xl" />
            <div className="absolute bottom-0 p-6">
              <h4 className="font-heading font-semibold text-lg text-white mb-1">Drug Discovery</h4>
              <p className="text-white/75 text-sm font-body">
                28 years of pioneering G-quadruplex research led by Prof. Stephen Neidle
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-md"
          >
            <img
              src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/69a096773_generated_4b056b74.png"
              alt="Modern clinical trial facility"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent rounded-2xl" />
            <div className="absolute bottom-0 p-6">
              <h4 className="font-heading font-semibold text-lg text-white mb-1">Clinical Testing in China</h4>
              <p className="text-white/75 text-sm font-body">
                Expanding into China — a country with over 100,000 new pancreatic cancer cases annually
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}