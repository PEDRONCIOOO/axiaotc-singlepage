'use client'

import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { initHeaderAnimations } from '../gsap/Header';
import Image from 'next/image';

export default function Header() {
  const { language, t } = useTranslation();

  useEffect(() => {
    initHeaderAnimations();
    
    return () => {
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
    <header data-animation="header" className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">
          <a href="#" data-animation="logo" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image 
              src="/axialogo.png" 
              alt={t('header.logo.alt') || 'Axia Logo'} 
              width={80} 
              height={40} 
            />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex gap-7 text-gray-700 font-medium">
              <li>
                <a href="#como-funciona" data-animation="nav-item" className="hover:text-cyan-500 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all">
                  <span data-i18n="header.navigation.howItWorks">
                    Como Funciona
                  </span>
                </a>
              </li>
              <li>
                <a href="#casos-de-uso" data-animation="nav-item" className="hover:text-cyan-500 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all">
                  <span data-i18n="header.navigation.useCases">
                    Casos de Uso
                  </span>
                </a>
              </li>
              <li>
                <a href="#faq" data-animation="nav-item" className="hover:text-cyan-500 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all">
                  <span data-i18n="header.navigation.faq">
                    Perguntas Frequentes
                  </span>
                </a>
              </li>
              <li>
                <a href="#contato" data-animation="nav-item" className="hover:text-cyan-500 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-cyan-500 after:transition-all">
                  <span data-i18n="header.navigation.contact">
                    Contato
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}