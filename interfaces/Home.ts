import { Community } from 'interfaces/Community'
import { Slug } from 'interfaces/Slug'

export interface Home {
  _id?: string
  title: string
  slug: Slug
  parent: Community
  price: number
  bedrooms: number
  bathrooms: number
}
