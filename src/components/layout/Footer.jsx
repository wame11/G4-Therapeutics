import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <span className="text-primary font-heading font-bold">G4</span>
              </div>
              <span className="text-foreground font-heading font-semibold text-lg">
                G4 Therapeutics
              </span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">
              Pioneering G-quadruplex targeted cancer therapies. From London discovery 
              to clinical reality in China — bringing hope to patients with 
              difficult-to-treat cancers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-heading font-semibold text-sm mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <div className="space-y-3">
              {[
                { label: 'Science', path: '/science' },
                { label: 'Pipeline', path: '/pipeline' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-muted-foreground hover:text-primary text-sm font-body transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-heading font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground font-body">
              <p>info@g4therapeutics.com</p>
              <p>London, United Kingdom</p>
              <p>Clinical Operations: China</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © {new Date().getFullYear()} G4 Therapeutics. All rights reserved.
          </p>
          <p className="text-muted-foreground/50 text-xs font-body">
            Advancing oncology through G-quadruplex science
          </p>
        </div>
      </div>
    </footer>
  );
}