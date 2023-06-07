/* eslint-disable react-hooks/exhaustive-deps */
// Librarys
import { Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
import MultiLangText from '@components/MultiLangText'

// Hooks
import useContactForm from './useContactForm'

// Utils
import lazy from '@utils/lazy'
import getFormError from '@utils/getFormError'
import getKeyValueFromObject from '@utils/getKeyValueFromObject'

// Lazy components
const Alert = lazy(() => import('@components/Alert'))
const Button = lazy(() => import('@components/Button'))
const ErrorMessage = lazy(() => import('@components/ErrorMessage'))

export default function ContactForm() {
  const {
    watch,
    errors,
    register,
    submit,
    handleSubmit,
    dictionary,
    hideErrorAlert,
    hideSuccessAlert,
    isDisabledSubmitButton
  } = useContactForm()

  return (
    <Container fluid className="tm-form px-0 px-md-3 px-lg-3">
      <h2 className="mb-3 text-danger">
        <MultiLangText dictionaryKey="contact-xaks20" />
      </h2>

      <form noValidate className="contact-form" onSubmit={handleSubmit(submit)}>
        <input
          {...register('fullname')}
          type="text"
          className="form-control"
          placeholder={getKeyValueFromObject(dictionary, 'contact-kkk999')}
        />

        <Suspense fallback={null}>
          <ErrorMessage title={getFormError('fullname', errors)} />
        </Suspense>

        <input
          {...register('email')}
          type="email"
          className="form-control"
          placeholder={getKeyValueFromObject(dictionary, 'contact-kkk998')}
        />

        <Suspense fallback={null}>
          <ErrorMessage title={getFormError('email', errors)} />
        </Suspense>

        <textarea
          {...register('message')}
          className="form-control h-100"
          placeholder={getKeyValueFromObject(dictionary, 'contact-kkk997')}
        />

        <Suspense fallback={null}>
          <ErrorMessage title={getFormError('message', errors)} />
        </Suspense>

        <Suspense fallback={null}>
          <Button
            type="submit"
            showSpin={watch('isFetching')}
            disabled={isDisabledSubmitButton}
            icon={<FontAwesomeIcon icon="paper-plane" size="sm" />}
            title={<MultiLangText dictionaryKey="contact-cnahs7" />}
            loadingTitle={getKeyValueFromObject(dictionary, 'contact-jjj999')}
            className="send-message bg-danger text-white mt-4 rounded d-block ms-auto"
          />
        </Suspense>
      </form>

      <Suspense fallback={null}>
        <Alert
          className="mt-4"
          variant="success"
          isVisible={watch('isSuccessfully')}
          title={getKeyValueFromObject(dictionary, 'contact-kkk996')}
          onClose={hideSuccessAlert}
        />
      </Suspense>

      <Suspense fallback={null}>
        <Alert
          variant="danger"
          className="mt-4"
          isVisible={watch('isError')}
          title={getKeyValueFromObject(dictionary, 'contact-kkk995')}
          onClose={hideErrorAlert}
        />
      </Suspense>
    </Container>
  )
}
