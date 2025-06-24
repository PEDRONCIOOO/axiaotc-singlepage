'use client'

import { useEffect } from 'react';
import { initWhitelabelAnimations } from '../gsap/Whitelabel';

export default function Whitelabel() {
  useEffect(() => {
    const cleanup = initWhitelabelAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  return (
    <section id="whitelabel" data-wl="section" className="py-24 px-6 bg-blue-200 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 data-wl="heading" className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
              Sua marca, nosso sistema de pagamento
            </h2>
            <p data-wl="description" className="text-lg mb-8 text-gray-700">
              Crie sua própria moeda digital em real com sua marca, suas cores e seu domínio, aproveitando toda nossa infraestrutura. Ideal para bancos digitais, marketplaces e programas de fidelidade.
            </p>
            
            <div data-wl="benefits" className="mb-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-medium">Personalização completa de marca</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-medium">Compliance e segurança regulatória</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-medium">Pix e outras formas de pagamento integradas</p>
              </div>
            </div>
            
            <div data-wl="cta">
              <a href="#contato" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
                Saiba mais sobre soluções personalizadas
              </a>
            </div>
          </div>
          
          <div data-wl="showcase" className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 transform rotate-2 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">D</span>
                  </div>
                  <h3 className="font-bold text-purple-600">DigitalBank</h3>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Saldo dBRL</span>
                    <span className="font-bold">R$ 5.250,00</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg">Transferir</button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 transform -rotate-1 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">E</span>
                  </div>
                  <h3 className="font-bold text-green-600">EcoMart</h3>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Saldo ecoReais</span>
                    <span className="font-bold">R$ 1.820,50</span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg">Resgatar</button>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-1 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <h3 className="font-bold text-orange-500">MarketPlus</h3>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600">Saldo mCoins</span>
                    <span className="font-bold">R$ 3.450,75</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg">Pagar</button>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}