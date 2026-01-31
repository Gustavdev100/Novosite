
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 px-6 bg-slate-950">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo Footer Consistente */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border border-emerald-500/40 rounded-lg rotate-12"></div>
              <div className="absolute inset-0 bg-emerald-500/5 rounded-lg border border-emerald-500/20"></div>
              <span className="font-heading font-black text-emerald-500 text-lg relative z-10">G</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                GUSTA<span className="text-emerald-500">DX</span>
              </span>
              <span className="text-[8px] text-slate-600 font-bold tracking-[0.2em] uppercase">Especialista Sênior</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-emerald-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Suporte</a>
          </div>

          <div className="text-slate-600 text-[11px] font-medium tracking-wide">
            © 2024 <span className="text-slate-400 font-bold">GUSTADX</span>. POWERED BY ELITE DATA.
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-[9px] text-slate-700 max-w-2xl mx-auto uppercase tracking-[0.2em] leading-relaxed">
            Este site e todo o conteúdo da mentoria são de propriedade exclusiva. A reprodução sem autorização é estritamente proibida. Resultados variam de acordo com a dedicação individual.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
