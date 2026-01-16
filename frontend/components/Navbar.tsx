
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  translations: TranslationSet;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, translations }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: 'pt-BR', label: 'PT' },
    { code: 'en-US', label: 'EN' },
    { code: 'es-ES', label: 'ES' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deepBlack/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold brand-font text-softGold tracking-tighter">
          Feitosa Jr
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <a href="#agenda" className="hover:text-softGold transition-colors text-sm font-semibold tracking-widest">{translations.nav.agenda}</a>
          <a href="#loja" className="hover:text-softGold transition-colors text-sm font-semibold tracking-widest">{translations.nav.store}</a>
          <a href="#contato" className="hover:text-softGold transition-colors text-sm font-semibold tracking-widest">{translations.nav.contact}</a>
          
          <div className="flex items-center space-x-3 ml-6 border-l border-white/20 pl-6 lang-selector">
            <Globe size={18} className="text-softGold" />
            {languages.map((l) => (
              <button
                key={l.code}
                data-lang={l.code.split('-')[0]}
                onClick={() => setLang(l.code)}
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${lang === l.code ? 'bg-softGold text-deepBlack' : 'text-lightGray hover:text-white'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center space-x-4">
           <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-deepBlack transition-transform duration-300 z-40 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <a href="#agenda" onClick={toggleMenu} className="text-3xl font-bold tracking-widest">{translations.nav.agenda}</a>
          <a href="#loja" onClick={toggleMenu} className="text-3xl font-bold tracking-widest">{translations.nav.store}</a>
          <a href="#contato" onClick={toggleMenu} className="text-3xl font-bold tracking-widest">{translations.nav.contact}</a>
          
          <div className="flex space-x-6 mt-12 lang-selector">
            {languages.map((l) => (
              <button
                key={l.code}
                data-lang={l.code.split('-')[0]}
                onClick={() => { setLang(l.code); toggleMenu(); }}
                className={`text-lg font-bold px-4 py-2 rounded ${lang === l.code ? 'bg-softGold text-deepBlack' : 'text-white border border-white/20'}`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
