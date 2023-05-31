// Librarys
import { memo, useMemo } from 'react'

// Hooks
import useLanguages from '@hooks/useLanguages'

// Interfaces
import { ProyectNameProps } from './interfaces'

function ProyectName({ value }: ProyectNameProps) {
  const { lang } = useLanguages()

  // Define the proyect name
  const proyectName = useMemo(() => {
    return typeof value === 'string' ? value : value[lang as keyof typeof value]
  }, [lang])

  return <h6 className="mb-0 text-center">{proyectName}</h6>
}

export default memo(ProyectName)
