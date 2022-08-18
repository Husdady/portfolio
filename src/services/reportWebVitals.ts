// Librarys
import { ReportHandler } from 'web-vitals'

export default function reportWebVitals(onPerfEntry?: ReportHandler) {
  const isValidFunction = onPerfEntry && onPerfEntry instanceof Function

  if (!isValidFunction) return false

  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  })
}
