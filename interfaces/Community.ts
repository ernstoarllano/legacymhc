export interface Community {
  id: number
  category: string
  title: string
  city: string
  state: string
  website: string
}

export interface Communities extends Array<Community> {}
