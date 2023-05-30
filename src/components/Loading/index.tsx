// Interfaces
import { LoadingProps } from './interfaces'

// Utils
import createList from '@utils/createList'

// Constants
import { TOTAL_DOTS } from './constants'

export default function Loading({ style }: LoadingProps): JSX.Element {
  return (
    <div style={style} className="w-100 h-100vh d-flex align-items-center justify-content-center">
      <div className="sk-chase">
        {createList(TOTAL_DOTS).map((_, i) => (
          <div key={i} className="sk-chase-dot" />
        ))}
      </div>
    </div>
  )
}
