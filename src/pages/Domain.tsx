import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import {
  Target, Search, Code2, Layers,
  CheckCircle2, Workflow, AlertTriangle, Info, Brain
} from 'lucide-react';

function DomainCard({
  children,
  accent,
  icon: Icon,
  title,
  delay = 0,
}: {
  children: React.ReactNode;
  accent: string;
  icon: React.ElementType;
  title: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        className="relative rounded-3xl overflow-hidden border border-white/8 transition-all duration-300 hover:border-white/15 h-full flex flex-col"
        style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))' }}
      >
        {/* Left color bar */}
        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accent}`} />
        {/* Top glow */}
        <div className={`absolute top-0 left-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${accent}`} />

        <div className="px-8 py-8 md:px-10 flex flex-col flex-grow">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${accent} shadow-lg shrink-0`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-outfit font-bold text-white leading-tight">{title}</h2>
          </div>
          <div className="flex-grow flex flex-col pt-2">
             {children}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function TechBadge({ name, desc }: { name: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      className="p-4 rounded-2xl border border-white/8 hover:border-teal-500/30 transition-all duration-200 cursor-default"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    >
      <div className="font-bold text-white text-sm mb-1">{name}</div>
      <div className="text-xs text-slate-500">{desc}</div>
    </motion.div>
  );
}

export function Domain() {
  return (
    <div
      className="w-full pb-24 min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #0c1628 50%, #0f172a 100%)' }}
    >
      <PageHeader
        title="Research Domain"
        subtitle="Exploring AI, Computer Vision, NLP, and Predictive Analytics to solve the global food waste crisis."
        breadcrumb="Domain"
        icon={Brain}
      />

      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Literature Survey */}
          <DomainCard accent="from-teal-400 to-cyan-600" icon={Search} title="Literature Survey" delay={0.05}>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Household food waste is a global economic and environmental issue, with millions of tons of edible food
                discarded annually. Current food-tech solutions primarily focus on isolated problems like recipe discovery
                (Tasty, Yummly) or calorie tracking (MyFitnessPal), but fail to integrate the complete food lifecycle.
              </p>
              <p>
                Research indicates that dynamic expiry prediction based on user behavior can reduce waste by up to{' '}
                <span className="text-teal-400 font-semibold">30% compared to static label-based systems</span>. Most
                existing interventions rely on manual expiry entry, which users find tedious and eventually abandon.
              </p>
              <p>
                Existing solutions operate in silos, rely on static or reactive logic, and lack personalized, predictive
                intelligence across the complete food lifecycle. Nutritional recommendation engines ignore real-time
                pantry inventory.
              </p>
            </div>
          </DomainCard>

          {/* Research Problem */}
          <DomainCard accent="from-amber-400 to-orange-500" icon={AlertTriangle} title="Research Problem" delay={0.1}>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Households face multiple interconnected challenges that existing food-tech solutions fail to address effectively:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Food Waste', desc: 'Food items are forgotten, improperly stored, or consumed too late due to the lack of adaptive expiry awareness and usage planning.' },
                { title: 'Poor Nutrition', desc: 'Most applications track calories or nutrients but fail to analyze patterns or predict long-term micro-nutrient imbalance risks.' },
                { title: 'Inefficient Cooking', desc: 'Users often struggle to decide what to cook with available ingredients, leading to underutilization and waste.' },
                { title: 'Uninformed Shopping', desc: 'Purchasing decisions are often made without considering current inventory, nutritional needs, or price efficiency.' },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all"
                  style={{ background: 'rgba(251,191,36,0.05)' }}
                >
                  <h4 className="font-bold text-amber-400 mb-2 font-outfit">{p.title}</h4>
                  <p className="text-sm text-slate-400">{p.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-slate-500 italic">
              Current solutions operate in isolated silos, rely on static or reactive logic, and lack personalized,
              predictive intelligence across the complete food lifecycle.
            </p>
          </DomainCard>

          {/* Research Gap */}
          <DomainCard accent="from-rose-400 to-pink-600" icon={Layers} title="Research Gap" delay={0.15}>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-6">
              <p>
                Existing applications operate in silos. There is a significant lack of integrated platforms that connect
                real-time ingredient recognition with proactive health interventions and behavioral expiry predictions.
              </p>
              <p>
                Most systems are <span className="text-rose-400 font-semibold">"reactive"</span> (tracking what was eaten)
                rather than <span className="text-teal-400 font-semibold">"proactive"</span> (predicting what will be needed or wasted).
              </p>
            </div>
            <div
              className="p-6 rounded-2xl border border-rose-500/20 text-slate-300 font-medium italic leading-relaxed"
              style={{ background: 'rgba(244,63,94,0.05)' }}
            >
              "This research addresses this gap by developing an integrated AI-powered smart kitchen ecosystem that connects
              cooking, nutrition guidance, shopping assistance, and food expiry management into a unified, adaptive platform."
            </div>
          </DomainCard>

          {/* Research Objectives */}
          <DomainCard accent="from-emerald-400 to-teal-600" icon={Target} title="Research Objectives" delay={0.2}>
            <div className="mb-6">
              <h3 className="text-base font-bold text-emerald-400 mb-2 uppercase tracking-wider">Main Objective</h3>
              <p className="text-slate-400 leading-relaxed">
                To develop an AI-powered smart kitchen ecosystem that reduces household food waste, improves nutrition outcomes,
                and enhances cooking experiences through integrated AI modules, personalization, and adaptive feedback mechanisms.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-emerald-400 mb-4 uppercase tracking-wider">Sub-Objectives</h3>
              <ul className="space-y-3">
                {[
                  'Recognize multiple ingredients from a single image and recommend recipes for spontaneous cooking.',
                  'Predict micro-nutrient deficiency risk 2 weeks in advance and provide personalized nutrition interventions.',
                  'Provide voice-enabled smart shopping with recommendation, comparison, and search history personalization.',
                  'Predict food expiry/spoilage dynamically using user habits, storage patterns, and feedback loops.',
                ].map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DomainCard>

          {/* Methodology */}
          <DomainCard accent="from-violet-400 to-purple-600" icon={Workflow} title="Methodology" delay={0.25}>
            <p className="text-slate-400 leading-relaxed mb-6">
              The ecosystem follows a modular architecture where each module exposes REST APIs and integrates through a
              unified React.js frontend. System uses Flask backend with MongoDB for persistence and Google Gemini AI
              for enhanced inference.
            </p>
            <div className="space-y-3">
              {[
                { title: 'Spontaneous Cooking Assistant', desc: 'Multi-item ingredient recognition from images and recipe discovery using Computer Vision + RAG.' },
                { title: 'Nutritional Guidance', desc: 'ML-based prediction of micro-nutrient deficiency risk using intake history, temporal analysis, and personalized risk scoring.' },
                { title: 'AI Shopping Agent', desc: 'Voice-enabled product search with multi-platform integration (eBay, Amazon, Walmart), hybrid AI (scikit-learn + Gemini), cross-platform price comparison.' },
                { title: 'AI Behavioral Expiry Predictor', desc: 'Personalized spoilage prediction using CatBoost regression trained on user behavior, storage patterns, and feedback loops.' },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="p-5 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all"
                  style={{ background: 'rgba(139,92,246,0.05)' }}
                >
                  <h4 className="font-bold text-violet-400 mb-1 font-outfit text-sm">{m.title}</h4>
                  <p className="text-sm text-slate-400">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </DomainCard>

          {/* Technologies */}
          <DomainCard accent="from-indigo-400 to-blue-600" icon={Code2} title="Technologies Used" delay={0.3}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Frontend & Backend</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'React (Vite)', desc: 'Vite-based React Frontend' },
                    { name: 'Flask', desc: 'Python REST API Backend' },
                    { name: 'MongoDB', desc: 'NoSQL Database & Persistence' },
                    { name: 'Tailwind CSS', desc: 'Utility-First Styling' },
                    { name: 'React Router', desc: 'Client-Side Routing' },
                    { name: 'Axios', desc: 'HTTP Client' },
                  ].map((t, i) => <TechBadge key={i} {...t} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">AI / ML Models</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'CatBoost', desc: 'Expiry Regression Model' },
                    { name: 'sentence-transformers', desc: 'Semantic Recipe Search (BERT)' },
                    { name: 'FAISS', desc: 'Vector Similarity Retrieval' },
                    { name: 'Google Gemini', desc: 'Hybrid AI Recommendations' },
                    { name: 'scikit-learn', desc: 'ML Pipeline & Utilities' },
                    { name: 'OpenCV / YOLOv8', desc: 'Computer Vision Pipeline' },
                  ].map((t, i) => <TechBadge key={i} {...t} />)}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">APIs & Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'SERPAPI', desc: 'Multi-Platform Product Search' },
                    { name: 'eBay / Amazon / Walmart', desc: 'E-commerce Integration' },
                    { name: 'forex-python', desc: 'Currency Conversion' },
                    { name: 'DuckDuckGo Search', desc: 'Web Search Integration' },
                    { name: 'BeautifulSoup', desc: 'Web Scraping & Extraction' },
                    { name: 'Google Gemini AI', desc: 'LLM Inference & Shopping' },
                  ].map((t, i) => <TechBadge key={i} {...t} />)}
                </div>
              </div>

              {/* Note */}
              <div
                className="flex items-start gap-3 p-4 rounded-2xl border border-amber-500/20"
                style={{ background: 'rgba(251,191,36,0.05)' }}
              >
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-400">
                  <span className="text-amber-400 font-semibold">Note: </span>
                  TensorFlow is not part of this project. The system uses scikit-learn, CatBoost,
                  sentence-transformers, and FAISS for all ML tasks. Google Gemini provides the hybrid AI layer
                  for smart shopping recommendations and inference.
                </p>
              </div>
            </div>
          </DomainCard>

        </div>
      </div>
    </div>
  );
}