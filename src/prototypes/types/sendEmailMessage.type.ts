// React
import React from 'react'

// Interfaces
import { AlertRef } from '@interfaces/Alert.interface'

// Types
import { ValuesType, ExtraDataType } from './useForm.type'

type RefsType = {
  successAlert: React.MutableRefObject<AlertRef | null>
  dangerAlert: React.MutableRefObject<AlertRef | null>
}

type SendEmailMessage = {
  refs: RefsType
  values: ValuesType
  extraData: ExtraDataType
  resetForm: Function
}

export default SendEmailMessage
