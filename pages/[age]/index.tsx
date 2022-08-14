import { useLoadScript } from '@react-google-maps/api'
import Community from 'components/Community'
import Header from 'components/Header'
import Map from 'components/Map'
import { Age } from 'interfaces/Age'
import { CommunityAgePageProps } from 'interfaces/Page'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAges } from 'services/getAges'
import { getCommunitiesByAge } from 'services/getCommunitiesByAge'

const CommunityAgePage = ({ communitiesByAge }: CommunityAgePageProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAP_API || '',
  })

  return (
    <>
      <Header />
      <section className="lg:grid lg:grid-cols-2 lg:relative lg:min-h-screen">
        <div className="p-10">
          <h1>
            Our Legacy <span className="font-bold">Your</span> Future
          </h1>
          <div className="lg:grid lg:grid-cols-2 lg:gap-10">
            {communitiesByAge.communities &&
              communitiesByAge.communities.map((community) => (
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
        </div>
        <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen lg:bg-gray-100">
          <div className="lg:absolute lg:top-0 lg:right-0 lg:w-full lg:h-full">
            {isLoaded && <Map communities={communitiesByAge.communities} />}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { ages } = await getAges()

    const paths = ages.map((age: Age) => ({
      params: {
        age: age.slug.current,
      },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { communitiesByAge } = await getCommunitiesByAge(
      params?.age as string,
      0,
      100
    )

    return {
      props: {
        communitiesByAge,
      },
      revalidate: 43200,
    }
  } catch (err) {
    console.error(err)

    throw err
  }
}

export default CommunityAgePage
