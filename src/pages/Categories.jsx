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
    if(isLoading) return <Icon />

    if(error) return <h1>{error}</h1> 
    if(catError) return <h1>{catError}</h1> 

    console.log(posts)

  return (
    <div>
        <header className="category-header w-full px-4 lg:px-0 bg-[#eee6f6] xl:h-[400px] h-fit flex  items-center justify-center">
            <div className="container mx-auto max-w-[704px] p-2 w-full flex flex-col items-left md:items-center justify-center gap-3 text-center">
                <h1 className="lg:text-5xl font-bold sm:text-3xl text-2xl capitalize"> {category.title}</h1>
                <p className="text-[#6D6E76] text-left md:text-center">{category.description}</p>

                <div className="category-flex flex  justify-center items-start gap-5 w-full px-16 flex-wrap">
                    <span>BLOG</span>  <span className='uppercase'>{category.title}</span>
                </div>
            </div>
        </header>

       <section className="container px-4 lg:px-8 mx-auto justify-start flex flex-col md:flex-row my-24 gap-3 sm:gap-8 lg:gap-28">
            <div className={`w-full  ${posts.length < 1 ? 'w-0' : ''}`}>
                {   posts.length > 0 ?
                    posts.map((post, index) => (
                        <Post key={index} post={post}/>
                    ))
                 : <p className='text-2xl mx-auto flex items-center '>No posts yet </p>   
                }
        
            </div>
                <div className={`  w-full md:w-80 flex flex-col gap-6    lg:gap-10 ${posts.length < 1 ? 'w-full mx-auto md:w-full' : ''}`}>
                    <h2 className='capitalize font-bold lg:text-4xl text-3xl '>Categories</h2>
                    <div className={`  w-full md:w-80 flex flex-col gap-3 lg:gap-6 ${posts.length < 1 ? 'w-full mx-auto md:w-full' : ''}`}>
                        {
                             categories.slice(0,).filter((category) => category._id != id ).map((category, index) => (
                                 <Link key={index} to={`/categories/${category._id}`} >
                                 <div  className='flex   justify-start items-center border-2 border-gray-300 w-full text-left p-3 gap-4 lg:h-24 lg:w-[300px] lg:p-6
                                 hover:bg-yellow-300 transition-color duration-300 cursor-pointer 
                                 '>
                                     <img src={image} alt="" className=' w-10 h-10 object-cover  rounded-md' />
                                    <h3 className='text-purple-600 w-10/12 text-base lg:text-lg text-left font-bold uppercase'>{category.title}</h3>
                                 </div>
                                    </Link>
                              ))
                        }
                    </div>
                    <div className=" w-full flex flex-col gap-4  px-4 lg:px-0 lg:gap-6 "> 
                        <h2 className='capitalize font-bold text-2xl lg:text-4xl '>  All Tags </h2>
                         <div className=" flex flex-wrap gap-2 w-full">
                            {
                                categories.slice(0,).filter((category) => category._id != id ).map((category, index) => (
                                    <Link key={index} to={`/categories/${category._id}`} className='flex gap-2  justify-start items-center border-2 border-gray-300 w-fit px-6 py-2 text-left rounded-3xl text-sm font-bold 
                                    hover:bg-yellow-300 transition-color duration-300 cursor-pointer 
                                    '>
                                        {category.title}
                                    </Link>
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