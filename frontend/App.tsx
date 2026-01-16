
import React, { useState } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './constants';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { VideoGallery } from './components/VideoGallery';
import { Verse } from './components/Verse';
import { Agenda } from './components/Agenda';
import { Store } from './components/Store';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt-BR');
  const translations = TRANSLATIONS[lang] || TRANSLATIONS['en-US'];

  return (
    <div className="relative">
      <Navbar lang={lang} setLang={setLang} translations={translations} />
      
      <main>
        <Hero translations={translations} />
        <Manifesto translations={translations} />
        <VideoGallery />
        <Verse translations={translations} />
        <Agenda translations={translations} />
        <Store translations={translations} />
        <ContactForm translations={translations} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
