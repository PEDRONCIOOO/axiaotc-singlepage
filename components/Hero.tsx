'use client'

import { useEffect } from 'react';
import { initHeroAnimations } from '../gsap/Hero';

export default function Hero() {
  useEffect(() => {
    const cleanup = initHeroAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  return (
    <section id="inicio" data-hero="section" className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-blue-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30" data-hero="shape-1"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20" data-hero="shape-2"></div>
      <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-10" data-hero="shape-3"></div>
      
      {/* Content */}
      <div className="z-10 max-w-5xl">
        <h1 data-hero="heading" className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
          Movimente dinheiro digital pelo Brasil em segundos
        </h1>
        <p data-hero="description" className="mt-8 text-lg sm:text-xl max-w-2xl mx-auto text-gray-700">
          O <strong data-hero="highlight" className="font-bold">tBRL</strong> é a moeda digital 100% lastreada em real que conecta o sistema Pix ao mundo digital, permitindo transações instantâneas para empresas no Brasil e no exterior.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <a data-hero="primary-btn" href="#contato" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
            Fale com um consultor
          </a>
          <a data-hero="secondary-btn" href="#como-funciona" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition">
            Como funciona
          </a>
        </div>
        <div data-hero="stats" className="mt-16 inline-block bg-blue-50 py-3 px-6 rounded-full text-blue-800 font-medium shadow-inner">
          Mais de 20 milhões de transações processadas no primeiro mês
        </div>
      </div>
    </section>
  );
}
