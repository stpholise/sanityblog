 
 import { PropTypes } from 'prop-types'
 import { Link } from 'react-router-dom'

const Catagory = ({category}) => {

  const { title, description, _id } = category

    console.log('omo')
  return (
 
      <div className='catagory hover:bg-yellow-200 w-11/12 p-2  lg:xl:2xl:p-4 flex flex-col gap-3 border-2 border-gray-200 lg:xl:2xl:w-1/3
              transition-colors duration-300 ease-in-out
              lg:min-h-64 xl:min-h-64 
              md:w-5/12 md:p-8 md:rounded-xl md:hover:bg-yellow-200 
      '>
         <Link to={`/categories/${_id}`} >  
          {/* <img src="" alt="" /> */}
          <h2 className='font-bold lg:text-3xl xl:2x:text-4xl text-xl mb-2'>{title}</h2>
          <p className='text-gray-600'>{description.split(' ').slice(0, 20).join(' ')}{description.split(' ').length > 20 && '...'}</p>
          </Link>
      </div>
  
     
  )
}

Catagory.propTypes = {
  category: PropTypes.object,
}

export default Catagory