import Post from '../components/blogs/Post' 
import { useFetchAuthor, useFetchPostsByAuthor } from '../hooks/index'
import {  useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import Facebook from '/fb-icon.svg'
import Twitter from '/il_twitter.svg'
import Instagram from '/Instagram.svg'
import LinkedIn from '/LinkedIn.svg'
const Author = () => { 

    const { id } = useParams() 
    const { author, loading, error } = useFetchAuthor(id)
    const { posts } = useFetchPostsByAuthor(id)
 

    
  if (loading) return  <Icon />
    if(error) return <h1>{error}</h1>
  return (
    <div> 
        <section className="full bg-[#eee6f6] lg:min-h-[400px] ">
            <div className="container mx-auto  py-10 lg:py-20 px-4 lg:px-8 flex flex-col lg:flex-row  items-center lg:gap-8 lg:max-w-5xl ">
                <img src={author.image.asset.url} alt="" className="lg:w-64 w-full h-64 mid:h-auto   object-cover"/>
                <div className="W-10/12 flex flex-col items-start justify-center lg:gap-6">
                    <h2 className="font-bold lg:text-5xl my-2"> <span className='capitalize'>{author.name} </span>  </h2>
                    <p className="text-[#6D6E76] my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    <div className="icon-pack flex grid-cols-4 justify-start items-center gap-3 ">
                              <div className="bg-[#232536] p-1 w-4 h-4 rounded-full">  
                                <img src={Facebook} className='w-2.5' alt="" />
                              </div>
                              <div className="bg-transparent  rounded-full"> 
                                <img src={Twitter}  className='w-4' alt="" />
                              </div>
                              <div className=""> 
                                <img src={Instagram}  className='w-4' alt="" />
                              </div>
                              <div className=""> 
                                <img src={LinkedIn}  className='w-4' alt="" />
                              </div>
                            </div>
                </div>
            </div>
            <div className="container mx-auto flex  lg:max-w-5xl px-8 h-6">
                <div className="bg-[#FFD050]  w-[800px] "></div>
                <div className="bg-[#592EA9]  w-[300px]"></div>

            </div>
        </section>
        <section className='container mx-auto my-14 p-10 lg:max-w-5xl flex flex-col lg:gap-12'>
            <h1 className="text-4xl font-bold   ">
            My Posts
            </h1>
            <div className="flex flex-col lg:gap-8">
                {
                    posts.slice(0,).map((post,index) => (
                        <Post key={index} post={post} />
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Author