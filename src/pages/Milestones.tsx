import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { ChevronDown, Calendar, Award, CheckCircle2, Clock, Trophy } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: 'Form your Project Group',
    date: '16th May 2025',
    deadline: '2025-05-16',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Initial milestone of forming a 4-member research group for the final year project.',
  },
  {
    id: 2,
    title: 'Find Research Topic & Supervisor',
    date: '26th May 2025',
    deadline: '2025-05-26',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Identified the AI Kitchen Ecosystem domain and officially secured Ms. Lokesha Weerasinghe & Ms. Chathurya Kumarapperuma as supervisors.',
  },
  {
    id: 3,
    title: 'TAF Submission',
    date: '27th June 2025',
    deadline: '2025-06-27',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Topic Assessment Form (TAF) submitted outlining the core idea of smart food lifecycle management.',
  },
  {
    id: 4,
    title: 'TAF Assessment',
    date: '30th June - 16th July 2025',
    deadline: '2025-07-16',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Evaluation of the proposed topic by the supervisor and co-supervisor.',
  },
  {
    id: 5,
    title: 'Charter Submission',
    date: '23rd July 2025',
    deadline: '2025-07-23',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Submission of the project charter documenting the agreement between the group and supervisors.',
  },
  {
    id: 6,
    title: 'Proposal Report (Draft)',
    date: '15th August 2025',
    deadline: '2025-08-15',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details: 'Draft version of the detailed research proposal submitted for preliminary feedback.',
  },
  {
    id: 7,
    title: 'Proposal Presentation',
    date: '8th - 12th September 2025',
    deadline: '2025-09-12',
    marks: '6%',
    color: 'from-violet-400 to-purple-600',
    glow: 'rgba(139,92,246,0.3)',
    details:
      'Initial research defense presenting the problem statement, objectives, and high-level methodology of the AI-Powered Kitchen Ecosystem.',
  },
  {
    id: 8,
    title: 'Proposal Report',
    date: 'September 2025',
    deadline: '2025-09-30',
    marks: '6%',
    color: 'from-indigo-400 to-indigo-600',
    glow: 'rgba(99,102,241,0.3)',
    details:
      'Written research proposal submission documenting the full scope, team responsibilities, technical stack, and detailed research question.',
  },
  {
    id: 9,
    title: 'Progress Presentation I',
    date: 'January 2026',
    deadline: '2026-01-31',
    marks: '15%',
    color: 'from-teal-400 to-cyan-600',
    glow: 'rgba(20,184,166,0.3)',
    details:
      'Demonstration of basic module integration and first prototypes (50% completion).',
  },
  {
    id: 10,
    title: 'Progress Presentation 2',
    date: '9th - 12th March 2026',
    deadline: '2026-03-12',
    marks: '18%',
    color: 'from-emerald-400 to-teal-600',
    glow: 'rgba(52,211,153,0.3)',
    details:
      'Full integration of all 4 AI modules (90% completion). Implemented nutritional guidance with deficiency prediction, AI shopping agent, and behavioral food expiry predictor.',
  },
  {
    id: 11,
    title: 'Final Report Submission (Individual)',
    date: '26th April 2026',
    deadline: '2026-04-26',
    marks: '15%',
    color: 'from-amber-400 to-orange-500',
    glow: 'rgba(251,191,36,0.3)',
    details:
      'Comprehensive individual thesis chapters covering each researcher\'s module — methodology, implementation details, and evaluation results.',
  },
  {
    id: 12,
    title: 'Final Report Submission (Group)',
    date: '26th April 2026',
    deadline: '2026-04-26',
    marks: '4%',
    color: 'from-orange-400 to-red-500',
    glow: 'rgba(249,115,22,0.3)',
    details:
      'Unified group research report combining all individual modules into a cohesive document demonstrating system integration and cross-module interactions.',
  },
  {
    id: 13,
    title: 'Website Submission',
    date: '26th April 2026',
    deadline: '2026-04-26',
    marks: '2%',
    color: 'from-cyan-400 to-teal-500',
    glow: 'rgba(34,211,238,0.3)',
    details:
      'Submission of this project research website (Evaluation occurs 27th to 30th April).',
  },
  {
    id: 14,
    title: 'Final Presentation & Viva',
    date: '27th to 30th April 2026',
    deadline: '2026-04-30',
    marks: '20%',
    color: 'from-rose-400 to-pink-600',
    glow: 'rgba(244,63,94,0.3)',
    details:
      'Complete system showcase and oral defense (10% Presentation, 10% Viva). Each team member defends their module\'s contribution and methodology in front of the panel.',
  },
  {
    id: 15,
    title: 'Logbook Submission & Website Evaluation',
    date: '27th to 30th April 2026',
    deadline: '2026-04-30',
    marks: '2%',
    color: 'from-green-400 to-emerald-600',
    glow: 'rgba(74,222,128,0.3)',
    details:
      'Individual research logbooks submitted, recording weekly progress, supervisor meeting notes, decisions made, and challenges encountered.',
  },
  {
    id: 16,
    title: 'Final Checklist Submission',
    date: '30th April 2026',
    deadline: '2026-04-30',
    marks: '2%',
    color: 'from-lime-400 to-green-500',
    glow: 'rgba(163,230,53,0.3)',
    details:
      'Compliance and progress tracking checklists submitted. Documents supervisor sign-offs and adherence to SLIIT research guidelines.',
  },
  {
    id: 17,
    title: 'Research Paper Submission',
    date: '4th May 2026',
    deadline: '2026-05-04',
    marks: '10%',
    color: 'from-sky-400 to-blue-600',
    glow: 'rgba(56,189,248,0.3)',
    details:
      'Submission of published academic paper summarizing the AI Kitchen Ecosystem research findings, novel contributions, and experimental results.',
  },
  {
    id: 18,
    title: 'Research Paper Publication Evidence',
    date: '30th May 2026',
    deadline: '2026-05-30',
    marks: '0%',
    color: 'from-slate-400 to-slate-600',
    glow: 'rgba(148,163,184,0.3)',
    details:
      'Final submission of evidence for research publication to conclude the Research Project lifecycle.',
  },
];

export function Milestones() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const currentDate = new Date();
  
  // Dynamically compute status instead of hardcoding
  const dynamicMilestones = milestones.map((m) => {
    // Current time >= deadline => completed
    const isCompleted = currentDate >= new Date(m.deadline);
    return { ...m, status: isCompleted ? 'completed' : 'upcoming' };
  });

  const completed = dynamicMilestones.filter((m) => m.status === 'completed');
  const upcoming = dynamicMilestones.filter((m) => m.status === 'upcoming');
  const totalCompletedMarks = completed.reduce((sum, m) => sum + parseFloat(m.marks), 0);

  return (
    <div
      className="w-full pb-24 min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0d1f2d 50%, #0f172a 100%)' }}
    >
      <PageHeader
        title="Project Milestones"
        subtitle="Assessment schedule with correct marks allocation — all 12 evaluation components and timelines."
        breadcrumb="Milestones"
        icon={Trophy}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">
        {/* Summary cards */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
            {[
              { label: 'Total Components', value: '12', icon: Trophy, color: 'text-teal-400' },
              { label: 'Completed', value: `${completed.length}`, icon: CheckCircle2, color: 'text-emerald-400' },
              { label: 'Upcoming', value: `${upcoming.length}`, icon: Clock, color: 'text-amber-400' },
              { label: 'Marks Achieved', value: `${totalCompletedMarks}%`, icon: Award, color: 'text-violet-400' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-white/20 transition-colors"
              >
                <s.icon className={`w-6 h-6 ${s.color} mx-auto mb-2`} />
                <div className={`text-2xl font-outfit font-bold ${s.color} mb-1`}>{s.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Progress bar */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-14">
            <div className="flex justify-between text-sm text-slate-400 mb-2">
              <span>Overall Progress</span>
              <span className="text-teal-400 font-semibold">{totalCompletedMarks}% / 100%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full border border-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${totalCompletedMarks}%` }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500"
                style={{ boxShadow: '0 0 16px rgba(20,184,166,0.5)' }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Milestones list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {dynamicMilestones.map((milestone, index) => (
            <ScrollReveal key={milestone.id} delay={index * 0.04}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  expandedId === milestone.id
                    ? 'border-white/20 shadow-xl'
                    : 'border-white/10 hover:border-white/20'
                }`}
                style={{
                  background: 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))',
                  boxShadow: expandedId === milestone.id ? `0 8px 40px ${milestone.glow}` : 'none',
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === milestone.id ? null : milestone.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4 focus:outline-none"
                >
                  {/* Number circle */}
                  <div
                    className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center text-white font-outfit font-bold text-sm shadow-lg`}
                    style={{ boxShadow: `0 4px 16px ${milestone.glow}` }}
                  >
                    {milestone.id}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                          milestone.status === 'completed'
                            ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {milestone.status === 'completed' ? '✓ Completed' : '⏳ Upcoming'}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3 h-3" /> {milestone.date}
                      </div>
                    </div>
                    <h3 className="text-base font-outfit font-semibold text-white leading-tight">{milestone.title}</h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold bg-gradient-to-r ${milestone.color} text-white shadow-md`}
                      style={{ boxShadow: `0 2px 12px ${milestone.glow}` }}
                    >
                      <Award className="w-3.5 h-3.5" /> {milestone.marks}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === milestone.id ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === milestone.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-white/10">
                        <div
                          className="w-12 h-0.5 rounded-full mb-4"
                          style={{ background: `linear-gradient(to right, ${milestone.glow.replace('0.3', '1')}, transparent)` }}
                        />
                        <p className="text-sm text-slate-400 leading-relaxed">{milestone.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}