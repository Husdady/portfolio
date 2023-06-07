// Constants
export const MIN_CHARACTERS_FOR_FULLNAME = 2
export const MAX_CHARACTERS_FOR_FULLNAME = 32
export const MIN_CHARACTERS_FOR_EMAIL = 7
export const MAX_CHARACTERS_FOR_EMAIL = 48
export const MIN_CHARACTERS_FOR_MESSAGE = 100
export const MAX_CHARACTERS_FOR_MESSAGE = 500

// Schema
const ContactFormSchema = {
  fullname: {
    required: {
      es: 'Por favor ingresa tu nombre completo',
      en: 'Please enter your fullname'
    },
    min: {
      limit: MIN_CHARACTERS_FOR_FULLNAME,
      message: {
        es: `No existen nombres que tengan menos de ${MIN_CHARACTERS_FOR_FULLNAME} carácteres`,
        en: `There are no names that have less than ${MIN_CHARACTERS_FOR_FULLNAME} characters`
      }
    },
    max: {
      limit: MAX_CHARACTERS_FOR_FULLNAME,
      message: {
        es: `Por favor ingresa un nombre que tenga como máximo ${MAX_CHARACTERS_FOR_FULLNAME} carácteres`,
        en: `Please enter a name that has at most ${MAX_CHARACTERS_FOR_FULLNAME} characters`
      }
    }
  },
  email: {
    required: {
      es: 'Por favor ingresa tu correo electrónico',
      en: 'Please enter your email'
    },
    isValid: {
      es: 'Por favor ingresa un correo electrónico válido',
      en: 'Please enter a valid email'
    },
    min: {
      limit: MIN_CHARACTERS_FOR_EMAIL,
      message: {
        en: 'Email is too short',
        es: 'El correo electrónico que has ingresado es muy corto'
      }
    },
    max: {
      limit: MAX_CHARACTERS_FOR_MESSAGE,
      message: {
        es: 'Please enter a shorter email',
        en: 'Por favor ingresa un correo electrónico más corto'
      }
    }
  },
  message: {
    required: {
      es: 'Por favor ingresa un mensaje opcional',
      en: 'Please enter a optional message'
    },
    min: {
      limit: MIN_CHARACTERS_FOR_MESSAGE,
      message: {
        en: `The optional message must have ${MIN_CHARACTERS_FOR_MESSAGE} characters at the least`,
        es: `El mensaje opcional debería tener ${MIN_CHARACTERS_FOR_MESSAGE} carácteres como mínimo`
      }
    },
    max: {
      limit: MAX_CHARACTERS_FOR_MESSAGE,
      message: {
        es: `El mensaje opcional debería tener ${MAX_CHARACTERS_FOR_MESSAGE} carácteres como máximo`,
        en: `The optional message must have ${MAX_CHARACTERS_FOR_MESSAGE} characters at the greatest`
      }
    }
  }
}

export default ContactFormSchema
