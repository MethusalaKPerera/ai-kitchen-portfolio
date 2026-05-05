import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Phone, Mail, Send, CheckCircle2, Hash, Info, User, MessageSquare
} from 'lucide-react';

const teamEmails = [
  { name: 'Methusala U.M.K.', id: 'IT22131942', email: 'it22131942@my.sliit.lk', gradient: 'from-teal-400 to-cyan-600', initials: 'MU' },
  { name: 'Shahmi M.T.M.', id: 'IT22083982', email: 'it22083982@my.sliit.lk', gradient: 'from-emerald-400 to-green-600', initials: 'SM' },
  { name: 'Jayasundara D.H.', id: 'IT22117946', email: 'it22117946@my.sliit.lk', gradient: 'from-violet-400 to-purple-600', initials: 'JD' },
  { name: 'Muraleswaran D.', id: 'IT22339010', email: 'it22339010@my.sliit.lk', gradient: 'from-sky-400 to-blue-600', initials: 'MD' },
];

const contactInfo = [
  {
    label: 'Location',
    value: 'SLIIT, New Kandy Rd, Malabe, Sri Lanka',
    icon: MapPin,
    color: 'from-teal-400 to-cyan-500',
    glow: 'rgba(20,184,166,0.3)',
  },
  {
    label: 'Phone',
    value: '+94 11 754 4800',
    icon: Phone,
    color: 'from-emerald-400 to-green-500',
    glow: 'rgba(52,211,153,0.3)',
  },
  {
    label: 'Project ID',
    value: '25-26J-351',
    icon: Hash,
    color: 'from-violet-400 to-purple-500',
    glow: 'rgba(139,92,246,0.3)',
  },
];

function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-slate-400">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-2xl text-white placeholder-slate-600 text-sm transition-all outline-none"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: `1px solid ${focused ? 'rgba(20,184,166,0.5)' : 'rgba(255,255,255,0.08)'}`,
          boxShadow: focused ? '0 0 0 3px rgba(20,184,166,0.1)' : 'none',
        }}
      />
    </div>
  );
}

export function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedTextarea, setFocusedTextarea] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Build mailto link — opens user's default email client
    const to = 'it22131942@my.sliit.lk';
    const subject = encodeURIComponent(`Inquiry — AI Kitchen Ecosystem from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 600);
  };

  return (
    <div
      className="w-full pb-24 min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0c1628 50%, #0f172a 100%)' }}
    >
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with the AI Kitchen Ecosystem research team."
        breadcrumb="Contact"
        icon={MessageSquare}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* ── LEFT: Contact Form ── */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-white/8 p-8 md:p-10"
                style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
                <div
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(20,184,166,0.08), transparent)',
                    filter: 'blur(30px)',
                  }}
                />

                {/* Success overlay */}
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 rounded-3xl"
                      style={{ background: 'rgba(2,6,23,0.95)', backdropFilter: 'blur(12px)' }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-2xl"
                        style={{
                          background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                          boxShadow: '0 0 40px rgba(20,184,166,0.5)',
                        }}
                      >
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-outfit font-bold text-white mb-2">Email Client Opened!</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Your default email app has opened with your message pre-filled. Just hit Send to reach the team directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-teal-400" />
                  <h2 className="text-2xl font-outfit font-bold text-white">Send a Message</h2>
                </div>
                <p className="text-sm text-slate-500 mb-8">
                  Clicking <span className="italic text-slate-400">"Send Message"</span> will open your email client with your message pre-filled — ready to send directly to the team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <InputField
                      label="Your Name"
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedTextarea(true)}
                      onBlur={() => setFocusedTextarea(false)}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-2xl text-white placeholder-slate-600 text-sm transition-all outline-none resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: `1px solid ${focusedTextarea ? 'rgba(20,184,166,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        boxShadow: focusedTextarea ? '0 0 0 3px rgba(20,184,166,0.1)' : 'none',
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                      boxShadow: '0 0 28px rgba(20,184,166,0.4)',
                    }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Info & Team Emails ── */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/15 transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div
                    className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 6px 20px ${info.glow}` }}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{info.label}</div>
                    <div className="text-sm text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.3}>
              <div
                className="rounded-3xl border border-white/8 p-6"
                style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))' }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <User className="w-4 h-4 text-teal-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">Contact Researchers</h3>
                </div>
                <div className="space-y-3">
                  {teamEmails.map((m) => (
                    <motion.a
                      key={m.id}
                      href={`mailto:${m.email}`}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br ${m.gradient} flex items-center justify-center text-xs font-bold text-white shadow-md`}
                      >
                        {m.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-400 group-hover:text-white transition-colors truncate font-medium">
                          {m.name}
                        </div>
                        <div className="text-xs text-slate-600 group-hover:text-teal-400 transition-colors truncate font-mono">
                          {m.email}
                        </div>
                      </div>
                      <Mail className="w-3.5 h-3.5 text-slate-600 group-hover:text-teal-400 transition-colors ml-auto shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div
                className="flex gap-3 p-4 rounded-2xl border border-sky-500/20"
                style={{ background: 'rgba(56,189,248,0.04)' }}
              >
                <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  This is a research project website. For official inquiries about SLIIT please visit{' '}
                  <a
                    href="https://www.sliit.lk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:underline"
                  >
                    sliit.lk
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}