
import React from 'react';
import { Instagram, Youtube, Facebook, Music2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-deepBlack border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold brand-font text-softGold mb-2">Feitosa Jr</h2>
            <p className="text-lightGray text-sm tracking-widest uppercase opacity-60">© {new Date().getFullYear()} - Rock Pop Gospel</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-darkGraphite rounded-full text-lightGray hover:text-softGold transition-all hover:scale-110"><Instagram size={20} /></a>
            <a href="#" className="p-3 bg-darkGraphite rounded-full text-lightGray hover:text-softGold transition-all hover:scale-110"><Youtube size={20} /></a>
            <a href="#" className="p-3 bg-darkGraphite rounded-full text-lightGray hover:text-softGold transition-all hover:scale-110"><Facebook size={20} /></a>
            <a href="#" className="p-3 bg-darkGraphite rounded-full text-lightGray hover:text-softGold transition-all hover:scale-110"><Music2 size={20} /></a>
          </div>

          <div className="text-center md:text-right">
             <p className="text-xs font-bold tracking-widest text-lightGray opacity-40 uppercase">Design & Code by Studio IA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
