'use client'

import { useEffect, useState } from 'react';
import { initUseCasesAnimations} from '../gsap/useCases';

export default function UseCases() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  
  useEffect(() => {
    const cleanup = initUseCasesAnimations(setFlippedCard);
    
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);
  
  const cases = [
    {
      icon: "🌎",
      title: "Empresas internacionais",
      description: "Receba pagamentos em reais via Pix sem precisar de conta bancária brasileira. Converta para outras moedas em minutos.",
      benefits: [
        "Acesso ao mercado brasileiro sem burocracia",
        "Conversão automática para USD, EUR e outras moedas",
        "Recebimentos processados em segundos"
      ]
    },
    {
      icon: "💳",
      title: "Empresas de pagamento",
      description: "Processe boletos, transferências e Pix com mais facilidade e menor custo operacional.",
      benefits: [
        "Taxas reduzidas em até 40%",
        "APIs de fácil integração",
        "Reconciliação automática"
      ]
    },
    {
      icon: "📈",
      title: "Gestoras de investimentos",
      description: "Distribua rendimentos de investimentos diretamente para seus clientes de forma automática.",
      benefits: [
        "Pagamentos programados e recorrentes",
        "Distribuição automatizada de dividendos",
        "Rastreabilidade completa das operações"
      ]
    },
    {
      icon: "🔄",
      title: "Empresas de remessas",
      description: "Reduza custos em transferências internacionais com nossa solução digital em real brasileiro.",
      benefits: [
        "Economia de até 4.5% por operação",
        "Transferências liquidadas em minutos",
        "Suporte a mais de 30 moedas internacionais"
      ]
    }
  ];

  return (
    <section id="casos-de-uso" data-uc="section" className="py-24 px-6 bg-gradient-to-r from-blue-50 to-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-uc="heading" className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            Quem pode usar o tBRL
          </h2>
          <p data-uc="subheading" className="text-lg max-w-2xl mx-auto text-gray-700">
            Soluções adaptadas para diferentes setores com benefícios específicos para cada tipo de negócio
          </p>
        </div>
        
        <div className="relative mb-12">
          {/* Background decorative elements */}
          <div data-uc="decoration-1" className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
          <div data-uc="decoration-2" className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
          
          <div data-uc="card-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cases.map((item, index) => (
              <div 
                key={index}
                data-uc="card-wrapper"
                className="h-80 cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div 
                  data-uc="card"
                  className={`relative w-full h-full transition-all duration-500`}
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div 
                    data-uc="card-front"
                    className="absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-blue-100"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-4 text-blue-600 text-sm font-medium">
                      Clique para ver benefícios
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div 
                    data-uc="card-back"
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 flex flex-col justify-center text-white"
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-center">Benefícios</h3>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start">
                          <span className="mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-blue-100 text-sm font-medium text-center">
                      Clique para voltar
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div data-uc="cta" className="text-center bg-blue-50 p-8 rounded-xl shadow-inner max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-3">Pronto para integrar com tBRL?</h3>
          <p className="mb-6 text-gray-700">
            Nossa equipe de especialistas está pronta para ajudar seu negócio a aproveitar todos os benefícios do tBRL.
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition"
          >
            Falar com um consultor
          </a>
        </div>
      </div>
    </section>
  );
}