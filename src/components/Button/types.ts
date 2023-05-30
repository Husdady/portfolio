// Interfaces
import { SpinProps, ButtonProps } from './interfaces'

export type UseSpinParams = Omit<SpinProps, 'style' | 'title'>

export type UseButtonParams = Pick<
  ButtonProps,
  'className' | 'onClick' | 'onDoubleClick' | 'depsForDoubleClick'
>
