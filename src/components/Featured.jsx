 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom' 
 import ChevronRight from '/chevron-right.svg'

const Featured = ({post}) => {
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
    <div className='featured lg:w-8/12 xl:w-7/12 2xl:w-7/12 md:w-7/12 sm:w-full w-full mx-auto   flex flex-col
      gap-6
      sm:max-w-lg
      md:max-w-3xl   
      lg:max-w-2xl  lg:gap-8 
    '>
        <h2 className='capitalise  lg:text-4xl text-3xl text-center  md:text-left font-bold'> Featured Post</h2>
        <div className="postContainer p-3  flex flex-col justify-start items-start  gap-4 border border-gray-200  
             md:p-5  2xl:p-10  md:h-[630px]
            lg:h-[725px] lg:p-8 lg:gap-6
            
        ">
            <img src={post.mainImage.asset.url} className='sm:h-72 md:max-h-80 lg:h-[352px] xl:h-[352px] m-0 2xl:h-[352px]  w-full  object-cover' alt="" />
            <div className='text-left text-sm font-medium text-gray-500'>By <span className='text-purple-500'>
                    <Link to={`/author/${post.author._id}`}  >{post.author.name} </Link> </span> | <span> {date}</span>
            </div>
            <div className="text-content gap-4 flex flex-col items-start">
                <h2 className='font-bold text-black
                    text-2xl  '>  {post.title.split(' ').slice(0, 18).join(' ')}{post.title.split(' ').length > 18 && '...'}
                </h2>
                <p className='text-[#6D6E76] xl:max-w-2xl lg:max-w-2xl md:max-w-2xl sm:max-w-lg max-w-96'>
                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
                </p>
                
            </div>
                <button className='md:mt-3 mt-2'>
                    <Link to='/blogs'
                        className="py-2 px-7 md:py-3 md:px-8  lg:py-4 lg:px-9 xl:py-4 xl:px-9 2xl:py-4 2xl:px-9
                        rounded shadow text-black bg-[#FFD050] border-[#FFD050] hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold
                        flex items-center justify-center gap-2  " 
                    >
                        Read More
                        <img src={ChevronRight} alt="" />
                    </Link>
                </button>
        </div>
    </div>
  )
}

Featured.propTypes = { 
    post: PropTypes.object.isRequired,
}

export default Featured