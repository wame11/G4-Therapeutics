const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/737a6c574_generated_d6549fbd.png"
          alt="G-quadruplex molecular structure visualization glowing with blue light"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <FlaskConical className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-body font-medium">
              First-in-class G-quadruplex therapy
            </span>
          </motion.div>

          <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tight mb-6">
            From London Discovery
            <br />
            <span className="text-primary font-normal">to Clinical Reality</span>
          </h1>

          <p className="text-muted-foreground font-body text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
            G4 Therapeutics is developing a revolutionary class of cancer drugs 
            that target G-quadruplex DNA structures in cancer genes — bringing 
            new hope to patients with pancreatic and other difficult-to-treat cancers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-body text-base px-8 py-6">
              <Link to="/science">
                Explore the Science
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-body text-base px-8 py-6 border-border text-foreground hover:bg-secondary"
            >
              <Link to="/pipeline">View Pipeline</Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10"
        >
          {[
            { value: '28+', label: 'Years of Research' },
            { value: 'Phase I', label: 'Clinical Trials' },
            { value: '25+', label: 'Patent Countries' },
            { value: 'FDA', label: 'Orphan Drug Status' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-heading font-semibold text-primary">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-body mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}