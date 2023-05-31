// Types
import type { ReactNode } from 'react'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
// import { MultiLangType } from '%types%/useForm.type'

export interface PageTabsType {
  skills: ReactNode
  proyects: ReactNode
  galery: ReactNode
  contact: ReactNode
}

export interface TabType {
  name: string
  icon: IconProp
  dictionaryKey: string
}

export interface SkillType {
  name: string
  level: number
}

export interface Grids {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface ProyectsTabProps {
  defaultResponsiveGrids: Grids
}

export interface ProyectType {
  id: string
  url?: string
  type?: string
  proyectImg: string
  name: string
  // name: string | MultiLangType
}

export interface ProyectNameProps {
  value: string
  // value: string | MultiLangType
}

export interface TabListProps {
  updateTab: (tabName: string) => void
}
