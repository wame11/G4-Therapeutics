const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Dna, FlaskConical, ShieldCheck, Zap } from 'lucide-react';

const scienceTopics = [
  {
    id: 'g4-structures',
    icon: Dna,
    title: 'What Are G-Quadruplexes?',
    summary:
      'G-quadruplexes (G4s) are non-canonical DNA structures formed by guanine-rich sequences that fold into four-stranded configurations.',
    detail:
      'Unlike the familiar double helix, G-quadruplexes are four-stranded DNA structures that form in guanine-rich regions of the genome. These structures are found in the promoter regions of many cancer-related genes, where they play critical roles in regulating gene expression. In cancer cells, G-quadruplexes are especially over-represented in the regulatory regions of oncogenes — the genes that drive tumour growth. This non-random distribution makes them exceptionally promising therapeutic targets.',
  },
  {
    id: 'mechanism',
    icon: Zap,
    title: 'Mechanism of Action',
    summary:
      'Our compounds stabilise G-quadruplex structures in cancer gene promoters, preventing the genes from being "read" and thus silencing tumour growth.',
    detail:
      'Small molecules designed to bind to and stabilise G-quadruplex structures can interfere with the natural unwinding process that cancer cells need to express their oncogenes. By locking the G-quadruplex in its folded state, the drug effectively prevents the cancer cell\'s machinery from reading and expressing cancer-driving genes. This approach selectively down-regulates multiple cancer pathways simultaneously, making it fundamentally different from conventional single-target therapies.',
  },
  {
    id: 'selectivity',
    icon: ShieldCheck,
    title: 'Tumour Selectivity',
    summary:
      'G-quadruplex targeting provides inherent selectivity for cancer cells over normal tissue, reducing potential side effects.',
    detail:
      'Because cancer cells have significantly higher levels of G-quadruplex formation in their oncogene promoters compared to normal cells, our approach provides a degree of natural tumour selectivity. Whole-genome transcriptome analysis has confirmed that our lead compound selectively targets G-quadruplexes in cancer-related genes — notably by forming stable complexes at their promoter sites — while having minimal impact on normal gene expression. This selectivity is a key advantage over traditional chemotherapies.',
  },
  {
    id: 'drug-design',
    icon: FlaskConical,
    title: 'Drug Design & Development',
    summary:
      'Our lead compound emerged from 28 years of structure-based drug design at University College London.',
    detail:
      'Professor Stephen Neidle and his team at UCL School of Pharmacy pioneered the concept of targeting G-quadruplexes for cancer therapy 28 years ago. Through iterative structure-based drug design — using X-ray crystallography and molecular modelling — the team developed several generations of increasingly potent G-quadruplex-binding compounds. This culminated in 2020 with the invention of an exceptionally potent naphthalene diimide compound that demonstrated remarkable activity in both cell-based assays and animal models of pancreatic cancer.',
  },
];

export default function Science() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/4a0d52219_generated_5497da75.png"
            alt="Drug molecule binding to G-quadruplex DNA"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white to-white/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
              The Science
            </p>
            <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              Targeting Cancer at
              <br />
              <span className="text-primary">the Genetic Level</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              G-quadruplex structures in cancer gene promoters represent a fundamentally 
              new class of drug targets. Our approach — developed over nearly three 
              decades — silences cancer genes by stabilising these unique DNA formations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Science accordion */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {scienceTopics.map((topic, i) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <AccordionItem
                  value={topic.id}
                  className="bg-white border border-border rounded-2xl px-6 overflow-hidden shadow-sm data-[state=open]:border-primary/40"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <topic.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{topic.title}</h3>
                        <p className="text-muted-foreground font-body text-sm mt-1">
                          {topic.summary}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-14">
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {topic.detail}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Key publications */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-light text-3xl sm:text-4xl tracking-tight mb-3">
              Founded on Published Research
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              Our science is built upon a substantial body of peer-reviewed research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Structure-activity relationships for G-quadruplex-targeting compounds',
                journal: 'Journal of Medicinal Chemistry',
                year: '2024',
              },
              {
                title: 'Potent activity in human gemcitabine-resistant pancreatic cancer',
                journal: 'Nature Scientific Reports',
                year: '2020',
              },
              {
                title: 'Targeting multiple effector pathways in pancreatic ductal adenocarcinoma',
                journal: 'PLoS ONE',
                year: '2018',
              },
            ].map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
              >
                <p className="text-primary text-xs font-body font-medium uppercase tracking-wider mb-3">
                  {pub.journal} · {pub.year}
                </p>
                <h4 className="font-heading font-medium text-sm leading-relaxed">
                  {pub.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}