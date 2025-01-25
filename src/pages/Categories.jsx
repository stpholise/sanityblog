 import Post from '../components/blogs/Post'

 import image from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'

const Categories = () => {
    const posts = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  return (
    <div>
        <header className="category-header w-full bg-[#eee6f6] h-[400px] flex items-center justify-center">
            <div className="container mx-auto max-w-[444px] flex flex-col items-center justify-center gap-3 text-center">
                <h1 className="text-4xl"> Business</h1>
                <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .</p>

                <div className="category-flex flex  justify-center items-start gap-5 w-full px-16 flex-wrap">
                    <span>BLOG</span>  <span>BUSINESS</span>
                </div>
            </div>
        </header>

       <section className="container mx-auto justify-start flex my-24 gap-20">
            <div className="w-11/12">
                {
                    posts.map((post, index) => (
                        <Post key={index} />
                    ))
                }
        
            </div>
                <div className="w-5/12 p-2">
                    <div className="">
                        {
                            posts.slice(0,).map(( index) => (
                                <div key={index} className='flex gap-2 my-5 justify-start items-center border-2 border-gray-300 w-64 py-3 px-5 text-left
                                hover:bg-yellow-300 transition-color duration-300 cursor-pointer rounded-md
                                '>
                                    <img src={image} alt="" className=' w-10 h-10 object-cover border-2 rounded-md' />
                                    <h3 className='text-purple-600 w-8/12 text-lg text-left font-bold '>STARTUP</h3>
                                </div>
                            ))
                        }
                    </div>
                    <div className="">
                        All Tags 
                        <div className=" flex flex-wrap gap-2 w-full">
                            {
                                posts.slice(0,).map(( index) => (
                                    <p key={index} className='flex gap-2  justify-start items-center border-2 border-gray-300 w-fit px-6 py-2 text-left rounded-3xl text-sm font-bold 
                                    hover:bg-yellow-300 transition-color duration-300 cursor-pointer 
                                    '>
                                        STARTUP
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>

       </section>
    </div>
  )
}

export default Categories