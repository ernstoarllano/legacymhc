import client from 'lib/client'

export const getQueryCount = async (type: string) => {
  const data = await client.fetch(`count(*[_type == '${type}'])`)

  return {
    count: data,
  }
}
