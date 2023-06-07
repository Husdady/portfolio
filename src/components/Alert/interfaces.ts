// Interfaces
export interface IconType {
  success: 'check-circle'
  danger: 'times-circle'
}

export interface AlertProps {
  title?: string
  variant?: string
  className?: string
  isVisible: boolean
  onClose: () => void
}
