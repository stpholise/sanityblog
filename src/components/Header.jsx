
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    < >
        <header className='flex item-center justify-between bg-black text-white p-5'>
            <div className="logo">
                <Link to='/'>
                    <h2 className="font-bold txt-xl md:text-2xl lg:tt-3xl">
                        Stephen&apos;s Blog
                    </h2>
                </Link>
            </div>
            
            <nav>
                <ul className="flex">
                    <li className="mr-5 lg:text-lg">
                        <button>
                            <Link to={'/'}> Home</Link>
                        </button>
                    </li>
                    <li className="lg:text-lg ml-5">
                        <button>
                            <Link to={'/blogs'}> Bogs</Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
        
    </ >
  )
}

export default Header