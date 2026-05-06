import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Building2, Users, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
              About Us
            </p>
            <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              Pioneering
              <br />
              <span className="text-primary">Cancer Therapy</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              G4 Therapeutics was founded to translate decades of groundbreaking 
              G-quadruplex research into life-saving treatments for cancer patients. 
              We are a London-founded startup with a global mission — following positive 
              Phase I results in the United States, we are now developing clinical trials 
              in China, bringing new hope to patients with difficult-to-treat cancers in 
              one of the world's most important healthcare markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
              Leadership
            </p>
            <h2 className="font-heading font-light text-3xl sm:text-4xl tracking-tight">
              Scientific Direction
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-white border border-border rounded-2xl shadow-sm p-8 lg:p-10"
          >
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src="https://profiles.ucl.ac.uk/34650-stephen-neidle/thumbnail"
                  alt="Professor Stephen Neidle, UCL School of Pharmacy"
                  className="w-28 h-28 rounded-2xl object-cover border-2 border-primary/20 shadow-md"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="w-28 h-28 rounded-2xl bg-primary/10 border-2 border-primary/20 items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-heading font-semibold text-2xl mb-1">
                  Professor Stephen Neidle
                </h3>
                <p className="text-primary font-body text-sm font-medium mb-1">
                  Co-Founder &amp; Scientific Director
                </p>
                <p className="text-muted-foreground font-body text-xs mb-4">
                  Emeritus Professor of Chemical Biology &amp; CRUK Professorial Fellow, UCL School of Pharmacy
                </p>
                <a
                  href="https://profiles.ucl.ac.uk/34650-stephen-neidle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary text-xs font-body hover:underline mb-5"
                >
                  UCL Profile <ExternalLink className="w-3 h-3" />
                </a>

                <div className="text-muted-foreground font-body text-sm leading-relaxed space-y-3">
                  <p>
                    Professor Neidle is one of the world's leading authorities on 
                    G-quadruplex DNA structures and their role in cancer. A chemistry 
                    graduate of Imperial College London (DSc, PhD, ARCS), he pioneered 
                    the concept of targeting G-quadruplexes for cancer therapy nearly 
                    three decades ago.
                  </p>
                  <p>
                    Based at the UCL School of Pharmacy, his group invented the lead drug 
                    compound currently in clinical trials — developed with support from 
                    Cancer Research UK and the UK Pancreatic Cancer Research Fund. 
                    His work has been recognised by numerous awards including the Sosnovsky 
                    and Aventis Prizes for medicinal chemistry of cancer, and the 
                    Interdisciplinary and Medicinal Chemistry Award of the Royal Society of Chemistry.
                  </p>
                  <p>
                    He was previously Academic Dean at The Institute of Cancer Research (ICR) 
                    and holds visiting professorships internationally. His research has 
                    attracted patents now granted in over 25 countries worldwide.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* China strategy section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
                Our China Strategy
              </p>
              <h2 className="font-heading font-light text-3xl sm:text-4xl tracking-tight mb-6">
                A Very Exciting New Chapter
              </h2>
              <div className="text-muted-foreground font-body text-sm leading-relaxed space-y-4">
                <p>
                  China represents a critical and exciting new frontier for G4 Therapeutics. 
                  With over 100,000 new pancreatic cancer cases every year, China has an 
                  enormous unmet clinical need for effective treatments — and our drug is 
                  uniquely positioned to address it.
                </p>
                <p>
                  The US Phase I pilot clinical trial demonstrated that the drug was not 
                  only well tolerated but produced positive clinical effects in several 
                  patients. Seeing actual responses in a Phase I study — whose primary aim 
                  is only to confirm safety — is a real and remarkable bonus that has 
                  strengthened our confidence in moving forward.
                </p>
                <p>
                  Armed with these promising results, alongside extensive preclinical data, 
                  FDA Orphan Drug Status, and worldwide patent coverage, we are now 
                  developing clinical trials in China. We have expertise in depth, with 
                  expert advisors involved in both our science and clinical science, and 
                  the dedication this journey requires.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '100,000+', label: 'New pancreatic cancer cases/year in China' },
                { value: 'Phase I', label: 'Positive US results — patient responses observed' },
                { value: '25+', label: 'Countries with granted patents' },
                { value: '28+', label: 'Years of dedicated G4 research' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-2xl p-6 shadow-sm"
                >
                  <div className="text-2xl font-heading font-semibold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs font-body leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-light text-3xl sm:text-4xl tracking-tight">
              Our Guiding Principles
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Scientific Excellence',
                desc: 'Built on 28 years of published, peer-reviewed research in structural biology and drug design.',
              },
              {
                icon: Users,
                title: 'Patient Focus',
                desc: 'Every decision is driven by the goal of reaching patients with cancers that currently have no effective treatment.',
              },
              {
                icon: Building2,
                title: 'Global Collaboration',
                desc: "Combining London's academic excellence with China's clinical trial infrastructure for maximum impact.",
              },
              {
                icon: GraduationCap,
                title: 'Innovation',
                desc: 'First-in-class G-quadruplex targeting represents a fundamentally new mechanism for cancer therapy.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-border shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}