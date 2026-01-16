
import React from 'react';
import { TranslationSet } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface ManifestoProps {
  translations: TranslationSet;
}

export const Manifesto: React.FC<ManifestoProps> = ({ translations }) => {
  return (
    <section id="manifesto" className="py-32 bg-darkGraphite relative overflow-hidden">
      <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
         <h3 className="text-[200px] leading-none brand-font">MANIFESTO</h3>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal delay={0} animation="fade">
            <h3 className="text-3xl md:text-5xl font-bold text-lightGray leading-tight italic">
              "{translations.manifesto.line1}"
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={400} animation="fade">
            <h3 className="text-4xl md:text-7xl font-extrabold text-softGold leading-tight">
              {translations.manifesto.line2}
            </h3>
          </ScrollReveal>
          
          <ScrollReveal delay={800} animation="fade">
            <h3 className="text-3xl md:text-5xl font-bold text-luminousWhite leading-tight italic">
              {translations.manifesto.line3}
            </h3>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
