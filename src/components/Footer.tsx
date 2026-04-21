import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Mail, MapPin, Hash, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Research Domain', path: '/domain' },
  { name: 'Milestones', path: '/milestones' },
  { name: 'Documents', path: '/documents' },
  { name: 'Presentations', path: '/presentations' },
  { name: 'Our Team', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const members = [
  { name: 'Methusala U.M.K.', id: 'IT22131942', email: 'it22131942@my.sliit.lk' },
  { name: 'Shahmi M.T.M.', id: 'IT22083982', email: 'it22083982@my.sliit.lk' },
  { name: 'Jayasundara D.H.', id: 'IT22117946', email: 'it22117946@my.sliit.lk' },
  { name: 'Muraleswaran D.', id: 'IT22339010', email: 'it22339010@my.sliit.lk' },
];

export function Footer() {
  return (
    <footer
      className="relative border-t overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #020617 100%)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      {/* top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

      {/* background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(20,184,166,0.04), transparent)', filter: 'blur(40px)' }} />

      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-teal-500/40"
                style={{ background: 'linear-gradient(135deg, #14b8a6, #06b6d4)', boxShadow: '0 0 20px rgba(20,184,166,0.3)' }}
              >
                <ChefHat className="w-5 h-5 text-white" />
              </div>
              <span className="font-outfit font-black text-xl text-white">
                Kitchen <span style={{ backgroundImage: 'linear-gradient(135deg, #14b8a6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Echo</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              An AI-powered ecosystem combining Computer Vision, NLP, and Predictive Analytics for a smarter food lifecycle.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Hash className="w-3.5 h-3.5" /> Project ID: 25-26J-351
              </div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">SLIIT — Faculty of Computing</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-outfit font-bold text-white uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div>
            <h4 className="text-sm font-outfit font-bold text-white uppercase tracking-widest mb-5">Researchers</h4>
            <ul className="space-y-3">
              {members.map((m) => (
                <li key={m.id}>
                  <a href={`mailto:${m.email}`} className="group">
                    <div className="text-xs font-mono text-teal-600 group-hover:text-teal-400 transition-colors">{m.id}</div>
                    <div className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">{m.name}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-outfit font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500">SLIIT, New Kandy Rd,<br />Malabe, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <a href="mailto:it22131942@my.sliit.lk" className="text-sm text-slate-500 hover:text-teal-400 transition-colors">
                  it22131942@my.sliit.lk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © 2026 AI-Powered Kitchen Ecosystem — SLIIT 4th Year Research Project
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a
              href="https://www.sliit.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors flex items-center gap-1"
            >
              SLIIT.lk <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-slate-700">·</span>
            <span>Research Group 25-26J-351</span>
          </div>
        </div>
      </div>
    </footer>
  );
}