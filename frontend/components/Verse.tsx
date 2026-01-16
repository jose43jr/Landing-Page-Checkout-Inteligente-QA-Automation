
import React from 'react';
import { TranslationSet } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface VerseProps {
  translations: TranslationSet;
}

export const Verse: React.FC<VerseProps> = ({ translations }) => {
  return (
    <section className="py-40 bg-nightBlue relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      {/* Pulse Glow */}
      <div className="absolute w-[500px] h-[500px] bg-softGold/10 rounded-full blur-[100px] animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal animation="fade" duration={2000}>
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-4xl md:text-6xl font-light italic mb-8 leading-tight tracking-tight text-luminousWhite">
              “{translations.verse.text}”
            </p>
            <footer className="text-xl md:text-2xl font-bold text-softGold uppercase tracking-[0.3em]">
              — {translations.verse.reference}
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
};
