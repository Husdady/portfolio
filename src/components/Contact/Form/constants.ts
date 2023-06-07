// Interfaces
import { ContactFormState } from './interfaces'

// Constants
export const DELAY_FOR_BAD_RESPONSE = 12000
export const DELAY_FOR_SUCCESSFULLY_RESPONSE = 6000
export const DEFAULT_VALUES: ContactFormState = Object.freeze({
  fullname: '',
  email: '',
  message: '',
  isError: false,
  isFetching: false,
  isSuccessfully: false
})
