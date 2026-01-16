
import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { TranslationSet } from '../types';
import { MOCK_AGENDA } from '../constants';
import { ScrollReveal } from './ScrollReveal';

interface AgendaProps {
  translations: TranslationSet;
}

export const Agenda: React.FC<AgendaProps> = ({ translations }) => {
  return (
    <section id="agenda" className="py-24 bg-deepBlack border-t border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase mb-4">
                {translations.agenda.title}
              </h2>
              <div className="h-2 w-24 bg-softGold"></div>
            </div>
            <p className="text-lightGray mt-6 md:mt-0 max-w-sm font-light italic text-lg uppercase tracking-wider">
              Explodindo a fé em cada palco.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {MOCK_AGENDA.map((show, idx) => (
            <ScrollReveal key={show.id} delay={idx * 100} animation="slideUp">
              <div className="group bg-darkGraphite border border-white/5 hover:border-softGold/30 transition-all p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_0_30px_rgba(201,162,77,0.05)]">
                <div className="flex items-center gap-8 w-full md:w-auto">
                  <div className="flex flex-col items-center justify-center border-r border-white/10 pr-8 min-w-[80px]">
                    <span className="text-softGold font-bold text-2xl uppercase">{show.date.split(' ')[0]}</span>
                    <span className="text-white font-light text-sm tracking-widest">{show.date.split(' ')[1]}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{show.city}</h3>
                    <div className="flex items-center text-lightGray text-sm mt-1 uppercase tracking-widest">
                      <MapPin size={14} className="mr-2 text-softGold" />
                      {show.location}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto">
                  {show.available ? (
                    <button className="w-full md:w-auto px-8 py-3 bg-white text-deepBlack font-bold uppercase tracking-widest hover:bg-softGold hover:text-deepBlack transition-colors flex items-center justify-center group/btn">
                      {translations.agenda.tickets}
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button className="w-full md:w-auto px-8 py-3 border border-white/20 text-white/40 font-bold uppercase tracking-widest cursor-not-allowed">
                      Sold Out
                    </button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
