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

  const problemsData = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
      title: "Perda de Valor",
      description: "Com a desvalorização constante do real, seu dinheiro perde valor a cada dia que passa.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Burocracia e Lentidão",
      description: "Processos burocráticos e lentos podem atrasar suas transações e investimentos.",
      gradient: "from-red-600 to-red-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Suporte Genérico",
      description: "Atendimento ao cliente limitado e falta de suporte personalizado.",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Falta de Sigilo",
      description: "As transações financeiras tradicionais muitas vezes carecem de privacidade e segurança.",
      gradient: "from-red-600 to-red-500"
    }
  ];

  return (
    <section id="como-funciona" data-features="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-200 to-white relative overflow-hidden">
      {/* Background Elements - Cores azul/cyan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/60 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/50 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div data-features="badge" className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium text-red-700">Problemas do mercado tradicional</span>
          </div>
          
          <h2 data-features="heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-500 to-cyan-500 mb-2">
              O mercado tradicional está
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-700">
              limitando seu potencial?
            </span>
          </h2>
          
          <p data-features="subtitle" className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed px-2">
            Se você lida com grandes volumes, já conhece os obstáculos: operações que perdem valor no meio do caminho (slippage), a lentidão de uma remessa SWIFT, a burocracia que trava seu capital e a falta de privacidade que expõe sua estratégia. Mover milhões não deveria ser um processo lento, caro e arriscado.
          </p>
        </div>
        
        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {problemsData.map((problem, index) => (
            <div 
              key={index}
              data-features="card" 
              className="group bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-200/30 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${problem.gradient} opacity-10 rounded-full -mr-10 -mt-10 transition-all duration-300 group-hover:scale-150`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`bg-gradient-to-br ${problem.gradient} p-3 rounded-xl inline-flex mb-4 text-white shadow-lg`}>
                  {problem.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3 text-slate-800 group-hover:text-slate-900 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {problem.description}
                </p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
