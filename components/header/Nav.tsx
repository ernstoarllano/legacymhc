import Logo from 'components/Logo'
import { HeaderContext } from 'context/Header'
import { useAges } from 'hooks/useAges'
import Link from 'next/link'
import { useContext } from 'react'
import { getCommunitiesByAge } from 'services/getCommunitiesByAge'

const Nav = () => {
  const { categories } = useAges()
  const { setCommunities, setIsActive } = useContext(HeaderContext)

  const fetchCommunities = async (age: string) => {
    setIsActive(true)

    if (age) {
      const { communitiesByAge } = await getCommunitiesByAge(age, 0, 100)

      setCommunities(communitiesByAge.communities)
    }
  }

  const reset = () => {
    setIsActive(false)
  }

  return (
    <div className="py-4 lg:pb-0">
      <div className="lg:flex lg:items-center w-full max-w-7xl mx-auto px-4 lg:px-0 lg:space-x-24">
        <Logo isDefault={true} />
        {categories && (
          <nav className="lg:self-end">
            <ul className="lg:flex lg:items-center lg:space-x-12">
              {categories.map((category) => (
                <li
                  key={category._id}
                  onMouseOver={() => fetchCommunities(category.slug.current)}
                  onMouseOut={reset}
                >
                  <Link href={category.slug.current}>
                    <a className="block lg:pb-4 text-xl font-bold text-blue-700 uppercase tracking-widest">
                      {category.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Nav
