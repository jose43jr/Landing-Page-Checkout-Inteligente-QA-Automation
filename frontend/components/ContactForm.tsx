
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { TranslationSet } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ContactFormProps {
  translations: TranslationSet;
}

export const ContactForm: React.FC<ContactFormProps> = ({ translations }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-deepBlack relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 p-20 opacity-5 pointer-events-none">
         <h3 className="text-[120px] md:text-[200px] leading-none brand-font">BOOKING</h3>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <ScrollReveal animation="slideIn">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-6 leading-none">
              {translations.contact.title}
            </h2>
            <div className="h-1 w-20 bg-darkRed mb-8"></div>
            <p className="text-xl text-lightGray font-light leading-relaxed mb-10 italic">
              Leve a experiência intensa do Rock Pop Gospel para o seu evento. Feitosa Jr está pronto para impactar gerações.
            </p>
            
            <div className="space-y-4">
               <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-darkGraphite rounded-sm group-hover:bg-softGold transition-colors">
                     <span className="text-softGold group-hover:text-deepBlack font-bold">@</span>
                  </div>
                  <span className="text-lg font-bold tracking-widest uppercase">contato@feitosajr.com.br</span>
               </div>
               <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-darkGraphite rounded-sm group-hover:bg-softGold transition-colors">
                     <span className="text-softGold group-hover:text-deepBlack font-bold">W</span>
                  </div>
                  <span className="text-lg font-bold tracking-widest uppercase">+55 (11) 99999-9999</span>
               </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} animation="fade">
            {isSubmitted ? (
              <div className="bg-darkGraphite border border-softGold/30 p-12 text-center h-full flex flex-col items-center justify-center animate-pulse">
                <CheckCircle size={80} className="text-softGold mb-6" />
                <h3 className="text-3xl font-bold uppercase mb-4">{translations.contact.success}</h3>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="bg-darkGraphite border border-white/5 p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-softGold">{translations.contact.name}</label>
                    <input id="name" required className="w-full bg-deepBlack border border-white/10 p-4 focus:border-softGold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-softGold">{translations.contact.email}</label>
                    <input id="email" type="email" required className="w-full bg-deepBlack border border-white/10 p-4 focus:border-softGold outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-softGold">{translations.contact.city}</label>
                    <input required className="w-full bg-deepBlack border border-white/10 p-4 focus:border-softGold outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-type" className="text-xs font-bold uppercase tracking-widest text-softGold">{translations.contact.eventType}</label>
                    <select id="event-type" className="w-full bg-deepBlack border border-white/10 p-4 focus:border-softGold outline-none transition-colors">
                      <option>Show</option>
                      <option>Conferência</option>
                      <option>Festival</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-softGold">{translations.contact.message}</label>
                  <textarea id="message" rows={4} required className="w-full bg-deepBlack border border-white/10 p-4 focus:border-softGold outline-none transition-colors resize-none"></textarea>
                </div>
                <button id="btn-enviar" type="submit" className="w-full py-5 bg-softGold text-deepBlack font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95 flex items-center justify-center">
                  <Send size={18} className="mr-3" />
                  {translations.contact.ctaSend}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
