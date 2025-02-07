 
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
        <div className="container mx-auto  flex-col p-3   w-full rounded flex 
            md:flex-row-reverse md:gap-5   md:p-10
            lg:flex-row-reverse lg:gap-5   lg:p-10 lg:items-center
            xl:flex-row-reverse xl:gap-24   xl:p-16 xl:items-center
            2xl:flex-row-reverse  2xl:gap-7   2xl:max-h-[744px] 2xl:p-16 ">
            <img src={post.mainImage.asset.url} className=' featured-image object-cover  
                 w-11/12 md:w-8/12   object-left-top    
                lg:w-[515px]  lg:h-[360px]
                xl:w-[515px] xl:h-[360px]
                2xl:w-[515px]  2xl:h-[360px] ' 
            alt="" />
            <div className="flex flex-col items-start gap-2 lg:xl:gap-4 2xl:gap-4
                lg:w-[624px] lg:gap-5
                xl:w-[624px] 
                2xl:w-[624px]
              
            ">
                <h2 className='uppercase text-lg '> Featured Post</h2>
                <h2 className='font-bold text-black text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl'>{post.title}</h2>
                <div className='text-left font-medium text-sm text-[#6D6E76]'>By <span className='text-[#592EA9]'>{post.author.name} </span> | <span> {date}</span></div>
                <p className='text-[#6D6E76]  '>{text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}</p>
                
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