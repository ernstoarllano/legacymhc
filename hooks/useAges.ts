import { Age } from 'interfaces/Age'
import { useEffect, useState } from 'react'
import { getAges } from 'services/getAges'

export const useAges = () => {
  const [categories, setCategories] = useState<Age[] | []>([])

  useEffect(() => {
    const fetchAges = async () => {
      const { ages } = await getAges()

      setCategories(ages)
    }

    fetchAges()
  }, [])

  return { categories }
}
