import Header from 'components/Header'
import Section from 'components/Section'
import { HomePageProps } from 'interfaces/Page'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { getAges } from 'services/getAges'
import { getCommunities } from 'services/getCommunities'
import { getHomes } from 'services/getHomes'
import { getPosts } from 'services/getPosts'
import { getQueryCount } from 'services/getQueryCount'

const DiscoverCommunities = dynamic(
  () => import('components/DiscoverCommunities'),
  { suspense: true }
)

const HomesForSale = dynamic(() => import('components/HomesForSale'), {
  suspense: true,
})

const BlogGrid = dynamic(() => import('components/BlogGrid'), {
  suspense: true,
})

const HomePage = ({
  communities,
  homes,
  count,
  posts,
  ages,
}: HomePageProps) => {
  return (
    <>
      <Header ages={ages} />
      <Section backgroundColor="bg-gray-100">
        <h2 className="text-blue-700 text-center">{`Discover a Community You\'ll Love`}</h2>
        <p className="text-center">
          Enjoy a relaxing, carefree lifestyle within the safety and security of
          our grounds. Our properties have the look and feel of a traditional
          residential subdivision plus all the benefits and affordability of a
          premium quality manufactured housing community.
        </p>
        <Suspense fallback="Loading">
          <DiscoverCommunities communities={communities} count={count} />
        </Suspense>
      </Section>
      <Section backgroundColor="bg-white">
        <h2 className="text-blue-700 text-center">Homes for Sale</h2>
        <p className="text-center">
          Ready to make a move? Let us help you find your next home. We welcome
          you to contact our team about current homes for sale within our
          community.
        </p>
        <Suspense fallback="Loading">
          <HomesForSale homes={homes} />
        </Suspense>
      </Section>
      <Section backgroundColor="bg-gray-100">
        <h2 className="text-blue-700 text-center">From the Blog</h2>
        <BlogGrid posts={posts} />
      </Section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { communities } = await getCommunities()
  const { homes } = await getHomes()
  const { count } = await getQueryCount('community')
  const { posts } = await getPosts()
  const { ages } = await getAges()

  return {
    props: {
      communities,
      homes,
      count,
      posts,
      ages,
    },
  }
}

export default HomePage
