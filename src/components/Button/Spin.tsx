// Hooks
import useSpin from './useSpin'

// Interfaces
import { SpinProps } from './interfaces'

// Constants
import { SpinnerProps as Props } from './constants'

export default function Spin({
  size = Props.DEFAULT_SIZE,
  align = Props.DEFAULT_ALIGN,
  center = Props.DEFAULT_CENTER,
  title = Props.DEFAULT_TITLE,
  customTitle = {},
  style,
  className,
  customSvg = {}
}: SpinProps) {
  const spinSettings = useSpin({
    size: size,
    align: align,
    center: center,
    className: className,
    customSvg: customSvg,
    customTitle: customTitle
  })

  return (
    <div role="status" style={style} className={spinSettings.className}>
      <svg {...spinSettings.svg} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle cx="4" cy="4" r="10" stroke="currentColor" className="opacity-25"></circle>
        <path
          fill="currentColor"
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      {title.length > 0 && <span {...spinSettings.title}>{title}</span>}
    </div>
  )
}
