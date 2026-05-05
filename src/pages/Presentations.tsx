import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { PDFPreviewModal } from '../components/PDFPreviewModal';
import { Download, Eye, Monitor, Calendar, Play, FileSliders, MonitorPlay } from 'lucide-react';

interface PresentationItem {
  id: number;
  title: string;
  date: string;
  desc: string;
  status: 'completed' | 'upcoming';
  fileName?: string;
  fileType?: 'pdf' | 'pptx';
  gradient: string;
  glowColor: string;
  tag: string;
  marks: string;
}

const presentations: PresentationItem[] = [
  {
    id: 1,
    title: 'Proposal Presentation',
    date: 'October 2025',
    desc: 'Initial research defense covering the problem statement, research objectives, literature review, and high-level methodology of the AI Kitchen Ecosystem.',
    status: 'completed',
    fileName: 'Proposal presentation (1).pptx',
    fileType: 'pptx',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    glowColor: 'rgba(139,92,246,0.35)',
    tag: 'Proposal',
    marks: '6%',
  },
  {
    id: 2,
    title: 'Progress Presentation I',
    date: 'January 04, 2026',
    desc: 'Mid-project demonstration of core AI modules — ingredient recognition prototype, RAG system with 190 authentic recipes, and Sentence-BERT embeddings for semantic matching.',
    status: 'completed',
    fileName: 'Presentation 1.pdf',
    fileType: 'pdf',
    gradient: 'from-teal-500 via-cyan-500 to-sky-600',
    glowColor: 'rgba(20,184,166,0.35)',
    tag: 'PP-1 (50%)',
    marks: '15%',
  },
  {
    id: 3,
    title: 'Progress Presentation II',
    date: 'May 2026',
    desc: 'Pre-final demonstration of full integration of all 4 AI modules — nutritional guidance, AI shopping agent with multi-platform integration, and behavioral expiry predictor.',
    status: 'completed',
    fileName: 'PP2Presentation.pptx',
    fileType: 'pptx',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    glowColor: 'rgba(52,211,153,0.35)',
    tag: 'PP-2 (90%)',
    marks: '18%',
  },
  {
    id: 4,
    title: 'Final Presentation',
    date: 'May 2026',
    desc: 'Complete research showcase — final performance metrics, real-world evaluation results, user study analysis, ablation studies, and comprehensive conclusions for all four AI modules.',
    status: 'completed',
    fileName: 'FinalPresentation_351.pptx',
    fileType: 'pptx',
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    glowColor: 'rgba(251,191,36,0.35)',
    tag: 'Final',
    marks: '10%',
  },
];

export function Presentations() {
  const [pdfPreview, setPdfPreview] = useState<{ url: string; title: string } | null>(null);

  return (
    <div
      className="w-full min-h-screen pb-24"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0d1f2d 50%, #0f172a 100%)' }}
    >
      <PageHeader
        title="Presentations"
        subtitle="Official slide decks — preview online or download directly."
        breadcrumb="Presentations"
        icon={MonitorPlay}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { label: 'Total Presentations', value: '4' },
              { label: 'Slides Available', value: '4' },
              { label: 'Marks Coverage', value: '49%' },
              { label: 'Status', value: '4/4 Done' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-outfit font-bold text-teal-400 mb-1">{s.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {presentations.map((pres, idx) => (
            <ScrollReveal key={pres.id} delay={idx * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                style={{ perspective: '900px', transformStyle: 'preserve-3d' }}
                className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 border border-white/10 rounded-3xl overflow-hidden group transition-all duration-300 h-full flex flex-col"
              >
                <div
                  className={`relative h-48 bg-gradient-to-br ${pres.gradient} overflow-hidden shrink-0`}
                  style={{ boxShadow: `inset 0 -40px 60px rgba(15,23,42,0.8)` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  >
                    <Monitor className="w-7 h-7 text-white/70" />
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 text-white/60" />
                  </motion.div>

                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full border ${pres.status === 'completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                        }`}
                    >
                      {pres.status === 'completed' ? '✓ Completed' : '⏳ Upcoming'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-black/30 text-white/80 border border-white/10 backdrop-blur-sm">
                      {pres.marks} marks
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3 shrink-0">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">{pres.date}</span>
                    <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                      {pres.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-white mb-3 group-hover:text-teal-300 transition-colors shrink-0">
                    {pres.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">{pres.desc}</p>

                  {pres.fileName ? (
                    <div className="flex gap-3">
                      {pres.fileType === 'pdf' && (
                        <button
                          onClick={() =>
                            setPdfPreview({ url: `/pdf/${encodeURIComponent(pres.fileName!)}`, title: pres.title })
                          }
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-teal-500/15 border border-white/10 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-sm font-medium transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" /> Preview
                        </button>
                      )}
                      {pres.fileType === 'pptx' && (
                        <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-sm font-medium cursor-not-allowed">
                          <FileSliders className="w-4 h-4" /> PPTX Format
                        </div>
                      )}
                      <a
                        href={`/pdf/${encodeURIComponent(pres.fileName)}`}
                        download={pres.fileName}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500/25 to-cyan-500/25 hover:from-teal-500/40 hover:to-cyan-500/40 border border-teal-500/30 text-teal-300 text-sm font-medium transition-all duration-200 hover:shadow-[0_0_24px_rgba(20,184,166,0.3)]"
                      >
                        <Download className="w-4 h-4" /> Download
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-500 text-sm">
                      Slides will be uploaded after presentation
                    </div>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {pdfPreview && (
        <PDFPreviewModal
          isOpen={!!pdfPreview}
          onClose={() => setPdfPreview(null)}
          pdfUrl={pdfPreview.url}
          title={pdfPreview.title}
        />
      )}
    </div>
  );
}