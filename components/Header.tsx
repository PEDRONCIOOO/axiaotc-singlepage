'use client'

import { useEffect } from 'react';
import { initHeaderAnimations } from '../gsap/Header';

export default function Header() {
  useEffect(() => {
    initHeaderAnimations();
    
    return () => {
    };
  }, []);

  return (
    <header data-animation="header" className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tight">
          <a href="#" data-animation="logo" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1.5 rounded-md shadow-sm">
              tBRL
            </span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex gap-7 text-gray-700 font-medium">
              <li>
                <a href="#como-funciona" data-animation="nav-item" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#casos-de-uso" data-animation="nav-item" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all">
                  Casos de Uso
                </a>
              </li>
              <li>
                <a href="#faq" data-animation="nav-item" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" data-animation="nav-item" className="hover:text-blue-600 transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <button data-animation="cta-button" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors text-sm font-medium">
            Começar
          </button>
        </div>
      </div>
    </header>
  );
}