'use client';

import { useEffect, useState } from 'react';
import { initFaqAnimations } from '../gsap/Faq';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const cleanup = initFaqAnimations();

        return () => {
            if (cleanup) {
                cleanup();
            }
        };
    }, []);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Qual o valor mínimo para operar na mesa OTC?',
            answer:
                'Trabalhamos com operações a partir de R$ 20.000. Este valor garante que você tenha acesso à nossa liquidez institucional e ao suporte especializado que faz a diferença em grandes movimentações.',
        },
        {
            question: 'Como vocês garantem os melhores preços do mercado?',
            answer:
                'Nossa mesa OTC possui acesso direto aos order books mais profundos do mercado global. Agregamos liquidez de múltiplas exchanges e negociamos preços fixos sem slippage, mesmo para volumes milionários.',
        },
        {
            question: 'Quanto tempo leva para executar uma operação?',
            answer:
                'Operações são executadas em tempo real durante o horário de funcionamento da mesa (24/7). Para conversões em moeda fiduciária, a liquidação ocorre via PIX em até 3 segundos ou transferência bancária em até 2 horas úteis.',
        },
        {
            question: 'Vocês oferecem suporte para estratégias complexas?',
            answer:
                'Sim! Nossa equipe é especializada em estruturar operações complexas como cross-border payments, hedging cambial, arbitragem internacional e estratégias DeFi institucionais. Cada cliente tem um consultor dedicado.',
        },
        {
            question: 'Quais criptomoedas vocês operam?',
            answer:
                'Operamos com Bitcoin (BTC), Ethereum (ETH), stablecoins (USDT, USDC, DAI), e mais de 50 criptoativos principais. Para ativos específicos ou volumes muito grandes, consulte nossa mesa para verificar disponibilidade.',
        },
        {
            question: 'Como funciona a conversão para diferentes moedas fiduciárias?',
            answer:
                'Oferecemos conversão direta para BRL, USD e EUR com taxas institucionais. Utilizamos nossos pools de liquidez próprios e parcerias bancárias estratégicas para garantir as melhores condições do mercado.',
        },
        {
            question: 'Qual o diferencial da Axia para outras exchanges?',
            answer:
                'Não somos uma exchange tradicional. Somos sua mesa de operações privada com: liquidez institucional garantida, preços fixos sem slippage, suporte 24/7 especializado, execução confidencial e estruturação de operações personalizadas.',
        },
        {
            question: 'Como posso integrar a API de liquidez na minha plataforma?',
            answer:
                'Nossa API RESTful oferece acesso programático à liquidez institucional. Fornecemos documentação completa, SDKs para principais linguagens e suporte técnico dedicado durante toda a integração.',
        },
        {
            question: 'Vocês atendem empresas e pessoas físicas?',
            answer:
                'Sim, atendemos tanto pessoas físicas quanto jurídicas que operam com grandes volumes. Para empresas, oferecemos soluções corporativas incluindo multi-usuários, controles de compliance e relatórios personalizados.',
        },
        {
            question: 'Como garantem a segurança das operações?',
            answer:
                'Utilizamos infraestrutura de segurança militar com: custódia institucional multisig, cold storage para 95% dos fundos, auditorias de segurança trimestrais, compliance KYC/AML rigoroso e seguro contra crimes cibernéticos.',
        },
        {
            question: 'Posso operar fora do horário comercial?',
            answer:
                'Absolutamente! O mercado cripto nunca para e nossa mesa opera 24/7. Você pode executar operações a qualquer hora, capturando oportunidades em mercados asiáticos, europeus ou americanos sem limitações.',
        },
        {
            question: 'Como começar a operar hoje mesmo?',
            answer:
                'Simples: (1) Preencha nosso formulário de pré-cadastro, (2) Nossa equipe entrará em contato em até 1 hora, (3) Após validação, sua conta é liberada em até 24h. Você estará operando com liquidez institucional no mesmo dia.',
        }
    ];

    return (
        <section
            id="faq"
            data-faq="section"
            className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-300 to-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div data-faq="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700">Dúvidas frequentes</span>
                    </div>

                    <h2
                        data-faq="heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                    >
                        <span className="block mb-2 leading-tight">
                            Tudo o que você precisa
                        </span>
                        <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent leading-tight">
                            saber para começar
                        </span>
                    </h2>
                    <p
                        data-faq="subheading"
                        className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
                    >
                        Respostas diretas sobre nossos serviços de liquidez cripto institucional
                    </p>
                </div>

                <div data-faq="container" className="relative">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                data-faq="item"
                                className={`bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                                    openIndex === index ? 'shadow-xl border-blue-300/70' : ''
                                }`}
                            >
                                <button
                                    className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-center focus:outline-none group"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={openIndex === index}
                                    data-faq="question"
                                >
                                    <span className="font-semibold text-base sm:text-lg text-slate-800 group-hover:text-blue-700 transition-colors pr-4">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 flex-shrink-0 ${
                                            openIndex === index
                                                ? 'rotate-180 bg-blue-500 border-blue-500 text-white'
                                                : 'border-blue-200 text-blue-500 group-hover:border-blue-300 group-hover:bg-blue-50'
                                        }`}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    data-faq="answer"
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-6 sm:px-8 pb-5 sm:pb-6">
                                        <div className="pt-2 border-t border-blue-100">
                                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div data-faq="cta" className="mt-12 sm:mt-16 text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">
                            Ainda tem dúvidas?
                        </h3>
                        <p className="text-blue-100 mb-6 text-base sm:text-lg">
                            Nossa equipe de especialistas está pronta para esclarecer qualquer questão específica do seu caso.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="#contato"
                                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Falar com especialista
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://wa.me/5511999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                            >
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403"/>
                                </svg>
                                WhatsApp direto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
