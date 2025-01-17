 import { useState, useEffect } from 'react'
 import { Link,  useParams,   } from 'react-router-dom'
 import BlockContent from '@sanity/block-content-to-react'

const Singlepost = () => {
  const [ post, setPost ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ error, setError ] = useState(null)  

  
  const { slug } = useParams()
 
  useEffect(() => {
    const fetchPost = async() =>{
      try {
        const response = await fetch(
          `https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[slug.current=="${slug}"]{
            title,
            _id,
            slug,
            body,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            }
          }`
        )

        if(!response.ok) {
          setError('Failed to fetch post')
          setIsLoading(false)
        }
        const data = await response.json() 
        console.log(typeof data.result)
        console.log(data.result)
        setPost(data.result)
        setIsLoading(false) 
      }
      catch(error){
        setError(error)
        setIsLoading(false)

      }
    }
    if(slug) {

      fetchPost()
    }
  }, [ slug ])


  return (
    <div> 
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>} 
      {post && (
        <div className='px-5 pb-10 xl:max-w-6xl xl:mx-auto'> 
          <h1 className='uppercase font-bold text-4xl tracking-wide mb-10  md:text-6xl lg:text-8xl text-center mt-5'>{post[0].title}</h1>
          <img className='blog_image rounded-t' src={post[0].mainImage?.asset?.url} alt={post.mainImage?.alt} />
          <div className="blog__content w-full max-w-screen-lg mx-auto mt-10">
            <BlockContent 
              blocks={post[0].body} 
              projectId='1rx8k2g1'
              dataset='production'
            />
          </div> 
          <button className="mt-5 mb-10"> 
            <Link 
              className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
              to='/blogs'>Back to Blogs</Link>
          </button>
        </div>
      )}
      
    </div>
  )
}

export default Singlepost