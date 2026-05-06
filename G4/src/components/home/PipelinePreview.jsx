import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const phases = [
  { label: 'Discovery', status: 'complete' },
  { label: 'Preclinical', status: 'complete' },
  { label: 'IND Filing', status: 'complete' },
  { label: 'Phase I (US)', status: 'complete' },
  { label: 'Phase I (China)', status: 'active' },
  { label: 'Phase II', status: 'upcoming' },
];

export default function PipelinePreview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
            Development Progress
          </p>
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Clinical Pipeline
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Following positive Phase I results in the US — including actual patient responses, 
            highly unusual for a Phase I study — we are now advancing into clinical trials in China
          </p>
        </motion.div>

        {/* Pipeline tracker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-border rounded-2xl shadow-sm p-8 lg:p-12 mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <h3 className="font-heading font-semibold text-lg">
              Lead Compound — Pancreatic &amp; Solid Tumour Cancers
            </h3>
            <span className="ml-auto text-xs font-body text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              FDA Orphan Drug Status
            </span>
          </div>

          {/* Phase timeline */}
          <div className="relative overflow-x-auto pb-2">
            <div className="flex items-center justify-between relative min-w-[480px]">
              {/* Connection line */}
              <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
              <div
                className="absolute top-4 left-0 h-0.5 bg-primary transition-all"
                style={{ width: '70%' }}
              />

              {phases.map((phase) => (
                <div key={phase.label} className="relative flex flex-col items-center z-10">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      phase.status === 'complete'
                        ? 'bg-primary border-primary'
                        : phase.status === 'active'
                        ? 'bg-primary/20 border-primary animate-pulse'
                        : 'bg-white border-border'
                    }`}
                  >
                    {phase.status === 'complete' && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                    {phase.status === 'active' && (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <span
                    className={`mt-3 text-xs font-body font-medium text-center max-w-[70px] ${
                      phase.status === 'active'
                        ? 'text-primary'
                        : phase.status === 'complete'
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {phase.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* US Phase I highlight */}
          <div className="mt-8 p-4 bg-primary/5 border border-primary/15 rounded-xl">
            <p className="text-sm font-body text-muted-foreground">
              <span className="text-primary font-semibold">US Phase I results:</span>{' '}
              The drug was well-tolerated and produced positive clinical responses in several patients — 
              a highly unusual and encouraging finding for a Phase I safety study.
            </p>
          </div>
        </motion.div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="font-body border-border text-foreground hover:bg-secondary"
          >
            <Link to="/pipeline">
              Full Pipeline Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}