 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'

const Post = ({post}) => {

  
  const text = post.body.map(block => block.children && Array.isArray(block.children) ?  block.children.map(child => child.text || '').join(''): '').join('\n'); 

  return (
    <div className='flex lg:flex-row border-2 border-gray-200 rounded-md p-2 lg:border-0 xl:border-0 justify-start 2xl:border-0 md:flex-row xl:flex-row 2xl:flex-row lg:xl:2xl:gap-5 lg:xl:2xl:my-5 my-3 gap-2 flex-col max-w-[1100px] '>
        <div className='md:w-60 sm:w-full w-full lg:w-96 xl:w-[440px] 2xl:w-[444px]  overflow-hidden '>
          <img src={post.mainImage.asset.url} alt="" className='lg:h-56 lg:w-80 xl:w-96 2xl:w-96 xl:h-72 2xl:h-72 lg:ml-0 xl:ml-0 2xl:ml-0 h-48 max-w-96  object-left-cener  w-full object-cover'/>
        </div>
        <div className="flex flex-col lg:xl:2xl:py-5 py-2 lg:xl:2xl:gap-5 gap-2 items-start justify-center lg:w-9/12 xl:w-9/12 2xl:w-9/12">
          {
            post.category &&
            <Link to={`/categories/${post.category[0]._id}`} >
              <h3 className='text-purple-600 text-lg font-bold uppercase '>{post.category[0].title}</h3>
            </Link>
          }
           <Link to={`/blogs/${post.slug.current}`} >
            <h2 className='lg:xl:2xl:text-4xl text-xl capitalize'>{post.title}</h2>
            </Link>
            <p className='text-gray-500 '>                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
            </p>
            {/* <button className='mt-2 lg:xl:2xl:mt-4 sm:md:mt-3'>
                <Link to={`/blogs/${post.slug.current}`}
                    className="py-2 px-6 
                        rounded shadow text-black bg-yellow-400 border-yellow-300 hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold" 
                >
                    Read More
                </Link>
            </button> */}
        </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post