// Interfaces
import { LanguageType } from '@hooks/useLanguages/interfaces'

// JSON
import languages from '@assets/data/languages.json'

/**
 *  Parse language, for example: es-489 ==> ES
 * @param {string} language Receive a language
 * @return {string} String
 */
export default function parseLanguage(language: string): string {
  const item: LanguageType | undefined = languages.find((item: LanguageType) =>
    language.includes(item.language.toLowerCase())
  )

  // Return param received
  if (typeof item === 'undefined') return language

  // Return language name in uppercase
  return item.language.toUpperCase()
}
