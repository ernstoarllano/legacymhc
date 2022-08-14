import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}
