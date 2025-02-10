import { useEffect,  } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Logo1 from '../assets/sponsorsLogo/Logo 1.svg';
import Logo2 from '../assets/sponsorsLogo/Logo 2.svg';
import Logo3 from '../assets/sponsorsLogo/Logo 3.svg';
import Logo4 from '../assets/sponsorsLogo/Logo 4.svg';
import Logo5 from '../assets/sponsorsLogo/Logo 5.svg';

const EmblaCarouselEx = () => {
    const [emblaRef, emblaApi ] = useEmblaCarousel({loop: true, align: 'start', duration:3500, skipSnaps: true, slidesToScroll:'auto',   }, [Autoplay({delay:5000})])
   

      useEffect(() => {
        if (emblaApi) emblaApi.on('slidesInView',)
        if (emblaApi) {
            emblaApi.scrollNext(true)
             
        }
      }, [emblaApi, ])
    
  return (
    <div  className="embla container mx-auto  h-20 w-full flex items-center justify-center  " ref={emblaRef}>
        <div className="embla__container flex w-full h-16 items-center gap-8 lg:gap-16">
        <div className="embla__slide flex-shrink-0 ml-12">
          <img src={Logo1} alt="Logo 1"  className='object-cover'/>
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo2} alt="Logo 2" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo3} alt="Logo 3" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo3} alt="Logo 3" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo4} alt="Logo 4" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo4} alt="Logo 4" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo4} alt="Logo 4" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo5} alt="Logo 5" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo5} alt="Logo 5" />
        </div>
        <div className="embla__slide flex-shrink-0">
          <img src={Logo5} alt="Logo 5" />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarouselEx