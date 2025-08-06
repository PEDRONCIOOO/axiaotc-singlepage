'use client'

import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { initWhitelabelAnimations } from '../gsap/Whitelabel';

export default function Whitelabel() {
  const { language, t } = useTranslation();

  useEffect(() => {
    const cleanup = initWhitelabelAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  // Atualizar conteúdo quando as traduções mudarem
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
          const translation = t(key);
          if (translation && translation !== key) {
            if (translation.includes('<') && translation.includes('>')) {
              element.innerHTML = translation;
            } else {
              element.textContent = translation;
            }
          }
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [language, t]);

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-4.5a2 2 0 112.828 2.828L12 18.5 5.586 12.086A2 2 0 118.414 9.5l3.586 3.586z" />
        </svg>
      ),
      titleKey: "whitelabel.services.institutionalSecurity.title",
      descriptionKey: "whitelabel.services.institutionalSecurity.description",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      titleKey: "whitelabel.services.multiCurrencyLiquidity.title",
      descriptionKey: "whitelabel.services.multiCurrencyLiquidity.description",
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      titleKey: "whitelabel.services.operation247.title",
      descriptionKey: "whitelabel.services.operation247.description",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      titleKey: "whitelabel.services.optimizedSpreads.title",
      descriptionKey: "whitelabel.services.optimizedSpreads.description",
      gradient: "from-cyan-600 to-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      titleKey: "whitelabel.services.web3Expertise.title",
      descriptionKey: "whitelabel.services.web3Expertise.description",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="servicos" data-wl="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-blue-500 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Tamanhos padronizados */}
        <div className="text-center mb-12 sm:mb-16">
          <div data-wl="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span data-i18n="whitelabel.badge" className="text-sm font-medium text-blue-700">
              Nossos Serviços Premium
            </span>
          </div>
          
          <h2 data-wl="heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span data-i18n="whitelabel.heading.line1" className="block mb-2 leading-tight">
              Excelência em Cada
            </span>
            <span data-i18n="whitelabel.heading.line2" className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
              Operação Executada
            </span>
          </h2>
          
          <p data-wl="subtitle" data-i18n="whitelabel.subtitle" className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Cinco pilares fundamentais que garantem o sucesso das suas operações institucionais
          </p>
        </div>

        {/* Services Grid - Layout Corrigido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {services.slice(0, 3).map((service, index) => (
            <div 
              key={index}
              data-wl="service-card" 
              className="group relative bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-lg border border-white/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[340px] flex flex-col"
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-300 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center flex-1 flex flex-col">
                {/* Clean Icon */}
                <div className="mb-6">
                  <div className={`bg-gradient-to-br ${service.gradient} p-5 rounded-2xl inline-flex text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title - Tamanho padronizado */}
                <h3 data-i18n={service.titleKey} className="font-bold text-lg sm:text-xl mb-3 text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {/* Texto será substituído pela tradução */}
                </h3>

                {/* Description - Tamanho padronizado */}
                <p data-i18n={service.descriptionKey} className="text-slate-600 leading-relaxed text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 flex-1">
                  {/* Texto será substituído pela tradução */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div 
              key={index + 3}
              data-wl="service-card" 
              className="group relative bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-3xl shadow-lg border border-white/80 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 min-h-[340px] flex flex-col"
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all duration-300 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center flex-1 flex flex-col">
                {/* Clean Icon */}
                <div className="mb-6">
                  <div className={`bg-gradient-to-br ${service.gradient} p-5 rounded-2xl inline-flex text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group_hover:scale-105`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title - Tamanho padronizado */}
                <h3 data-i18n={service.titleKey} className="font-bold text-lg sm:text-xl mb-3 text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                  {/* Texto será substituído pela tradução */}
                </h3>

                {/* Description - Tamanho padronizado */}
                <p data-i18n={service.descriptionKey} className="text-slate-600 leading-relaxed text-sm sm:text-base group-hover:text-slate-700 transition-colors duration-300 flex-1">
                  {/* Texto será substituído pela tradução */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Tamanhos padronizados */}
        <div data-wl="cta-section" className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white text-center overflow-hidden shadow-2xl">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span data-i18n="whitelabel.cta.badge" className="text-sm font-medium text-white/90">
                  Solução Personalizada
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              <span data-i18n="whitelabel.cta.heading.line1" className="block">
                Transforme Sua Estratégia
              </span>
              <span data-i18n="whitelabel.cta.heading.line2" className="block bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                de Liquidez Hoje
              </span>
            </h3>
            
            <p data-i18n="whitelabel.cta.description" className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
              Conecte-se com nossa mesa de operações e descubra como maximizar 
              seus resultados com liquidez institucional de verdade.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a 
                href="#contato" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-blue-600 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span data-i18n="whitelabel.cta.buttons.primary">Quero Acesso Agora</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#transparencia" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span data-i18n="whitelabel.cta.buttons.secondary">Ver Liquidez ao Vivo</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span data-i18n="whitelabel.cta.trustIndicators.approval" className="text-sm font-medium">
                    Aprovação em 24h
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span data-i18n="whitelabel.cta.trustIndicators.setup" className="text-sm font-medium">
                    Setup em 5 minutos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span data-i18n="whitelabel.cta.trustIndicators.support" className="text-sm font-medium">
                    Suporte 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}