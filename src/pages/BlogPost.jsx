 
 import BlockContent from '@sanity/block-content-to-react'


const BlogPost = () => {
  return (
    <div>
        <div className="detail"> 
            <div className="author">
                <div className="author__image">
                    <img src="https://cdn.sanity.io/images/1rx8k2g1/production/1e3b9f1e3d0d6d1f2c7c8c5f4b1f7e6b6b1f7e6b-1000x1000.png" alt="author" />
                </div>
                <div className="author__details">
                    <h1>Author Name</h1>
                    <p>Author Bio</p>
                </div>
            </div>
            <h2>Step-by-step guide to choosing great font pairs</h2>
            <div className="">
                <img src="" alt="" />
                <p>Startup</p>
            </div>
        </div>

        <section className='blog__content container mx-auto'>
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