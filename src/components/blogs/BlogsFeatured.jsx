 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'

const BlogsFeatured = ({post}) => { 
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
    <div className='bg-[#eee6f6] w-full '>
        <div className="container p-3 mx-auto   lg:xl:2xl:mb-10 lg:xl:2xl:max-h-[744px] lg:p-8 xl:p-14 2xl:p-16 w-fill rounded flex lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse lg:gap-5 xl:gap-7 2xl:gap-7  flex-col">
            <img src={post.mainImage.asset.url} className='rounded featured-image object-cover h-64 w-10/12 lg:w-5/12 object-left-top   xl:w-7/12  2xl:h-96' alt="" />
            <div className="flex flex-col items-start gap-2 lg:xl:gap-4 2xl:gap-4  my-7">
                <h2 className='uppercase text-lg mb-2 lg:xl:2xl:mb-5'> Featured Post</h2>
                <h2 className='font-bold text-black text-2xl lg:xl:text-3xl 2xl:text-4xl'>{post.title}</h2>
                <div className='text-left font-bold text-gray-500'>By <span className='text-purple-500'>{post.author.name} </span> | <span> {date}</span></div>
                <p className='text-gray-500'>{text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}</p>
                
            <button className='mt-3'>
                <Link to={`/blogs/${post.slug.current}`}
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