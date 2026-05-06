const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Loader2, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const milestones = [
  {
    phase: 'Discovery & Invention',
    year: '1997 – 2020',
    status: 'complete',
    details: [
      'Pioneered G-quadruplex targeting concept at UCL — the first group to demonstrate biological effect 28 years ago',
      'Developed multiple generations of G4-binding compounds',
      'Invented lead compound with exceptional potency against pancreatic cancer in 2020',
    ],
  },
  {
    phase: 'Preclinical Development',
    year: '2020 – 2022',
    status: 'complete',
    details: [
      'Demonstrated potent in vitro and in vivo anticancer activity',
      'Completed toxicology and formulation studies',
      'Scale-up synthesis completed',
      'Licensed to Qualigen Therapeutics Inc by UCL Business (January 2022)',
    ],
  },
  {
    phase: 'IND Filing & FDA Clearance',
    year: '2022 – 2023',
    status: 'complete',
    details: [
      'Granted FDA Orphan Drug Designation for pancreatic cancer (late 2022)',
      'Investigational New Drug (IND) application submitted',
      'FDA clearance granted for human Phase I trials (July 2023)',
      'Patents granted in 25+ countries worldwide including USA, Europe, China, Russia and India',
    ],
  },
  {
    phase: 'Phase I Clinical Trials (USA)',
    year: '2023 – 2024',
    status: 'complete',
    details: [
      'First patients dosed at START Midwest, Grand Rapids, Michigan',
      'Pilot dose-escalation study in advanced/metastatic solid tumours',
      'Drug demonstrated to be well tolerated — primary objective achieved',
      'Positive clinical responses observed in several patients — a highly unusual and encouraging finding for a Phase I safety study',
      'Early positive indications of clinical activity strengthen confidence for expansion',
    ],
  },
  {
    phase: 'Phase I Clinical Trials (China)',
    year: '2025 – Present',
    status: 'active',
    details: [
      'China is an exceptionally important and exciting new frontier for this drug',
      'Over 100,000 new pancreatic cancer cases diagnosed in China every year',
      'Targeting cancers where existing treatments have not made a great deal of impact',
      'Expert advisors involved in both science and clinical science',
      'G4 Therapeutics has the expertise and dedication required for this development',
    ],
  },
  {
    phase: 'Phase II Expansion',
    year: 'Planned',
    status: 'upcoming',
    details: [
      'Expanded patient cohort in pancreatic cancer in China and globally',
      'Potential expansion to additional difficult-to-treat tumour types',
      'Building on Phase I safety and efficacy data',
    ],
  },
];

const statusIcon = {
  complete: <CheckCircle2 className="w-5 h-5 text-primary" />,
  active: <Loader2 className="w-5 h-5 text-primary animate-spin" />,
  upcoming: <Circle className="w-5 h-5 text-muted-foreground" />,
};

export default function Pipeline() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/42b9782e7_generated_11f88243.png"
            alt="Pipeline molecular nodes visualization"
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 to-white/75" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
              Pipeline
            </p>
            <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              From Lab to
              <br />
              <span className="text-primary">Patient Bedside</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Following positive Phase I results in the United States — where the drug 
              produced actual patient responses, highly unusual for a safety study — 
              we are now advancing into clinical trials in China, the world's most 
              important new frontier for pancreatic cancer treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 lg:left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-14 lg:pl-16"
                >
                  {/* Node */}
                  <div className="absolute left-0 lg:left-1.5 top-1 w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center z-10 shadow-sm">
                    {statusIcon[milestone.status]}
                  </div>

                  <div
                    className={`bg-white border rounded-2xl p-6 lg:p-8 shadow-sm transition-colors ${
                      milestone.status === 'active'
                        ? 'border-primary/40 bg-primary/3'
                        : milestone.status === 'complete'
                        ? 'border-border'
                        : 'border-border/50 bg-muted/20'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-heading font-semibold text-xl">{milestone.phase}</h3>
                      <Badge
                        variant="outline"
                        className={
                          milestone.status === 'active'
                            ? 'border-primary/30 text-primary bg-primary/10'
                            : 'border-border text-muted-foreground'
                        }
                      >
                        <Clock className="w-3 h-3 mr-1" />
                        {milestone.year}
                      </Badge>
                      {milestone.status === 'active' && (
                        <Badge className="bg-primary text-primary-foreground">
                          Currently Active
                        </Badge>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {milestone.details.map((detail, j) => (
                        <li
                          key={j}
                          className="text-muted-foreground font-body text-sm flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}