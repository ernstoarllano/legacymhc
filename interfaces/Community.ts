import { Address } from 'interfaces/Address'
import { Age } from 'interfaces/Age'

export interface Community {
  _id?: string
  category: Age
  title: string
  city: string
  state: string
  address?: Address
  website: string
}

export interface Communities extends Array<Community> {}
