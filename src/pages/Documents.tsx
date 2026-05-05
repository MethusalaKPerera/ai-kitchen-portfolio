import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { PDFPreviewModal } from '../components/PDFPreviewModal';
import {
  Download, Eye, FileText, BarChart2, FileCheck, User, ShieldCheck,
  BookOpen, Users, Award, ClipboardList, FileSpreadsheet, Newspaper
} from 'lucide-react';

type DocType = 'proposal' | 'data-analysis' | 'final-report' | 'checklist' | 'group-report' | 'research-paper' | 'checklist-item';

interface PDFDoc {
  title: string;
  type: DocType;
  fileName: string;
  desc: string;
  previewable?: boolean;
}

const members = [
  {
    name: 'Methusala U.M.K.',
    id: 'IT22131942',
    role: 'Spontaneous Cooking Assistant',
    color: 'from-teal-400 to-teal-600',
    initials: 'MU',
    glowColor: 'rgba(20,184,166,0.3)',
    docs: [
      {
        title: 'Proposal Report',
        type: 'proposal' as const,
        fileName: 'Proposal_Report_it22131942.pdf',
        desc: 'Research proposal covering multi-item food recognition, RAG-based recipe discovery, and Sentence-BERT embeddings.',
      },
      {
        title: 'Data Analysis Report',
        type: 'data-analysis' as const,
        fileName: 'Data_Analysis_Report_IT22131942-updated_v2 (1) (2).pdf',
        desc: 'Comprehensive data analysis for the Cooking Assistant module including dataset exploration, model evaluation metrics, and findings.',
      },
      {
        title: 'Individual Final Report',
        type: 'final-report' as const,
        fileName: 'Final Report_IT22131942 Perera U.M.K..pdf',
        desc: 'Individual final research report detailing the complete implementation, results, and conclusions of the Spontaneous Cooking Assistant module.',
      },
    ],
  },
  {
    name: 'Shahmi M.T.M.',
    id: 'IT22083982',
    role: 'Nutritional Guidance System',
    color: 'from-emerald-400 to-emerald-600',
    initials: 'SM',
    glowColor: 'rgba(52,211,153,0.3)',
    docs: [
      {
        title: 'Proposal Report',
        type: 'proposal' as const,
        fileName: 'IT22083982(Proposal Report).pdf',
        desc: 'Research proposal for predictive micro-nutrient deficiency forecasting and personalized health intervention system.',
      },
      {
        title: 'Data Analysis Report',
        type: 'data-analysis' as const,
        fileName: 'Data Analysis Report_IT22083982docx (1).pdf',
        desc: 'In-depth data analysis for nutritional guidance including temporal intake patterns, deficiency prediction model performance.',
      },
      {
        title: 'Individual Final Report',
        type: 'final-report' as const,
        fileName: 'IT22083982_Final Report.pdf',
        desc: 'Individual final research report covering the complete Nutritional Guidance System — model architecture, evaluation, and deployment outcomes.',
      },
    ],
  },
  {
    name: 'Jayasundara D.H.',
    id: 'IT22117946',
    role: 'AI Shopping Agent',
    color: 'from-cyan-400 to-cyan-600',
    initials: 'JD',
    glowColor: 'rgba(34,211,238,0.3)',
    docs: [
      {
        title: 'Proposal Report',
        type: 'proposal' as const,
        fileName: 'IT22117946(Proposal Report).pdf',
        desc: 'Research proposal for a voice-enabled smart shopping assistant with cross-platform price comparison across eBay, Amazon, and Walmart.',
      },
      {
        title: 'Data Analysis Report',
        type: 'data-analysis' as const,
        fileName: 'Data Analysis Report_IT22117946 (1).pdf',
        desc: 'Analysis of shopping behavior patterns, NLP intent classification performance, and recommendation accuracy metrics.',
      },
      {
        title: 'Individual Final Report',
        type: 'final-report' as const,
        fileName: 'Individual Final Report_IT22117946.pdf',
        desc: 'Individual final research report documenting the AI Shopping Agent full pipeline, voice NLP evaluation, and cross-platform integration results.',
      },
    ],
  },
  {
    name: 'Muraleswaran D.',
    id: 'IT22339010',
    role: 'AI Behavioral Food Expiry Predictor',
    color: 'from-sky-400 to-sky-600',
    initials: 'MD',
    glowColor: 'rgba(56,189,248,0.3)',
    docs: [
      {
        title: 'Proposal Report',
        type: 'proposal' as const,
        fileName: 'IT22339010(proposal Report).pdf',
        desc: 'Research proposal for CatBoost-based personalized food spoilage prediction incorporating behavioral consumption patterns.',
      },
      {
        title: 'Data Analysis Report',
        type: 'data-analysis' as const,
        fileName: 'Data Analysis Report_IT22339010NEW.pdf',
        desc: 'Detailed analysis of expiry prediction model results, feature importance analysis, and real-world dataset evaluation.',
      },
      {
        title: 'Individual Final Report',
        type: 'final-report' as const,
        fileName: 'IT22339010_SummaryReport.pdf',
        desc: 'Individual summary and final research report for the AI Behavioral Food Expiry Predictor — covering model training, results, and behavioral insights.',
      },
    ],
  },
];

const groupDocs: PDFDoc[] = [
  {
    title: 'Group Final Report',
    type: 'group-report',
    fileName: 'Final Report_24-26J – 351.pdf',
    desc: 'Complete group research report for Project 25-26J-351 — comprehensive documentation of all four AI modules, system integration, evaluation, and conclusions.',
  },
  {
    title: 'TAF Assessment Form',
    type: 'checklist',
    fileName: 'IT4010-TAF-2025_July_Batch(02).pdf',
    desc: 'Official SLIIT TAF-2025 assessment form for the July batch — documents project evaluation criteria and supervisor assessment records.',
  },
];

const researchPapers: PDFDoc[] = [
  {
    title: 'Journal Paper',
    type: 'research-paper',
    fileName: 'AI_FOOD_KITCHEN_RESEARCH_PAPER_journal.pdf',
    desc: 'Full journal research paper — AI-Powered Kitchen Ecosystem for Food Waste Reduction and Nutrition Optimization. Covers system architecture, methodology, experiments, and findings.',
  },
  {
    title: 'Conference Paper',
    type: 'research-paper',
    fileName: 'AI_FOOD_KITCHEN_CONFERENCE_PAPER (1).pdf',
    desc: 'Conference research paper presenting the AI Kitchen Ecosystem — condensed overview of contributions, key results, and future directions for academic conference submission.',
  },
];

const checklistDocs: PDFDoc[] = [
  {
    title: 'Checklist 1 — README',
    type: 'checklist-item',
    fileName: 'README (1).md',
    desc: 'Project README and Checklist 1 in Markdown format — covers project setup, module descriptions, dependencies, deployment instructions, and completion status.',
    previewable: false,
  },
  {
    title: 'Checklist 2 — Evaluation Sheet',
    type: 'checklist-item',
    fileName: 'AI-Powered Kitchen Ecosystem for Food Waste Reduction and Nutrition Optimization.xlsx',
    desc: 'Checklist 2 evaluation spreadsheet — structured Excel workbook documenting assessment criteria, rubric scores, and milestone completion across all four AI modules.',
    previewable: false,
  },
];

const typeConfig: Record<DocType, { icon: React.ElementType; label: string; bg: string; text: string; border: string }> = {
  proposal: { icon: FileText, label: 'Proposal Report', bg: 'bg-violet-500/15', text: 'text-violet-300', border: 'border-violet-500/30' },
  'data-analysis': { icon: BarChart2, label: 'Data Analysis', bg: 'bg-teal-500/15', text: 'text-teal-300', border: 'border-teal-500/30' },
  'final-report': { icon: Award, label: 'Final Report', bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30' },
  checklist: { icon: FileCheck, label: 'Official Form', bg: 'bg-orange-500/15', text: 'text-orange-300', border: 'border-orange-500/30' },
  'group-report': { icon: Users, label: 'Group Report', bg: 'bg-rose-500/15', text: 'text-rose-300', border: 'border-rose-500/30' },
  'research-paper': { icon: BookOpen, label: 'Research Paper', bg: 'bg-indigo-500/15', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  'checklist-item': { icon: ClipboardList, label: 'Checklist', bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30' },
};

function DocCard({
  title,
  type,
  fileName,
  desc,
  memberColor,
  glowColor,
  onPreview,
  delay = 0,
  previewable = true,
}: {
  title: string;
  type: DocType;
  fileName: string;
  desc: string;
  memberColor?: string;
  glowColor?: string;
  onPreview: () => void;
  delay?: number;
  previewable?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const cfg = typeConfig[type];
  const Icon = cfg.icon;

  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6, rotateX: 2 }}
        style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
        className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-2xl overflow-hidden group cursor-default transition-all duration-300 h-full flex flex-col"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{ opacity: hovered ? 1 : 0 }}
          style={{ boxShadow: `inset 0 0 40px ${glowColor || 'rgba(20,184,166,0.15)'}` }}
          transition={{ duration: 0.3 }}
        />
        {memberColor && (
          <div className={`h-1 w-full bg-gradient-to-r ${memberColor}`} />
        )}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-start gap-3 mb-3">
            <div className={`p-2 rounded-xl ${cfg.bg} border ${cfg.border} shrink-0`}>
              <Icon className={`w-5 h-5 ${cfg.text}`} />
            </div>
            <div className="flex-1 min-w-0">
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
                {cfg.label}
              </span>
              <h4 className="text-base font-outfit font-bold text-white mt-1.5 leading-tight">{title}</h4>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">{desc}</p>
          <div className="flex gap-2 shrink-0">
            {previewable && (
              <button
                onClick={onPreview}
                className="flex-1 flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-white/5 hover:bg-teal-500/20 border border-white/10 hover:border-teal-500/40 text-slate-300 hover:text-teal-300 text-xs sm:text-sm font-medium transition-all duration-200"
              >
                <Eye className="w-4 h-4 shrink-0" /> <span className="truncate">Preview</span>
              </button>
            )}
            <a
              href={`/pdf/${encodeURIComponent(fileName)}`}
              download={fileName}
              className={`${previewable ? 'flex-1' : 'w-full'} flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/30 hover:border-teal-400 text-teal-300 hover:text-teal-200 text-xs sm:text-sm font-medium transition-all duration-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)]`}
            >
              <Download className="w-4 h-4 shrink-0" /> <span className="truncate">Download</span>
            </a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  gradient,
  dividerColor,
}: {
  icon: React.ElementType;
  title: string;
  gradient: string;
  dividerColor: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shrink-0`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-2xl font-outfit font-bold text-white">{title}</h2>
      <div className={`ml-4 hidden sm:block h-px flex-1 bg-gradient-to-r ${dividerColor} opacity-40`} />
    </div>
  );
}

export function Documents() {
  const [preview, setPreview] = useState<{ url: string; title: string; member?: string } | null>(null);

  const openPreview = (fileName: string, title: string, member?: string) => {
    setPreview({ url: `/pdf/${encodeURIComponent(fileName)}`, title, member });
  };

  return (
    <div className="w-full bg-[#0f172a] pb-24 min-h-screen">
      <PageHeader
        title="Project Documents"
        subtitle="Browse, preview, and download all official research reports and deliverables."
        breadcrumb="Documents"
        icon={ShieldCheck}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">

        {/* ── INDIVIDUAL MEMBER DOCUMENTS ── */}
        {members.map((member, mi) => (
          <ScrollReveal key={member.id} delay={mi * 0.08}>
            <div className="mb-14">
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg shrink-0`}
                  style={{ boxShadow: `0 8px 32px ${member.glowColor}` }}
                >
                  <span className="text-lg font-outfit font-bold text-white">{member.initials}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{member.id}</span>
                  </div>
                  <h2 className="text-xl font-outfit font-bold text-white">{member.name}</h2>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
                <div className={`ml-auto hidden sm:block h-px flex-1 bg-gradient-to-r ${member.color} opacity-30`} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {member.docs.map((doc, di) => (
                  <DocCard
                    key={di}
                    title={doc.title}
                    type={doc.type}
                    fileName={doc.fileName}
                    desc={doc.desc}
                    memberColor={member.color}
                    glowColor={member.glowColor}
                    onPreview={() => openPreview(doc.fileName, doc.title, member.name)}
                    delay={di * 0.08}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold px-4">Group Documents</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* ── GROUP DOCUMENTS ── */}
        <ScrollReveal>
          <div className="mb-14">
            <SectionHeader
              icon={Users}
              title="Group Report & Official Forms"
              gradient="from-rose-400 to-rose-600"
              dividerColor="from-rose-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {groupDocs.map((doc, di) => (
                <DocCard
                  key={di}
                  title={doc.title}
                  type={doc.type}
                  fileName={doc.fileName}
                  desc={doc.desc}
                  glowColor="rgba(244,63,94,0.2)"
                  onPreview={() => openPreview(doc.fileName, doc.title)}
                  delay={di * 0.08}
                  previewable={doc.previewable !== false}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold px-4">Research Papers</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* ── RESEARCH PAPERS ── */}
        <ScrollReveal>
          <div className="mb-14">
            <SectionHeader
              icon={Newspaper}
              title="Journal & Conference Papers"
              gradient="from-indigo-400 to-indigo-600"
              dividerColor="from-indigo-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {researchPapers.map((doc, di) => (
                <DocCard
                  key={di}
                  title={doc.title}
                  type={doc.type}
                  fileName={doc.fileName}
                  desc={doc.desc}
                  glowColor="rgba(99,102,241,0.2)"
                  onPreview={() => openPreview(doc.fileName, doc.title)}
                  delay={di * 0.08}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold px-4">Checklists</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
        </div>

        {/* ── CHECKLISTS ── */}
        <ScrollReveal>
          <div className="mb-8">
            <SectionHeader
              icon={ClipboardList}
              title="Project Checklists"
              gradient="from-emerald-400 to-emerald-600"
              dividerColor="from-emerald-400"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {checklistDocs.map((doc, di) => (
                <DocCard
                  key={di}
                  title={doc.title}
                  type={doc.type}
                  fileName={doc.fileName}
                  desc={doc.desc}
                  glowColor="rgba(52,211,153,0.2)"
                  onPreview={() => { }}
                  delay={di * 0.08}
                  previewable={false}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {preview && (
        <PDFPreviewModal
          isOpen={!!preview}
          onClose={() => setPreview(null)}
          pdfUrl={preview.url}
          title={preview.title}
          memberName={preview.member}
        />
      )}
    </div>
  );
}