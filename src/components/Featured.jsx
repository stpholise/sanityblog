 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom' 

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
    <div className='featured lg:w-8/12 xl:w-8/12 2xl:w-8/12 md:w-8/12 sm:w-full w-full mx-auto'>
        <h2 className='capitalise lg:xl:2xl:mb-10 lg:xl:2xl:text-4xl text-3xl mb-5'> Featured Post</h2>
        <div className="postContainer p-2 rounded flex flex-col gap-4 border-2 border-[#ccc]  
            lg:p-5 md:p-5 xl:p-10 2xl:p-10 
        ">
            <img src={post.mainImage.asset.url} className='rounded featured-image max-h-[400px] w-full' alt="" />
            <div className="text-content my-7 flex flex-col gap-3 items-start">
                <div className='text-left font-bold text-gray-500'>By <span className='text-purple-500'>{post.author.name} </span> | <span> {date}</span></div>
                <h2 className='font-bold text-black
                    text-2xl 2xl:text-4xl xl:text-4xl
                 lg:text-3xl md:text-2xl'> {post.title}</h2>
                <p className='text-gray-500'>
                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
                </p>
                
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