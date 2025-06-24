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
			question: 'O tBRL é regulado pelo Banco Central?',
			answer:
				'Sim, o tBRL opera seguindo as normas de moedas eletrônicas lastreadas, conforme as diretrizes do Banco Central do Brasil. Estamos sempre alinhados com as regulamentações vigentes.',
		},
		{
			question: 'Qual a velocidade de resgate para reais?',
			answer:
				'Todas as transações são processadas via Pix, disponível 24 horas por dia, com tempo médio de processamento de apenas 3 segundos.',
		},
		{
			question: 'Existe limite de uso?',
			answer:
				'Não há limite, desde que haja reais suficientes na conta que garante o lastro da moeda digital.',
		},
		{
			question: 'Como funciona o cadastro?',
			answer:
				'Para movimentações de até R$ 5 mil por dia, utilizamos um cadastro simplificado. Para valores maiores, é necessário um processo completo de identificação, tanto para pessoas físicas quanto jurídicas.',
		},
		{
			question: 'Onde posso verificar as informações do tBRL?',
			answer:
				'Todas as informações estão disponíveis publicamente em: https://moonscan.io/token/0x513E5739AE60B29ac2B33Bfcf0E07F0D079DbDBB',
		},
		{
			question: 'Como confirmo que o dinheiro existe?',
			answer:
				'Através do site da Fact Finance, empresa independente que audita nossos saldos: https://reserve.fact.finance/tokeniza',
		},
		{
			question: 'Como funciona o processo de cadastro?',
			answer:
				'O cadastro é feito de forma totalmente digital, utilizando documento, selfie e verificação de vida, sem necessidade de comparecer presencialmente.',
		},
		{
			question: 'Como minha empresa pode começar a usar?',
			answer:
				'O acesso é feito através de uma integração simples com nossa plataforma. Entre em contato e nosso time de suporte vai ajudar no processo.',
		},
	];

	return (
		<section
			id="faq"
			data-faq="section"
			className="py-24 px-6 bg-gradient-to-b bg-blue-200 text-black"
		>
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<h2
						data-faq="heading"
						className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500"
					>
						Perguntas Frequentes
					</h2>
					<p
						data-faq="subheading"
						className="text-lg max-w-2xl mx-auto text-gray-700"
					>
						Tire suas dúvidas sobre o{' '}
						<strong className="text-blue-600">tBRL</strong> e nossos serviços
					</p>
				</div>

				<div data-faq="container" className="relative">

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								data-faq="item"
								className={`bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all duration-300 ${
									openIndex === index ? 'shadow-md' : ''
								}`}
							>
								<button
									className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
									onClick={() => handleToggle(index)}
									aria-expanded={openIndex === index}
									data-faq="question"
								>
									<span className="font-medium text-lg">
										{faq.question}
									</span>
									<div
										className={`w-6 h-6 rounded-full flex items-center justify-center border border-blue-200 text-blue-500 transition-transform duration-300 ${
											openIndex === index
												? 'rotate-180 bg-blue-500 text-white'
												: ''
										}`}
									>
										<svg
											className="w-3 h-3"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
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
										openIndex === index ? 'max-h-96' : 'max-h-0'
									}`}
								>
									<div className="px-6 pb-5 text-gray-600">
										{faq.answer}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div data-faq="cta" className="mt-12 text-center">
					<p className="text-gray-600 mb-4">
						Não encontrou o que procurava?
					</p>
					<a
						href="#contato"
						className="inline-flex items-center text-blue-600 font-medium hover:underline"
					>
						<span>Fale com nossa equipe</span>
						<svg
							className="w-4 h-4 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
