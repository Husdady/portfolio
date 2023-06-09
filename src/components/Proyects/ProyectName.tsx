// Librarys
import { memo, useMemo } from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { ProyectNameProps } from './interfaces'

// Utils
import truncate from '@utils/truncate'

// Constants
import {
  XL_LIMIT_CHARACTERS_FOR_THE_PROYECT_NAME,
  DEFAULT_LIMIT_CHARACTERS_FOR_THE_PROYECT_NAME
} from './constants'

function ProyectName({ value }: ProyectNameProps) {
  const { lang } = useLanguages()

  // Define the proyect name
  const proyectName = useMemo(() => {
    return typeof value === 'string' ? value : value[lang as keyof typeof value]
  }, [lang, value])

  return (
    <h6 className="mb-0 text-center">
      {truncate(
        proyectName,
        window.innerWidth >= 1200
          ? XL_LIMIT_CHARACTERS_FOR_THE_PROYECT_NAME
          : DEFAULT_LIMIT_CHARACTERS_FOR_THE_PROYECT_NAME
      )}
    </h6>
  )
}

export default memo(ProyectName)
