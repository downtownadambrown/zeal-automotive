'use client'
import Image from 'next/image'
import banner1 from '../public/zeal-banner-1.png'
import banner2 from '../public/zeal-banner-2.png'
import banner3 from '../public/zeal-banner-3.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const MainBanner = () => {
  const [emblaRef] = useEmblaCarousel({ duration: 40, loop: true }, [Autoplay()])
  //  banner w-full flex items-center overflow-hidden justify-center bg-gray-800
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className='embla__slide'>
          <Image src={banner1} alt='' className="banner-image" />
        </div>
        <div className='embla__slide'>
          <Image src={banner2} alt='' className="banner-image"/>
        </div>
        <div className='embla__slide'>
          <Image src={banner3} alt='' className="banner-image"/>
        </div>
      </div>
    </div>
  )
};

const Section = ({ alt, className, src, reverse }: { alt: string; className?: string; src: string; reverse?: boolean }) => {
  const contentImage = (
    <div className="h-full w-3/6 bg-stone-200/50 flex items-center justify-center">
      <Image src={src} alt={alt} />
      this is where an image will fill up the entire container
    </div>
  )

  const contentSection = (
    <div className="h-full w-3/6 bg-slate-500/50 flex items-center justify-center">
      this is where some content will go
    </div>
  )
  
  const outerClassName = `section w-full flex flex-row w-full h-full mt-8 ${className}`

  return (
    <div className={outerClassName}>
      {!!reverse ? contentImage : contentSection}
      {!!reverse ? contentSection : contentImage}
    </div>
  )
}

const SectionContainer = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="section-container flex flex-col items-center">
    {children}
  </div>
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <SectionContainer>
        <MainBanner />
        <Section alt="" src="" />
        <Section alt="" src="" reverse />
        <Section alt="" src="" className="mb-8" />
      </SectionContainer>
    </main>
  )
}
