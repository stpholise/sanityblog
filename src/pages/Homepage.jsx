 
 
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
import EmblaCarouselEx from '../components/EmblaCarouselEx'

import ChevronRight from '/chevron-right.svg'
import { useFetchCategories, useFetchAuthors} from '../hooks/index'
import Icon from '../components/Icon'

 
import { useEffect, useState } from 'react'



const Homepage = () => {
 
    const [currentIndex, setCurrentIndex] = useState(0)

const { categories } = useFetchCategories() 
    const { posts, loading, error } = useFetchPosts()
    const { authors } = useFetchAuthors() 



    const tesitmonials = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Jonathan Vallem',
            location: 'New york USA'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            name: 'Jenny Wilson',
            location: 'Newsland'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat iste perspiciatis nesciunt! Dolorem corrupti est minus quasi!',
            name: 'Floyd Miles',
            location: 'Canada'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat iste perspiciatis nesciunt! Dolorem corrupti est minus quasi!',
            name: '  Dianne Russell',
            location: 'Nigeria'
        }
    ]
 
    useEffect(() => {
        const lastIndex = tesitmonials.length - 1
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex)
        }
        if (currentIndex > tesitmonials.length -1) {
            setCurrentIndex(0)
        }
    }, [currentIndex])

   
    if (loading) return  <Icon />
    
    if (error) return <h1>{error}</h1> 
  return (
    <div  className="flex flex-col  items-center justify-start bg-white text-left" >
          
            <Hero  post={posts[0]} />
        <section className="flex flex-col container mx-auto   items-center justify-start bg-white 
            gap-14
            md:gap-20 
            lg:gap-20  
           py-8
           md:py-20 text-left
            px-4
            sm:px-4
            md:px-6
            lg:px-8
            xl:px-8
            2xl:px-8
        ">


            <main className='container mx-auto  flex gap-10   
                flex-col lg:justify-center 
                md:gap-6 md:flex-row md:w-full md:h-[812px]   md:container-none
                lg:w-full  lg:items-start lg:mx-auto  lg:h-[820px] lg:gap-8 lg:flex-row
                xl:w-full xl:items-start  xl:h-[820px] xl:flex-row  xl:justify-center  xl:gap-8
                2xl:w-full 2xl:items-start 2xl:h-[820px]   2xl:flex-row 2xl:gap-8 
                
               '
                >
                  <Featured post={posts[1]} />
                  <AllPostAside  posts={posts}/>
             </main>
             
{/* ==============================ABOUT US========================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
            <div className="relative w-full   ">
                <div className="flex flex-end container mx-auto md:px-0 ">
                    <div className="h-6 bg-transparent w-3/12"></div>
                <div className="bar h-6 w-8/12 bg-[#FFD050]"></div>
                <div className="h-6 w-3/12 bg-[#592EA9] "></div>
                </div>
             <section className='w-full about-section mx-auto gap-4 px-4 items-center justify-centre     flex   flex-col bg-[#F4F0F8]
                
                md:flex-row md:py-16
                lg:flex-row lg:py-16   lg:px-16  lg:gap-12 lg:h-[500px]  
                xl:flex-row  xl:gap-12 xl:h-[500px] xl:justify-center xl:items-center 
                2xl:flex-row  2xl:gap-12  2xl:h-[500px] 2xl:justify-center
             '> 
                <div className="about p-2 w-full lg:w-[515px] xl:w-[515px]    md:5/12
                ">
                    <h3 className="font-bold  text-gray-700 mt-5 mb-4 lg:mb-7 tracking-widest   text-2xl">About Us</h3>
                    <h1 className=" lg:xl:2xl:text-4xl font-bold lg:text-4xl md:text-2xl text-xl">We are a community of content writers who share their learnings </h1>
                    <p className='my-3 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='block mt-5 mb-25  '> 
                            <Link
                             to={`/about`}
                            className="py-2 rounded   text-[#592EA9]    hover:bg-transparent   transition-all duration-500 hover:text-black font-bold"
                        >
                            Read More
                        </Link>
                  </button>
                </div>

                <div className="mission w-full  lg:w-[516px] xl:w-[516px] p-2  ">
                    <h3 className="font-bold text-1 mt-5 mb-4 lg:mb-7 tracking-widest text-gray-700  text-2xl  ">Our mision</h3>
                    <h1 className=" lg:xl:2xl:text-4xl font-bold  lg:text-4xl md:text-2xl text-xl">Creating valuable content for creatives all around the world</h1>
                    <p className='my-3 text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>

             </section>
             </div>
{/* ==============================CATEGORY ======================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
             <section className="category-section   p-0 w-full mx-auto flex 
                flex-col items-center justify-center gap-6
                lg:gap-12 xl:gap-12 2xl:gap-12
               "> 
                <h1 className='capitalize font-bold text-center   text-3xl'>choose a category</h1>
                <div className="  grid gap-4   
                justify-center    items-strech  
                md:gap-6 md:px-2 md:text-4xl md:grid md:grid-cols-2
                lg:grid lg:grid-cols-4 lg:gap-8  lg:text-4xl
                xl:text-4xl xl:w-full xl:gap-8  xl:grid xl:grid-cols-4
              
                ">
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
            <section className=" px-2  mx-auto   relative top-0 left-0 bottom-0 flex flex-col  justify-start 
            md:h-[600px]  lg:h-[700px] xl:h-[700px]  2xl:h-[700px]   right-0 overflow-hidden md:my-5 w-full   
            ">

                <img src={bgImg} alt="" className=' h-full w-full md:w-4/5  object-cover md:m-0  '/>
                <div className=" z-20  py-4   w-full  right-0  bottom-0 bg-white

                md:absolute md:h-calc-100-minus-40
                lg:h-calc-100-minus-80 lg:absolute  lg:p-16
                xl:h-calc-100-minus-100 xl:absolute xl:w-6/12  xl:p-20  
                    md:w-8/12 lg:w-7/12    md:p-10">
                    <h3 className='uppercase text-xl md:text-2xl text-gray-800 lg:mb-5 xl:mb-5 2xl:mb-7 lg:mt-2 xl:mt-2 2xl:mt-2 md:mb-5 sm:mb-4'>WHY WE satarted  </h3>
                    <h2 className='xl:text-5xl 2xl:text-5xl text-black font-bold lg:mb-4 xl:mb-5 2xl:mb-8 2xl:leading-tight text-3xl mb-3  md:text-3xl md:mb-4 lg:text-4xl sm:text-2xl sm:mb-4'>It started out as a simple idea and evolved into our passion</h2>
                    <p className='text-gray-500 md:mb-5 sm:mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button className='block xl:mt-12 lg:mt-10   2xl:mt-14 md:mt-9 mt-4'>
                        <Link to='/blogs'
                            className=" py-2 px-7 md:py-3 md:px-8 xl:py-4 2xl:py-4  xl:px-10 2xl:px-12 lg:px-10 lg:py-4
                                rounded shadow text-black bg-[#FFD050] border-[#FFD050] hover:bg-transparent border-2  transition-all duration-500 hover:text-black font-bold
                                 flex items-center justify-center gap-2 " 
                        >
                            Discover our story
                    <img src={ChevronRight} alt="" />

                        </Link>
                    </button>
                </div>

            </section>




{/* ==============================LIST OF AUTHORS================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
            <section className=" w-full mx-auto  flex flex-col items-center justify-center gap-4 
                
                md:gap-5  
                lg:gap-8
                xl:gap-8
                2xl:gap-8
             "> 
                <h1 className='capitalize lg:xl:2xl:my-5 my-3 font-bold md:my-3 sm:my-2 text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl'>List of Authors</h1>
                <div className="category-flex flex flex-wrap justify-between items-start gap-6 w-full  px-2  
                    sm:grid sm:grid-cols-2 sm:justify-center
                    md:grid md:grid-cols-2 md:justify-center   
                    lg:grid lg:grid-cols-4 lg:gap-10 lg:justify-center
                    xl:grid xl:grid-cols-4 xl:gap-10 xl:justify-center 
                    " >
                    {  authors.length >0  &&
                       authors.slice(0, 4).map((author, index) => (
                            <Author key={index} author={author} />
                        ))
                    }
                </div>                
             </section>

{/* ==============================LIST OF SPONSORS================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
             <section className='container mx-auto my-10 featured-slide flex  text-[#6D6E76] px-2
                flex-col justify-center items-center gap-2
                lg:md:flex-row lg:justify-evenly lg:gap-x-20
             '> 
                    <div className="flex justify-center lg:w-32 items-center gap-2 lg:flex-col lg:items-start lg:text-left lg:gap-0">
                        <p className='text-sm font-normal'>we are</p>
                        <h3 className='font-bold text-lg text-[#6D6E76]'>Featured in</h3>
                    </div>
                    <div className=" w-full">
                        <EmblaCarouselEx />
                    </div>
             </section>

{/* ==============================TESTIMONIALS================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
             <section className=" container bg-[#FBF6EA] flex flex-col  
             md:flex-row justify-center items-center p-3 md:gap-4
             lg:flex-row lg:p-14 lg:gap-6
             xl:flex-row  xl:p-14  xl:gap-6 
             2xl:flex-row 2xl:gap-6 2xl:p-20 
             ">
                <div className=" w-full xl:p-10 2xl:px-14 md:w-4/12 lg:w-5/12 xl:w-5/12 2xl:w-5/12 lg:p-10   md:px-5 px-2">
                    <h3 className='uppercase my-3  text-base'>TESTIMONIALS</h3>
                    <h2 className='font-bold text-2xl md:text-2xl lg:text-4xl my-2'>What people say about out blog</h2>
                    <p className=' text-gray-600 my-2 md:text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero itaque vel autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className=" w-full h-full  py-2 my-3 md:my-0 border-gray-200 
                flex flex-col gap-3 px-8 
                md:px-4 md:border-l-2 md:border-t-0 md:w-7/12
                lg:w-8/12 lg:px-16 lg:border-l-2 lg:flex  lg:flex-col lg:gap-10 lg:py-0
                xl:px-20 xl:w-8/12  xl:border-l-2  "> 
                <div className="border-t-2 border-gray-200 "></div>
                   <p className='lg:text-2xl md:text-xl 2xl:text-2xl text-base font-bold flex flex-col gap-6 min-h-24 md:min-h-36'> {tesitmonials[currentIndex]?.text}</p>

                    <div className="user flex flex-row justify-between items-center xl:2xl:gap-5 ">
                        <div className=" flex flex-row gap-5">
                            <img src={bgImg} alt="" className='rounded-full h-12 w-12 ' />
                            <div className="">
                                <h3 className='md:lg:xl:2xl:3xl text-base font-medium'>{tesitmonials[currentIndex]?.name}</h3>
                                <h6>{tesitmonials[currentIndex]?.location}</h6>
                            </div>
                        </div>
                        <div className=" flex gap-5">
                            <button className='bg-white  h-14 w-14 rounded-full'>
                                <img src={ArrowLeft} alt="" onClick={() => setCurrentIndex(currentIndex - 1)}/>
                            </button>
                            <button  className='bg-white  h-14 w-14 rounded-full' onClick={() => setCurrentIndex(currentIndex + 1)}>
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