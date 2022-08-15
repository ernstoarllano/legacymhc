import Home from 'components/Home'
import { HomesForSaleProps } from 'interfaces/HomesForSale'

const HomesForSale = ({ homes }: HomesForSaleProps) => {
  return (
    <>
      {homes && (
        <div
          className="flex flex-nowrap lg:grid lg:grid-cols-3 lg:gap-6 -mx-4 lg:-mx-0 mt-8 px-4 lg:px-0 space-x-6 lg:space-x-0 overflow-x-scroll lg:overflow-x-auto snap-x lg:snap-none"
          data-cy="homes"
        >
          {homes.map((home) => (
            <Home
              key={home._id}
              title={home.title}
              slug={home.slug}
              parent={home.parent}
              price={home.price}
              bedrooms={home.bedrooms}
              bathrooms={home.bathrooms}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default HomesForSale
