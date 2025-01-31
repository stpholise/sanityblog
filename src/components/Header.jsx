
import { Link } from 'react-router-dom'
import { useState } from 'react'
import 'animate.css';
import Hamborger from '../assets/icons/Icon.svg'
import Xicon from '../assets/icons/x-01.svg'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    
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
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:2xl:4xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
          
               
               <nav>
                <ul className={`md:flex lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4 flex-col  ${showMenu ? 'absolute top-16 left-0 right-0  z-40 bg-black p-3 text-left py-7 animate__animated animate__bounceInDown animate__faster' : 'hidden'}`}>
                    {navitems.map((item, index) => (
                        <li key={index} className="lg:text-lg lg:xl:2xl:ml-4 ml-2 mt-2 md:lg:xl:2xl:mt-0">
                            <button>
                                <Link to={item.link}> {item.title}</Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="md:hidden lg:hidden xl:hidden 2xl:hidden" onClick={() => setShowMenu(!showMenu)} >
                {showMenu ?
                <img src={Xicon} />
                :<img src={Hamborger} />
            }
                
            </button>
        </header>
        
    </ >
  )
}

export default Header