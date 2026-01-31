
import React, { useState } from 'react';
import { WHATSAPP_GROUP_URL, GOOGLE_SHEETS_WEBHOOK_URL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    whatsapp: '', 
    interest: 'excel',
    position: '',
    challenge: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      console.warn("URL da Planilha não configurada.");
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    try {
      // Payload formatado para as colunas: Data, Nome, WhatsApp, Cargo, Interesse, Desafio, Origem
      const payload = {
        date: new Date().toLocaleString('pt-BR'),
        name: formData.name,
        whatsapp: formData.whatsapp,
        position: formData.position,
        interest: formData.interest,
        challenge: formData.challenge,
        source: 'Landing Page GustaDX'
      };

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setStatus('success');
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contato" className="py-24 px-6 relative min-h-[600px] flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="glass p-16 rounded-[40px] border border-emerald-500/40 relative overflow-hidden group">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-950 animate-bounce">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 uppercase tracking-tighter text-white">
                VOCÊ ESTÁ <span className="text-emerald-500">DENTRO!</span>
              </h2>
              
              <p className="text-slate-300 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                Dados processados com sucesso. O seu futuro como especialista de elite começa agora no nosso **Grupo VIP**.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a 
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-emerald-500 text-slate-950 font-black rounded-2xl transition-all hover:scale-110 shadow-[0_20px_40px_rgba(16,185,129,0.3)] uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                >
                  Entrar no Squad VIP
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="glass p-8 md:p-16 rounded-[50px] border border-white/5 shadow-2xl reveal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 leading-none tracking-tighter text-white">
                Entre para o <br />
                <span className="text-emerald-500">Elite Squad.</span>
              </h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Não perca tempo. O grupo VIP é onde os bastidores acontecem e as melhores oportunidades surgem primeiro.
              </p>
              
              <div className="space-y-6">
                {[
                  'Recebimento imediato na Planilha de Leads',
                  'Acesso VIP ao Grupo de Alunos',
                  'Suporte Direto com GustaDX no WhatsApp',
                  'Garantia Incondicional de 15 Dias'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-white/5 shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-emerald-500/60 uppercase mb-2 tracking-widest">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Nome"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-white placeholder:text-slate-700 text-sm"
                    required
                    disabled={status === 'loading'}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-emerald-500/60 uppercase mb-2 tracking-widest">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(11) 90000-0000"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-white placeholder:text-slate-700 text-sm"
                    required
                    disabled={status === 'loading'}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-emerald-500/60 uppercase mb-2 tracking-widest">Cargo Atual</label>
                  <input 
                    type="text" 
                    placeholder="Sua função"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-white placeholder:text-slate-700 text-sm"
                    required
                    disabled={status === 'loading'}
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-emerald-500/60 uppercase mb-2 tracking-widest">Interesse</label>
                  <select 
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-white appearance-none cursor-pointer text-sm"
                    disabled={status === 'loading'}
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="excel">Excel Master</option>
                    <option value="pbi">Power BI Business</option>
                    <option value="apps">Power Apps Creator</option>
                    <option value="full">Formação Elite</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-emerald-500/60 uppercase mb-2 tracking-widest">Qual seu maior desafio hoje?</label>
                <textarea 
                  placeholder="Ex: Demoro muito para criar relatórios..."
                  rows={3}
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-all text-white placeholder:text-slate-700 text-sm resize-none"
                  required
                  disabled={status === 'loading'}
                  value={formData.challenge}
                  onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black rounded-2xl transition-all shadow-xl hover:shadow-emerald-500/20 mt-4 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSANDO...
                  </span>
                ) : 'SOLICITAR ACESSO VIP'}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-[10px] text-center font-bold uppercase tracking-widest mt-2 animate-pulse">
                  Erro ao enviar. Tente novamente ou use o botão do WhatsApp.
                </p>
              )}

              <p className="text-[10px] text-center text-slate-600 font-bold uppercase tracking-widest">Seus dados estão protegidos.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
