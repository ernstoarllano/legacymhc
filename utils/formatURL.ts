import imageUrlBuilder from '@sanity/image-url'
import client from 'lib/client'

const builder = imageUrlBuilder(client)

export const formatURL = (source: Record<any, any>) => {
  return builder.image(source)
}
