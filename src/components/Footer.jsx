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
          <header  className='flex container mx-auto items-center justify-between bg-black text-white mb-2 py-5 z-20'>
            <div className="logo">
                <Link to='/'>
                    <h2 className="font-bold text-xl md:text-2xl lg:xl:2xl:text-3xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
            
            <nav className='md:lg:xl:2xl:w-9/12 flex justify-end  '>
                <ul className="hidden  lg:xl:flex 2xl:flex lg:flex-row xl:2xl:flex-row w-full lg:p-5 gap-4 xl:p-5 2xl:gap-5 lg:items-center xl:items-center 2xl:items-center lg:justify-between xl:justify-between 2xl:justify-between lg:xl:2xl:w-6/12  lg:xl:2xl:py-5">
                    {
                        navitems.map((item, index) => {
                            return (
                                <li key={index} className=" lg:text-lg">
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
        {/* <section className="newsletter hidden container p-2 mx-auto my-5 bg-[#6D6E76]  flex-col  lg:flex-row xl:flex-row 2xl:flex-row lg:12 xl:p-12 2xl:p-16 gap-5 justify-between items-center md:p-5 md:flex-col md:gap-10 md:items-center md:justify-center">
            <div className=""> 
                <h2 className='w-full lg:xl:2xl:w-5/12 lg:text-3xl xl:text-4xl 2xl:text-4xl text-2xl'>Subscribe to our news letter to get latest updates and news</h2> 
            </div>
            <form className='lg:xl:2xl:w-7/12 w-full flex flex-col lg:xl:flex-row 2xl:flex-row gap-3 lg:xl:2xl:gap-5'>
                <input type="email" placeholder="Enter your email" className='lg:xl:2xl:px-5 py-2 lg:xl:2xl:py-3 px-2 block max-w-96 lg:w-9/12 xl:w-9/12 2xl:w-9/12 w-full bg-transparent border-2 border-gray-200'/>
                <button className=' border-2 px-10 py-1 bg-yellow-500 w-full lg:xl:w-2/5 2xl:w-2/5 max-w-72'>Subscribe</button>
            </form>
        </section> */}

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