 
 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
 import '../styles/hero.css'

const Hero = ({post}) => {

    if (!post) return (
        <div>
            <p>Loading...</p>
        </div>
    )
    if (!post || !Array.isArray(post.body)) {
        console.log("No body content available");
        return null; // or handle this case as needed
    } 
    const text = post.body.map(block => block.children && Array.isArray(block.children) ?  block.children.map(child => child.text || '').join(''): '').join('\n'); 
    
    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }; 
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      };
      

      const date = formatDate(post.publishedAt);
    

  return (
    <div className='hero mb-10  '>  
        <img className='hero-bg' src={post.mainImage.asset.url} alt={post.mainImage.alt} />
        <div className="text-content  text-white text-left max-w-screen-xl w-full px-2  xl:2xl:px-14 xl:2xl:py-20 py-5
            lg:px-10 lg:py-10 md:px-10 md:py-10
            absolute top-0 left-0 right-0 bottom-0  z-20
            flex flex-col items-start justify-center gap-5 h-full  bg-black bg-opacity-5
        ">
 
{
                post.category &&
            <div className='text-left'> POSTED ON <h5 className='font-bold inline uppercase'>{post.category[0].title}</h5></div>
}

            <h1 className='xl:2xl:text-5xl lg:text-3xl text-2xl font-bold text-left'>{post.title}</h1>
           

            <div className='text-left'>By <h5 className='font-bold inline capitalize'>{post.author.name} </h5> |
            
                <h5 className='inline font-bold '> {date}</h5>
            </div>
            
            <p className='text-left max-w-2xl'>
                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
            </p>

            <p>{}</p>
           
            <button className='mt-2 lg:xl:2xl:mt-4 sm:md:mt-3'>
                <Link to={`/blogs/${post.slug.current}`}
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