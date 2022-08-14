import Section from 'components/Section'
import { BlogPageProps } from 'interfaces/Page'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { getPosts } from 'services/getPosts'

const BlogRoll = dynamic(() => import('components/BlogRoll'), {
  suspense: true,
})

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Section backgroundColor="bg-white">
      <Suspense fallback="Loading">
        <BlogRoll posts={posts} />
      </Suspense>
    </Section>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { posts } = await getPosts(0, 100)

    return {
      props: {
        posts,
      },
    }
  } catch (err) {
    throw err
  }
}

export default BlogPage
