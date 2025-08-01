import arDict from './dictionaries/ar.json';
import enDict from './dictionaries/en.json';

export type Language = 'ar' | 'en';

export type Dictionary = typeof arDict;

export function getDictionary(locale: Language): Dictionary {
  switch (locale) {
    case 'ar':
      return arDict;
    case 'en':
      return enDict;
    default:
      return arDict;
  }
}

export function getDirection(locale: Language): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
