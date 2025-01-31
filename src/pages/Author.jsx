import Post from '../components/blogs/Post' 
import { useFetchAuthor, useFetchPostsByAuthor } from '../hooks/index'
import {  useParams } from 'react-router-dom'
import Icon from '../components/Icon'

const Author = () => { 

    const { id } = useParams() 
    const { author, loading, error } = useFetchAuthor(id)
    const { posts } = useFetchPostsByAuthor(id)
 

    
  if (loading) return  <Icon />
    if(error) return <h1>{error}</h1>
  return (
    <div> 
        <section className="full bg-[#eee6f6] min-h-[400px]">
            <div className="container mx-auto  p-20 flex items-center gap-5 ">
                <img src={author.image.asset.url} alt="" className="w-1/4"/>
                <div className="W-10/12 p-5">
                    <h2 className="font-bold my-2"> <span className='capitalize'>{author.name} </span>  </h2>
                    <p className="text-gray-500 my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
            </div>
        </section>
        <section className='container mx-auto my-14 p-10'>
            <h1 className="text-3xl font-bold  mb-12 p-3">
            My Posts
            </h1>
            <div className="">
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