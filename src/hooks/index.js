import { useEffect, useState } from 'react'


export const useFetchPosts = () => {
    const [ posts, setPosts ] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchPosts = async () => {
        try {
            // Construct the API URL with the appropriate query
            const response = await fetch(
            `https://1rx8k2g1.api.sanity.io/v1/data/query/production?query=*[_type=="post"]{
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
                }
            }`
            ); 
            // Parse the response as JSON
            const data = await response.json();  
            // Check if the request was successful
            if (response.ok) {
            setPosts(data.result); // Sanity API wraps data in the `result` property
            console.log(data.result)

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

    return { posts, loading, error }
}




/*
export const useFetchCategory =  () => {
    const [ posts, setPosts ] = useState([])
    const settings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
        useEffect(() => {
            const getPosts = async () => {
                try{
                    const  response = await fetch() 
                     if(!response.ok) {
                        console.log(response.messeage)
                    }
                    const data = await response.json
                    console.log(data.resusl)
                    setPosts(data.result)
                }
                catch(err) {
                    console.log(err)
                }
            }
            getPosts()
        }, [])

}
*/
