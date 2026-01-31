
import React from 'react';
import { COURSES } from '../constants';

const Courses: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getLevel = (id: string) => {
    if (id === 'excel') return 'Master Sênior';
    if (id === 'pbi') return 'Business Architect';
    return 'Digital Creator';
  }

  return (
    <section id="cursos" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-24 reveal">
          <div className="w-12 h-1 bg-emerald-500 mx-auto mb-8 rounded-full"></div>
          <h2 className="font-heading font-bold text-emerald-500 uppercase tracking-[0.4em] text-[11px] mb-6">A TRILHA DA MAESTRIA</h2>
          <h3 className="text-5xl md:text-7xl font-heading font-black tracking-tighter leading-none mb-8">Escolha sua <span className="text-emerald-500">Arma Profissional</span>.</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Módulos desenhados para quem busca o topo da pirâmide corporativa. Do absoluto zero ao especialista inquestionável.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <div 
              key={course.id} 
              className="reveal relative group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative glass h-full p-12 rounded-[2.5rem] flex flex-col items-start transition-all duration-500 group-hover:-translate-y-4">
                <div className="mb-8 flex justify-between items-start w-full">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-4xl group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500 group-hover:rotate-6">
                    {course.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500/60 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {getLevel(course.id)}
                  </span>
                </div>

                <h4 className="text-3xl font-heading font-black mb-3 group-hover:text-emerald-400 transition-colors">{course.title}</h4>
                <p className="text-slate-500 font-bold mb-10 text-xs uppercase tracking-widest">{course.focus}</p>
                
                <div className="space-y-5 mb-12 flex-grow">
                  {course.content.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-300 group/item">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={scrollToContact}
                  className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 font-black transition-all text-[11px] uppercase tracking-[0.2em] relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">RESERVAR MINHA VAGA</span>
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
