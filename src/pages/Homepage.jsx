 
 import { Link } from 'react-router-dom'
 import { useState, useEffect } from 'react'


const Homepage = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        const getPosts = async() => {
            try{
                const response = await fetch(
                        `https://1rx8k2g1.api.sanity.io/v2022-03-07/data/query/production?query=*[_type=="post"]{
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
            },
            "authorName": author -> name
      
          }`
                ) 
                if(!response.ok){
                    throw new Error('Failed to fetch posts')
                }
                const data = await response.json() 
                setPosts(data.result)
                console.log(data)
            }
            catch(error){
                console.log(error)
            }
        }
        getPosts()
    }, [])

    if(posts.length === 0){
        return <h2>Loding ... </h2>
    }
  return (
    <div>
        <section className="flex flex-col items-center justify-center py-5 text-center h-screen radia__background">
            <h1 className="text-4xl font-bold">
                {"Your story, reimagined "}
            </h1>
            <p className="mt-3 ">
                write about your expreriences, thoughts and ideas and share with te world 
            </p>
            {/* {
                  posts[0]?.mainImage?.asset?.url &&
              <img 
                className='h-full mx-2 p-2 max-h-80 max-w-screen-lg  w-full mt-3 mb-7 rounded-md'  
                src={posts[0].mainImage.asset.url} 
                alt={posts[0].title} 
              />
              } */}
            <header>
                
            </header>
            <button className='mt-3'>
                <Link to='/blogs'
                    className="py-2 px-6 
                        rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold" 
                >
                    Read my blog posts
                </Link>
            </button>
        </section>
    </div>
  )
}

export default Homepage