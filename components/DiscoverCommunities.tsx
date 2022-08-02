import Community from 'components/Community'
import { Communities } from 'interfaces/Community'
import { DiscoverCommunitiesProps } from 'interfaces/DiscoverCommunities'
import { useState } from 'react'
import { getCommunities } from 'services/getCommunities'

const DiscoverCommunities = ({
  communities,
  count,
}: DiscoverCommunitiesProps) => {
  const [loading, setLoading] = useState<boolean | false>(false)
  const [data, setData] = useState<Communities | []>(communities)
  const startOffset = data.length
  const endOffset = startOffset + 3

  const handleMore = async () => {
    setLoading(true)

    const { communities: moreCommunities } = await getCommunities(
      startOffset,
      endOffset
    )

    setData([...data, ...moreCommunities])
    setLoading(false)
  }

  return (
    <>
      {data && (
        <div
          className="lg:grid lg:grid-cols-3 lg:gap-6 mt-8"
          data-cy="communities"
        >
          {data.map((community) => (
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
      {data.length < count && (
        <div className="flex justify-center mt-16">
          <button
            className="px-4 py-2 text-sm font-bold text-white bg-green-700 uppercase tracking-wider"
            onClick={handleMore}
            data-cy="more"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </>
  )
}

export default DiscoverCommunities
