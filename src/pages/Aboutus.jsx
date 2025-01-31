 
 import image from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
 import Authorcard from '../components/Authorcard'
import JoinTeam from '../components/JoinTeam'
 import { useFetchAuthors } from '../hooks/index'
 import Icon from '../components/Icon'

const Aboutus = () => { 
    const { authors, error, loading } = useFetchAuthors()
    
  
    if (loading) return  <Icon />
    if(error) return <h1>{error}</h1>

  return (
    <div className='static'>

        <div className="flex relative lg:xl:2xl:flex-row flex-col  container mx-auto lg:xl:2xl:gap-5 lg:xl:2xl:h-72 "> 
            <div className="bg-gray-100 lg:xl:w-[534px] 2xl:w-[534px] lg:xl:2xl:h-80 lg:xl:absolute 2xl:absolute xl:left-10 xl:top-5 left-20 top-10 lg:xl:2xl:p-10 px-4 z-30 static w-full">
                <h1 className='uppercase font-bold text-lg tracking-wide lg:xl:2xl:mb-10   text-left mt-5'>About Us</h1>
                <h2 className='lg:xl:2xl:text-3xl text-xl'>We are a team of content writers who share their learnings</h2>
            </div>
            <p className="lg:xl:w-6/12 2xl:w-6/12 w-full lg:xl:absolute xl:top-10 xl:bg-gray-400 z-30 h-fit xl:text-white 2xl:absolute static bottom-10 right-10 text-gray-500 lg:xl:2xl:p-5 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
       
            <section className="relative container mx-auto flex  ">
                <img src={image} alt="" className="hidden lg:block xl:block 2xl:block lg:w-full xl:w-full 2xl:w-full lg:h-[444px] xl:h-[444px] 2xl:h-[444px] object-cover" />

                <div className="lg:absolute xl:absolute 2xl:absolute bg-yellow-400 flex flex-row justify-center max-w-[1000px] gap-2 lg:gap-5 xl:gap-5 2xl:gap-5 items-center w-full   lg:p-5 xl:p-5 2xl:p-5 z-30 bottom-3 left-20">
                    <div className="lg:p-5 xl:p-5 2xl:p-5 p-2">
                        <h2 className='font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl text-center'>12+</h2>
                        <p className='text-sm'>Blogs Published</p>
                    </div>
                    <div className="lg:p-5 xl:p-5 2xl:p-5 p-2">
                        <h2 className='font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl text-center'>18k+</h2>
                        <p>Blogs Published</p>
                    </div>
                    <div className="lg:xl:2xl:p-5 p-2">
                        <h2 className='font-bold lg:text-4xl xl:text-4xl 2xl:text-4xl text-2xl text-center'>30k+</h2>
                        <p>Blogs Published</p>
                    </div>
                </div>
            </section>

            <section className=" static flex lg:flex-row xl:flex-row 2xl:flex-row flex-col container mx-auto gap-2 p-2 lg:xl:2xl:gap-5 lg:xl:2xl:p-20 bg-[#eee6f6] mb-10">
                <div className="lg:xl:2xl:w-6/12 w-full px-3">
                    <h3 className="font-bold text-gray-700 mt-5 lg:xl:2xl:mb-7 mb-3 tracking-widest capitalize  text-2xl">About Us</h3>
                    <h4>Creating valuable content for creatives all around the world</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
                <div className="lg:xl:2xl:w-6/12 w-full px-3">
                    <h3 className="font-bold text-1 text-gray-700 mt-5 lg:xl:2xl:mb-7 mb-3 tracking-widest capitalize  text-2xl">Our Vision</h3>
                    <h4>A platform that empowers individuals to improve</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                </div>
            </section>
 
            <section className="flex container lg:flex-row xl:flex-row 2xl:flex-row p-3 flex-col-reverse mx-auto justify-between items-center lg:xl:2xl:gap-10 gap-3  lg:xl:2xl:my-14 my-4">
                <div className="lg:xl:2xl:w-6/12 w-full">
                    <h3 className='text-2xl'>Our team of creatives</h3>
                    <h4 className='my-2 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
                <div className="">
                    <div className=""></div>
                    <img src="" alt="" />
                </div>
            </section>
            <section className="flex container p-3 flex-col mx-auto lg:flex-row xl:flex-row 2xl:flex-row lg:gap-10 xl:gap-10 2xl:gap-10 gap-4 justify-between items-center lg:xl:2xl:my-14 my-4">
                <div className="">
                    <div className=""></div>
                    <img src="" alt="" />
                </div>
                <div className="lg:xl:2xl:w-6/12 w-full">
                    <h3 className='text-2xl my-2'>Why we started this Blog</h3>
                    <h4 className='text-lg my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div> 
            </section>
 
            <section>
                <div className="container mx-auto my-10 flex flex-col items-center justify-center gap-2 "> 
                    <h1 className='capitalize my-5 font-bold text-4xl'>List of Authors</h1>
                    <div className="category-flex flex  justify-center items-start gap-5 w-full px-2 lg:xl:2xl:px-16 flex-wrap">
                        {
                            authors.slice(0,8).map((author, index) => (
                                <Authorcard key={index} author={author} />
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