import Link from 'next/link'

// TODO: Add type definitions
const BlogRoll = ({ posts }: any) => {
  console.log(posts)

  return (
    <>
      {posts && (
        <div className="space-y-12">
          {posts.map((post) => (
            <div key={post._id} className="flex justify-between">
              <div>Image</div>
              <div>
                <h2>
                  <Link href={`/blog/${post.slug.current}`}>
                    <a>{post.title}</a>
                  </Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default BlogRoll
