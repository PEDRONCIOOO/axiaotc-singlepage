'use client'


export default function UseCases() {
  
  const cases = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "Cross-Border Sem Fricção",
      subtitle: "Pagamentos internacionais reimaginados",
      description: "Transfira valores entre fronteiras sem esforço. Converta, pague e receba em cripto ou moeda fiduciária com a mesma facilidade, escolhendo sempre a opção mais eficiente para suas necessidades.",
      gradient: "from-blue-600 to-cyan-500",
      benefits: [
        {
          icon: "🌍",
          title: "Acesso Global Instantâneo",
          description: "Acesso ao mercado brasileiro e internacional sem burocracia ou restrições geográficas"
        },
        {
          icon: "💱",
          title: "Conversão Multi-Moeda",
          description: "Conversão automática para USD, EUR, BRL e outras moedas com taxas otimizadas"
        },
        {
          icon: "⚡",
          title: "Liquidação Express",
          description: "Recebimentos processados em segundos, não em dias como o sistema bancário tradicional"
        },
        {
          icon: "💰",
          title: "Economia Substancial",
          description: "Reduza custos de transferência em até 85% comparado ao SWIFT tradicional"
        }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-6m-8-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "API de Liquidez Crypto",
      subtitle: "Diferencial tecnológico poderoso",
      description: "Integre liquidez cripto diretamente em sua plataforma. Nossa API oferece acesso institucional a pools de liquidez profundos com execução garantida para grandes volumes.",
      gradient: "from-cyan-600 to-blue-500",
      benefits: [
        {
          icon: "🔌",
          title: "Integração Simplificada",
          description: "API RESTful completa com documentação detalhada e SDKs para principais linguagens"
        },
        {
          icon: "🏊",
          title: "Liquidez Profunda",
          description: "Acesso a pools agregados de múltiplas exchanges com execução garantida"
        },
        {
          icon: "⚙️",
          title: "Automação Inteligente",
          description: "Algoritmos de roteamento que encontram automaticamente os melhores preços"
        },
        {
          icon: "📊",
          title: "Analytics Avançado",
          description: "Dashboard em tempo real com métricas detalhadas de performance e execução"
        }
      ]
    }
  ];

  return (
    <section id="casos-de-uso" data-uc="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-500 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div data-uc="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Soluções em destaque</span>
          </div>
          
          <h2 data-uc="heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="block mb-2 leading-tight">
              Mais que uma Mesa de OTC.
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
              Uma Parceria Estratégica.
            </span>
          </h2>
          
          <p data-uc="subtitle" className="text-lg sm:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Nossa tecnologia e expertise nos permitem ir além do básico, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
          </p>
        </div>
        
        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {cases.map((useCase, index) => (
            <div 
              key={index}
              data-uc="case-card" 
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/80 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-all duration-300 rounded-3xl`}></div>
              
              {/* Header Section */}
              <div className="p-8 sm:p-10 border-b border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${useCase.gradient} p-4 rounded-2xl text-white shadow-lg flex-shrink-0 transition-all duration-300 group-hover:scale-110`}>
                    {useCase.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-xl sm:text-2xl mb-2 text-slate-800 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {useCase.title}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 font-medium mb-3">
                      {useCase.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-8 sm:p-10">
                <h4 className="font-bold text-lg mb-6 text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                  Benefícios Principais
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="group/benefit p-4 rounded-xl bg-gray-50/50 hover:bg-blue-50/50 transition-all duration-300 border border-transparent hover:border-blue-200/50">
                      <div className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0">{benefit.icon}</span>
                        <div className="min-w-0">
                          <h5 className="font-semibold text-sm text-slate-800 mb-1 leading-tight">
                            {benefit.title}
                          </h5>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 sm:px-10 pb-8 sm:pb-10">
                <a 
                  href="#contato"
                  className={`group/btn w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-gradient-to-r ${useCase.gradient} text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
                >
                  Saber mais sobre esta solução
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}