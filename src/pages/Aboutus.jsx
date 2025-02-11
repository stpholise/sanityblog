 
 import image from '../assets/bg/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
 import Authorcard from '../components/Authorcard'
import JoinTeam from '../components/JoinTeam'
 import { useFetchAuthors } from '../hooks/index' 
 import Bg1 from '../assets/bg/pexels-anna-shvets-5029919.jpg'
 import Bg2 from '../assets/bg/pexels-liza-summer-6348123.jpg'


 import Skeleton from 'react-loading-skeleton'
 import 'react-loading-skeleton/dist/skeleton.css'

const Aboutus = () => { 
    const { authors, error, loading } = useFetchAuthors() 
    
    if(error) return <h1>{error}</h1>

  return (
    <div className='container mx-auto px-4  bg-white continer  py-4  flex flex-col gap-14
            lg:px-8 lg:gap-28 lg:py-20   '>
            <section>
                <div className="flex relative  w-full 
                flex-col  container mx-auto  
                lg:h-72 lg:flex-row lg:gap-6 
              "> 
                    <div className="bg-white  static w-full px-2 z-30 
                        lg:w-[625px] lg:h-[356px]  lg:absolute lg:left-24 lg:top:8 lg:p-16
                        ">
                        <h1 className='uppercase font-bold text-lg tracking-wide lg:xl:2xl:mb-10 leading-6   text-left '>About Us</h1>
                        <h2 className='lg:text-5xl font-bold lg:leading-[64px] text-3xl'>We are a team of content writers who share their learnings</h2>
                    </div>
                    <p className="static bottom-10   w-full lg:top-10  z-30 h-fit 
                        lg:w-[477px] lg:absolute right-0 lg:h-32 text-[#6D6E76]
                    md:text-[#4C4C4C] px-4 py-4 lg:py-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            
                <section className="relative container mx-auto flex  flex-col ">
                    <img src={image} alt="" className="  object-cover
                    w-full 
                    lg:w-full lg:h-[444px] lg:block
                   " />

                    <div className="lg:absolute mb-6 md:mb-0 bg-[#FFD050] flex flex-row justify-center gap-2 lg:gap-5  items-center w-full md:w-[630px]  lg:p-5  z-30 bottom-6   lg:left-24">
                        <div className="lg:p-5   p-2">
                            <h2 className='font-bold lg:text-4xl   text-xl text-center'>12+</h2>
                            <p className='text-sm text-center lg:text-left'>Blogs Published</p>
                        </div>
                        <div className="lg:p-5   p-2">
                            <h2 className='font-bold lg:text-4xl  text-xl text-center'>18k+</h2>
                            <p className=' text-sm text-center lg:text-left'>Blogs Published</p>
                        </div>
                        <div className="lg:p-5 p-2">
                            <h2 className='font-bold lg:text-4xlc text-xl text-center'>30k+</h2>
                            <p className='text-sm text-center lg:text-left'>Blogs Published</p>
                        </div>
                    </div>
                    <div className="absolute hidden  left-24 bottom-0 lg:h-6 w-[862px] lg:flex ">
                        <div className="bg-[#592EA9] h-full w-[312px]"></div>
                        <div className="bg-[#FFD050] h-full w-[550px]"></div>
                    </div>
                </section>

             
{/* ==============================ABOUT US========================================================= */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
                <section className=" static flex lg:flex-row  flex-col container mx-auto gap-2 p-2 lg:gap-6 lg:py-16 lg:px-24 bg-[#eee6f6] ">
                    <div className="lg:max-w-[520px] w-full flex flex-col px-2 py-3 gap-2  lg:gap-6">
                        <h3 className="font-semibold uppercase text-gray-700   tracking-widest   text-2xl">Our mision</h3>
                        <h4 className='font-bold text-2xl lg:max-w-[440px]'>Creating valuable content for creatives all around the world</h4>
                        <p className='text-[#6D6E76] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    </div>
                    <div className="lg:max-w-[520px] w-full px-4 py-3 gap-2 flex flex-col lg:gap-6">
                        <h3 className="font-semibold uppercase text-gray-700   tracking-widest   text-2xl">Our Vision</h3>
                        <h4 className='font-bold text-2xl lg:max-w-[440px]'>A platform that empowers individuals to improve</h4>
                        <p className='text-[#6D6E76]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>
                    </div>
                </section>
            </section>



            <section className="flex container lg:flex-row gap-4    lg:gap-28 flex-col-reverse mx-auto lg:justify-between items-center     ">
                <div className="lg:w-[520px] gap-3  lg:gap-8 w-full flex flex-col justify-center items-start">
                    <h3 className='text-2xl lg:text-4xl font-bold'>Our team of creatives</h3>
                    <h4 className=' text-xl lg:text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-[#232536] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div>
                <div className="lg:w-[624px] lg:h-[480px] h-72 w-full relative    ">
                    <div className="lg:w-[103px] hidden md:block absolute rounded-tl-[40px] lg:h-[116px] bg-[#FFD050] lg:inset-y-1/3 lg:lg:-left-12"></div>
                    <img src={Bg1} alt=""  className='object-cover h-72 w-full lg:w-[624px] lg:h-[480px]' />
                </div>
            </section>
            <section className="flex container gap-4 flex-col mx-auto lg:flex-row  lg:gap-16 justify-between items-center ">
                <div className="lg:w-[624px] lg:h-[480px] h-72 overflow-hidden relative">
                    <div className=""></div>
                    <img src={Bg2} alt="" className='object-cover  w-full md:h-full' />
                </div>
                <div className="lg:w-[520px] gap-3  w-full flex flex-col justify-center items-start lg:gap-8">
                    <h3 className='text-2xl lg:text-4xl font-bold'>Why we started this Blog</h3>
                    <h4 className='  text-xl  lg:text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                    <p className='text-[#232536]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                </div> 
            </section>
 
  
{/* ==============================LIST OF AUTHORS================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */}
{/* =============================================================================================== */} 
            <section>
                <div className="container mx-auto  flex flex-col items-center justify-center gap-4 lg:gap-10
                 "> 
                    <h1 className='capitalize font-bold text-3xl lg:text-4xl'>List of Authors</h1>
                    <div className="category-flex flex  justify-center items-start gap-5 w-full  flex-wrap 
                     md:grid md:grid-col-2 md:justify-center    px-4 md:px-0
                    lg:grid lg:grid-cols-4 lg:gap-5 lg:justify-center
                    xl:grid xl:grid-cols-4 xl:gap-10 xl:justify-center
                    2xl:grid 2xl:grid-cols-4 2xl:px-16 2xl:gap-10 2xl:justify-center">
                        { loading ? <Skeleton count={8} height={300} /> :
                            authors.slice(0,8).map((author, index) => (
                                <Authorcard key={index} author={author} />
                            ))
                        }
                    </div>                
                </div>
            </section> 
            <JoinTeam />
 
    </div>
  )
}

export default Aboutus