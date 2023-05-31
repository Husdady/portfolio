// React
import React, { Suspense } from 'react'

// Components
import { Alert, renderError, Button } from '@common'
import MultiLangText from '@components/MultiLangText'

// Librarys
import { Container } from 'react-bootstrap'

// Hooks
import useForm from '@hooks/useForm'

// Services
import sendEmailMessage from '@services/sendEmailMessage'

// Interfaces
import { AlertRef } from '@interfaces/Alert.interface'
import { LoadingActions } from '@interfaces/Button.interface'

// Types
import { FormDataType } from '%types%/useForm.type'

// Utils
import ContactFormSchema from '@assets/data/contact-form-schema'
import lazy from '@utils/lazy'

// Lazy components
const DownloadCV = lazy(() => import('@components/Contact/DownloadCV'))
const SocialNetworks = lazy(() => import('@components/Contact/SocialNetworks'))

const buttonStyle: React.CSSProperties = { padding: '10px 30px' }
const loadingStyle = {
  style: { marginLeft: 40, marginRight: 40 }
}

export default function Contact() {
  return (
    <React.Fragment>
      <ContactForm />

      <Suspense fallback={null}>
        <SocialNetworks />
      </Suspense>

      <Suspense fallback={null}>
        <DownloadCV />
      </Suspense>
    </React.Fragment>
  )
}

// <------------------------ Extra Components ------------------------>
export const ContactForm = () => {
  const refDangerAlert = React.useRef<AlertRef | null>(null)
  const refSuccessAlert = React.useRef<AlertRef | null>(null)
  const refSubmitButton = React.useRef<LoadingActions | null>(null)

  const { values, setFieldValue, errors, handleSubmit, language, dictionary } = useForm({
    validationSchema: ContactFormSchema,
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: (formData: FormDataType) => {
      return sendEmailMessage({
        ...formData,
        refs: {
          successAlert: refSuccessAlert,
          dangerAlert: refDangerAlert
        }
      })
    }
  })

  const refAction = React.useCallback((action: string) => {
    if (refSubmitButton.current !== null) {
      refSubmitButton.current[action as keyof typeof refSubmitButton.current]()
    }
  }, [])

  // Actualizar un campo del formulario
  const handleChangeField = React.useCallback(
    (field: string) => {
      return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFieldValue(field, e.target.value)
      }
    },
    [language]
  )

  return (
    <Container fluid className="tm-form px-0 px-md-3 px-lg-3">
      <h2 className="mb-3 text-danger">
        <MultiLangText dictionaryKey="contact-xaks20" />
      </h2>
      <form
        onSubmit={handleSubmit({
          showLoading: () => refAction('showLoading'),
          hideLoading: () => refAction('hideLoading')
        })}
      >
        {/* Campo 'name' en el formulario */}
        <input
          type="text"
          className="form-control"
          onChange={handleChangeField('name')}
          placeholder={dictionary['contact-kkk999']}
          value={typeof values.name === 'string' ? values.name : ''}
        />

        {/* Renderizar error en campo 'name' */}
        {renderError({ title: errors.name })}

        {/* Campo 'email' en el formulario */}
        <input
          type="email"
          className="form-control"
          onChange={handleChangeField('email')}
          placeholder={dictionary['contact-kkk998']}
          value={typeof values.email === 'string' ? values.email : ''}
        />

        {/* Renderizar error en campo 'email' */}
        {renderError({ title: errors.email })}

        {/* Campo 'message' en el formulario */}
        <textarea
          className="form-control h-100"
          onChange={handleChangeField('message')}
          placeholder={dictionary['contact-kkk997']}
          value={typeof values.message === 'string' ? values.message : ''}
        />

        {/* Renderizar error en campo 'message' */}
        {renderError({ title: errors.message })}

        <Button
          ref={refSubmitButton}
          icon="paper-plane"
          title={<MultiLangText dictionaryKey="contact-cnahs7" />}
          style={buttonStyle}
          loading={loadingStyle}
          className="bg-danger text-white mt-4 rounded d-block ms-auto"
        />
      </form>

      {/* Alerta de éxito */}
      <Alert
        ref={refSuccessAlert}
        variant="success"
        className="mt-4"
        title={dictionary['contact-kkk996']}
      />

      {/* Alerta de error */}
      <Alert
        ref={refDangerAlert}
        variant="danger"
        className="mt-4"
        title={dictionary['contact-kkk995']}
      />
    </Container>
  )
}
