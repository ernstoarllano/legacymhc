import client from 'lib/client'

export const getAges = async () => {
  const data = await client.fetch(
    `*[_type == 'age'] | order(_createdAt asc) {
      _id,
      title,
      slug
    }`
  )

  return {
    ages: data,
  }
}
