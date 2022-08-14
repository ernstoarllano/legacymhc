import client from 'lib/client'

export const getPost = async (slug: string) => {
  try {
    const data = await client.fetch(
      `*[_type == 'blog' && slug.current == '${slug}'][0] {
        _id,
        title,
        slug,
        body
      }`
    )

    return {
      post: data,
    }
  } catch (err) {
    throw err
  }
}
