 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'

const Post = ({post}) => {

  
  const text = post.body.map(block => block.children && Array.isArray(block.children) ?  block.children.map(child => child.text || '').join(''): '').join('\n'); 

  return (
    <div className='flex  flex-col lg:flex-row border border-gray-200 gap-4  p-4 md:p-0 lg:border-0 justify-start  md:flex-row xl:flex-row  lg:gap-8  my-3  max-w-[1146px] '>
        <div className='md:w-60 sm:w-full w-full lg:w-[490px]  overflow-hidden '>
          <img src={post.mainImage.asset.url} alt="" className='lg:h-56   xl:w-96 2xl:w-96 xl:h-72 2xl:h-72 lg:ml-0 xl:ml-0 2xl:ml-0 h-48 lg:w-[490px]  object-left-cener  w-full object-cover'/>
        </div>
        <div className="flex flex-col lg:xl:2xl:py-5 py-2 max-w-96 lg:max-w-full lg:gap-5 gap-2 items-start justify-center lg:w-9/12 xl:w-9/12 2xl:w-9/12">
          {
            post.category &&
            <Link to={`/categories/${post.category[0]._id}`} >
              <h3 className='text-purple-600 text-base font-semibold uppercase '>{post.category[0].title}</h3>
            </Link>
          }
           <Link to={`/blogs/${post.slug.current}`} >
            <h2 className='lg:text-4xl font-bold text-xl capitalize'>{post.title}</h2>
            </Link>
            <p className='text-[#6D6E76]    '> {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
            </p>
          
        </div>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post