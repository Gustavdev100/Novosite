
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal">
            <h2 className="font-heading font-bold text-emerald-500 uppercase tracking-widest text-sm mb-4">POR QUE GUSTADX?</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-black mb-8 leading-tight">
              Não é sobre Ferramentas, é sobre <span className="text-emerald-500">Poder de Decisão</span>.
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              O mercado está cheio de apertadores de botões. Nossa mentoria forma estrategistas que utilizam a tecnologia para liderar a transformação digital dentro das corporações.
            </p>
            
            <div className="max-w-md">
              <div className="p-6 glass rounded-2xl border-l-4 border-emerald-500">
                <div className="text-3xl font-heading font-black text-emerald-500 mb-2">+300%</div>
                <p className="text-slate-300 text-sm font-medium">De ganho em eficiência operacional média através de automação inteligente.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            {BENEFITS.map((benefit, idx) => (
              <div 
                key={idx} 
                className="reveal flex gap-6 p-6 glass rounded-3xl hover:bg-white/5 transition-all group"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-xl font-heading font-bold">{benefit.title}</h4>
                    {benefit.metric && <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase">{benefit.metric}</span>}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
