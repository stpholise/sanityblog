
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import 'animate.css';


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
        <header className='flex  flex-row  item-center sticky top-0 md:static justify-between bg-[#232536] md:bg-[#232536] text-white    px-8 py-4 lg:py-3 z-50 lg:px-10'>
            <div className="logo flex items-center">
                <Link to='/'>
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl xl:2xl:4xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div> 
               <nav>
                <ul className={`headerNav  md:animate-none md:animate__none   md:flex items-center lg:flex xl:flex 2xl:flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-5 flex-col  ${(showMenu  )  ?  'fixed top-14 left-0 right-0 flex-col justify-center items-center  z-40 bg-[#232536] p-3 text-left py-7 animate__animated animate__fadeInRight animate__fast' : window.innerWidth < 650 ? `' absolute animate__animated animate__fadeOutLeft   animate__fast  md:static top-14 bg-[#232536] md:p-2 text-left py-7 md:py-2   md:animate__none  left-0 right-0  ` : ''}`}>
                    {navitems.map((item, index) => (
                        <li key={index} className="lg:text-base text-base 2xl:ml-4 text-[#D9D9D9] sm:max-w-96 sm:mx-auto">
                            <button className='w-full md:w-fit lg:w-fit xl:w-fit 2xl:w-fit p-2'>
                                <Link to={item.link} className='nav'> {item.title}</Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
     
            <button className={`block md:hidden h-7 w-10 relative cursor-pointer${showMenu ? '' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                <div className={`" absolute  bg-white rounded-3xl  transition-transform duration-[600ms]  transition-top " ${showMenu ? 'translate-y-1/4 translate-x-1/4 rotate-[-315deg] top-1/2 h-1 w-7' : 'h-1 w-7 -translate-y-1/2 -translate-x-1/2  top-1/4 left-1/2'}`}></div>
                <div className={`" absolute h-1 w-7 bg-white rounded-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-[600ms]  transition-top "  ${showMenu ? ' opacity-0 ' : ''} `}></div>
                <div className={`" absolute h-1 w-7 bg-white rounded-3xl transition-transform duration-[600ms]  transition-top " ${showMenu ? ' translate-y-1/4 translate-x-1/4 rotate-[-225deg] top-1/2 w-12  ' : 'top-3/4 left-1/2  -translate-y-1/2 -translate-x-1/2 '}`}></div>
            </button>
            <div className={` md:hidden absolute top-0 left-0 right-0 bottom-0 w-screen h-screen z-30 ${showMenu ? 'block' : 'hidden'}`}  onClick={() => setShowMenu(false)}></div>
        </header>
        
    </ >
  )
}

export default Header