import { Community } from 'interfaces/Community'
import Image from 'next/image'
import Link from 'next/link'
import { formatState } from 'utils/formatState'

const Community = ({ category, title, city, state, website }: Community) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col relative mb-4 border border-solid border-gray-300"
        data-cy="image"
      >
        <a href={website} target="_blank" rel="noreferrer">
          <Image
            src="/placeholder.webp"
            alt={title}
            layout="responsive"
            width={1500}
            height={860}
          />
        </a>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-blue-700" data-cy="age">
          <Link href={category.slug.current}>
            <a>{category.title}</a>
          </Link>
        </span>
        <h3 className="mb-0" data-cy="title">
          <a href={website} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <span>
          <span data-cy="city">{city}</span>,{' '}
          <span data-cy="state">{formatState(state)}</span>
        </span>
      </div>
    </div>
  )
}

export default Community
