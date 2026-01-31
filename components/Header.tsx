
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
        {/* Nova Logo GustaDX - Réplica Fiel */}
        <a href="#" className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            {/* Brilho Externo (Glow) */}
            <div className="absolute inset-0 bg-emerald-500/40 blur-xl rounded-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Caixa do G */}
            <div className="relative w-12 h-12 bg-slate-950 border-2 border-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)] overflow-hidden">
               {/* Efeito de Vidro/Brilho Interno */}
               <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
               <span className="relative z-10 font-heading font-black text-white text-2xl">G</span>
               
               {/* Linhas decorativas sutis na borda (estilo da imagem) */}
               <div className="absolute -inset-1 border border-emerald-500/20 rounded-xl animate-pulse"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline leading-none">
              <span className="font-heading font-black text-3xl tracking-tighter text-white">
                GUSTA<span className="text-emerald-500">DX</span>
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[2px] w-6 bg-emerald-500"></div>
              <span className="text-[9px] text-emerald-500 font-black tracking-[0.15em] uppercase">TREINAMENTO DE ELITE</span>
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
