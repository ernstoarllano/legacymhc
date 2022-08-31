import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'

const Top = () => {
  const { width } = useWindowSize()

  const isDesktop = width >= 1024

  return (
    <div className="bg-blue-700">
      <div className="lg:flex lg:items-center lg:justify-end w-full max-w-7xl mx-auto px-4 lg:px-0">
        <nav>
          <ul className="flex items-center text-white space-x-3">
            {isDesktop && (
              <li className="mr-4">
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
            )}
            <li>
              <a
                className="inline-block px-3 py-2 bg-green-700 border-x border-solid border-white"
                href="https://legacy.twa.rentmanager.com/"
                target="_blank"
                rel="noreferrer"
              >
                Resident Login
              </a>
            </li>
            <li>
              <a
                className="inline-block px-3 py-2 bg-green-700 border-x border-solid border-white"
                href="https://www.youtube.com/watch?v=DIPvoGypt2o"
                target="_blank"
                rel="noreferrer"
              >
                TWA Tutorial
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Top
