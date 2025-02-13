 
import BlogsFeatured from '../components/blogs/BlogsFeatured'; 
import Post from '../components/blogs/Post'; 
import JoinTeam from '../components/JoinTeam';
import Catagory from '../components/Catagory';
import  { useFetchPosts, useFetchCategories } from '../hooks/index' 
import FetchError from '../components/FetchError';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Blogs = () => {
   
  const { posts, loading, error } = useFetchPosts()
  const { categories, loading: loadingCategories } = useFetchCategories() 

  
      
     // Initialize AOS animations
     useEffect(() => {
       AOS.init({ duration: 1000, once: true });
     }, [loadingCategories]);
   
  
  if (error) return  <FetchError/>
  
  return (
    <div className='bg-white'>  
          {
            loading ? <Skeleton count={1} height={500} /> :
            <BlogsFeatured  post={posts[0]} />
          }
        <section className="px-5 2xl:max-w-7xl 2xl:mx-auto
        container mx-auto flex flex-col ap-20 items-center justify-start py-20 text-left bg-white
            sm:px-4
            md:px-6
            lg:px-8
           ">
          

          <section className="container mx auto all-posts">
            <div className="title flex flex-col items-start justify-start gap-4 lg:gap-8"> 
              <h1 className=' container mx-auto text-left lg:py-5  lg:text-4xl text-2xl  font-bold'>All posts</h1>
              <hr className=' w-full bg-[#6D6E76]' />
            </div>
            <section className="flex flex-col items-left justify-start py-3 lg:gap-16 lg:py-16  ">
              {
                loading ? <Skeleton count={5} height={500} /> :
                posts.slice(0,5).map((post) => (
                  <Post key={post.slug.current} post={post} /> 
                ))
                
              }
            </section>
            <div className="container mx-auto flex justify-center items-center gap-5   w-40 " id="anchor-element" data-aos-anchor-placement="top-center" >
                <button className='mx-auto'>
                 Prev </button>
                <button className='mx-auto'>
                  Next </button>
            </div>
          </section>

             <section className="category-section container w-full mx-auto my-10 mb-10"> 
                <h1 className='capitalize mb-5 font-bold lg:text-3xl xl:text-3xl 2xl:text-4xl text-2xl text-center'>All category</h1>
                <div className="  grid gap-4     justify-center    items-strech    w-full  
                  md:gap-6 md:px-2 md:text-4xl md:grid md:grid-cols-2
                   lg:grid lg:grid-cols-4 lg:gap-8  lg:text-4xl 
                ">
                    {loadingCategories ? <Skeleton count={4} height={200} /> :
                        categories.slice(0,4).map((category, index) => (
                            <Catagory key={index} category={category} />
                        ))
                    }
                </div>                
             </section>

<div className="">
  <JoinTeam />
</div>
      
      </section>
    </div>
  )
}

export default Blogs