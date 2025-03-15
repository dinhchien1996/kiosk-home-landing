"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'vi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('vi')}
      >
        VN
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
};
