import Community from 'components/Community'
import { Communities } from 'interfaces/Community'
import { DiscoverCommunityProps } from 'interfaces/DiscoverCommunity'
import client from 'lib/client'
import { useState } from 'react'

const DiscoverCommunity = ({
  communities,
  totalCommunities,
}: DiscoverCommunityProps) => {
  const [loading, setLoading] = useState<boolean | false>(false)
  const [data, setData] = useState<Communities>(communities)
  const startOffset = data.length
  const endOffset = startOffset + 3

  const handleMore = async () => {
    setLoading(true)

    const moreCommunities = await client.fetch(
      `*[_type == 'community'] | order(_createdAt asc) [${startOffset}...${endOffset}] {
        title,
        city,
        website
      }`
    )

    setData([...data, ...moreCommunities])
    setLoading(false)
  }

  return (
    <section className="py-20">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center">{`Discover a Community You\'ll Love`}</h2>
        {data && (
          <div className="lg:grid lg:grid-cols-3 lg:gap-3 mt-4">
            {data.map((community) => (
              <Community
                key={community.title}
                id={community.id}
                category={community.category}
                title={community.title}
                city={community.city}
                state={community.state}
                website={community.website}
              />
            ))}
          </div>
        )}
        {data.length < totalCommunities && (
          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-white bg-teal-500"
              onClick={handleMore}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default DiscoverCommunity
