import { Age } from 'interfaces/Age'
import { Community } from 'interfaces/Community'
import { Home } from 'interfaces/Home'
import { Post } from 'interfaces/Post'

export interface HomePageProps {
  communities: Community[]
  homes: Home[]
  count: number
  posts: Post[]
  ages: Age[]
}

export interface PostPageProps {
  post: Post
}

export interface BlogPageProps {
  posts: Post[]
}

export interface CommunityAgePageProps {
  ages: Age[]
  communitiesByAge: Age
}
