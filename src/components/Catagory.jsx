 
 import { PropTypes } from 'prop-types'

const Catagory = ({category}) => {

  const { title, description } = category

    console.log('omo')
  return (
    <div className='catagory hover:bg-yellow-200 p-5 flex flex-col gap-3 border-2 border-gray-200
            transition-colors duration-300 ease-in-out
    '>
        {/* <img src="" alt="" /> */}
        <h2 className='font-bold'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
    </div>
  )
}

Catagory.propTypes = {
  category: PropTypes.object,
}

export default Catagory