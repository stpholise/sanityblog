 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'
 import EconomyIcon from '/economy.svg'

const Catagory = ({category}) => {

  const { title, description, _id } = category
 
  return (
 <>
    <Link to={`/categories/${_id}`} className='' >  
      <div className='catagory group hover:bg-[#FFD050] w-full  flex flex-col justify-start items-start gap-2 border-2 border-gray-200 
              transition-colors duration-300 ease-in-out
                md:p-8 md:rounded md:hover:bg-yellow-200 
                lg:max-w-[300px] lg:h-[218px] lg:p-8  
                xl:max-w-[300px] xl:h-[211px]   
      '>
        <div className="rounded-md group-hover:bg-white bg-yellow-50 w-12 h-12 flex items-center justify-center">
          <img src={EconomyIcon} alt=""className=' w-6 m-0' /> 
        </div>
          <h2 className='font-bold lg:text-2xl md:text-2xl xl:2xl:text-3xl text-xl   capitalize'>
            {title}
            </h2>
          <p className='text-gray-600 text-sm'>{description.split(' ').slice(0, 9).join(' ')}{description.split(' ').length > 9 && '...'}</p>
      </div>
    </Link>
    </>
     
  )
}

Catagory.propTypes = {
  category: PropTypes.object,
}

export default Catagory