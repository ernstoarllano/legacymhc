import BlockContent from '@sanity/block-content-to-react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Section from 'components/Section'
import { PostPageProps } from 'interfaces/Page'
import { Post } from 'interfaces/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getPost } from 'services/getPost'
import { getPosts } from 'services/getPosts'

const PostPage = ({ post }: PostPageProps) => {
  return (
    <>
      <Head>
        <title>Legacy Communities | Blog</title>
      </Head>
      <Header />
      <Section backgroundColor="bg-white">
        <article>
          <h1>{post.title}</h1>
          {post.body && (
            <BlockContent blocks={post.body} className="space-y-8" />
          )}
        </article>
      </Section>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { posts } = await getPosts(0, 100)
    const paths = posts.map((post: Post) => ({
      params: {
        slug: post.slug.current,
      },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    throw err
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { post } = await getPost(params?.slug as string)

    return {
      props: {
        post,
      },
    }
  } catch (err) {
    throw err
  }
}

export default PostPage
