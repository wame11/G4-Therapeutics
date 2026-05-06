const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await db.integrations.Core.SendEmail({
      to: 'info@g4therapeutics.com',
      subject: `Website Inquiry: ${form.subject}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });
    setSending(false);
    setSent(true);
  };

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-primary text-sm font-body font-medium uppercase tracking-widest mb-3">
              Contact
            </p>
            <h1 className="font-heading font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Interested in partnering with us, investing, or learning more about our 
              clinical programmes? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              {sent ? (
                <div className="bg-card/50 border border-primary/30 rounded-2xl p-10 text-center">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-2">Message Sent</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Thank you for your interest. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="font-body text-sm">Name</Label>
                      <Input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-white border-border font-body"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body text-sm">Email</Label>
                      <Input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-white border-border font-body"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm">Subject</Label>
                    <Input
                      required
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="bg-white border-border font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-body text-sm">Message</Label>
                    <Textarea
                      required
                      rows={5}
                      placeholder="Tell us about your interest..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-white border-border font-body resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={sending}
                    className="font-body text-base px-8"
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold">Email</h4>
                </div>
                <p className="text-muted-foreground font-body text-sm">
                  info@g4therapeutics.com
                </p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold">Locations</h4>
                </div>
                <div className="text-muted-foreground font-body text-sm space-y-2">
                  <p>
                    <span className="text-foreground font-medium">Scientific HQ:</span>
                    <br />
                    London, United Kingdom
                  </p>
                  <p>
                    <span className="text-foreground font-medium">Clinical Operations:</span>
                    <br />
                    China
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}