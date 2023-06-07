// React
import React from 'react'

export interface OnlyChildrenProp {
  children: React.ReactNode
}

export interface OnlyStyleProp {
  style?: React.CSSProperties
}

export interface OnlyClassNameProp {
  className?: string
}

export interface TitleProp<T extends HTMLElement = HTMLSpanElement> {
  title: React.ReactNode
  customTitle?: Omit<React.HTMLAttributes<T>, 'title'>
}
