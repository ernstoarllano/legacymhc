import Community from 'components/Community'
import { DiscoverCommunityProps } from 'interfaces/DiscoverCommunity'

const DiscoverCommunity = ({ communities }: DiscoverCommunityProps) => {
  return (
    <section className="py-20">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-center">{`Discover a Community You\'ll Love`}</h2>
        {communities && (
          <div>
            {communities.map((community) => (
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
      </div>
    </section>
  )
}

export default DiscoverCommunity
