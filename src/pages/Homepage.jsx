 
 
 import { useFetchPosts } from '../hooks/index'
 import Hero from '../components/Hero' 
import Featured from '../components/Featured'
import AllPostAside from '../components/AllPostAside'
import { Link } from 'react-router-dom' 
import Catagory from '../components/Catagory'
import Author from '../components/Authorcard'
import bgImg from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
import JoinTeam from '../components/JoinTeam'
import ArrowLeft from '../assets/icons/arrowleft.svg'
import ArrowRight from '../assets/icons/arrowright.svg'

import { useFetchCategories, useFetchAuthors} from '../hooks/index'

const Homepage = () => {
 
const { categories } = useFetchCategories() 
    const { posts, loading, error } = useFetchPosts()
    const { authors } = useFetchAuthors() 

     
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1> 
    if (!posts) return <h1>No posts to display</h1>
  return (
    <div>
        <section className="flex flex-col  items-center justify-start  text-left">
          
            <Hero  post={posts[0]} />


            <main className='container mx-auto  p-3 xl:my-14 flex gap-12 lg:flex-row xl:flex-row 2xl:flex-row lg:gap-6 
                flex-col lg:justify-between 
                xl:p-5 2xl:p-5 xl:w-full 2xl:w-full xl:items-start 2xl:items-start xl:mx-auto 2xl:mx-auto xl:mt-10 2xl:mt-10 xl:mb-10 2xl:mb-10
                lg:w-full  *:lg:p-5 lg:items-start lg:mx-auto lg:mt-10 lg:mb-10
                md:p-2 md:gap-3 md:flex-row md:w-full md:mb-5 
                sm:flex-col sm:gap-2 sm:p-1 sm:w-full'
                >
                  <Featured post={posts[1]} />
                  <AllPostAside  posts={posts}/>
             </main>
             
{/* ==============================ABOUT US========================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
             <section className='container about-section mx-auto gap-3 w-full   p-5 my-10 flex  xl:gap-12 2xl:gap-12 bg-purple-50  lg:flex-row xl:flex-row 2xl:flex-row flex-col
                lg:gap-6 md:gap-6
             '> 
                <div className="about p-2 w-full lg:w-6/12 xl:w-6/12 2xl:w-6/12  ">
                    <h3 className="font-bold  text-gray-700 mt-5 mb-7 tracking-widest   text-2xl">About Us</h3>
                    <h1 className=" lg:xl:2xl:text-4xl font-bold lg:text-3xl md:text-2xl text-xl">We are a community of content writers who share their learnings </h1>
                    <p className='my-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='block mt-5 mb-25  '> 
                            <Link
                            // to={`/blogs/${post.slug.current}`}
                            className="py-2 rounded   text-purple-600    hover:bg-transparent   transition-all duration-500 hover:text-black font-bold"
                        >
                            Read More
                        </Link>
                  </button>
                </div>

                <div className="mission w-full  lg:w-6/12 xl:w-6/12  2xl:w-6/12  ">
                    <h3 className="font-bold text-1 mt-5 mb-7 tracking-widest text-gray-700  text-2xl  ">Our mision</h3>
                    <h1 className=" lg:xl:2xl:text-4xl font-bold  lg:text-3xl md:text-2xl text-xl">Creating valuable content for creatives all around the world</h1>
                    <p className='my-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>

             </section>

{/* ==============================CATEGORY ======================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
             <section className="category-section container p-0 w-full mx-auto my-5 "> 
                <h1 className='capitalize mb-5 font-bold text-center lg:xl:2xl:text-4xl md:text-4xl text-3xl'>choose a category</h1>
                <div className=" flex flex-wrap gap-2  lg:xl:2xl:w-full  justify-center 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap items-start lg:xl:2xl:gap-5 md:flex-wrap sm-flex-wrap  md:gap-2 sm:gap-2">
                    {
                        categories.slice(0,4).map((category, index) => (
                            <Catagory key={index} category={category} />
                        ))
                    }
                </div>                
             </section>



{/* ==============================WHY WE STARTED================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
            <section className="container p-2   *:mx-auto lg:my-10 xl:my-10 2xl:my-10 my-5 relative top-0 left-0 bottom-0 lg:min-h-[300px] xl:min-h-[400px] 2xl:min-h-[600px]  right-0 overflow-hidden md:my-5   md:min-h-[250px] min-h-[300px]">
                <img src={bgImg} alt="" className='sm:hidden  md:hidden hidden  lg:absolute 2xl:absolute xl:absolute lg:block xl:2xl:block w-9/12 left-0 top-0 bottom-0 z-10 min-h-96 '/>
                <div className="text-content lg:absolute xl:2xl:absolute z-20 xl:py-8 2xl:py-16 xl:px-10 2xl:px-24 h-5/6 xl:2xl:w-3/6  w-full right-0 bg-gray-100 bottom-0 
                    lg:py-8 lg:px-8 lg:w-7/12 md:static md:w-full md:p-3">
                    <h3 className='uppercase text-2xl text-gray-800 lg:mb-5 xl:mb-5 2xl:mb-7 lg:mt-2 xl:mt-2 2xl:mt-2 md:mb-5 sm:mb-4'>WHY WE satarted  </h3>
                    <h2 className='xl:text-3xl 2xl:text-5xl text-2xl text-black font-bold lg:mb-4 xl:mb-5 2xl:mb-8 lg:xl:2xl:leading-tight lg:text-4xl md:text-3xl md:mb-4 sm:text-2xl sm:mb-4'>It started out as a simple idea and evolved into our passion</h2>
                    <p className='text-gray-500 md:mb-5 sm:mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button className='lg:mt-4 xl:mt-4   2xl:mt-14 md:mt-5 mt-4'>
                        <Link to='/blogs'
                            className="md:lg:xl:2xl:py-4 md:lg:xl:2xl:px-12 px-5 py-2
                                rounded shadow text-black bg-yellow-400 border-yellow-300 hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold" 
                        >
                            Discover our story
                        </Link>
                    </button>
                </div>

            </section>

{/* ==============================LIST OF AUTHORS================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
            <section className="author-section container mx-auto lg:xl:2xl:my-10 flex flex-col items-center justify-center gap-2 
                md:gap-5 md:my-5 sm:gap-2 sm:my-4
             "> 
                <h1 className='capitalize lg:xl:2xl:my-5 my-3 font-bold md:my-3 sm:my-2 text-2xl lg:xl:2xl:text-4xl'>List of Authors</h1>
                <div className="category-flex flex flex-wrap justify-between items-start xl:2xl:gap-10 gap-2 w-full lg:xl:2xl:px-16 px-2  lg:xl:2xl:flex-nowrap
                    lg:gap-5 lg:justify-center md:justify-center sm:justify-center md:gap-3 sm:gap-2 md:flex-wrap sm:flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap" >
                    {  authors.length >0  &&
                       authors.slice(0, 4).map((author, index) => (
                            <Author key={index} author={author} />
                        ))
                    }
                </div>                
             </section>
             <section className='container mx-auto my-10 featured-slide'> 

             </section>

             <section className=" container bg-[#FBF6EA] xl:2xl:p-20 flex flex-col lg:flex-row xl:flex-row  2xl:flex-row lg:xl:2xl:gap-5 justify-center items-center lg:xl:2xl:my-10 
                lg:p-10 lg:gap-3 md:flex-col md:p-2 md:gap-3 sm:flex-col sm:p-2 sm:gap-2 md:my-5 sm:my-5
             ">
                <div className=" w-full xl:2xl:px-14 lg:xl:2xl:w-5/12 lg:px-2 md:w-full md:px-5 sm:w-full px-2">
                    <h3 className='uppercase my-3 lg:xl:2xl:text-4xl text-3xl'>TESTIMONIALS</h3>
                    <h2 className='font-bold lg:xl:2xl:text-3xl text-2xl my-2'>What people say about out blog</h2>
                    <p className=' text-gray-600 my-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero itaque vel autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="   xl:2xl:px-14 lg:xl:2xl:w-8/12  md:border-l-2 lg:border-l-2 xl:border-l-2 2xl:border-l-2 md:border-t-0  border-gray-200  lg:px-5 md:w-full sm:w-full md:px-7 border-t-2 py-3 px-3"> 
                   <p className='lg:xl:md:2xl:text-2xl text-xl font-bold  '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat iste perspiciatis nesciunt! Dolorem corrupti est minus quasi!</p>

                    <div className="user lg:xl:2xl:mt-14 flex mt-4  justify-between items-center xl:2xl:gap-5 lg:mt-8 ">
                        <div className="">
                            <img src="" alt="" />
                            <div className="">
                                <h3 className='md:lg:xl:2xl:3xl text-xl'>Jonathan Vallem</h3>
                                <h6>New york USA</h6>
                            </div>
                        </div>
                        <div className=" flex gap-5">
                            <button className='bg-white  h-14 w-14 rounded-full'>
                                <img src={ArrowLeft} alt="" />
                            </button>
                            <button  className='bg-white  h-14 w-14 rounded-full'>
                                <img src={ArrowRight} alt="" />
                            </button>
                        </div>
                    </div>

                </div>
             </section>

             <div  >
               <JoinTeam />
             </div>
        </section>
        
    </div>
  )
}

export default Homepage