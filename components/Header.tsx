import Logo from 'components/Logo'
import { useAges } from 'hooks/useAges'
import Link from 'next/link'

const Header = () => {
  const { categories } = useAges()

  return (
    <header>
      <div className="bg-blue-700">
        <div className="lg:flex lg:items-center lg:justify-end w-full max-w-7xl mx-auto px-4 lg:px-0">
          <nav>
            <ul className="lg:flex lg:items-center text-white space-x-3">
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <a
                  className="inline-block px-3 py-2 bg-green-700"
                  href="https://legacy.twa.rentmanager.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resident Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="py-4">
        <div className="lg:flex lg:items-center lg:justify-between w-full max-w-7xl mx-auto px-4 lg:px-0">
          <Logo />
          {categories && (
            <nav>
              <ul className="lg:flex lg:items-center lg:space-x-12">
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link href={category.slug.current}>
                      <a className="font-bold text-blue-700">
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
    </header>
  )
}

export default Header
