
import Facebook from '/fb-icon.svg'
import Twitter from '/il_twitter.svg'
import Instagram from '/Instagram.svg'
import LinkedIn from '/LinkedIn.svg'

 import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const Authorcard = ({author}) => {
  const { name, _id,  image,  } = author
  return (
    <div className='author bg-gray-200 xl:2xl:p-5 p-2 min-h-40 h-80  flex flex-col items-center justify-center gap-3 xl:2xl:w-1/5 w-full
           hover:bg-[#FBF6EA]   md:w-full md:p-5  md:hover:bg-[#FBF6EA]  sm:p-5 
            transition-all duration-300 ease-in-out
            lg:w-full lg:p-10 lg:gap-3
            xl:w-full 
    '> 
      <Link to={`/author/${_id}`} className=' flex flex-col items-center justify-center gap-2'>
    
        <img src={image.asset.url}alt="" className='rounded-full w-32  h-32 object-cover ' /> 
        {
          name && 
            <h2 className='font-bold text-2xl text-gray-700 lg:text-2xl md:text-xl'>{name}</h2>
        }
      </Link>
        <p className="text-gray-600 capitalize text-sm md:text-xs"> content writter @Company</p>
        <div className="icon-pack flex grid-cols-4 justify-center items-center gap-3 ">
          <div className="bg-[#232536] p-1 w-4 h-4 rounded-full">  
            <img src={Facebook} className='w-2.5' alt="" />
          </div>
          <div className="bg-transparent  rounded-full"> 
            <img src={Twitter}  className='w-4' alt="" />
          </div>
          <div className=""> 
            <img src={Instagram}  className='w-4' alt="" />
          </div>
          <div className=""> 
            <img src={LinkedIn}  className='w-4' alt="" />
          </div>
        </div>
    </div>
  )
}

Authorcard.propTypes = {
  author: PropTypes.object
}

export default Authorcard