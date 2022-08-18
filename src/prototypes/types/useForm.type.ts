import { LanguageType } from '@interfaces/Languages.interfaces'

export type ValueType = string | number | boolean | null | undefined

export type MultiLangType = {
  es: string
  en: string
}

export type MessageType =
  | string
  | MultiLangType
  | ((limit: number) => string | MultiLangType)

export type ValuesType = {
  [key: string]: ValueType
}

export type ErrorsType = {
  [key: string]: string
}

export type ExtraDataType = {
  [key: string]: string | number | null | Function
}

export type LimitType = {
  limit: number
  message: MessageType
}

export type SchemaRuleType = {
  field: string
  value?: ValueType
  message?: string | MultiLangType
  required?: string | MultiLangType
  isEmail?: boolean
  min?: LimitType
  max?: LimitType
}

export type FormDataType = {
  values: ValuesType
  resetForm: Function
  extraData: ExtraDataType
  setErrors: (errors: ErrorsType) => void
}

export type ValidationSchemaType = {
  [key: string]: Omit<SchemaRuleType, 'field'>
}

export type UseFormProps = {
  onSubmit: (formData: FormDataType) => void
  initialValues: ValuesType
  validationSchema: ValidationSchemaType
  validateOnChange?: boolean
}

export type UseFormReturnType = LanguageType & {
  values: ValuesType
  errors: ErrorsType
  resetForm: Function
  isValidForm: boolean
  formHasBeenEdited: boolean
  setErrors: (newError: ErrorsType) => void
  setFieldValue: (field: string, value: ValueType) => void
  multipleSetField: (fields: ValuesType) => void
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    extraData: ExtraDataType
  ) => void
}

export type RunValidationSubmitType = {
  formValues: ValuesType
  schemaErrors: ErrorsType
  extraData: ExtraDataType
}

export type RunValidationSchemaRulesType = {
  field: string
  currentLang: string
  value: ValueType
}

export type GetMessageLimitRuleType = LimitType & {
  lang: string
}
