 
 import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const Authorcard = ({author}) => {
  const { name, _id,  image,  } = author
  return (
    <div className='author bg-gray-200 xl:2xl:p-5 p-2 min-h-40 h-80  flex flex-col items-center justify-center gap-2 xl:2xl:w-1/5 w-full
           hover:bg-[#FBF6EA] lg:w-2/5 lg:p-3  md:w-5/12 md:p-5 md:rounded-xl md:hover:bg-[#FBF6EA] sm:w-1/2 sm:p-5 sm:rounded-xl  
            transition-all duration-300 ease-in-out
    '> 
    <Link to={`/author/${_id}`} className=' flex flex-col items-center justify-center gap-2'>
    
        <img src={image.asset.url}alt="" className='rounded-full w-28  h-28 object-cover ' /> 
        {
      name && 
        <h2 className='font-bold text-3xl text-gray-700 lg:text-2xl'>{name}</h2>
    }
        <p className="text-gray-600 capitalize"> content writter @Company</p>
        <div className="icon-pack">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
        </div>
      </Link>
    </div>
  )
}

Authorcard.propTypes = {
  author: PropTypes.object
}

export default Authorcard