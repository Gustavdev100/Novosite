
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <h2 className="font-heading font-bold text-emerald-500 uppercase tracking-widest text-sm mb-4">PROVA SOCIAL</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-black">Quem Já Chegou no Topo</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id} 
              className="reveal glass p-8 rounded-3xl flex flex-col justify-between group hover:border-emerald-500/30 transition-all duration-500"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div>
                <div className="flex gap-1 text-emerald-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-10 leading-relaxed text-sm">"{t.comment}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-emerald-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="relative w-14 h-14 rounded-full border-2 border-emerald-500/20 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1 border-2 border-slate-900">
                    <svg className="w-2 h-2 text-slate-950" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-base leading-tight">{t.name}</div>
                  <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
