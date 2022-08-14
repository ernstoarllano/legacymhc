import BlogGrid from 'components/BlogGrid'
import DiscoverCommunities from 'components/DiscoverCommunities'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero from 'components/Hero'
import HomesForSale from 'components/HomesForSale'
import Section from 'components/Section'
import { HomePageProps } from 'interfaces/Page'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getHomes } from 'services/getHomes'
import { getPosts } from 'services/getPosts'

const HomePage = ({ homes, posts }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>Legacy Communities | RV & Manufactured Home Communities</title>
      </Head>
      <Header />
      <Hero />
      <Section backgroundColor="bg-gray-100">
        <h2 className="text-blue-700 text-center">{`Discover a Community You\'ll Love`}</h2>
        <p className="text-center">
          Enjoy a relaxing, carefree lifestyle within the safety and security of
          our grounds. Our properties have the look and feel of a traditional
          residential subdivision plus all the benefits and affordability of a
          premium quality manufactured housing community.
        </p>
        <DiscoverCommunities />
      </Section>
      <Section backgroundColor="bg-white">
        <h2 className="text-blue-700 text-center">Homes for Sale</h2>
        <p className="text-center">
          Ready to make a move? Let us help you find your next home. We welcome
          you to contact our team about current homes for sale within our
          community.
        </p>
        <HomesForSale homes={homes} />
      </Section>
      <Section backgroundColor="bg-gray-100">
        <h2 className="text-blue-700 text-center">From the Blog</h2>
        <BlogGrid posts={posts} />
      </Section>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { homes } = await getHomes()
    const { posts } = await getPosts()

    return {
      props: {
        homes,
        posts,
      },
      revalidate: 43200,
    }
  } catch (err) {
    throw err
  }
}

export default HomePage
