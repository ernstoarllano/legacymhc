import autoAnimate from '@formkit/auto-animate'
import { Community } from 'interfaces/Community'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { formatState } from 'utils/formatState'

const Community = ({ category, title, city, state, website }: Community) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current && autoAnimate(ref.current)
  }, [ref])

  return (
    <div className="flex flex-col" ref={ref}>
      <div
        className="flex flex-col relative mb-8 border border-solid border-gray-300"
        data-cy="image"
      >
        <a href={website} target="_blank" rel="noreferrer">
          <Image
            src="/placeholder.webp"
            alt={title}
            layout="responsive"
            width={1500}
            height={860}
            loading="lazy"
          />
        </a>
        <span
          className="absolute -bottom-5 left-5 px-3 py-2 text-sm font-bold text-white uppercase bg-blue-700"
          data-cy="age"
        >
          <Link href={category.slug.current}>
            <a>{category.title}</a>
          </Link>
        </span>
      </div>
      <div className="flex flex-col">
        <h3 className="mb-0" data-cy="title">
          <a href={website} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <span className="text-base text-gray-500">
          <span data-cy="city">{city}</span>,{' '}
          <span data-cy="state">{formatState(state)}</span>
        </span>
      </div>
    </div>
  )
}

export default Community
