import client from 'lib/client'

export const getPosts = async (
  startOffset: number = 0,
  endOffset: number = 3
) => {
  try {
    const data = await client.fetch(
      `*[_type == 'blog'] | order(_createdAt asc) [${startOffset}...${endOffset}] {
        _id,
        title,
        slug,
        body,
        featuredImage {
          asset-> {
            _id,
            url
          }
        }
      }`
    )

    return {
      posts: data,
    }
  } catch (err) {
    throw err
  }
}
