import Community from 'components/Community'

const Communities = ({ communities }: any) => {
  return (
    <>
      {communities && (
        <div className="grid lg:grid-cols-3 gap-6" data-cy="communities">
          {communities.map((community: any) => (
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
    </>
  )
}

export default Communities
