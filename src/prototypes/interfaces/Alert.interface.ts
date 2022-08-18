export interface AlertRef {
  show: Function
  hide: Function
}

export interface AlertProps {
  title: string
  variant: string
  className?: string
}

export interface IconType {
  success: 'check-circle'
  danger: 'times-circle'
}
