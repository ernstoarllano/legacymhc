import DiscoverCommunity from 'components/DiscoverCommunity'
import { HomePageProps } from 'interfaces/Home'
import client from 'lib/client'
import { GetServerSideProps } from 'next'

const HomePage = ({ communities, totalCommunities }: HomePageProps) => {
  console.log(totalCommunities)

  return (
    <DiscoverCommunity
      communities={communities}
      totalCommunities={totalCommunities}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await client.fetch(
    `{
      'communities': *[_type == 'community'] | order(_createdAt asc) [0...3] {
        title,
        city,
        website
      },
      'total': count(*[_type == 'community'])
    }`
  )

  return {
    props: { communities: data.communities, totalCommunities: data.total },
  }
}

export default HomePage
