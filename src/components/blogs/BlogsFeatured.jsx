 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'

const BlogsFeatured = ({post}) => {
    console.log(post)
  return (
    <div className='bg-[#eee6f6] w-full '>
        <div className="container mx-auto mb-10 max-h-[744px] p-16 w-fill rounded flex flex-row-reverse gap-7  ">
            <img src={post.mainImage.asset.url} className='rounded featured-image object-cover h-96' alt="" />
            <div className="flex flex-col items-start gap-4  my-7">
                <h2 className='uppercase text-lg mb-5'> Featured Post</h2>
                <h2 className='font-bold text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum quae ex qui molestiae sit.</h2>
                <div className='text-left font-bold text-gray-500'>By <span className='text-purple-500'>John Doe </span> | <span> May 23, 22</span></div>
                <p className='text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quam in aut iure dolor nulla aliquam error itaque ducimus tempore.</p>
                
            <button className='mt-3'>
                <Link to='/blogs'
                    className="py-2 px-6 
                        rounded shadow text-black bg-yellow-400 border-yellow-300 hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold" 
                >
                    Read More
                </Link>
            </button>
            </div>
        </div>
</div>
  )
}

BlogsFeatured.propTypes = {
    post: PropTypes.object,
}

export default BlogsFeatured