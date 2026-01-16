
export type Language = 'pt-BR' | 'en-US' | 'es-ES';

export interface TranslationSet {
  nav: {
    agenda: string;
    store: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    shortText: string;
    ctaAgenda: string;
    ctaShow: string;
  };
  manifesto: {
    line1: string;
    line2: string;
    line3: string;
  };
  verse: {
    text: string;
    reference: string;
  };
  agenda: {
    title: string;
    tickets: string;
    contact: string;
    noShows: string;
  };
  store: {
    title: string;
    buy: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    city: string;
    eventType: string;
    message: string;
    ctaRequest: string;
    ctaSend: string;
    success: string;
  };
}

export interface Show {
  id: string;
  date: string;
  city: string;
  location: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface Video {
  id: string;
  thumbnail: string;
  title: string;
  url: string;
}
