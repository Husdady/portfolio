// React
import React from 'react'

// Librarys
import { SizeProp, IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IconType {
  name: IconProp
  size?: SizeProp
  color?: string
}

export interface LoadingActions {
  showLoading: Function
  hideLoading: Function
}

export interface ButtonClickType extends LoadingActions {
  event: React.MouseEvent<HTMLButtonElement>
}

export interface ButtonProps {
  ref?: React.RefObject<HTMLElement>
  title: string | React.ReactNode
  icon: IconType | IconProp
  className?: string
  style?: React.CSSProperties
  backgroundColor?: string
  loading?: React.ButtonHTMLAttributes<HTMLSpanElement>
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick?({ event, showLoading, hideLoading }: ButtonClickType): void
}
