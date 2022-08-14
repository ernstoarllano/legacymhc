import client from 'lib/client'

export const getCommunities = async (
  startOffset: number = 0,
  endOffset: number = 3
) => {
  try {
    const data = await client.fetch(
      `*[_type == 'community'] | order(_createdAt asc) [${startOffset}...${endOffset}] {
        _id,
        category-> { _id, title, slug },
        title,
        city,
        state,
        website
      }`
    )

    return {
      communities: data,
    }
  } catch (err) {
    throw err
  }
}
