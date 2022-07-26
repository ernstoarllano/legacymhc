import classNames from 'classnames'
import { BlogGridProps } from 'interfaces/Blog'
import Link from 'next/link'

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <>
      {posts && (
        <div
          className="lg:grid lg:grid-rows-6 lg:grid-flow-col lg:gap-8"
          data-cy="blog"
        >
          {posts.map((post, i) => {
            const rowClasses = classNames({
              'lg:row-span-3': i === 1 || i === 2,
              'lg:row-span-full': i === 0,
            })

            const heightClasses = classNames({
              'lg:h-[300px]': i === 1 || i === 2,
              'lg:h-[675px]': i === 0,
            })

            return (
              <div
                key={post._id}
                className={`flex flex-col lg:col-span-6 ${rowClasses}`}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <a>
                    <div className={`${heightClasses} mb-4 bg-gray-200`}></div>
                  </a>
                </Link>
                <h3 className="mt-auto mb-0">{post.title}</h3>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default BlogGrid
