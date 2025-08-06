'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LanguageToggle() {
  const { language, setLanguage, isTransitioning } = useTranslation();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Animação inicial do botão
    gsap.fromTo(buttonRef.current, 
      { 
        scale: 0,
        opacity: 0,
        rotation: -180
      },
      { 
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: 0.5
      }
    );
  }, []);

  const toggleLanguage = async () => {
    if (isTransitioning) return;

    // Animação do botão durante a transição
    const tl = gsap.timeline();
    
    // Fase 1: Preparação da animação
    tl.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      ease: "power2.out"
    })
    
    // Fase 2: Rotação da bandeira
    .to(flagRef.current, {
      rotationY: 180,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.inOut"
    }, "-=0.05")
    
    // Fase 3: Pulso de energia
    .to(buttonRef.current, {
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
      scale: 1.1,
      duration: 0.2,
      ease: "power2.out"
    })
    
    // Executar troca de idioma no meio da animação
    .call(() => {
      setLanguage(language === 'pt-br' ? 'en' : 'pt-br');
    })
    
    // Fase 4: Volta da bandeira
    .to(flagRef.current, {
      rotationY: 0,
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.4)"
    }, "+=0.1")
    
    // Fase 5: Resetar estado do botão
    .to(buttonRef.current, {
      scale: 1,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.2");
  };

  const handleMouseEnter = () => {
    if (isTransitioning) return;
    
    gsap.to(buttonRef.current, {
      scale: 1.1,
      y: -2,
      boxShadow: "0 15px 35px -5px rgba(59, 130, 246, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(textRef.current, {
      opacity: 1,
      x: 10,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (isTransitioning) return;
    
    gsap.to(buttonRef.current, {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(textRef.current, {
      opacity: 0,
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={toggleLanguage}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={isTransitioning}
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full p-3 shadow-lg transition-all duration-300 group ${
        isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      aria-label={`Switch to ${language === 'pt-br' ? 'English' : 'Português'}`}
    >
      <div className="flex items-center gap-2">
        <div 
          ref={flagRef}
          className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 relative"
        >
          {language === 'pt-br' ? (
            // Flag do Brasil
            <div className="w-full h-full bg-gradient-to-b from-green-500 via-yellow-400 to-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          ) : (
            // Flag dos EUA
            <div className="w-full h-full bg-gradient-to-b from-red-500 via-white to-blue-600 relative">
              <div className="absolute inset-0">
                <div className="w-full h-1 bg-red-500"></div>
                <div className="w-full h-1 bg-white"></div>
                <div className="w-full h-1 bg-red-500"></div>
                <div className="w-full h-1 bg-white"></div>
                <div className="w-full h-1 bg-red-500"></div>
                <div className="w-full h-1 bg-white"></div>
              </div>
              <div className="absolute top-0 left-0 w-3 h-3 bg-blue-600"></div>
            </div>
          )}
          
          {/* Loading indicator durante transição */}
          {isTransitioning && (
            <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        <span 
          ref={textRef}
          className="text-xs font-medium text-gray-700 opacity-0 whitespace-nowrap"
        >
          {language === 'pt-br' ? 'EN' : 'PT'}
        </span>
      </div>

      {/* Efeito de energia durante transição */}
      {isTransitioning && (
        <div className="absolute inset-0 rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30 animate-pulse"></div>
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-ping"></div>
        </div>
      )}
    </button>
  );
}