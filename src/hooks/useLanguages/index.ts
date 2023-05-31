// Hooks
import useLocalStorage from '@hooks/useLocalStorage'

// Interfaces
import { LanguageType } from './interfaces'

// Hooks
import { useMemo } from 'react'

// Utils
import parseLanguage from '@utils/parseLanguage'

// Data
import { LANG } from '@assets/data/constants'
import languages from '@assets/data/languages.json'

export default function useLanguages() {
  const [lang, setLang] = useLocalStorage(LANG, parseLanguage(navigator.language))

  // Spanish language actived
  const isESLang = useMemo(() => lang === 'es', [lang])

  // Get current language in lowercase
  const currentLanguage = useMemo(() => lang.toLowerCase(), [lang])

  // Get language actived
  const language = useMemo(() => {
    return languages.find((item: LanguageType) => item.language === currentLanguage)
  }, [currentLanguage])

  return {
    setLang: setLang,
    isESLang: isESLang,
    lang: currentLanguage,
    dictionary: typeof language !== 'undefined' ? language.dictionary : {}
  }
}
