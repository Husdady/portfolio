// Librarys
import { memo } from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { MultiLangTextProps } from './interfaces'

const MultiLangText: React.FC<MultiLangTextProps> = ({ dictionaryKey }: MultiLangTextProps) => {
  const { dictionary } = useLanguages()
  return <>{dictionary[dictionaryKey]}</>
}

export default memo(MultiLangText)
