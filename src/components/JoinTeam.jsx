 import { Link } from 'react-router-dom'

const JoinTeam = () => {
  return (
    <div>  <div className="action container mx-auto h-64 md:max-w-96 flex flex-col max-w-md items-center justify-center gap-2 lg:w-[444px] text-center">
    <h2 className='font-bold text-2xl lg:text-3xl '>Join our team to be a part of our story</h2>
    <p className='text-sm text-gray-500 leading-snug mb-5 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <button className=''>
            <Link to='/blogs'
                className="py-2 px-7 md:py-4 md:px-12 
                    rounded shadow text-black bg-[#FFD050] border-[#FFD050] hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold" 
            >
                Join Now
            </Link>
        </button>
 </div></div>
  )
}

export default JoinTeam