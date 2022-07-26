import { Slug } from 'interfaces/Slug'

export interface Post {
  _id?: string
  title: string
  slug: Slug
  body?: []
}
