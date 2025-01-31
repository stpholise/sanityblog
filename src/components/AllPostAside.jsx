 import { Link } from 'react-router-dom'
 import { PropTypes } from 'prop-types'
// import { useFormatDate } from '../hooks/useFormatDate'

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
      

    //   const date = formatDate(post.publishedAt);
    
  return (
    <aside className="md:w-4/12 lg:xl:2xl:w-2/5 w-full">
        <div className="header flex  justify-between items-center mb-7 gap-4 px-2">
            <h2 className="capitalise font-bold text-2xl lg:xl:2xl:text-3xl">All Posts</h2>
            <button>
                <Link to={`/blogs`}
                    className=" text-purple-500 transition-all duration-500 font-bold " 
                >
                   View All
                </Link>
            </button>
        </div>

        <div className="posts-container">
            {posts.slice(0, 4).map((post) => 
              {  
                const date = formatDate(post.publishedAt);
              return (<article key={post.slug.current} className='    xl:2xl:p-10
                    p-2
                 hover:bg-[#FBF6EA] 
                    transition-all duration-300 mb-3
                    lg:p-5 md:p-3
                '>
                    <div className='text-left font-bold text-gray-500  mb-3'>By <span className='text-purple-500 '>{post.author.name} </span> | <span> {date}</span></div>
                    <Link to={`/blogs/${post.slug.current}`}> 
                        <h2 className='font-bold text-black text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl md:text-2xl'>{post.title}</h2>
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