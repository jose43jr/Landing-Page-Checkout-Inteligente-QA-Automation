
import React from 'react';
import { Play, Calendar } from 'lucide-react';
import { TranslationSet } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  translations: TranslationSet;
}

export const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/concert/1920/1080" 
          alt="Feitosa Jr Live" 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack via-deepBlack/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deepBlack via-transparent to-deepBlack/20"></div>
      </div>

      {/* Lighting Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-nightBlue rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-warmAmber rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal animation="slideUp" duration={1200}>
            <h1 className="text-7xl md:text-9xl font-extrabold mb-4 tracking-tighter leading-none">
              <span className="text-luminousWhite">{translations.hero.headline}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={200} duration={1000}>
            <h2 className="text-xl md:text-3xl font-semibold text-softGold mb-6 uppercase tracking-widest italic">
              {translations.hero.subheadline}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={400} duration={1000}>
            <p className="text-lg md:text-2xl text-lightGray mb-10 max-w-xl font-light leading-relaxed">
              {translations.hero.shortText}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={600} duration={1000}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agenda" 
                className="group relative px-8 py-4 bg-darkRed text-white font-bold tracking-widest uppercase transition-all overflow-hidden hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <Calendar size={18} className="mr-2" />
                {translations.hero.ctaAgenda}
                <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              <a 
                href="#contato" 
                className="px-8 py-4 border-2 border-softGold text-softGold font-bold tracking-widest uppercase hover:bg-softGold hover:text-deepBlack transition-all flex items-center justify-center active:scale-95"
              >
                <Play size={18} className="mr-2 fill-current" />
                {translations.hero.ctaShow}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 bg-gradient-to-b from-softGold to-transparent rounded-full mx-auto"></div>
      </div>
    </section>
  );
};
