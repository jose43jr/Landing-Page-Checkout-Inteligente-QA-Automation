
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types';
import { MOCK_VIDEOS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Video>(MOCK_VIDEOS[0]);

  return (
    <section className="py-24 bg-deepBlack">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-12 tracking-tighter text-center">
            LIVE <span className="text-softGold italic">ENERGY</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Video */}
          <div className="lg:col-span-3">
            <ScrollReveal animation="fade">
              <div className="relative aspect-video bg-darkGraphite rounded-sm overflow-hidden border border-white/5 shadow-2xl group">
                <img 
                  src={activeVideo.thumbnail} 
                  alt={activeVideo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-24 h-24 bg-softGold rounded-full flex items-center justify-center text-deepBlack hover:scale-110 transition-transform active:scale-95 shadow-2xl">
                    <Play size={40} fill="currentColor" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-2xl font-bold uppercase tracking-widest">{activeVideo.title}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar Gallery */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {MOCK_VIDEOS.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setActiveVideo(vid)}
                className={`group relative aspect-video bg-darkGraphite overflow-hidden border transition-all ${activeVideo.id === vid.id ? 'border-softGold scale-[1.02]' : 'border-white/10 opacity-70 hover:opacity-100'}`}
              >
                <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <Play size={24} className="text-softGold" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
