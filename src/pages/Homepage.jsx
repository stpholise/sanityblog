 
 import { Link } from 'react-router-dom'
 


const Homepage = () => {
   
  return (
    <div>
        <section className="flex flex-col items-center justify-center py-5 text-center h-screen radia__background">
            <h1 className="text-4xl font-bold">
                {"Your story, reimagined "}
            </h1>
            <p className="mt-3 ">
                write about your expreriences, thoughts and ideas and share with te world 
            </p>
           
            <header>
                
            </header>
            <button className='mt-3'>
                <Link to='/blogs'
                    className="py-2 px-6 
                        rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold" 
                >
                    Read my blog posts
                </Link>
            </button>
        </section>
    </div>
  )
}

export default Homepage