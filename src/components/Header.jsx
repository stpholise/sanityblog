
import { Link } from 'react-router-dom'

const Header = () => {

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
            title: 'Subscribe',
            link: '/subscribe'
        }
    ]

  return (
    < >
        <header className='flex item-center justify-between bg-black text-white  p-5 z-20'>
            <div className="logo">
                <Link to='/'>
                    <h2 className="font-bold txt-xl md:text-2xl lg:tt-3xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
          
               
               <nav>
                <ul className='flex'>
                    {navitems.map((item, index) => (
                        <li key={index} className="lg:text-lg ml-5">
                            <button>
                                <Link to={item.link}> {item.title}</Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        
    </ >
  )
}

export default Header