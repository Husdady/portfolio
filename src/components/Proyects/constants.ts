// Interfaces
import { ProyectsProps } from './interfaces'

// Constants
export const MAX_PROYECTS_LOADER = 10
export const LIMIT_CHARACTERS_FOR_THE_PROYECT_NAME = 20

export const proyectImgStyle: React.CSSProperties = {
  objectFit: 'cover'
}

export const separatorStyle: React.CSSProperties = {
  height: '2px',
  marginTop: '2.25rem',
  backgroundColor: 'var(--bs-gray)'
}

export const Props: ProyectsProps = Object.freeze({
  defaultResponsiveGrids: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3,
    xxl: 4
  }
})
