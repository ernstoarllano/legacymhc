import classNames from 'classnames'
import Communities from 'components/Communities'
import { HeaderContext } from 'context/Header'
import { useContext } from 'react'

const MegaNav = () => {
  const { communities, isActive } = useContext(HeaderContext)

  const visibility = classNames({
    hidden: !isActive,
    block: isActive,
  })

  return (
    <div
      className={`lg:absolute lg:top-full lg:inset-x-0 lg:z-50 ${visibility} bg-gray-200`}
    >
      <div className="lg:grid lg:grid-cols-12 lg:gap-6 w-full max-w-7xl mx-auto px-4 lg:px-0 lg:py-12">
        <div className="lg:col-span-2">States</div>
        <div className="lg:col-span-10">
          <Communities communities={communities} />
        </div>
      </div>
    </div>
  )
}

export default MegaNav
