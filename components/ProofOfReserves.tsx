'use client'

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { initProofOfReservesAnimations } from '../gsap/ProofOfReserves';

const LiquidityChart = dynamic(
  () => import('@/components/LiquidityChart'),
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
    <section id="transparencia" data-por="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-cyan-100/40 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div data-por="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Acesso exclusivo à liquidez institucional</span>
          </div>
          
          <h2 data-por="heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Bem-vindo aos Bastidores da
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Liquidez Cripto
            </span>
          </h2>
          
          <p data-por="subtitle" className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Esqueça tudo o que você conhece sobre exchanges. A Axia não é uma corretora aberta a todos.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div data-por="description">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Somos sua <strong className="text-blue-600">mesa de operações (OTC) privada</strong>, 
                um canal direto com a liquidez que você precisa, na hora que você precisa.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Aqui, suas negociações são executadas de forma confidencial e sob demanda. 
                Você tem acesso a um <strong className="text-cyan-600">parceiro especialista</strong> que 
                entende suas metas e estrutura operações para maximizar seu resultado.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Seja para converter caixa, realizar pagamentos internacionais ou executar 
                estratégias de investimento complexas.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Liquidez Profunda</h3>
                  <p className="text-gray-600 text-sm">Acesso direto aos order books mais profundos do mercado</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Execução Sem Slippage</h3>
                  <p className="text-gray-600 text-sm">Preços garantidos mesmo para operações de grande volume</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Trading Institucional</h3>
                  <p className="text-gray-600 text-sm">Ferramentas e suporte especializados para investidores profissionais</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Liquidity Chart Container */}
          <div data-por="chart-container" className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-600 bg-white/90 px-2 py-1 rounded-full">
                  Tempo Real
                </span>
              </div>
              
              <div className="relative w-full mt-8">
                <LiquidityChart />
              </div>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-600">Order Book BTC/USD • Simulação da Atualização em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}