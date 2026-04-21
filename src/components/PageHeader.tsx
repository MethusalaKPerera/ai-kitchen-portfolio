import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { FloatingParticles } from './FloatingParticles';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  icon?: React.ElementType;
}

export function PageHeader({ title, subtitle, breadcrumb, icon: Icon }: PageHeaderProps) {
  return (
    <div
      className="relative pt-36 pb-20"
      style={{ background: 'linear-gradient(135deg, #020617 0%, #0c1628 60%, #0f1f2e 100%)' }}
    >
      <FloatingParticles count={40} className="opacity-50" />
      
      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `linear-gradient(rgba(20,184,166,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.2) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 30% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'radial-gradient(circle, #14b8a6, transparent)', filter: 'blur(60px)' }}
        />
        <motion.div
          className="absolute -bottom-20 right-0 w-96 h-96 rounded-full"
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          style={{ background: 'radial-gradient(circle, #818cf8, transparent)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 preserve-3d perspective-1200 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 24, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 }}
          className="max-w-3xl relative z-10"
        >
          {/* Breadcrumb */}
          {breadcrumb && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-1.5 text-sm font-medium mb-5"
            >
              <Link to="/" className="text-slate-500 hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-teal-400">{breadcrumb}</span>
            </motion.div>
          )}

          {/* Title */}
          <h1
            className="text-5xl md:text-6xl font-outfit font-black text-white mb-5 leading-tight tracking-tight relative z-10"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            {title}
          </h1>

          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="h-1.5 rounded-full mb-6"
            style={{ background: 'linear-gradient(90deg, #14b8a6, #818cf8)', boxShadow: '0 0 10px rgba(20,184,166,0.5)' }}
          />

          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-slate-400 font-light leading-relaxed max-w-xl relative z-10"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Floating 3D Icon Fill for the Right Side */}
        {Icon && (
          <motion.div
            className="hidden lg:flex w-64 h-64 absolute right-12 top-1/2 -translate-y-1/2 items-center justify-center pointer-events-none"
            initial={{ opacity: 0, scale: 0, rotateY: 90 }}
            animate={{ opacity: 0.15, scale: 1, rotateY: [0, 10, -10, 0], y: [-15, 15, -15] }}
            transition={{ 
              opacity: { duration: 1 },
              scale: { duration: 1, type: 'spring' },
              rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-teal-500 rounded-full blur-[100px] opacity-20" />
            <Icon className="w-full h-full text-teal-300 drop-shadow-2xl" />
          </motion.div>
        )}
      </div>
    </div>
  );
}