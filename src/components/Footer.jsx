import { Link } from 'react-router-dom'

const Footer = () => {
    // const navitems = [
    // 
    //     {
    //         title: 'Privacy Policy',
    //         link: '/privacypolicy'
    //     }
    // ]
  return (
    <footer  className='flex flex- item-center justify-between bg-[#232536]  text-white  p-5 z-20'>
           

        <section className="container mx-auto flex flex-col gap-3">
            <div className="text-sm flex flex-col gap-2">
                <p>Finstreet 118 2561 Fintown</p>
                <p>Hello@finsweet.com  020 7993 2905 </p>
            </div>
            <div className="w-80 border-b border-gray-300"></div>
            <div className="logo">
                <Link to='/'>
                    <h2 className="font-bold text-xl md:text-2xl lg:xl:2xl:text-3xl">
                    &#123;Finsweet
                    </h2>
                </Link>
            </div>
            <div className="icon-flex">

            </div>
        </section>
    </footer>
  )
}

export default Footer