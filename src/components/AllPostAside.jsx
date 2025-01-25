 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'

const AllPostAside = ({posts}) => {
    
  return (
    <aside className="all-post">
        <div className="header flex justify-between items-center mb-7 gap-4">
            <h2 className="capitalise ">All Posts</h2>
            <button>
                <Link to='/blogs'
                    className=" text-purple-500 transition-all duration-500 font-bold" 
                >
                   View All
                </Link>
            </button>
        </div>

        <div className="posts-container">
            {posts.slice(0, 4).map((post) => (
                <article key={post.slug.current} className='post p-10 hover:bg-yellow-100'>
                    <div className='text-left font-bold text-gray-500  mb-3'>By <span className='text-purple-500 '>John Doe </span> | <span> May 23, 22</span></div>
                    <h2 className='font-bold text-black'>{post.title}</h2>
                </article>
            ))}
        </div>
    </aside>
  )
}

AllPostAside.propTypes = {
    posts: PropTypes.array
}

export default AllPostAside