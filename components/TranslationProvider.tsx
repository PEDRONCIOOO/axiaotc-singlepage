'use client';

import { ReactNode } from 'react';
import { TranslationContext, useTranslationLogic } from '@/hooks/useTranslation';

interface TranslationProviderProps {
  children: ReactNode;
}

export default function TranslationProvider({ children }: TranslationProviderProps) {
  const translationLogic = useTranslationLogic();

  return (
    <TranslationContext.Provider value={translationLogic}>
      {children}
    </TranslationContext.Provider>
  );
}