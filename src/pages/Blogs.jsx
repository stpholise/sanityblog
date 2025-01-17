 
 import { useState, useEffect } from 'react'
 import { Link } from 'react-router-dom'
//  import client from '../client' 

const Blogs = () => {
  const [ posts, setPosts ] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   client 
  //     .fetch(`*[_type == "post"] {
  //       title, 
  //       slug, 
  //       body,
  //       mainImage{
  //         asset->{
  //           _id,
  //           url
  //         },
  //         alt
  //       }
  //     }`)
  //     .then((data) => setPosts(data))
  //     .catch(console.error)
  // }, [])
  
  // 71aff592-e332-44bc-af2b-3543d581ac4d
 
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
        <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-7 tracking-widest text-center md:text-6xl lg:text-7xl">
          Blog page
        </h1> 
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
        </div>
      </section>
    </div>
  )
}

export default Blogs