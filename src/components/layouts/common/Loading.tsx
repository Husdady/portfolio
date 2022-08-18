// Interfaces
import { LoadingProps } from '@interfaces/Loading.interface'

const totalDots: number = 6
const elems: number[] = new Array(totalDots)
const callback = (_: unknown, i: number) => (
  <div key={i} className="sk-chase-dot" />
)
const dots = Array.from(elems, callback)

export default function Loading({ style }: LoadingProps): JSX.Element {
  return (
    <div
      style={style}
      className="w-100 h-100vh d-flex align-items-center jc-center"
    >
      <div className="sk-chase">{dots}</div>
    </div>
  )
}
