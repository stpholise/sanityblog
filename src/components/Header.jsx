
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'animate.css';
import Hamborger from '../assets/icons/Icon.svg'
import Xicon from '../assets/icons/x-01.svg'

const Header = () => {

    const location = useLocation()

    useEffect(() => {
        setShowMenu(false)
    }, [location])
    
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
        <header className='flex item-center justify-between bg-[#232536] text-white  p-3 z-20 xl:px-10'>
            <div className="logo flex items-center">
                <Link to='/'>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:2xl:4xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
          
               
               <nav>
                <ul className={`headerNav md:flex items-center lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-5 flex-col  ${showMenu ? 'absolute top-16 left-0 right-0  z-40 bg-black p-3 text-left py-7 animate__animated animate__bounceInDown animate__faster' : 'hidden'}`}>
                    {navitems.map((item, index) => (
                        <li key={index} className="lg:text-base text-base 2xl:ml-4 text-[#D9D9D9]  ">
                            <button className='w-full md:w-fit lg:w-fit xl:w-fit 2xl:w-fit p-2'>
                                <Link to={item.link} className='nav'> {item.title}</Link>
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
            <div className={` md:hidden lg:hidden xl:hidden 2xl:hidden absolute top-0 left-0 right-0 bottom-0 w-screen h-screen z-30 ${showMenu ? 'block' : 'hidden'}`}  onClick={() => setShowMenu(false)}></div>
        </header>
        
    </ >
  )
}

export default Header