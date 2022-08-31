import classNames from 'classnames'
import { BlogGridProps } from 'interfaces/Blog'
import Image from 'next/image'
import Link from 'next/link'
import { formatURL } from 'utils/formatURL'

const BlogGrid = ({ posts }: BlogGridProps) => {
  return (
    <>
      {posts && (
        <div
          className="lg:grid lg:grid-rows-6 lg:grid-flow-col lg:gap-6 space-y-8 lg:space-y-0"
          data-cy="blog"
        >
          {posts.map((post, i) => {
            const rowClasses = classNames({
              'lg:row-span-3': i === 1 || i === 2,
              'lg:row-span-full': i === 0,
            })

            const heightClasses = classNames({
              'lg:h-[300px]': i === 1 || i === 2,
              'lg:h-[666px]': i === 0,
            })

            return (
              <div
                key={post._id}
                className={`flex flex-col lg:col-span-6 ${rowClasses} space-y-3`}
              >
                <Link href={`/blog/${post.slug.current}`}>
                  <a
                    className={`relative ${heightClasses} bg-gray-200 overflow-hidden`}
                  >
                    <Image
                      src={formatURL(post.featuredImage)
                        .width(618)
                        .height(i === 0 ? 666 : 300)
                        .url()}
                      alt={post.title}
                      width={618}
                      height={i === 0 ? 666 : 300}
                      layout="responsive"
                      loading="lazy"
                    />
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
