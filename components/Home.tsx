import { Home } from 'interfaces/Home'
import Image from 'next/image'
import { formatCurrency } from 'utils/formatCurrency'
import { formatState } from 'utils/formatState'

const Home = ({ title, slug, parent, price, bedrooms, bathrooms }: Home) => {
  return (
    <div>
      <div className="flex flex-col relative mb-8 border border-solid border-gray-300">
        <a
          href={`${parent.website}/homes-for-sale/${slug.current}`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/placeholder.webp"
            alt={title}
            layout="responsive"
            width={1500}
            height={860}
          />
        </a>
        <span className="absolute -bottom-5 left-5 px-3 py-2 text-sm font-bold text-white uppercase bg-blue-700">
          {parent.category.title}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-lg font-bold text-blue-700 uppercase tracking-wider">
          {parent.title} | {parent.city}, {formatState(parent.state)}
        </span>
        <h3>{title}</h3>
        <div className="flex items-center space-x-3">
          <span>{formatCurrency(price)}</span>
          <span>{bedrooms} bd</span>
          <span>{bathrooms} ba</span>
        </div>
      </div>
    </div>
  )
}

export default Home
