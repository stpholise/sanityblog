import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {
    console.log(post)

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }; 
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      };
      
      const text = post.body.map(block => block.children && Array.isArray(block.children) ?  block.children.map(child => child.text || '').join(''): '').join('\n'); 

      const date = formatDate(post.publishedAt);
  return ( 
    <>
        <div key={post._id} className="post__card flex flex-col p-4 border border-gray-200 md:border-0 gap-4 justify-start items-start lg:gap-8 lg:w-80 xl:w-96">
                            <img src={post.mainImage.asset.url} alt="" className='w-full h-80 object-cover' />
                            <div className=" flex flex-col gap-2 lg:gap-4">
                                <div className='text-left font-medium font-[inter] text-gray-500 text-sm  '>By <span className='text-[#592EA9] '>
                                    <Link to={`/author/${post.author._id}`}  > {post.author.name}</Link> </span> | <span> {date}</span>
                                </div>
                                
                                <h1 className='text-2xl font-bold'>{post.title}</h1>
                                
                                <p className='text-[#6D6E76] xl:max-w-2xl lg:max-w-2xl md:max-w-2xl sm:max-w-lg max-w-96'>
                                    {text.split(' ').slice(0, 20).join(' ')}{text.split(' ').length > 20 && '...'}
                                </p>
                            </div>
        </div>
    </>
  )
}

PostCard.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostCard