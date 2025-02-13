 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'



const AllPostAside = ({posts}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }; 
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      };
      
  

    
  return (
    <aside className="md:w-5/12 lg:xl:2xl:w-2/5 w-full max-w-lg h-full pb-9">
        <div className="header flex  justify-between items-center mb-6 md:mb-8 gap-4 px-2">
            <h2 className="capitalise font-bold text-2xl lg:xl:2xl:text-3xl">All Posts</h2>
            <button>
                <Link to={`/blogs`}
                    className=" text-purple-500 transition-all duration-500  " 
                >
                   View All
                </Link>
            </button>
        </div>

        <div className="posts-container  sm:justify-center grid grid-rows-4 
        h-[480px]  md:h-[626px]
             lg:h-[725px] 
            xl:h-[725px] 
            2xl:h-[725px] 
         ">
            {posts.slice(0, 4).map((post) => 
              {  
                const date = formatDate(post.publishedAt);
              return (<article key={post.slug.current} className='    xl:p-10
                    p-2 py-4
                 hover:bg-[#FBF6EA] 
                    transition-all duration-300 
                    lg:p-5 md:p-3
                    flex flex-col items-start justify-center
                    w-full  '
                 
                    >
                    <div className='text-left font-medium font-[inter] text-gray-500 text-sm  mb-3'>By <span className='text-[#592EA9] '>
                    <Link to={`/author/${post.author._id}`}  > {post.author.name}</Link> </span> | <span> {date}</span></div>
                    <Link to={`/blogs/${post.slug.current}`}> 
                        <h2 className='font-bold text-black text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl md:text-2xl'>{post.title}</h2>
                    </Link>
                </article>)
            })}
        </div>
    </aside>
  )
}

AllPostAside.propTypes = {
    posts: PropTypes.array
}

export default AllPostAside