import { Community } from 'interfaces/Community'
import { Slug } from 'interfaces/Slug'

export interface Age {
  _id?: string
  title: string
  slug: Slug
  communities?: Community[]
}
