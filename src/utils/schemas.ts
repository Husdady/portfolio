// Types
import { ValidationSchemaType } from '%types%/useForm.type'

export const ContactFormSchema: ValidationSchemaType = {
  name: {
    required: {
      es: 'Por favor ingresa tu nombre completo',
      en: 'Please enter your fullname'
    },
    min: {
      limit: 3,
      message: (limit: number) => ({
        es: `No existen nombres que tengan menos de ${limit} carácteres`,
        en: `There are no names that have less than ${limit} characters`
      })
    },
    max: {
      limit: 32,
      message: (limit: number) => ({
        es: `Ingresa un nombre que tenga como máximo ${limit} carácteres`,
        en: `Enter a name that has at most ${limit} characters`
      })
    }
  },
  email: {
    isEmail: true,
    message: {
      es: 'Por favor ingresa un correo electrónico válido',
      en: 'Please enter a valid email'
    },
    required: {
      es: 'Por favor ingresa tu correo electrónico',
      en: 'Please enter your email'
    }
  },
  message: {
    required: {
      es: 'Por favor ingresa un mensaje opcional',
      en: 'Please enter a optional message'
    },
    min: {
      limit: 100,
      message: (limit: number) => ({
        es: `El mensaje opcional debería tener ${limit} carácteres como mínimo`,
        en: `The optional message must have ${limit} characters at the least`
      })
    },
    max: {
      limit: 500,
      message: (limit: number) => ({
        es: `El mensaje opcional debería tener ${limit} carácteres como máximo`,
        en: `The optional message must have ${limit} characters at the greatest`
      })
    }
  }
}
