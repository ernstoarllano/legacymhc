import { Community } from 'interfaces/Community'
import { createContext, useState } from 'react'

export const HeaderContext = createContext<any>(null)

const HeaderProvider = ({ children }: any) => {
  const [communities, setCommunities] = useState<Community[] | []>([])
  const [isActive, setIsActive] = useState<boolean | false>(false)

  return (
    <HeaderContext.Provider
      value={{
        communities,
        isActive,
        setCommunities,
        setIsActive,
      }}
    >
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider
