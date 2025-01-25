 import { Link } from 'react-router-dom'

const JoinTeam = () => {
  return (
    <div>  <div className="action container mx-auto my-10 flex flex-col items-center justify-center gap-2 w-[444px] text-center">
    <h2 className='font-bold'>Join our team to be a part of our story</h2>
    <p className='text-sm text-gray-500 leading-snug mb-5 p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <button className=''>
            <Link to='/blogs'
                className="py-4 px-12 
                    rounded shadow text-black bg-yellow-400 border-yellow-300 hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold" 
            >
                Join Now
            </Link>
        </button>
 </div></div>
  )
}

export default JoinTeam