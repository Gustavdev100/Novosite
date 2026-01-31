
import React from 'react';
import { WHATSAPP_GROUP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="reveal active inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full mb-10 text-[11px] font-black uppercase tracking-[0.2em] border border-emerald-500/20 text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Nova Turma: Inscrições Abertas
        </div>

        <h1 className="reveal active font-heading font-black text-6xl md:text-8xl lg:text-[100px] mb-8 tracking-tighter leading-[0.95] text-white">
          O Próximo Nível <br />
          <span className="text-emerald-500">É Inevitável.</span>
        </h1>

        <p className="reveal active delay-200 text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
          Mentoria estratégica para quem não aceita ser apenas mais um. Domine a tríade de ouro: <span className="text-white border-b-2 border-emerald-500/30">Excel</span>, <span className="text-white border-b-2 border-emerald-500/30">Power BI</span> e <span className="text-white border-b-2 border-emerald-500/30">Power Apps</span>.
        </p>

        <div className="reveal active delay-300 flex flex-col items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <a 
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full md:w-auto px-14 py-7 bg-emerald-500 text-slate-950 font-black text-xl rounded-[2rem] transition-all hover:scale-105 overflow-hidden uppercase tracking-tighter text-center flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                DESTRAVAR ACESSO ELITE
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </div>
          
          <div className="flex items-center gap-10 mt-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 select-none">
             <div className="font-heading font-black text-xl tracking-tighter">DATA<span className="text-emerald-500">PRO</span></div>
             <div className="font-heading font-black text-xl tracking-tighter">ELITE<span className="text-emerald-500">CORP</span></div>
             <div className="font-heading font-black text-xl tracking-tighter">TECH<span className="text-emerald-500">MIND</span></div>
          </div>
        </div>

        <div className="reveal active delay-500 mt-28 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
           <div className="p-6 glass rounded-3xl animate-float-subtle">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Automação</div>
              <div className="text-emerald-500 font-bold text-lg leading-tight">VBA Expert</div>
           </div>
           <div className="p-6 glass rounded-3xl animate-float-subtle" style={{ animationDelay: '1s' }}>
              <div className="text-2xl mb-2">💎</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Visual</div>
              <div className="text-emerald-500 font-bold text-lg leading-tight">Storytelling</div>
           </div>
           <div className="p-6 glass rounded-3xl animate-float-subtle" style={{ animationDelay: '2s' }}>
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none">Carreira</div>
              <div className="text-emerald-500 font-bold text-lg leading-tight">Promoção</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
