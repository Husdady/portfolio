// Librarys
import emailjs from '@emailjs/browser'

// Interfaces
import { TemplateData, SendEmailMessageParams } from './interfaces'

// Services
import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '@assets/data/constants'

export const MIN_LENGTH_FOR_PUBLIC_KEY = 23

export const TYPEOF_OF_THE_EMAIL_CREDENTIALS = [
  typeof EMAILJS_PUBLIC_KEY,
  typeof EMAILJS_SERVICE_ID,
  typeof EMAILJS_TEMPLATE_ID
]

// Set my personal publick key
if (
  typeof EMAILJS_PUBLIC_KEY === 'string' &&
  EMAILJS_PUBLIC_KEY.length > MIN_LENGTH_FOR_PUBLIC_KEY
) {
  emailjs.init(EMAILJS_PUBLIC_KEY)
}

/**
 * Send message to my personal email
 * @param {SendEmailMessageParams} params Params
 * @returns {Promise<TemplateData | null | unknown | void>} Promise null or data
 */
export default async function sendEmailMessage({
  data,
  onInit,
  onError,
  onFinally,
  onSuccesfully
}: SendEmailMessageParams): Promise<TemplateData | null | unknown | void> {
  try {
    if (typeof onInit === 'function') onInit() // Execute 'onInit' callback

    // Check if exists the email credentials
    if (TYPEOF_OF_THE_EMAIL_CREDENTIALS.includes('string')) {
      // Define email params
      const templateParams = {
        email: data.email,
        message: data.message,
        fullname: data.fullname
      }

      // Send message to email 'husdadymena@gmail.com'
      await emailjs.send(EMAILJS_SERVICE_ID || '', EMAILJS_TEMPLATE_ID || '', templateParams)

      // Execute 'onSuccesfully' callback
      if (typeof onSuccesfully === 'function') onSuccesfully()

      // Return template data
      return data
    }

    return null
  } catch (err) {
    if (typeof onError === 'function') onError(err) // Execute 'onError' callback
    return err // Return error
  } finally {
    if (typeof onFinally === 'function') onFinally() // Execute 'onFinally' callback
  }
}
