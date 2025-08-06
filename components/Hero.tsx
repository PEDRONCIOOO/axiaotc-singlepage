'use client'

import { useEffect } from 'react';
import { initHeroAnimations } from '../gsap/Hero';

export default function Hero() {
  useEffect(() => {
    const cleanup = initHeroAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  // Posições fixas para evitar problemas de hidratação
  const particlePositions = [
    { left: '10%', top: '20%', size: 4, color: 'rgba(59, 130, 246, 0.8)', delay: '0s' },
    { left: '85%', top: '15%', size: 6, color: 'rgba(34, 211, 238, 0.7)', delay: '0.5s' },
    { left: '20%', top: '80%', size: 5, color: 'rgba(14, 165, 233, 0.6)', delay: '1s' },
    { left: '70%', top: '75%', size: 7, color: 'rgba(59, 130, 246, 0.9)', delay: '1.5s' },
    { left: '45%', top: '25%', size: 4, color: 'rgba(34, 211, 238, 0.8)', delay: '2s' },
    { left: '90%', top: '60%', size: 5, color: 'rgba(14, 165, 233, 0.7)', delay: '2.5s' },
    { left: '15%', top: '45%', size: 6, color: 'rgba(59, 130, 246, 0.6)', delay: '0.8s' },
    { left: '60%', top: '10%', size: 4, color: 'rgba(34, 211, 238, 0.9)', delay: '1.3s' },
    { left: '30%', top: '90%', size: 5, color: 'rgba(14, 165, 233, 0.8)', delay: '1.8s' },
    { left: '80%', top: '40%', size: 7, color: 'rgba(59, 130, 246, 0.7)', delay: '0.3s' },
    { left: '5%', top: '70%', size: 4, color: 'rgba(34, 211, 238, 0.6)', delay: '2.3s' },
    { left: '95%', top: '30%', size: 6, color: 'rgba(14, 165, 233, 0.9)', delay: '1.1s' },
    { left: '35%', top: '5%', size: 5, color: 'rgba(59, 130, 246, 0.8)', delay: '1.6s' },
    { left: '65%', top: '85%', size: 4, color: 'rgba(34, 211, 238, 0.7)', delay: '0.1s' },
    { left: '25%', top: '60%', size: 6, color: 'rgba(14, 165, 233, 0.8)', delay: '2.1s' }
  ];

  return (
    <section id="inicio" data-hero="section" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden pt-20 md:pt-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full blur-xl" data-hero="shape-1"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-cyan-200/25 to-blue-300/15 rounded-full blur-2xl" data-hero="shape-2"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/10 rounded-full blur-lg" data-hero="shape-3"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-tr from-cyan-300/15 to-blue-400/10 rounded-full blur-md" data-hero="shape-4"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDelay: particle.delay,
              animationDuration: '3s'
            }}
            data-hero={`particle-${i}`}
          ></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Badge */}
        <div data-hero="badge" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg mx-auto">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm font-medium text-blue-700">Liquidez institucional para grandes volumes</span>
        </div>
        
        {/* Main Heading */}
        <h1 data-hero="heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold max-w-6xl mx-auto leading-tight mb-6 sm:mb-8 px-2">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 mb-2">
            O Acesso Direto à
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 relative mb-2">
            Liquidez Cripto
            {/* Decorative underline */}
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700">
            para Grandes Volumes
          </span>
        </h1>
        
        {/* Description */}
        <p data-hero="description" className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto text-slate-600 mb-8 sm:mb-12 leading-relaxed px-2">
          Para <span className="font-semibold text-blue-700">investidores e empresas</span> que precisam de agilidade, segurança e um parceiro especialista para movimentar <span className="font-semibold text-cyan-600">a partir de R$20.000</span> sem impactar o mercado e sem as travas do sistema tradicional.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
          <a 
            data-hero="primary-btn" 
            href="#contato" 
            className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            <span className="relative z-10">Fale com um especialista</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            data-hero="secondary-btn" 
            href="#como-funciona" 
            className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-700 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Como funciona
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        {/* Stats Card */}
        <div data-hero="stats" className="inline-flex items-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-sm border border-blue-200/50 rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-xl max-w-xs sm:max-w-none mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <p className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 leading-tight">R$ 3+ bilhões</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-tight">movimentados na última década</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
