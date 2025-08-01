import { Locale } from '../i18n';
import enDict from './en';
import arDict from './ar';

const dictionaries = {
  en: enDict,
  ar: arDict,
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale] || dictionaries.en;
