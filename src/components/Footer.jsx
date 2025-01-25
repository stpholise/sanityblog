import { Link } from 'react-router-dom'

const Footer = () => {
    const navitems = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Blogs',
            link: '/blogs'
        },
        {
            title: 'About Us',
            link: '/about'
        },
        {
            title: 'Contact Us',
            link: '/contact'
        },
        {
            title: 'Privacy Policy',
            link: '/privacypolicy'
        }
    ]
  return (
    <footer  className='flex flex-col item-center justify-between bg-black text-white mb-2 p-5 z-20'>
          <header  className='flex container mx-auto item-center justify-between bg-black text-white mb-2 py-5 z-20'>
            <div className="logo">
                <Link to='/'>
                    <h2 className="font-bold txt-xl md:text-2xl lg:tt-3xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
            
            <nav>
                <ul className="flex">
                    {
                        navitems.map((item, index) => {
                            return (
                                <li key={index} className="mr-5 lg:text-lg">
                                    <button>
                                        <Link to={item.link}> {item.title}</Link>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav> 
        </header>
        <section className="newsletter container mx-auto my-5 bg-[#6D6E76] flex p-16 gap-5 justify-between items-center">
            <div className=""> 
                <h2 className='w-6/12'>Subscribe to our news letter to get latest updates and news</h2> 
            </div>
            <form className='w-6/12 flex gap-5'>
                <input type="email" placeholder="Enter your email" className='px-5 py-3 bg-transparent border-2 border-gray-200'/>
                <button className=' border-2 px-10 bg-yellow-500'>Subscribe</button>
            </form>
        </section>

        <section className="container mx-auto">
            <div className="text-sm">
                <p>Finstreet 118 2561 Fintown</p>
                <p>Hello@finsweet.com  020 7993 2905 </p>
            </div>
            <div className="icon-flex">

            </div>
        </section>
    </footer>
  )
}

export default Footer