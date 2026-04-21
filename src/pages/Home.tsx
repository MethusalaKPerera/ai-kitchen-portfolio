import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Camera, HeartPulse, ShoppingCart, Clock, ArrowRight, Sparkles, Brain, Zap } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { FloatingParticles } from '../components/FloatingParticles';

/* ─── 3D Tilt card ─── */
function TiltCard({
  children,
  className = '',
  glowColor = 'rgba(20,184,166,0.25)',
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '800px' }}
      className={`transition-shadow duration-300 ${className}`}
      animate={{ boxShadow: hovered ? `0 30px 60px ${glowColor}` : '0 4px 20px rgba(0,0,0,0.3)' }}
    >
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}

/* ─── Animated counter ─── */
function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const features = [
  {
    title: 'Cooking Assistant',
    desc: 'Multi-item food recognition with confidence scoring. Recipe discovery via RAG + Sentence-BERT. Smart ingredient substitutions.',
    icon: Camera,
    color: 'from-teal-400 to-cyan-500',
    glow: 'rgba(20,184,166,0.3)',
    delay: 0.1,
    id: 'IT22131942',
    member: 'Methusala U.M.K.',
  },
  {
    title: 'Nutritional Guidance',
    desc: 'Predict micro-nutrient deficiencies 2 weeks in advance. Temporal intake analysis with explainable risk indicators.',
    icon: HeartPulse,
    color: 'from-rose-400 to-pink-500',
    glow: 'rgba(244,63,94,0.3)',
    delay: 0.2,
    id: 'IT22083982',
    member: 'Shahmi M.T.M.',
  },
  {
    title: 'AI Shopping Agent',
    desc: 'Voice-enabled shopping with intelligent price comparison across eBay, Amazon & Walmart. NLP intent understanding.',
    icon: ShoppingCart,
    color: 'from-violet-400 to-purple-500',
    glow: 'rgba(139,92,246,0.3)',
    delay: 0.3,
    id: 'IT22117946',
    member: 'Jayasundara D.H.',
  },
  {
    title: 'Expiry Predictor',
    desc: 'CatBoost regression learns from purchase date, storage type & consumption habits to minimize food waste.',
    icon: Clock,
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.3)',
    delay: 0.4,
    id: 'IT22339010',
    member: 'Muraleswaran D.',
  },
];

const stats = [
  { value: 30, suffix: '%', label: 'Target Waste Reduction', icon: Zap },
  { value: 4, suffix: '', label: 'AI Modules', icon: Brain },
  { value: 190, suffix: '+', label: 'Recipes (RAG)', icon: Sparkles },
  { value: 12, suffix: ' mo', label: 'Research Duration', icon: Clock },
];

export function Home() {
  return (
    <div className="w-full">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #020617 0%, #0c1628 40%, #0f1f2e 100%)' }}
      >
        {/* Deep space background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 50%, rgba(20,184,166,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 60% 80%, rgba(56,189,248,0.06) 0%, transparent 50%)
            `,
          }}
        />

        {/* Particle network */}
        <FloatingParticles count={70} />

        {/* Animated grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(20,184,166,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.15) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-teal-400"
                  />
                  SLIIT 4th Year Research — Project ID: 25-26J-351
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-black text-white leading-[1.05] mb-6">
                  Intelligent{' '}
                  <motion.span
                    className="relative inline-block"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #14b8a6, #06b6d4, #818cf8, #14b8a6)',
                      backgroundSize: '300% auto',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Kitchen
                  </motion.span>
                  <br />
                  <span
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #e2e8f0, #94a3b8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Ecosystem
                  </span>
                </h1>

                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                  Combining <span className="text-teal-400 font-semibold">Computer Vision</span>,{' '}
                  <span className="text-violet-400 font-semibold">Predictive AI</span>, and{' '}
                  <span className="text-sky-400 font-semibold">NLP</span> to reduce food waste and optimize nutrition —
                  a unified solution for the entire food lifecycle.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/domain"
                    className="group flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #14b8a6, #06b6d4)',
                      boxShadow: '0 0 30px rgba(20,184,166,0.4)',
                    }}
                  >
                    Explore Research
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/documents"
                    className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300 border border-white/15 hover:border-teal-500/40 hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    View Documents
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: 3D floating cards */}
            <div className="hidden lg:block relative h-[480px]">
              {[
                { title: 'Computer Vision', sub: 'OpenCV + YOLOv8', top: '0%', left: '10%', color: 'from-teal-500 to-cyan-600', delay: 0.3 },
                { title: 'CatBoost Regression', sub: 'Expiry Prediction', top: '15%', right: '0%', color: 'from-amber-500 to-orange-500', delay: 0.5 },
                { title: 'RAG + BERT', sub: 'Recipe Discovery', top: '50%', left: '0%', color: 'from-violet-500 to-purple-600', delay: 0.7 },
                { title: 'NLP Agent', sub: 'Voice Shopping', bottom: '0%', right: '5%', color: 'from-sky-500 to-blue-600', delay: 0.9 },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: card.delay, type: 'spring', stiffness: 180 }}
                  style={{
                    position: 'absolute',
                    top: card.top,
                    left: (card as any).left,
                    right: (card as any).right,
                    bottom: (card as any).bottom,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                    className={`bg-gradient-to-br ${card.color} p-px rounded-2xl shadow-2xl`}
                  >
                    <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl px-5 py-4 min-w-[160px]">
                      <div className="text-xs text-slate-400 mb-0.5">{card.sub}</div>
                      <div className="text-sm font-outfit font-bold text-white">{card.title}</div>
                      <div className="mt-2 h-1 rounded-full bg-gradient-to-r from-white/30 to-transparent" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Central orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 360] }}
                transition={{ scale: { duration: 3, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: 'linear' } }}
                style={{
                  background: 'conic-gradient(from 0deg, #14b8a6, #06b6d4, #818cf8, #14b8a6)',
                  boxShadow: '0 0 60px rgba(20,184,166,0.5), 0 0 120px rgba(20,184,166,0.2)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-teal-400" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════ STATS ═══════════════════════ */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a, #0d1f2d)' }}
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="relative text-center p-8 rounded-3xl border border-white/10 bg-white/3 overflow-hidden group h-full flex flex-col items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.08), transparent)' }}
                  />
                  <stat.icon className="w-7 h-7 text-teal-400 mx-auto mb-4 shrink-0" />
                  <div className="text-4xl md:text-5xl font-outfit font-black text-transparent mb-2"
                    style={{ backgroundImage: 'linear-gradient(135deg, #14b8a6, #06b6d4)', WebkitBackgroundClip: 'text', backgroundClip: 'text' }}>
                    <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0d1f2d, #0f172a)' }}>
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" /> Research Overview
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
                One Ecosystem.{' '}
                <span style={{ backgroundImage: 'linear-gradient(135deg, #14b8a6, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Four AI Minds.
                </span>
              </h2>
              <div className="w-24 h-1 rounded-full mx-auto mb-8"
                style={{ background: 'linear-gradient(90deg, #14b8a6, #818cf8)' }} />
              <p className="text-lg text-slate-400 leading-relaxed">
                The AI-Powered Kitchen Ecosystem addresses the global food waste crisis through four
                interconnected AI modules. By unifying cooking assistance, nutritional guidance, smart
                shopping, and expiry prediction — each module amplifies the others, creating a holistic
                system that learns from user behavior and continuously improves.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES (3D Tilt Cards) ═══════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a, #0c1628, #0f172a)' }}>
        <FloatingParticles count={30} className="opacity-40" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-outfit font-black text-white mb-4">Core AI Modules</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Four intelligent subsystems working in a unified workflow — from ingredient recognition to behavioral expiry prediction.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={feature.delay} className="h-full">
                <TiltCard
                  className="h-full rounded-2xl"
                  glowColor={feature.glow}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden border border-white/10 h-full flex flex-col"
                    style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))' }}
                  >
                    {/* Top gradient bar */}
                    <div className={`h-1 w-full bg-gradient-to-r ${feature.color}`} />

                    <div className="p-6 flex flex-col h-full flex-grow">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-xl`}
                        style={{ boxShadow: `0 8px 24px ${feature.glow}` }}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-outfit font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed flex-grow">{feature.desc}</p>

                      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-500">{feature.member}</div>
                          <div className="text-xs font-mono text-teal-500/70">{feature.id}</div>
                        </div>
                        <Link
                          to="/domain"
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c1628, #0f172a)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
            animate={{ opacity: [0.05, 0.12, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ background: 'radial-gradient(ellipse, #14b8a6, transparent)', filter: 'blur(40px)' }}
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-outfit font-black text-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg">
              View the full research domain, browse all deliverables, or download individual reports directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/domain"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #06b6d4)', boxShadow: '0 0 30px rgba(20,184,166,0.4)' }}
              >
                Research Domain <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/documents"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-slate-300 border border-white/15 hover:border-teal-500/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                Browse Documents
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}