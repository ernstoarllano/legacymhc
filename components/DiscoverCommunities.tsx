import Community from 'components/Community'
import { useAges } from 'hooks/useAges'
import { Communities } from 'interfaces/Community'
import { useEffect, useState } from 'react'
import { getCommunitiesByAge } from 'services/getCommunitiesByAge'

const DiscoverCommunities = () => {
  const { categories } = useAges()

  const [loading, setLoading] = useState<boolean | false>(false)
  const [current, setCurrent] = useState<string>('55-rv-resorts')
  const [communities, setCommunities] = useState<Communities | []>([])
  const [total, setTotal] = useState<number>(0)

  const fetchMore = async () => {
    const startOffset = communities.length
    const endOffset = startOffset + 3

    setLoading(true)

    const { communitiesByAge } = await getCommunitiesByAge(
      current,
      startOffset,
      endOffset
    )

    setCommunities((prev) => [...prev, ...communitiesByAge.communities])
    setTotal(communitiesByAge.total)

    setLoading(false)
  }

  useEffect(() => {
    const fetchCommunities = async () => {
      const { communitiesByAge } = await getCommunitiesByAge(current)

      setCommunities(communitiesByAge.communities)
      setTotal(communitiesByAge.total)
    }

    fetchCommunities()
  }, [current])

  return (
    <>
      {categories && (
        <div className="flex flex-col sm:flex-row items-center justify-center my-12 sm:space-x-12 space-y-6 sm:space-y-0">
          {categories.map((category) => (
            <button
              key={category._id}
              className={`pb-2 text-sm font-bold tracking-widest uppercase border-b-[3px] border-solid ${
                current === category.slug.current
                  ? 'border-blue-700'
                  : 'border-transparent'
              } hover:border-blue-700`}
              onClick={() => setCurrent(category.slug.current)}
            >
              {category.title}
            </button>
          ))}
        </div>
      )}
      {communities && (
        <div className="grid lg:grid-cols-3 gap-6" data-cy="communities">
          {communities.map((community) => (
            <Community
              key={community._id}
              category={community.category}
              title={community.title}
              city={community.city}
              state={community.state}
              website={community.website}
            />
          ))}
        </div>
      )}
      {communities.length < total && (
        <div className="flex justify-center mt-16">
          <button
            className="px-4 py-2 text-sm font-bold text-white bg-green-700 uppercase tracking-wider"
            onClick={fetchMore}
            data-cy="more"
          >
            {loading ? 'Loading...' : 'More'}
          </button>
        </div>
      )}
    </>
  )
}

export default DiscoverCommunities
