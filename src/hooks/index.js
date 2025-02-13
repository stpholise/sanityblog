import { useEffect, useState } from 'react'


//  =====================================FETCH ALL POST =============================================
//  =================================================================================================
//  =================================================================================================
//  =================================================================================================

export const useFetchPosts = () => {
    const [ posts, setPosts ] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const settings = {
            metheod: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    
        const fetchPosts = async () => {
        try {
            // Construct the API URL with the appropriate query
            const response = await fetch(
            `https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_type=="post"]{
                title,
                _id,
                slug, 
                publishedAt,
               author-> {
                _id,
                name,
                slug,
                image{
                  asset-> {
                    _id,
                    url
                  },
                  alt
                }
              },
                  category[]->{
                    _id,
                    title,
                    slug
                },
                body, 

                mainImage{
                asset->{
                    _id,
                    url
                },
                alt
                }
            }`, settings 
            ); 
            // Parse the response as JSON
            const data = await response.json();  
            // Check if the request was successful
            if (response.ok) {
            setPosts(data.result); // Sanity API wraps data in the `result` property
            console.log(data.result)

            setLoading(false);
            } else {
            setError(data.error.message || 'Failed to fetch posts');
            setLoading(false);
            }
        } catch (err) {
            setError(`'Error fetching posts': ${err.message}`);
            setLoading(false);
        }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error }
}


// ==========================FETCH SINGLE POST =====================================================
// =================================================================================================
// =================================================================================================
// ================================================================================================= 

export const useFetchBySlug = (slug) => {
    const [post, setPost ] = useState({}) 
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    
   console.log(slug)
   
    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    
        const getPost = async() => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[slug.current=="${slug}"]{
            title,
            _id,
            slug,
            body,
              category[]->{
                _id,
                title,
                slug
            },
            publishedAt,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            author-> {
                _id,
                name,
                slug,
                image{
                  asset-> {
                    _id,
                    url
                  },
                  alt
                }
              },
              
          }`, settings) 
                if (!response.ok) {
                    console.log(response)
                    setError(`Error ${response.status} ${response.statusText} ${response?.message}`)
                    setLoading(false) 
                }
                const data = await response.json()
                setPost(data.result[0])
                setLoading(false)
            }
            catch(error) {
                console.log(error)
                setError(error.message)
                setLoading(false)
            }
        }
        if(slug) {
            getPost()
        }
    }, [slug])
    return{
        post, 
        error,
        loading,
    }
}


// ===========================================FETCH ALL AUTHORS ========================================
// =================================================================================================
// =================================================================================================
// =================================================================================================

export const useFetchAuthors = () => {
    const [ authors, setAuthors ] = useState()
    const [ error, setError ] = useState() 
    const [ loading, setLoading ] = useState(true) 

    useEffect (() => {
        const settings = {
            method:'GET',
            'Content-header' :'application/json',
        }
        const getAuthor = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_type == "author"]{
                        name,
                        _id,
                        bio,
                        image {
                            asset->{
                            _id,
                            url
                            }
                        },
                        slug, 
                        }`, settings) 
                    if(!response.ok) {
                    setError(`Error ${response.status} ${response?.message}`)
                    setLoading(false)
                }
                const data = await response.json() 
                setAuthors(data.result)
                setLoading(false) 
            }
            catch(error) {
                setError(error.message) 
                setLoading(false)
            }
        }
    
            getAuthor()
       
    }, [])
    return{
        authors,
        error, 
        loading
    }
}



// ===========================================FETCH SINGLE AUTHORS ========================================
// =================================================================================================
// =================================================================================================
// =================================================================================================

export const useFetchAuthor = (id) => {
    const [ author, setAuthor ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const getAuthor = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_id=="${id}"]{
                    name,
                    _id,
                    bio,
                    _type,
                    instagram,
                    twitter,
                    linkedin,
                    facebook,
                    image {
                        asset->{
                            _id,
                            url
                        }
                    },
                    slug, 
                }`, settings)
                if(!response.ok) {
                    setError(response.message)
                    setLoading(false)
                }
                const data = await response.json()
                setAuthor(data.result[0])
                setLoading(false)

            }
            catch(err) {
                setError(err)
                setLoading(false)

            }
        }
        if(id) {
            getAuthor()
        }
    }, [id])
    return{
        author,
        error,
        loading,
    }
}
 
 //  ===================================FETCH POSTS BY AUTHOR ======================================
//  =================================================================================================
//  =================================================================================================
//  =================================================================================================
export const useFetchPostsByAuthor = (id) => {
    const [ posts, setPosts ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const getPosts = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[references("${id}")]{
  title,
  _id,
  slug,
  author,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  category[]->{
    _id,
    title,
    slug
  },
  publishedAt,
  author->{
    _id,
    name,
    slug,
    image{
      asset->{
        _id,
        url
      },
      alt
    }
  } 
}`, settings)
                if(!response.ok) {
                    setError(`${response.status} ${response.message}`)
                    console.log(response)
                    setLoading(false)
                }
                const data = await response.json()
                setPosts(data.result)
                setLoading(false)
            }
            catch(err) {
                setError(err)
                setLoading(false)
            }
        }
        if(id) {
            getPosts()
        }
    }, [id])
    return{
        posts,
        error,
        loading,
    }
}


//  =========================FETCTH SINGLE CATEGORY ================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================

export const useFetchSingleCategory = (id) => {
    const [ category, setCategory ] = useState({})
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const getCategory = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_id=="${id}"]{
                    title,
                    _id,
                    slug,
                    description,
                    icon{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                }`, settings)
                if(!response.ok) {
                    setError(response.message)
                    setLoading(false)

                }
                const data = await response.json()
                setCategory(data.result[0])
                setLoading(false)
            }
            catch(err) {
                setError(err)
                setLoading(false)
            }
        }
        if(id) {
            getCategory()
        }
    }, [id])
    return{
        category,
        error,
        loading,
    }
}


//  ===================================FETCH POSTS BY CATEGORY ======================================
//  =================================================================================================
//  =================================================================================================
//  =================================================================================================
export const useFetchPostsByCategory = (id) => {
    const [ posts, setPosts ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const getPosts = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[references("${id}")]{
  title,
  _id,
  slug,
  author,
  body,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  category[]->{
    _id,
    title,
    slug
  },
  publishedAt,
  author->{
    _id,
    name,
    slug,
    image{
      asset->{
        _id,
        url
      },
      alt
    }
  }
}`, settings)
                if(!response.ok) {
                    setError(response.message)
                    console.log(`${response.status} ${response.message}`)
            setLoading(false)
        }
                const data = await response.json()
                setPosts(data.result)
            setLoading(false)
        }
            catch(err) {
                setError(err.message)
            setLoading(false)
        }
        }
        if(id) {
            getPosts()
        }
    }, [id])
    return{
        posts,
        error,
        loading,
    }
}


// =============================FETCH ALL CATEGORIES ================================================
// =================================================================================================
// =================================================================================================
// =================================================================================================

export const useFetchCategories = () => {
    const [ categories, setCategories ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const settings = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const getCategories = async () => {
            setLoading(true)
            try{
                const response = await fetch(`https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_type=="category"]{
                    title,
                    _id,
                    slug,
                    description,
                    icon{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                }`, settings)
                if(!response.ok) {
                    setError(response.message)
                    setLoading(false)
                }
                const data = await response.json()
                setCategories(data.result)
                setLoading(false)
            }
            catch(err) {
                setError(err)
                setLoading(false)
            }
        }
        getCategories()
    }, [])
    return{
        categories,
        error,
        loading,
    }
}
