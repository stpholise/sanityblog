 
 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
 import '../styles/hero.css'

const Hero = ({post}) => {

    if (!post) return (
        <div>
            <p>Loading...</p>
        </div>
    )

    // console.log(post.author)
  return (
    <div className='hero mb-10  '>  
        <img className='hero-bg' src={post.mainImage.asset.url} alt={post.mainImage.alt} />
        <div className="text-content text-left px-14 py-20">
 

            <p className='text-left'> POSTED ON <h5 className='font-bold inline'>STARTUP</h5></p>

            <h1 className='text-5xl font-bold text-left'>{post.title}</h1>
           

            <div className='text-left'>By <h5 className='font-bold inline capitalize'> james west</h5> |
            
                <h5 className='inline font-bold '> May 23, 2022</h5>
            </div>
            
            <p className='text-left max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut consequatur, quidem enim sapiente dolore numquam ullam adipisci officiis eveniet 
            </p>

            <p>{}</p>
           
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
  )
}

Hero.propTypes = {
    post: PropTypes.object
}

export default Hero