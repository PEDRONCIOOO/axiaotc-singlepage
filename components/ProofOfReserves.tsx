'use client'

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { initProofOfReservesAnimations } from '../gsap/ProofOfReserves';

const IframeComponent = dynamic(
  () => import('@/components/IframeComponent'),
  { ssr: false }
);

export default function ProofOfReserves() {
  useEffect(() => {
    const cleanup = initProofOfReservesAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  return (
    <section id="transparencia" data-por="section" className="py-24 px-6 bg-blue-200 text-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 data-por="heading" className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            100% de transparência e segurança
          </h2>
          <p data-por="description" className="text-lg max-w-2xl mx-auto text-gray-700">
            Acompanhe em tempo real o lastro completo do <strong data-por="highlight">tBRL</strong> no sistema bancário brasileiro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <ul className="space-y-6 text-left">
              <li data-por="list-item" className="flex items-start">
                <div className="mr-4 bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Lastro completo em real</h3>
                  <p className="text-gray-600">Cada tBRL é garantido por 1 real em conta bancária dedicada e auditada</p>
                </div>
              </li>
              
              <li data-por="list-item" className="flex items-start">
                <div className="mr-4 bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Transparência em tempo real</h3>
                  <p className="text-gray-600">Acompanhe o saldo bancário em tempo real através do nosso painel de transparência</p>
                </div>
              </li>
              
              <li data-por="list-item" className="flex items-start">
                <div className="mr-4 bg-blue-100 p-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Verificação pública</h3>
                  <p className="text-gray-600">Verificação pública do saldo total disponível para qualquer pessoa consultar</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div data-por="iframe-container" className="bg-white p-2 rounded-xl shadow-xl border border-gray-200 overflow-hidden transition-all">
            <div className="relative w-full h-[360px] rounded-lg overflow-hidden">
              <IframeComponent />
              <div data-por="iframe-overlay" className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}