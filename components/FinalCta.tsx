'use client'

import { useEffect, useState } from 'react';
import { initFinalCtaAnimations } from '../gsap/FinalCta';
import Image from 'next/image';

export default function FinalCta() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const cleanup = initFinalCtaAnimations();
    
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Criar mailto link com os dados do formulário
      const mailtoLink = `mailto:info@axiadigitalsolutions.com?subject=${encodeURIComponent(formData.assunto)}&body=${encodeURIComponent(
        `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" data-cta="section" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-300 to-slate-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/5 to-cyan-100/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div data-cta="badge" className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-700">Comece hoje mesmo</span>
          </div>
          
          <h2 data-cta="heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="block mb-2 leading-tight">
              Pronto para revolucionar
              suas operações cripto?
            </span>

          </h2>
          
          <p data-cta="subtitle" className="text-lg sm:text-xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
            Entre em contato conosco e descubra como nossa liquidez institucional pode transformar seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Company Info */}
          <div data-cta="company-info" className="space-y-8">
            <div className="flex items-center gap-2">
              <Image
                src="/axialogo.png"
                alt="Axia Digital Solutions"
                width={100}
                height={100}
                className="mb-6"
              />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6">
                Axia Digital Solutions
              </h3>
            </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                Somos especialistas em liquidez cripto institucional, oferecendo soluções personalizadas para empresas que buscam maximizar seus resultados no mercado digital.
              </p>

            {/* Key Benefits */}
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Resposta em 1 hora</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Nossa equipe responde todas as solicitações em até 1 hora durante horário comercial</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Setup em 24h</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Após aprovação, sua conta fica operacional em até 24 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800 mb-2">Suporte 24/7</h4>
                  <p className="text-slate-600 text-sm sm:text-base">Mercado global que nunca para, suporte que nunca falha</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-slate-800 mb-4">Outras formas de contato:</h4>
              <div className="space-y-3">
                <a href="mailto:info@axiadigitalsolutions.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@axiadigitalsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-cta="form-container" className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/60 p-8 sm:p-10">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                Fale conosco
              </h3>
              <p className="text-slate-600 text-base sm:text-lg">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 1 hora
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-semibold text-slate-700 mb-2">
                  Assunto *
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Mesa OTC - Informações Gerais">Mesa OTC - Informações Gerais</option>
                  <option value="Integração API">Integração API</option>
                  <option value="Cross-Border Payments">Cross-Border Payments</option>
                  <option value="Volumes Grandes (+R$ 1M)">Volumes Grandes (+R$ 1M)</option>
                  <option value="Suporte Técnico">Suporte Técnico</option>
                  <option value="Parceria Comercial">Parceria Comercial</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white/80 backdrop-blur-sm resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades, volume esperado e como podemos ajudar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : submitStatus === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl hover:-translate-y-0.5'
                } text-white shadow-lg`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mensagem enviada!
                  </span>
                ) : submitStatus === 'error' ? (
                  'Erro - Tente novamente'
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Enviar mensagem
                  </span>
                )}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Resposta garantida em 1h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span>100% confidencial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span>Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}