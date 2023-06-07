// Librarys
import * as yup from 'yup'

// Constants
import ContactFormSchema from '@assets/data/contact-form-schema'

// Get schema fields
export const { email, message, fullname } = ContactFormSchema

/**
 * Create the schema for the Contact form
 * @param {string} lang Current language activated
 */
export function createSchema(lang: string) {
  // Define schema
  const schema = yup.object().shape({
    // Define validations for 'fullname' field
    fullname: yup
      .string()
      .required(fullname.required[lang as keyof typeof fullname.required])
      .min(fullname.min.limit, fullname.min.message[lang as keyof typeof fullname.min.message])
      .max(fullname.max.limit, fullname.max.message[lang as keyof typeof fullname.min.message]),

    // Define validations for 'email' field
    email: yup
      .string()
      .required(email.required[lang as keyof typeof email.required])
      .min(email.min.limit, email.min.message[lang as keyof typeof email.min.message])
      .email(email.isValid[lang as keyof typeof email.isValid])
      .max(email.max.limit, email.max.message[lang as keyof typeof email.min.message]),

    // Define validations for 'message' field
    message: yup
      .string()
      .required(message.required[lang as keyof typeof message.required])
      .min(message.min.limit, message.min.message[lang as keyof typeof message.min.message])
      .max(message.max.limit, message.max.message[lang as keyof typeof message.min.message])
  })

  return schema
}
