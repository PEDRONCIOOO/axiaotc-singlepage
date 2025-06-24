'use client'

import { useEffect } from 'react';
import { initFinalCtaAnimations } from '../gsap/FinalCta';

const PARTICLE_POSITIONS = [
  { left: "67%", top: "40%" },
  { left: "45%", top: "54%" },
  { left: "63%", top: "14%" },
  { left: "8%", top: "82%" },
  { left: "74%", top: "57%" },
  { left: "29%", top: "43%" },
  { left: "93%", top: "56%" },
  { left: "33%", top: "23%" },
  { left: "84%", top: "48%" },
  { left: "65%", top: "48%" },
  { left: "78%", top: "1%" },
  { left: "28%", top: "88%" },
  { left: "38%", top: "17%" },
  { left: "22%", top: "28%" },
  { left: "95%", top: "2%" },
  { left: "95%", top: "28%" },
  { left: "58%", top: "66%" },
  { left: "75%", top: "89%" },
  { left: "52%", top: "27%" },
  { left: "69%", top: "79%" }
];

export default function FinalCta() {
  useEffect(() => {
    const cleanup = initFinalCtaAnimations();
    
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <section id="contato" data-cta="section" className="py-24 px-6 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div data-cta="particles" className="absolute inset-0">
          {PARTICLE_POSITIONS.map((position, i) => (
            <div 
              key={i}
              data-cta="particle"
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
              style={{
                left: position.left,
                top: position.top,
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative element */}
        <div data-cta="decoration" className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        
        <div className="text-center relative z-10">
          <div data-cta="badge" className="inline-block bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-200">
            <span className="mr-2">✨</span> Transforme sua operação financeira
          </div>
          
          <h2 data-cta="heading" className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="block">Pronto para modernizar</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">suas operações financeiras?</span>
          </h2>
          
          <p data-cta="description" className="text-lg mb-10 text-gray-600 max-w-2xl mx-auto">
            Junte-se às centenas de empresas que já utilizam o <strong className="text-blue-600">tBRL</strong> para processar pagamentos, reduzir custos e acelerar seus processos financeiros.
          </p>
          
          <div data-cta="cards" className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-left">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Demonstração personalizada</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Agende uma demonstração com nossa equipe para ver como o tBRL pode se adaptar às necessidades específicas da sua empresa.
              </p>
              <a
                href="mailto:demo@tbrl.com.br"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                <span>Agendar demonstração</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-left">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Fale com um consultor</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tire suas dúvidas e entenda melhor como nossa solução pode ajudar a otimizar seus processos de pagamento.
              </p>
              <a
                href="tel:+551199999999"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                <span>Ligar agora</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div data-cta="action" className="relative">
            <a
              href="mailto:contato@tbrl.com.br"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
            >
              Começar agora
            </a>
            <div className="absolute -z-10 inset-0 bg-blue-400 blur-xl opacity-10 rounded-full scale-150"></div>
          </div>
          
          <p data-cta="testimonial" className="mt-12 text-gray-600 italic">
            "A integração com o tBRL foi simples e o resultado imediato. Reduzimos nossos custos operacionais em 32% no primeiro mês."
            <span className="block mt-2 text-sm font-medium not-italic text-gray-800">— Carolina Silva, CFO da TechPay</span>
          </p>
        </div>
      </div>
    </section>
  );
}