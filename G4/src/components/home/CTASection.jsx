const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.db.com/images/public/69f4f9cf286a3d38be2f9d57/4a0d52219_generated_5497da75.png"
          alt="Drug molecule binding to DNA receptor"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 to-white/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6">
            Join Us in the Fight
            <br />
            <span className="text-primary">Against Cancer</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto mb-10">
            We're looking for partners, collaborators, and investors who share our 
            vision of bringing G-quadruplex targeted therapies to patients in China 
            and worldwide.
          </p>
          <Button asChild size="lg" className="font-body text-base px-8 py-6">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}