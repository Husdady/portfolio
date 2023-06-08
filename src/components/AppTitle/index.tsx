// Librarys
import { Helmet } from 'react-helmet'

// Hooks
import useLanguages from '@hooks/useLanguages'

export default function AppTitle() {
  const { dictionary } = useLanguages()

  // Validate if property 'app-title' exists in the dictionary
  if (!('app-title' in dictionary)) return null

  return (
    <Helmet>
      <title>{dictionary['app-title'] as string}</title>
    </Helmet>
  )
}
