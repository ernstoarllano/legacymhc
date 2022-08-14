import { Age } from 'interfaces/Age'
import { Home } from 'interfaces/Home'
import { Post } from 'interfaces/Post'

export interface HomePageProps {
  homes: Home[]
  posts: Post[]
}

export interface PostPageProps {
  post: Post
}

export interface BlogPageProps {
  posts: Post[]
}

export interface CommunityAgePageProps {
  communitiesByAge: Age
}
