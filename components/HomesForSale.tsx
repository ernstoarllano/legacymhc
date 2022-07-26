import Home from 'components/Home'
import { HomesForSaleProps } from 'interfaces/HomesForSale'

const HomesForSale = ({ homes }: HomesForSaleProps) => {
  return (
    <>
      {homes && (
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 mt-8" data-cy="homes">
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
