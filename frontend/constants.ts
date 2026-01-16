
import { TranslationSet, Show, Product, Video } from './types';

export const TRANSLATIONS: Record<string, TranslationSet> = {
  'pt-BR': {
    nav: { agenda: 'Agenda', store: 'Loja', contact: 'Contato' },
    hero: {
      headline: 'Feitosa Jr',
      subheadline: 'Rock pop gospel. Fé viva. Som no máximo.',
      shortText: 'Música que nasce da fé e explode no palco.',
      ctaAgenda: 'Ver Agenda',
      ctaShow: 'Chamar para Show'
    },
    manifesto: {
      line1: 'Não é só música.',
      line2: 'É mensagem.',
      line3: 'É fé vivida em alto volume.'
    },
    verse: {
      text: 'Tudo o que tem fôlego louve ao Senhor.',
      reference: 'Salmos 150'
    },
    agenda: {
      title: 'Agenda de Shows',
      tickets: 'Ingressos',
      contact: 'Contato',
      noShows: 'Nenhum show agendado no momento.'
    },
    store: {
      title: 'Loja Oficial',
      buy: 'Comprar'
    },
    contact: {
      title: 'Contato & Convites',
      name: 'Nome',
      email: 'Email',
      city: 'Cidade / País',
      eventType: 'Tipo de Evento',
      message: 'Mensagem',
      ctaRequest: 'Solicitar Show',
      ctaSend: 'Enviar Mensagem',
      success: 'Mensagem enviada com sucesso!'
    }
  },
  'en-US': {
    nav: { agenda: 'Tour', store: 'Store', contact: 'Booking' },
    hero: {
      headline: 'Feitosa Jr',
      subheadline: 'Rock pop gospel. Living faith. Max volume.',
      shortText: 'Music born from faith that explodes on stage.',
      ctaAgenda: 'View Schedule',
      ctaShow: 'Book a Show'
    },
    manifesto: {
      line1: 'It is not just music.',
      line2: 'It is a message.',
      line3: 'It is faith lived at high volume.'
    },
    verse: {
      text: 'Let everything that has breath praise the Lord.',
      reference: 'Psalm 150'
    },
    agenda: {
      title: 'Tour Schedule',
      tickets: 'Tickets',
      contact: 'Contact',
      noShows: 'No shows scheduled at the moment.'
    },
    store: {
      title: 'Official Store',
      buy: 'Buy Now'
    },
    contact: {
      title: 'Contact & Booking',
      name: 'Name',
      email: 'Email',
      city: 'City / Country',
      eventType: 'Event Type',
      message: 'Message',
      ctaRequest: 'Request Show',
      ctaSend: 'Send Message',
      success: 'Message sent successfully!'
    }
  },
  'es-ES': {
    nav: { agenda: 'Agenda', store: 'Tienda', contact: 'Contacto' },
    hero: {
      headline: 'Feitosa Jr',
      subheadline: 'Rock pop gospel. Fe viva. Sonido al máximo.',
      shortText: 'Música que nace de la fe y explota en el escenario.',
      ctaAgenda: 'Ver Agenda',
      ctaShow: 'Reservar Show'
    },
    manifesto: {
      line1: 'No es solo música.',
      line2: 'Es un mensaje.',
      line3: 'Es fe vivida a todo volumen.'
    },
    verse: {
      text: 'Todo lo que respira alabe al Señor.',
      reference: 'Salmos 150'
    },
    agenda: {
      title: 'Agenda de Conciertos',
      tickets: 'Entradas',
      contact: 'Contacto',
      noShows: 'No hay conciertos programados por ahora.'
    },
    store: {
      title: 'Tienda Oficial',
      buy: 'Comprar'
    },
    contact: {
      title: 'Contacto y Reservas',
      name: 'Nombre',
      email: 'Correo',
      city: 'Ciudad / País',
      eventType: 'Tipo de Evento',
      message: 'Mensaje',
      ctaRequest: 'Solicitar Show',
      ctaSend: 'Enviar Mensaje',
      success: '¡Mensaje enviado con éxito!'
    }
  }
};

export const MOCK_AGENDA: Show[] = [
  { id: '1', date: '15 OUT', city: 'São Paulo, BR', location: 'Allianz Parque', available: true },
  { id: '2', date: '22 OUT', city: 'Curitiba, BR', location: 'Pedreira Paulo Leminski', available: true },
  { id: '3', date: '05 NOV', city: 'Belo Horizonte, BR', location: 'Mineirinho', available: false },
  { id: '4', date: '12 NOV', city: 'Rio de Janeiro, BR', location: 'Maracanãzinho', available: true },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'CD Fé Inabalável', price: 'R$ 35,00', image: 'https://picsum.photos/seed/album1/400/400' },
  { id: 'p2', name: 'CD Volume Máximo', price: 'R$ 40,00', image: 'https://picsum.photos/seed/album2/400/400' },
  { id: 'p3', name: 'CD Acústico Ao Vivo', price: 'R$ 45,00', image: 'https://picsum.photos/seed/album3/400/400' },
];

export const MOCK_VIDEOS: Video[] = [
  { id: 'v1', title: 'Explosão de Fé (Ao Vivo)', thumbnail: 'https://picsum.photos/seed/vid1/800/450', url: '#' },
  { id: 'v2', title: 'Som no Máximo', thumbnail: 'https://picsum.photos/seed/vid2/800/450', url: '#' },
  { id: 'v3', title: 'Manifesto Rock', thumbnail: 'https://picsum.photos/seed/vid3/800/450', url: '#' },
  { id: 'v4', title: 'Luz do Mundo', thumbnail: 'https://picsum.photos/seed/vid4/800/450', url: '#' },
];
