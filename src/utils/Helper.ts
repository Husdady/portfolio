// Interfaces
import { LanguageType } from '@interfaces/Languages.interfaces'

// Utils
import Validations from './Validations'

const languages: LanguageType[] = require('@data/languages.json')

export default class Helper {
  /**
   * Define classes to component
   * @param {classes: (string|undefined|null)[]}
   * @return {string}
   */
  static classnames(classes: (string | undefined | null)[]) {
    return classes.filter((cls?: string | null) => !!cls).join(' ')
  }

  /**
   * Copy an object
   * @param {obj: Object}
   * @return {object}
   */
  static copyObject(obj: Object) {
    if (!Validations.isObject(obj)) {
      return obj
    }

    return JSON.parse(JSON.stringify(obj))
  }

  /**
   *  A wrapper for "JSON.parse()"" to support "undefined" value
   * @param {value: string|null}
   * @return {string|undefined}
   */
  static parseJSON<T>(value: string | null): T | undefined {
    try {
      return value === 'undefined' ? undefined : JSON.parse(value ?? '')
    } catch {
      // eslint-disable-next-line no-console
      console.warn('Parsing error on', { value: value })
      return undefined
    }
  }

  /**
   *  Parse language, for example: es-489 ==> ES
   * @param {language: string}
   * @return {string}
   */
  static parseLanguage(language: string): string {
    const el: LanguageType | undefined = languages.find((item: LanguageType) =>
      language.includes(item.language.toLowerCase())
    )

    if (el) {
      return el.language.toUpperCase()
    } else {
      return language
    }
  }
}
