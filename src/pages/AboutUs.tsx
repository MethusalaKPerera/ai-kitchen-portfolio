import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Award, Users } from 'lucide-react';

const researchers = [
  {
    name: 'Methusala U.M.K.',
    id: 'IT22131942',
    role: 'Spontaneous Cooking Assistant',
    desc: 'Multi-item food recognition & recipe discovery via Computer Vision + RAG with Sentence-BERT embeddings.',
    email: 'it22131942@my.sliit.lk',
    initials: 'MU',
    gradient: 'from-teal-400 to-cyan-600',
    glow: 'rgba(20,184,166,0.4)',
    tech: ['OpenCV', 'YOLOv8', 'FAISS', 'RAG'],
  },
  {
    name: 'Shahmi M.T.M.',
    id: 'IT22083982',
    role: 'Nutritional Guidance',
    desc: 'Predictive micro-nutrient deficiency forecasting using temporal intake analysis and explainable AI interventions.',
    email: 'it22083982@my.sliit.lk',
    initials: 'SM',
    gradient: 'from-emerald-400 to-green-600',
    glow: 'rgba(52,211,153,0.4)',
    tech: ['scikit-learn', 'Random Forest', 'LSTM'],
  },
  {
    name: 'Jayasundara D.H.',
    id: 'IT22117946',
    role: 'AI Shopping Agent',
    desc: 'Voice-enabled smart shopping with cross-platform price comparison across eBay, Amazon & Walmart via NLP.',
    email: 'it22117946@my.sliit.lk',
    initials: 'JD',
    gradient: 'from-violet-400 to-purple-600',
    glow: 'rgba(139,92,246,0.4)',
    tech: ['Gemini AI', 'SERPAPI', 'NLP', 'TF-IDF'],
  },
  {
    name: 'Muraleswaran D.',
    id: 'IT22339010',
    role: 'AI Behavioral Food Expiry Predictor',
    desc: 'CatBoost-based personalized spoilage prediction incorporating behavioral consumption patterns & feedback loops.',
    email: 'it22339010@my.sliit.lk',
    initials: 'MD',
    gradient: 'from-sky-400 to-blue-600',
    glow: 'rgba(56,189,248,0.4)',
    tech: ['CatBoost', 'Regression', 'MongoDB'],
  },
];

const supervisors = [
  {
    name: 'Ms. Lokesha Weerasinghe',
    title: 'Supervisor',
    dept: 'Faculty of Computing, SLIIT',
    initials: 'LW',
    gradient: 'from-teal-500 to-teal-700',
    glow: 'rgba(20,184,166,0.35)',
  },
  {
    name: 'Ms. Chathurya Kumarapperuma',
    title: 'Co-Supervisor',
    dept: 'Faculty of Computing, SLIIT',
    initials: 'CK',
    gradient: 'from-violet-500 to-violet-700',
    glow: 'rgba(139,92,246,0.35)',
  },
];

function ResearcherCard({ member, index }: { member: typeof researchers[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal delay={index * 0.1} className="h-full">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -10, rotateY: 3 }}
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
        className="relative rounded-3xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 group h-full flex flex-col"
        animate={{
          boxShadow: hovered ? `0 20px 60px ${member.glow}` : '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        <div
          className="rounded-3xl h-full flex flex-col flex-grow"
          style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.95))' }}
        >
          {/* Top gradient bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${member.gradient}`} />

          {/* Glow orb */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
            animate={{ opacity: hovered ? 0.15 : 0.05 }}
            style={{ background: `radial-gradient(circle, ${member.glow.replace('0.4', '1')}, transparent)`, filter: 'blur(20px)' }}
          />

          <div className="p-6 flex flex-col h-full flex-grow items-center text-center">
            {/* Avatar */}
            <motion.div
              animate={{ scale: hovered ? 1.08 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl mb-4 shrink-0`}
              style={{ boxShadow: `0 8px 32px ${member.glow}` }}
            >
              <span className="text-2xl font-outfit font-black text-white">{member.initials}</span>
            </motion.div>

            <h3 className="text-lg font-outfit font-bold text-white mb-1">{member.name}</h3>
            <div className="text-xs font-mono text-teal-500 mb-3">{member.id}</div>

            {/* Role badge */}
            <div
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold mb-3 bg-gradient-to-r ${member.gradient} text-white shrink-0`}
              style={{ opacity: 0.9 }}
            >
              {member.role}
            </div>

            <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-grow">{member.desc}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-5 shrink-0">
              {member.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-slate-400 bg-white/3"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-teal-400 transition-colors group/email mt-auto shrink-0"
            >
              <Mail className="w-3.5 h-3.5 group-hover/email:scale-110 transition-transform" />
              {member.email}
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export function AboutUs() {
  return (
    <div
      className="w-full pb-24 min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0c1628 50%, #0f172a 100%)' }}
    >
      <PageHeader
        title="Our Team"
        subtitle="The researchers and supervisors behind the AI Kitchen Ecosystem."
        breadcrumb="About Us"
        icon={Users}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">
        {/* Supervisors */}
        <div className="mb-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #06b6d4)', boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}
              >
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-outfit font-bold text-white">Supervision</h2>
              <div className="ml-4 flex-1 h-px bg-gradient-to-r from-teal-500/30 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {supervisors.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="flex items-center gap-5 p-6 rounded-3xl border border-white/8 hover:border-white/20 transition-all duration-300 h-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))',
                  }}
                >
                  <div
                    className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-xl`}
                    style={{ boxShadow: `0 8px 28px ${s.glow}` }}
                  >
                    <span className="text-lg font-outfit font-black text-white">{s.initials}</span>
                  </div>
                  <div>
                    <div
                      className={`text-xs font-bold uppercase tracking-widest mb-1 bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent`}
                    >
                      {s.title}
                    </div>
                    <h3 className="text-lg font-outfit font-bold text-white">{s.name}</h3>
                    <p className="text-sm text-slate-500">{s.dept}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Researchers */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #818cf8, #a78bfa)', boxShadow: '0 0 20px rgba(139,92,246,0.3)' }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-outfit font-bold text-white">Researchers</h2>
              <div className="ml-4 flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((member, i) => (
              <ResearcherCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}