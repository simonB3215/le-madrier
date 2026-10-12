import fr from './fr';
import en from './en';

export type Lang = 'fr' | 'en';
export type PageKey = 'home' | 'apartment' | 'rates' | 'region' | 'photos' | 'contact';

export const langs: Lang[] = ['fr', 'en'];
export const hreflang: Record<Lang, string> = { fr: 'fr-CH', en: 'en' };
export const ogLocale: Record<Lang, string> = { fr: 'fr_CH', en: 'en_GB' };

// Adresse de chaque page dans chaque langue
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  apartment: { fr: '/appartement/', en: '/en/apartment/' },
  rates: { fr: '/tarifs-reservation/', en: '/en/rates-booking/' },
  region: { fr: '/region/', en: '/en/region/' },
  photos: { fr: '/photos/', en: '/en/photos/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
};

export const navOrder: PageKey[] = ['home', 'apartment', 'rates', 'region', 'photos', 'contact'];

const dict = { fr, en };
export const t = (lang: Lang) => dict[lang];
