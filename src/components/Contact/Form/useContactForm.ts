/* eslint-disable no-void */
/* eslint-disable space-before-function-paren */
/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import { yupResolver } from '@hookform/resolvers/yup'

// Hooks
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'
import useMounted from '@hooks/useMounted'
import useLanguages from '@hooks/useLanguages'

// Types
import type { Timeout } from '@custom-types/global-types'

// Interfaces
import { ContactFormState } from './interfaces'
import { TemplateData } from '@services/@emailjs/interfaces'

// Services
import sendEmailMessage from '@services/@emailjs/sendEmailMessage'

// Utils
import { createSchema } from './utils'
import isEmptyObject from '@utils/isEmptyObject'

// Constants
import {
  DEFAULT_VALUES,
  DELAY_FOR_BAD_RESPONSE,
  DELAY_FOR_SUCCESSFULLY_RESPONSE
} from './constants'

/**
 * Hook for implements the logic of the Contact form
 */
export default function useContactForm() {
  // Get dictionary from the languages
  const { lang, dictionary } = useLanguages()

  // Define schema for the form validations
  const schema = useMemo(() => createSchema(lang), [lang])

  // Create form state
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema)
  })

  // Check if the submit button needs to be disabled
  const isDisabledSubmitButton = useMemo(() => {
    return watch('isError') || !isEmptyObject(errors)
  }, [errors.email, errors.message, errors.fullname])

  // Callback for hide error alert
  const hideErrorAlert = useCallback(() => setValue('isError', false), [])

  // Callback for hide success alert
  const hideSuccessAlert = useCallback(() => setValue('isSuccessfully', false), [])

  // Callback for reset form values
  const resetForm = useCallback(() => {
    // Define the template data
    const templateData: TemplateData = {
      email: DEFAULT_VALUES.email,
      message: DEFAULT_VALUES.message,
      fullname: DEFAULT_VALUES.fullname
    }

    // Clear form state
    const keys = Object.keys(templateData)

    for (const key of keys) {
      setValue(key as any, DEFAULT_VALUES[key as keyof typeof DEFAULT_VALUES])
    }
  }, [])

  // Event 'submit' of the form
  const submit = useCallback(({ isError, isSuccessfully, ...formState }: ContactFormState) => {
    // Define the template data
    const templateData: TemplateData = {
      email: formState.email,
      message: formState.message,
      fullname: formState.fullname
    }

    // Send message to my personal email
    void sendEmailMessage({
      data: templateData,
      onInit: () => {
        setValue('isFetching', true) // Show button spin
        if (isSuccessfully) setValue('isSuccessfully', false) // It's bad response
      },
      onFinally: () => {
        setValue('isFetching', false) // Hide button spin
      },
      onSuccesfully: () => {
        if (isError) setValue('isError', false) // Set error
        if (!isSuccessfully) setValue('isSuccessfully', true) // It's successfully response
        resetForm() // Reset form values
      },
      onError: () => {
        setValue('isError', true) // Set error
        setValue('isSuccessfully', false) // It's bad response
      }
    })
  }, [])

  useMounted(() => {
    let timeout: Timeout = 0

    // Reset 'isSuccessfully' state
    if (watch('isError')) {
      timeout = setTimeout(() => {
        setValue('isError', false)
      }, DELAY_FOR_BAD_RESPONSE)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [watch('isError')])

  useMounted(() => {
    let timeout: Timeout = 0

    // Reset 'isSuccessfully' state
    if (watch('isSuccessfully')) {
      timeout = setTimeout(() => {
        setValue('isSuccessfully', false)
      }, DELAY_FOR_SUCCESSFULLY_RESPONSE)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [watch('isSuccessfully')])

  return {
    watch: watch,
    errors: errors,
    submit: submit,
    register: register,
    dictionary: dictionary,
    handleSubmit: handleSubmit,
    hideErrorAlert: hideErrorAlert,
    hideSuccessAlert: hideSuccessAlert,
    isDisabledSubmitButton: isDisabledSubmitButton
  }
}
