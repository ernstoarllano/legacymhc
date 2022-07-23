import DiscoverCommunity from 'components/DiscoverCommunity'
import { HomePageProps } from 'interfaces/Home'
import client from 'lib/client'
import { GetServerSideProps } from 'next'

const HomePage = ({ communities }: HomePageProps) => {
  return <DiscoverCommunity communities={communities} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const communities = await client.fetch(
    `*[_type == 'community'] {
      title,
      city,
      website
    }`
  )

  return {
    props: { communities },
  }
}

export default HomePage
