import client from 'lib/client'

export const getHomes = async () => {
  const data = await client.fetch(
    `*[_type == 'home'] | order(_createdAt asc) {
      _id,
      title,
      slug,
      parent-> { _id, title, slug, city, state, website, category-> { _id, title, slug } },
      price,
      bedrooms,
      bathrooms
    }`
  )

  return {
    homes: data,
  }
}
