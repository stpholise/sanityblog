 
 import image from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
 import Authorcard from '../components/Authorcard'
import JoinTeam from '../components/JoinTeam'


const Aboutus = () => {
    const categories = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  return (
    <div className='static'>

        <div className="flex relative  container mx-auto gap-5 h-72 "> 
            <div className="bg-gray-100 w-[534px] h-80 absolute left-20 top-10 p-10 z-30">
                <h1 className='uppercase font-bold text-lg tracking-wide mb-10  text-left mt-5'>About Us</h1>
                <h2>We are a team of content writers who share their learnings</h2>
            </div>
            <p className="w-6/12  absolute bottom-10 right-10 text-gray-500 p-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
       
            <section className="relative container mx-auto ">
                <img src={image} alt="" className="w-full h-[444px] object-cover" />

                <div className="absolute bg-yellow-400 flex gap-5 items-center p-4 z-30 bottom-3 left-20">
                    <div className="p-5">
                        <h2 className='font-bold'>12+</h2>
                        <p>Blogs Published</p>
                    </div>
                    <div className="p-5">
                        <h2 className='font-bold'>18k+</h2>
                        <p>Blogs Published</p>
                    </div>
                    <div className="p-5">
                        <h2 className='font-bold'>30k+</h2>
                        <p>Blogs Published</p>
                    </div>
                </div>
            </section>

            <section className=" static flex container mx-auto gap-5 p-20 bg-[#eee6f6] mb-10">
                <div className="w-6/12 px-3">
                    <h3 className="font-bold text-1 text-gray-700 mt-5 mb-7 tracking-widest capitalize  text-2xl">About Us</h3>
                    <h4>Creating valuable content for creatives all around the world</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
                <div className="w-6/12 px-3">
                    <h3 className="font-bold text-1 text-gray-700 mt-5 mb-7 tracking-widest capitalize  text-2xl">Our Vision</h3>
                    <h4>A platform that empowers individuals to improve</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
            </section>

            <section className="flex container mx-auto justify-between items-center gap-10 my-14">
                <div className="w-6/12">
                    <h3 className='text-2xl'>Our team of creatives</h3>
                    <h4 className='my-2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
                <div className="">
                    <div className=""></div>
                    <img src="" alt="" />
                </div>
            </section>
            <section className="flex container mx-auto gap-10 justify-between items-center my-14">
                <div className="">
                    <div className=""></div>
                    <img src="" alt="" />
                </div>
                <div className="w-6/12">
                    <h3 className='text-2xl my-2'>Why we started this Blog</h3>
                    <h4 className='text-lg my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div> 
            </section>
 
            <section>
                <div className="container mx-auto my-15 flex flex-col items-center justify-center gap-2 "> 
                    <h1 className='capitalize my-5 font-bold text-4xl'>List of Authors</h1>
                    <div className="category-flex flex  justify-center items-start gap-5 w-full px-16 flex-wrap">
                        {
                            categories.slice(0,8).map((category, index) => (
                                <Authorcard key={index} category={category} />
                            ))
                        }
                    </div>                
                </div>
            </section>
<div className="section my-16">
            <JoinTeam />

</div>
 
    </div>
  )
}

export default Aboutus