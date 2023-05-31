// Interfaces
import { MultiLangType } from '@components/MultiLangText/interfaces'

export interface Grids {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

export interface ProyectNameProps {
  value: string | MultiLangType
}

export interface ProyectsTabProps {
  defaultResponsiveGrids: Grids
}

export interface ProyectType {
  id: string
  url?: string
  type?: string
  proyectImg: string
  name: string | MultiLangType
}
