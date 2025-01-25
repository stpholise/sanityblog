 import BgImg from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'

const Authorcard = () => {
  return (
    <div className='author bg-gray-200 p-5 min-h-40 h-80 flex flex-col items-center justify-center gap-2 w-1/5
           hover:bg-[#FBF6EA]
            transition-all duration-300 ease-in-out
    '> 
        <img src={BgImg}alt="" className='rounded-full w-28  h-28 object-cover ' /> 
        <h2 className='font-bold text-3xl text-gray-700 '>James West</h2>
        <p className="text-gray-600 capitalize"> content writter @Company</p>
        <div className="icon-pack">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
        </div>
    </div>
  )
}

export default Authorcard