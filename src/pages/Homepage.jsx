 
 
 import { useFetchPosts } from '../hooks/index'
 import Hero from '../components/Hero' 
import Featured from '../components/Featured'
import AllPostAside from '../components/AllPostAside'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Catagory from '../components/Catagory'
import Author from '../components/Authorcard'
import bgImg from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
import JoinTeam from '../components/JoinTeam'


const Homepage = () => {

    const [ categories, setCategories ] = useState([
        {
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam.'
        },
        {
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam.'
        },
        {
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam.'
        },
        {
            title: 'Business',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aperiam.'
        },
    
])

  console.log(categories)
   
    const { posts, loading, error } = useFetchPosts()

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1> 
    if (!posts) return <h1>No posts to display</h1>
  return (
    <div>
        <section className="flex flex-col  items-center justify-start  text-left">
          
            <Hero  post={posts[0]}/>

             <main className='container mx-auto mb-10 my-14 main-flex'>
                  <Featured post={posts[1]} />
                  <AllPostAside  posts={posts}/>
             </main>
             
             <section className='container about-section mx-auto mb-10 p-10 my-14 main-flex bg-purple-50'>

                <div className="about p-2 ">
                    <h3 className="font-bold text-1 text-gray-700 mt-5 mb-7 tracking-widest   text-2xl">About Us</h3>
                    <h1 className=" text-4xl font-bold">We are a community of content writers who share their learnings </h1>
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

                <div className="mission">
                    <h3 className="font-bold text-1 mt-5 mb-7 tracking-widest text-gray-700  text-2xl">Our mision</h3>
                    <h1 className=" text-4xl font-bold">Creating valuable content for creatives all around the world</h1>
                    <p className='my-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    
                </div>

             </section>

             <section className="category-section container p-0 w-full mx-auto my-10 mb-10"> 
                <h1 className='capitalize mb-5 font-bold text-center'>choose a category</h1>
                <div className="category-flex flex  justify-between items-start gap-5">
                    {
                        categories.map((category, index) => (
                            <Catagory key={index} category={category} />
                        ))
                    }
                </div>                
             </section>

            <section className="container reson-section mx-auto my-10 relative top-0 left-0 bottom-0 min-h-[700px] right-0 overflow-hidden mt-10">
                <img src={bgImg} alt="" className='absolute block w-9/12 left-0 top-0 bottom-0 z-10 min-h-96 '/>
                <div className="text-content absolute z-20 py-16 px-24 h-5/6 w-3/6 right-0 bg-gray-100 bottom-0 ">
                    <h3 className='uppercase text-2xl text-gray-800 mb-7 mt-2'>WHY WE satarted  </h3>
                    <h2 className='text-5xl text-black font-bold mb-8 leading-tight'>It started out as a simple idea and evolved into our passion</h2>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                    <button className='mt-14'>
                        <Link to='/blogs'
                            className="py-4 px-12 
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
            <section className="author-section container mx-auto my-10 flex flex-col items-center justify-center gap-2 "> 
                <h1 className='capitalize my-5 font-bold '>List of Authors</h1>
                <div className="category-flex flex  justify-between items-start gap-10 w-full px-16 ">
                    {
                        categories.map((category, index) => (
                            <Author key={index} category={category} />
                        ))
                    }
                </div>                
             </section>
             <section className='container mx-auto my-10 featured-slide'> 

             </section>

             <section className="testimoinal-section container bg-[#FBF6EA] p-20 flex gap-5 justify-center items-center my-10">
                <div className="lft px-14 w-5/12">
                    <h3 className='uppercase my-3'>TESTIMONIALS</h3>
                    <h2 className='font-bold text-3xl my-2'>What people say about out blog</h2>
                    <p className=' text-gray-600 my-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero itaque vel autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="rht px-14 w-8/12  border-l-2 border-gray-200 ">
                   <p className='text-2xl  font-bold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat iste perspiciatis nesciunt! Dolorem corrupti est minus quasi!</p>

                    <div className="user mt-14 flex  justify-between items-center gap-5">
                        <div className="">
                            <img src="" alt="" />
                            <div className="">
                                <h3>Jonathan Vallem</h3>
                                <h6>New york USA</h6>
                            </div>
                        </div>
                        <div className=" flex gap-5">
                            <button className='bg-white  h-14 w-14 rounded-full'>
                                <img src="" alt="" />
                            </button>
                            <button  className='bg-white  h-14 w-14 rounded-full'>
                                <img src="" alt="" />
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