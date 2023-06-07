// Interfaces
export interface TemplateData {
  email: string
  message: string
  fullname: string
}

export interface SendEmailMessageParams {
  data: TemplateData
  onInit?: () => void
  onFinally?: () => void
  onSuccesfully?: () => void
  onError?: (err: unknown) => void
}
