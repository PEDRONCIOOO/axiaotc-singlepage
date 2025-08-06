'use client'

import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { initApiSectionAnimations } from '../gsap/ApiSection';

export default function ApiSection() {
  const { language, t } = useTranslation();

  useEffect(() => {
    const cleanup = initApiSectionAnimations();
    
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

  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      titleKey: "apiSection.steps.step1.title",
      descriptionKey: "apiSection.steps.step1.description"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titleKey: "apiSection.steps.step2.title",
      descriptionKey: "apiSection.steps.step2.description"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titleKey: "apiSection.steps.step3.title",
      descriptionKey: "apiSection.steps.step3.description"
    }
  ];

  return (
    <section id="como-comecar" data-api="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-200 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div data-api="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span data-i18n="apiSection.badge" className="text-xs sm:text-sm font-medium text-blue-700">
              Processo simplificado
            </span>
          </div>
          
          <h2 data-api="heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span data-i18n="apiSection.heading.line1" className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 mb-2">
              Seu Acesso à Mesa
            </span>
            <span data-i18n="apiSection.heading.line2" className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
              em 3 Passos Simples
            </span>
          </h2>
          
          <p data-api="subtitle" data-i18n="apiSection.subtitle" className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed px-2">
            Processo otimizado para conectar você rapidamente à liquidez institucional
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} data-api="step" className="group text-center relative">
              {/* Step Number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 data-i18n={step.titleKey} className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {/* Texto será substituído pela tradução */}
                </h3>
                <p data-i18n={step.descriptionKey} className="text-sm sm:text-base text-slate-600 leading-relaxed px-2">
                  {/* Texto será substituído pela tradução */}
                </p>
              </div>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span data-api="readyStart" data-i18n="apiSection.readyStart" className="text-sm font-medium text-slate-700">
              Pronto para começar? Entre em contato agora
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}