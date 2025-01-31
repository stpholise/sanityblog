 
 import BlockContent from '@sanity/block-content-to-react'
 import  { useFetchBySlug } from '../hooks/index'
 import { Link, useParams } from 'react-router-dom'
 import Icon from '../components/Icon'
const BlogPost = () => {
    const { slug } = useParams() 
    const { post, loading, error }  = useFetchBySlug(slug)
    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>
 

    const formatDate = (dateString) => {
        const date = new Date(dateString); 
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }; 
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      };
      
  
      if (loading) return  <Icon />
  
  return (
    <div className='p-2'>

        <div className='container mx-auto bg-white lg:mb-10 xl:mb-10 2xl:mb-10 h-64 sm:h-72 md:h-80 mb-5 lg:max-h-[500px] xl:max-h-[500px] 2xl:max-h-[500px] rounded-xl overflow-hidden px-2'>
            <img src={post.mainImage.asset.url} alt="" className='container mx-auto max-w-[900px] w-full object-cover object-left-top h-full sm:h-82 md:h-82 lg:h-96 xl:h-96 2xl:h-96 ' />
        </div>
        {
            post.author &&
            <div className="authorDetail container mx-auto flex flex-row justify-start items-center gap-5 p-2"> 
                <div className="author flex flex-row items-center gap-2">
                    <div className="author__image p-1 h-14 w-14 rounded-full overflow-hidden border-2 border-gray-500 flex itmes-center justify-center">
                        <img src={post.author.image.asset.url} alt="author" className='w-full h-full object-contain rounded-full'/>
                    </div>
                    <div className="author__details flex flex-col ">
                        <h1 className='text-2xl'>{post.author.name}</h1>
                        <p className="sm font-semibold">published on {formatDate(post.publishedAt)}</p>
                    </div>
                </div> 
            </div>
        }
        <div className="container mx-auto p-2">
            {post.category && post.category.map((category) => (
                <Link to={`/categories/${category._id}`} key={category._id} className='bg-purple-500 text-white p-1 px-2 rounded-md'>{category.title}</Link>
            ))}
        </div>


        <section className='container mx-auto p-2 blog__content mt-8 '>
            <h1 className='lg-text-4xl xl:text-5xl 2xl:text-5xl text-3xl font-bold '>{post.title}</h1> 
            <BlockContent
                blocks={post.body}
                projectId='1rx8k2g1'
                dataset='production'
            />
        </section>

    </div>
  )
}

export default BlogPost