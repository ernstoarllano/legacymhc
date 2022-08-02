import client from 'lib/client'

export const getCommunitiesByAge = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == 'age' && slug.current == '${slug}'][0] {
      _id,
      'communities': *[_type == 'community' && references(^._id)] {
        _id,
        category-> { _id, title, slug },
        title,
        city,
        state,
        address,
        website
      }
    }`,
    { slug }
  )

  return {
    communitiesByAge: data,
  }
}
