import client from 'lib/client'

export const getCommunitiesByAge = async (
  slug: string,
  startOffset: number = 0,
  endOffset: number = 3
) => {
  try {
    const data = await client.fetch(
      `*[_type == 'age' && slug.current == '${slug}'][0] {
        _id,
        'communities': *[_type == 'community' && references(^._id)] [${startOffset}...${endOffset}] {
          _id,
          category-> { _id, title, slug },
          title,
          city,
          state,
          address,
          website
        },
        'total': count(*[_type == 'community' && references(^._id)])
      }`,
      { slug }
    )

    return {
      communitiesByAge: data,
    }
  } catch (err) {
    throw err
  }
}
