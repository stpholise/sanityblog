 import Post from '../components/blogs/Post'
 import { useParams, Link } from 'react-router-dom'
 import { useFetchSingleCategory, useFetchPostsByCategory, useFetchCategories } from '../hooks/index'
 
 import image from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
 import Icon from '../components/Icon'

const Categories = () => { 
    const { id } = useParams()

    const { category, loading: isLoading, error:catError } = useFetchSingleCategory(id)
    const { posts, loading, error } = useFetchPostsByCategory(id)

    const { categories } = useFetchCategories()

    
  if (loading) return  <Icon />
    console.log(id)
 if(isLoading) return <Icon />
    catError && <h1>{catError}</h1> 
    console.log(posts)

  return (
    <div>
        <header className="category-header w-full bg-[#eee6f6] xl:h-[400px] h-fit flex  items-center justify-center">
            <div className="container mx-auto max-w-[704px] p-2 w-full flex flex-col items-left md:items-center justify-center gap-3 text-center">
                <h1 className="xl:text-4xl 2xl:text-4xl sm:text-3xl text-2xl uppercase"> {category.title}</h1>
                <p className="text-gray-500">{category.description}</p>

                <div className="category-flex flex  justify-center items-start gap-5 w-full px-16 flex-wrap">
                    <span>BLOG</span>  <span className='capitalize'>{category.title}</span>
                </div>
            </div>
        </header>

       <section className="container mx-auto justify-start flex flex-col md:flex-row my-24 gap-3 sm:gap-8 xl:gap-20">
            <div className={`w-full  ${posts.length < 1 ? 'w-0' : 'w-10/12'}`}>
                {
                    posts.map((post, index) => (
                        <Post key={index} post={post}/>
                    ))
                }
        
            </div>
                <div className={` p-2 w-full md:w-fit  ${posts.length < 1 ? 'w-full mx-auto md:w-full' : ''}`}>
                    <div className="">
                        {
                             categories.slice(0,).map((category, index) => (
                                 <Link key={index} to={`/categories/${category._id}`} >
                                 <div  className='flex gap-2 my-5 justify-start items-center border-2 border-gray-300 w-full py-3 px-2 text-left
                                 hover:bg-yellow-300 transition-color duration-300 cursor-pointer rounded-md
                                 '>
                                     <img src={image} alt="" className=' w-10 h-10 object-cover border-2 rounded-md' />
                                    <h3 className='text-purple-600 w-10/12 text-base lg:text-lg text-left font-bold uppercase'>{category.title}</h3>
                                 </div>
                                    </Link>
                              ))
                        }
                    </div>
                    {/* <div className="">
                        All Tags 
                         <div className=" flex flex-wrap gap-2 w-full">
                            {
                                categories.slice(0,).map(( index) => (
                                    <p key={index} className='flex gap-2  justify-start items-center border-2 border-gray-300 w-fit px-6 py-2 text-left rounded-3xl text-sm font-bold 
                                    hover:bg-yellow-300 transition-color duration-300 cursor-pointer 
                                    '>
                                        STARTUP
                                    </p>
                                ))
                            }
                        </div> 
                    </div> */}
                </div>

       </section>
    </div>
  )
}

export default Categories