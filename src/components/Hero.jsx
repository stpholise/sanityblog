 
 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
 import '../styles/hero.css'
 import ChevronRight from '/chevron-right.svg' 
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
    <div className='hero mb-10  md:relative overflow-hidden sm:h-[430px] md:h-[780px]  '>  
        <img className='hero-bg' src={post.mainImage.asset.url} alt={post.mainImage.alt} />
        <div className="overlay w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.6)] z-10"></div>
        <div className="text-content  text-white text-left w-full px-6 pt-10 pb-8
         bg-transparent  
            flex flex-col items-start justify-start gap-4 
            absolute top-0 left-0 right-0 bottom-0  z-20 
            sm:px-8 sm:py-16 sm:w-full 
            md:px-10 md:py-16   md:max-w-screen-sm md:gap-6
            lg:px-10 lg:py-16 lg:h-5/6 lg:max-w-screen-xl
            xl:py-20 xl:px-14 xl:max-w-screen-xl
            2xl:px-14 2xl:py-20 2xl:max-w-screen-xl
        ">
 
{
                post.category &&
            <div className='text-left font-medium text-base'> POSTED ON <h5 className='font-bold inline uppercase'>{post.category[0].title}</h5></div>
}

            <h1 className=' md:text-4xl lg:text-5xl text-2xl sm:text-3xl font-bold text-left max-w-4xl  '> {post.title}   </h1>
           

            <div className='text-left'>By <h5 className='font-bold inline capitalize text-[#FFD050]'>{post.author.name} </h5> |
            
                <h5 className='inline font-medium '> {date}</h5>
            </div>
            
            <p className='text-left max-w-xl'>
                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
            </p>

            <p>{}</p>
           
            <button className=' sm:mt-2 lg:mt-4 md:mt-3'>
                <Link to={`/blogs/${post.slug.current}`}
                    className="py-2 px-7 md:py-3 md:px-8 lg:py-4 lg:px-9  xl:py-4 xl:px-9   2xl:py-4 2xl:px-9 
                        rounded shadow text-black bg-[#FFD050] border-[#FFD050] hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold
                        flex items-center justify-center gap-2  " 
                >
                   <p> Read More</p>
                    <img src={ChevronRight} alt="" />
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