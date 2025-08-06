'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import { createLanguageTransitionTimeline } from '@/utils/translationAnimations';

type Language = 'pt-br' | 'en';
type Translations = Record<string, any>;

interface TranslationContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string>) => string;
  isTransitioning: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export { TranslationContext };

// Função para buscar traduções
const loadTranslations = async (language: Language): Promise<Translations> => {
  try {
    const response = await fetch(`/i18n/${language}.json`);
    if (!response.ok) throw new Error('Translation file not found');
    return await response.json();
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    return {};
  }
};

// Função para buscar valor aninhado no objeto
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
};

// Função para substituir variáveis
const replaceVariables = (text: string, variables?: Record<string, string>): string => {
  if (!variables) return text;
  
  return Object.entries(variables).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }, text);
};

// Função para animar troca de idioma com GSAP
const animateLanguageChange = async (newLanguage: Language): Promise<void> => {
  const elements = document.querySelectorAll('[data-i18n]');
  
  if (elements.length === 0) return;

  // Usar as animações customizadas
  const animations = createLanguageTransitionTimeline(elements);
  
  // Executar animação de saída
  await animations.out.then();
  
  // Atualizar conteúdo
  await updateDataI18nElements(newLanguage);
  
  // Executar animação de entrada
  await animations.in().then();
  
  // Efeito final de confirmação
  const importantElements = document.querySelectorAll('h1, h2, [data-hero="primary-btn"]');
  gsap.to(importantElements, {
    textShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: "power2.inOut"
  });
};

// Atualizar a função updateDataI18nElements para lidar com conteúdo dinâmico
const updateDataI18nElements = async (language: Language) => {
  const translations = await loadTranslations(language);
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const variables = element.getAttribute('data-i18n-variables');
    
    if (key) {
      const translation = getNestedValue(translations, key);
      let finalText = translation;
      
      // Se não encontrou a tradução, manter o texto atual como fallback
      if (translation === key && element.textContent) {
        return; // Manter texto original se tradução não encontrada
      }
      
      // Processar variáveis se existirem
      if (variables) {
        try {
          const variablesObj = JSON.parse(variables);
          finalText = replaceVariables(translation, variablesObj);
        } catch (error) {
          console.error('Invalid variables JSON:', variables);
        }
      }
      
      // Verificar se é HTML ou texto simples
      if (finalText.includes('<') && finalText.includes('>')) {
        element.innerHTML = finalText;
      } else {
        element.textContent = finalText;
      }
    }
  });
};

export const useTranslationLogic = () => {
  const [language, setLanguageState] = useState<Language>('pt-br');
  const [translations, setTranslations] = useState<Translations>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Carregar idioma salvo do localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pt-br', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Carregar traduções quando o idioma mudar
    loadTranslations(language).then(setTranslations);
  }, [language]);

  const setLanguage = async (lang: Language) => {
    if (isTransitioning || lang === language) return;
    
    setIsTransitioning(true);
    
    try {
      // Animar a troca de idioma
      await animateLanguageChange(lang);
      
      // Atualizar estado
      setLanguageState(lang);
      localStorage.setItem('language', lang);
      
    } catch (error) {
      console.error('Error during language transition:', error);
    } finally {
      setIsTransitioning(false);
    }
  };

  const t = (key: string, variables?: Record<string, string>): string => {
    const translation = getNestedValue(translations, key);
    return replaceVariables(translation, variables);
  };

  return {
    language,
    translations,
    setLanguage,
    t,
    isTransitioning
  };
};