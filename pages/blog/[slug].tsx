import Section from 'components/Section'
import { PostPageProps } from 'interfaces/Page'
import { Post } from 'interfaces/Post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getPost } from 'services/getPost'
import { getPosts } from 'services/getPosts'

const PostPage = ({ post }: PostPageProps) => {
  return (
    <Section backgroundColor="bg-white">
      <article>
        <h1>{post.title}</h1>
      </article>
    </Section>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
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
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await getPost(params?.slug as string)

  return {
    props: {
      post,
    },
  }
}

export default PostPage