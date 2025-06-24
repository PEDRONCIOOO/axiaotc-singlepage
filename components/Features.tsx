'use client'

import { useEffect } from 'react';
import { initFeaturesAnimations } from '../gsap/Features';

export default function Features() {
  useEffect(() => {
    const cleanup = initFeaturesAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  return (
    <section id="como-funciona" data-features="section" className="py-24 px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 data-features="heading" className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Como o tBRL funciona
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div data-features="card" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
            <div className="relative z-10">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Entrada de Dinheiro</h3>
              <p className="text-gray-700">Envie um <strong className="text-blue-600">Pix</strong> e receba tBRL instantaneamente em sua conta digital</p>
            </div>
          </div>
          
          <div data-features="card" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
            <div className="relative z-10">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Saída de Dinheiro</h3>
              <p className="text-gray-700">Converta tBRL e receba reais via <strong className="text-blue-600">Pix</strong> na sua conta bancária em segundos</p>
            </div>
          </div>
          
          <div data-features="card" className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
            <div className="relative z-10">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-3">Transações Internacionais</h3>
              <p className="text-gray-700">Troque diretamente <strong className="text-blue-600">reais por dólar digital</strong> com taxas a partir de <strong className="text-blue-600">0,6%</strong></p>
            </div>
          </div>
        </div>
        
        <div data-features="footer" className="text-center bg-blue-50 py-4 px-6 rounded-lg shadow-inner max-w-2xl mx-auto">
          <p className="text-blue-800">
            Compatível com as principais redes de pagamento digital no Brasil e no mundo
          </p>
        </div>
      </div>
    </section>
  );
}
