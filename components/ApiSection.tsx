'use client'

import { useEffect } from 'react';
import { initApiSectionAnimations } from '../gsap/ApiSection';

export default function ApiSection() {
  useEffect(() => {
    const cleanup = initApiSectionAnimations();
    
    return () => {
      if (cleanup && cleanup.cleanup) {
        cleanup.cleanup();
      }
    };
  }, []);

  return (
    <section id="api" data-api="section" className="py-24 px-6 bg-gradient-to-b from-white to-blue-50 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-api="heading" className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
            Integração simples e rápida
          </h2>
          <p data-api="subheading" className="text-lg max-w-2xl mx-auto text-gray-700">
            Conecte sua empresa ao sistema <strong className="text-blue-600">tBRL</strong> facilmente e automatize operações de forma segura.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-api="code-container" className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden p-1">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-gray-400 text-sm">example.js</div>
            </div>
            <pre data-api="code" className="p-4 text-sm text-gray-300 font-mono overflow-x-auto">
<code>{`// Exemplo de integração com a API tBRL
import { tBRLClient } from '@tbrl/sdk';

// Inicializar o cliente
const client = new tBRLClient({
  apiKey: 'sua_api_key',
  environment: 'production'
});

// Gerar endereço Pix para depósito
async function createPixDeposit(value) {
  try {
    const deposit = await client.createPixDeposit({
      amount: value,
      description: 'Depósito via Pix',
      expiresIn: 3600 // 1 hora
    });
    
    return deposit.pixCopiaECola;
  } catch (error) {
    console.error('Erro ao gerar Pix:', error);
  }
}`}</code>
            </pre>
          </div>
          
          <div>
            <div data-api="features" className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-semibold text-xl mb-6">Benefícios da nossa API:</h3>
              <ul className="space-y-4">
                <li data-api="feature-item" className="flex items-start">
                  <div className="mr-3 bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Transações ultra-rápidas</h4>
                    <p className="text-gray-600">Processamento de Pix em menos de 3 segundos</p>
                  </div>
                </li>
                
                <li data-api="feature-item" className="flex items-start">
                  <div className="mr-3 bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Ambiente seguro</h4>
                    <p className="text-gray-600">Sandbox gratuito para testes e homologação</p>
                  </div>
                </li>
                
                <li data-api="feature-item" className="flex items-start">
                  <div className="mr-3 bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Notificações em tempo real</h4>
                    <p className="text-gray-600">Webhooks para atualização automática de status</p>
                  </div>
                </li>
                
                <li data-api="feature-item" className="flex items-start">
                  <div className="mr-3 bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Suporte dedicado</h4>
                    <p className="text-gray-600">Equipe técnica especializada para auxiliar na integração</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div data-api="cta" className="mt-8 text-center">
              <a href="#contato" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
                Solicitar acesso à API
              </a>
            </div>
          </div>
        </div>
        
        <div data-api="tech-logos" className="mt-20 text-center">
          <p className="text-gray-500 mb-4">Compatível com as principais linguagens e frameworks</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="w-12">
              <img src="/nodejs.svg" alt="Node.js" className="w-full" />
            </div>
            <div className="w-12">
              <img src="/python.svg" alt="Python" className="w-full" />
            </div>
            <div className="w-12">
              <img src="/java.svg" alt="Java" className="w-full" />
            </div>
            <div className="w-12">
              <img src="/php.svg" alt="PHP" className="w-full" />
            </div>
            <div className="w-12">
              <img src="/go.svg" alt="Go" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}