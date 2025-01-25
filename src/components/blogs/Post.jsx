 import image from '../../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'

const Post = () => {
  return (
    <div className='flex gap-5 my-5'>
        <img src={image} alt="" className='h-72'/>
        <div className="flex flex-col py-5 gap-5 items-start justify-center">
            <h3 className='text-purple-600 text-lg font-bold '>STARTUP</h3>
            <h2>Design tips for designers that cover everything you need</h2>
            <p className='text-gray-500'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
    </div>
  )
}

export default Post