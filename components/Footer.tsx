'use client'

import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { initFooterAnimations } from '../gsap/Footer';
import Image from 'next/image';

export default function Footer() {
  const { language, t } = useTranslation();

  useEffect(() => {
    const cleanup = initFooterAnimations();
    
    return () => {
      if (cleanup) {
        cleanup();
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

  return (
    <footer data-footer="section" className="bg-gradient-to-b from-slate-50 to-slate-100 text-gray-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <div data-footer="company" className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/axialogo.png"
                alt="Axia Digital Solutions"
                width={60}
                height={60}
                className="flex-shrink-0"
              />
              <div>
                <h3 data-i18n="footer.company.name" className="font-bold text-xl text-slate-800">
                  Axia Digital Solutions
                </h3>
                <p data-i18n="footer.company.tagline" className="text-sm text-slate-600">
                  Liquidez cripto institucional
                </p>
              </div>
            </div>
            
            <p data-i18n="footer.company.description" className="text-base text-slate-600 leading-relaxed max-w-md">
              Especialistas em liquidez cripto institucional, oferecendo soluções personalizadas 
              para empresas que buscam maximizar seus resultados no mercado digital.
            </p>

            <div className="space-y-3">
              <h4 data-i18n="footer.company.contact.title" className="font-semibold text-slate-800 mb-3">
                Contato direto:
              </h4>
              <a 
                href="mailto:info@axiadigitalsolutions.com" 
                className="inline-flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div data-i18n="footer.company.contact.emailLabel" className="text-sm font-medium text-slate-800">
                    E-mail comercial
                  </div>
                  <div data-i18n="footer.company.contact.email" className="text-sm">
                    info@axiadigitalsolutions.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-footer="links">
            <h3 data-i18n="footer.quickLinks.title" className="font-bold text-lg mb-6 text-slate-800">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span data-i18n="footer.quickLinks.links.howItWorks">
                    Como Funciona
                  </span>
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span data-i18n="footer.quickLinks.links.services">
                    Nossos Serviços
                  </span>
                </a>
              </li>
              <li>
                <a href="#casos-de-uso" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span data-i18n="footer.quickLinks.links.useCases">
                    Casos de Uso
                  </span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span data-i18n="footer.quickLinks.links.faq">
                    FAQ
                  </span>
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span data-i18n="footer.quickLinks.links.contact">
                    Contato
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div data-footer="services">
            <h3 data-i18n="footer.services.title" className="font-bold text-lg mb-6 text-slate-800">
              Nossos Serviços
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span data-i18n="footer.services.list.otcDesk">
                  Mesa OTC Institucional
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <span data-i18n="footer.services.list.crossBorder">
                  Cross-Border Payments
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span data-i18n="footer.services.list.liquidityApi">
                  API de Liquidez
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <span data-i18n="footer.services.list.multiCurrency">
                  Conversão Multi-Moeda
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span data-i18n="footer.services.list.support">
                  Suporte 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div data-footer="bottom" className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p data-i18n="footer.bottom.copyright" className="text-sm text-slate-600 mb-2">
                © 2025 Axia Digital Solutions. Todos os direitos reservados.
              </p>
              <p data-i18n="footer.bottom.cnpj" className="text-xs text-slate-500">
                CNPJ: 55.836.776/0001-38 | Líder em liquidez cripto institucional
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span data-i18n="footer.bottom.trustIndicators.systemOnline" className="text-xs text-slate-600 font-medium">
                  Sistema Online
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.586-4.5a2 2 0 112.828 2.828L12 18.5 5.586 12.086A2 2 0 118.414 9.5l3.586 3.586z" />
                  </svg>
                </div>
                <span data-i18n="footer.bottom.trustIndicators.sslSecurity" className="text-xs text-slate-600 font-medium">
                  Segurança SSL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}