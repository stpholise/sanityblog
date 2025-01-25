 
 import { useState, useEffect } from 'react' 
import BlogsFeatured from '../components/blogs/BlogsFeatured'; 
import Post from '../components/blogs/Post'; 
import JoinTeam from '../components/JoinTeam';
import Catagory from '../components/Catagory';

const Blogs = () => {
  const [ posts, setPosts ] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [ {
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
},]
 
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Construct the API URL with the appropriate query
        const response = await fetch(
          `https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_type=="post"]{
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
        ); 
        // Parse the response as JSON
        const data = await response.json();  
        // Check if the request was successful
        if (response.ok) {
          setPosts(data.result); // Sanity API wraps data in the `result` property
          setLoading(false);
        } else {
          setError(data.error || 'Failed to fetch posts');
          setLoading(false);
        }
      } catch (err) {
        setError(`'Error fetching posts': ${err}`);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

console.log(loading)
console.log(error)
 
  return (
    <div>  
          {
            posts.length > 0 &&  
            
            <BlogsFeatured  post={posts[0]} />
          }
        <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
          

          <section className="all-posts">
            <h1 className='py-5 my-5 text-3xl font-bold'>All posts</h1>
            <div className='border-b-2 border-gray-200 my-5'></div>
            <section className="flex flex-col">
              {
                posts.length > 0 &&  
                posts.slice(0,5).map((post) => (
                  <Post key={post.slug.current} post={post} /> 
                ))
                
              }
            </section>

          </section>

             <section className="category-section container w-full mx-auto my-10 mb-10"> 
                <h1 className='capitalize mb-5 font-bold text-4xl text-left'>All category</h1>
                <div className="category-flex flex  justify-between items-start gap-5">
                    {
                        categories.map((category, index) => (
                            <Catagory key={index} category={category} />
                        ))
                    }
                </div>                
             </section>

<div className="">
  <JoinTeam />
</div>
          
        {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {posts.map((post) => (
            <article key={post._id}  className='mt-3 py-3 px-2 rounded-md hover:border hover:border-gray'>
              {
                  post?.mainImage?.asset?.url &&
              <img className='h-full max-h-64 w-full rounded-md'  src={post.mainImage.asset.url} alt={post.title} />
              }
              <h4 className="text-xl mt-2">{post.title}</h4>
              
              <button className="mt-5 mb-25  ">
                {post && (
                  <Link
                    to={`/blogs/${post.slug.current}`}
                    className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
                  >
                    Read full Article
                  </Link>
                )}
              </button>
            </article>
          ))}
        </div> */}
      </section>
    </div>
  )
}

export default Blogs