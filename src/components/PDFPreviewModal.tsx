import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  memberName?: string;
}

export function PDFPreviewModal({ isOpen, onClose, pdfUrl, title, memberName }: PDFPreviewModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(2,6,23,0.85)', backdropFilter: 'blur(12px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 40 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            style={{ perspective: '1200px' }}
            className="relative w-full max-w-5xl h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] border border-white/10 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated top glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/80 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-teal-500/10 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30 shrink-0">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-white text-sm sm:text-base leading-tight line-clamp-1">{title}</h3>
                  {memberName && <p className="text-xs text-slate-400">{memberName}</p>}
                </div>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <a
                  href={pdfUrl}
                  download
                  className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 text-sm font-medium border border-teal-500/30 transition-all duration-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
                  title="Download"
                >
                  <Download className="w-4 h-4" /> <span className="hidden sm:inline">Download</span>
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium border border-white/10 transition-all duration-200"
                  title="Open Tab"
                >
                  <ExternalLink className="w-4 h-4" /> <span className="hidden sm:inline">Open Tab</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 hover:border-red-500/30 flex items-center justify-center transition-all duration-200 ml-1 shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 relative bg-slate-950 min-h-0">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full border-0"
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
