 
import BlogsFeatured from '../components/blogs/BlogsFeatured'; 
import Post from '../components/blogs/Post'; 
import JoinTeam from '../components/JoinTeam';
import Catagory from '../components/Catagory';
import  { useFetchPosts, useFetchCategories } from '../hooks/index'
import Icon from '../components/Icon';

const Blogs = () => {
   
  const { posts, loading, error } = useFetchPosts()
  const { categories } = useFetchCategories() 

 
 
  if (loading) return  <Icon />
  if (error) return <div> {error} </div>
  return (
    <div>  
          {
            posts.length > 0 &&  
            
            <BlogsFeatured  post={posts[0]} />
          }
        <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
          

          <section className="all-posts">
            <h1 className='lg:xl:2xl:py-5 lg:xl:2xl:my-5 lg:xl:2xl:text-3xl text-xl my-2 py-2 font-bold'>All posts</h1>
            <div className='border-b-2 border-gray-200 lg:xl:2xl:my-5 my-2'></div>
            <section className="flex flex-col items-center justify-center ">
              {
                posts.length > 0 &&  
                posts.slice(0,5).map((post) => (
                  <Post key={post.slug.current} post={post} /> 
                ))
                
              }
            </section>

          </section>

             <section className="category-section container w-full mx-auto my-10 mb-10"> 
                <h1 className='capitalize mb-5 font-bold lg:text-3xl xl:text-3xl 2xl:text-4xl text-2xl text-center'>All category</h1>
                <div className="category-flex lg:xl:flex-nowrap 2xl:flex-nowrap flex flex-wrap  justify-center items-start gap-5">
                    {
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