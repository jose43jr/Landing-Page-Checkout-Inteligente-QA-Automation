
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { TranslationSet } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

interface StoreProps {
  translations: TranslationSet;
}

export const Store: React.FC<StoreProps> = ({ translations }) => {
  return (
    <section id="loja" className="py-24 bg-darkGraphite">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase inline-block relative">
              {translations.store.title}
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-softGold"></div>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MOCK_PRODUCTS.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 150} animation="slideUp">
              <div className="group bg-deepBlack border border-white/5 p-4 transition-all hover:scale-[1.02] hover:shadow-2xl">
                <div className="relative aspect-square overflow-hidden mb-6 bg-nightBlue">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-softGold/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2 group-hover:text-softGold transition-colors">
                  {product.name}
                </h3>
                <p className="text-warmAmber text-2xl font-bold mb-6 italic">{product.price}</p>
                <button className="btn-comprar w-full py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-softGold hover:border-softGold hover:text-deepBlack transition-all flex items-center justify-center group-active:scale-95">
                  <ShoppingCart size={18} className="mr-3" />
                  {translations.store.buy}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
