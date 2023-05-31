// Librarys
import emailjs from '@emailjs/browser'

// Types
// import SendEmailMessageType from '%types%/sendEmailMessage.type'

// Services
import { EMAIL_SERVICE, EMAIL_TEMPLATE, EMAIL_USER } from '@assets/data/constants'

// Enviar mensaje a mi correo personal
export default async function sendEmailMessage({ refs, values, extraData, resetForm }: any) {
  try {
    if ('showLoading' in extraData && typeof extraData.showLoading === 'function') {
      extraData.showLoading() // Mostrar loading en el botón "Send message"
    }

    if (
      typeof EMAIL_SERVICE === 'string' &&
      typeof EMAIL_TEMPLATE === 'string' &&
      typeof EMAIL_USER === 'string'
    ) {
      // Enviar mensaje al correo electrónico de author (husdadymena@gmail.com)
      await emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, values, EMAIL_USER)
    }

    if (refs.dangerAlert.current !== null) {
      refs.dangerAlert.current.hide() // Ocultar alerta de error
    }

    if (refs.successAlert.current !== null) {
      refs.successAlert.current.show() // Mostrar alerta de éxito
    }

    // Resetear formulario
    resetForm()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[sendEmailMessage.error]', err)

    if (refs.dangerAlert.current !== null) {
      refs.dangerAlert.current.show() // Mostrar alerta de error
    }

    if (refs.successAlert.current !== null) {
      refs.successAlert.current.hide() // Ocultar alerta de éxito
    }
  }

  // Ocultar loading en el botón "Send message"
  if ('showLoading' in extraData && typeof extraData.hideLoading === 'function') {
    extraData.hideLoading()
  }
}
