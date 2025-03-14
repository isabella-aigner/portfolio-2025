import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import de from './locales/de.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  }
})