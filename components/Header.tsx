
import React, { useState, useEffect } from 'react';
import { WHATSAPP_GROUP_URL } from '../constants';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass border-b border-emerald-500/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Redesenhada - Estilo Core Tech */}
        <a href="#" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative flex items-center justify-center">
            {/* Hexágono de Fundo Glow */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* O Brasão */}
            <div className="relative w-12 h-12 flex items-center justify-center shimmer-container">
              {/* Moldura Hexagonal */}
              <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
              <div className="absolute inset-0 border-2 border-emerald-500 rounded-xl -rotate-12 group-hover:rotate-[135deg] transition-transform duration-700 bg-emerald-500/10 backdrop-blur-sm"></div>
              
              {/* Letra Central */}
              <span className="relative z-10 font-heading font-black text-white text-2xl tracking-tighter group-hover:scale-110 transition-transform duration-500">
                G
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                GUSTA<span className="text-emerald-500">DX</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-4 bg-emerald-500/50"></span>
              <span className="text-[9px] text-emerald-500/80 font-black tracking-[0.3em] uppercase">Elite Mentoring</span>
            </div>
          </div>
        </a>
        
        <nav className="flex items-center">
          <a 
            href={WHATSAPP_GROUP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 uppercase text-[11px] tracking-[0.15em] shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            Acesso VIP
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
