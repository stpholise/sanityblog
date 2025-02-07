 
 import BlockContent from '@sanity/block-content-to-react'
 import  { useFetchBySlug, useFetchPostsByAuthor } from '../hooks/index'
 import { Link, useParams } from 'react-router-dom'
 import Icon from '../components/Icon'
 import EconomyIcon from '/economy.svg'
 import { useState , useEffect } from 'react'
 import PostCard from '../components/blogs/PostCard'


const BlogPost = () => {
    const { slug } = useParams() 
    const { post, loading, error }  = useFetchBySlug(slug)

    const [authorId, setAuthorId] = useState('')

    useEffect(() => {
        if(post.author) {
            setAuthorId(post.author._id)
        }
    }, [post])
    const { posts } = useFetchPostsByAuthor(authorId)
 
    console.log(posts)
    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }; 
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      }; 
      if(loading) return <Icon />
      else if (error) return <h1>{error}</h1>
      

   
      
  return (
    <div className='bg-white'>
        <section className="container mx-auto px-4 md:px-6 lg:px-8
            flex flex-col justify-start items-start gap-12 py-10
        ">

     
        {
            post.author &&
            <div className=" container mx-auto flex flex-row justify-start items-center  lg:gap-7 p-2
                lg:flex-col lg:w-[768px]   
            "> 
                <div className="author   w-full flex flex-row justify-start items-center gap-2 ">
                    <div className="author__image   h-14 w-14 rounded-full overflow-hidden border border-gray-500 flex itmes-center justify-center">
                        <img src={post.author.image.asset.url} alt="author" className='w-full h-full object-contain rounded-full'/>
                    </div>
                    <div className="author__details flex flex-col ">
                        <h1 className='text-2xl lg:text-3xl capitalize font-bold text-[#592EA9]'>{post.author.name}</h1>
                        <p className=" text-[#6D6E76]">published on {formatDate(post.publishedAt)}</p>
                    </div>
                </div> 
                <h1 className='lg:text-5xl  text-3xl font-bold '>{post.title}</h1> 
                <div className="container mx-auto ">
                    {post.category && post.category.map((category) => (
                        <Link to={`/categories/${category._id}`} key={category._id} className=' capitalize flex items-center justify-start gap-3 text-black p-1 px-2 rounded-md'>
                            
                            <img src={EconomyIcon} alt=""className=' w-6 m-0' /> 
                            
                            <p className='font-bold text-xl'>        {category.title}       </p>
                        </Link>
                    ))}
                </div>
            </div>
        }
        <div className='container mx-auto bg-white lg:h-[585px]  overflow-hidden  '>
            <img src={post.mainImage.asset.url} alt="" className='container mx-auto   w-full object-cover object-left-top h-full  ' />
        </div>


        <section className='container mx-auto  blog__content max-w-4xl '>
            <BlockContent
                blocks={post.body}
                projectId='1rx8k2g1'
                dataset='production'
            />
        </section> 
        <div className="secti flex flex-col justify-start items-start lg:gap-16 lg:py-10">
            <h2>What to read next</h2>
            <div className="container mx-auto flex flex-row justify-start items-center gap-5 lg:grid-cols-3 lg:gap-8 ">
                            
                {    (posts && posts.length > 0) &&              
                posts.slice(0,3).map((post) =>
                    (
                    <PostCard key={post._id} post={post} />
                ))
                }
            </div>
        </div>
        </section>
    </div>
  )
}

export default BlogPost