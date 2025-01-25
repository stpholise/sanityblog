 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'
 import '../styles/featured.css'

const Featured = ({post}) => {
  return (
    <div className='featured'>
        <h2 className='capitalise mb-10'> Featured Post</h2>
        <div className="postContainer p-10 rounded">
            <img src={post.mainImage.asset.url} className='rounded featured-image' alt="" />
            <div className="text-content my-7">
                <div className='text-left font-bold text-gray-500'>By <span className='text-purple-500'>John Doe </span> | <span> May 23, 22</span></div>
                <h2 className='font-bold text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum earum quae ex qui molestiae sit.</h2>
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

Featured.propTypes = { 
    post: PropTypes.object.isRequired,
}

export default Featured