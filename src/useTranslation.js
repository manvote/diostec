import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (section, key) => {
    try {
      const lang = language.toLowerCase();
      return translations[lang][section][key] || key;
    } catch (error) {
      console.error('Translation error:', error);
      return key;
    }
  };

  return { t, language };
};
