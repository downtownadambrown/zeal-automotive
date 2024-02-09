'use client'
import Link from "next/link"
import { Barlow_Semi_Condensed } from 'next/font/google'
import { FaCircleCheck } from "react-icons/fa6";
import blurbs from "./blurbs";

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })

const FloatingContent = () => (
  <div className="flex h-36 w-48 bg-blue-500 bg-opacity-50 justify-center self-center justify-self-end mr-12">
    <button>Request a Quote!</button>
  </div>
);

const MainBanner = () => {
  return (
    <div className="banner-image grid h-96 hmore w-full content-center">
      {false ? <FloatingContent /> : null}
    </div>
  )
};

const SectionContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode,
  className?: string,
}) => (
  <div className={`section-container flex flex-col items-center ${className}`}>
    {children}
  </div>
)

const InfoSection = () => {
  return (
    <div className="w-full flex h-96 sm:h-72 bg-white text-black justify-center">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-2/3 md:w-1/2`}>
        <div className="mb-4 font-bold text-3xl">
          Your Local Automotive Specialist
        </div>
        <div className="text-center">
          Located in Acworth GA, Zeal Automotive is your one-stop shop for automotive maintenance, paint protection, alignment, and performance enhancements in metro Atlanta Georgia.  We have a proven history providing quality services to the community to keep you on the road.  Our expertise -- combined with the best technologies -- ensures you reliability at competitive prices.
        </div>
      </div>
    </div>
  );
}

const ServiceBox = ({ className, text, subtext }: { className: string; text: string; subtext: string; }) => (
  <div className="flex flex-col mx-8 w-full h-full py-8">
    <div className={`mb-4 h-full ${className}`} />
    <div className="text-center text-2xl uppercase">
      {text}
    </div>
    <div className="text-center text-md whitespace-nowrap">
      {subtext}
    </div>
  </div>
)

const ServicesSection = () => {
  return (
    <div className="w-full flex h-96 bg-zinc-600 justify-center">
      <div className={`flex flex-col md:flex-row h-full sm:w-full md:w-3/4 justify-center items-center ${barlow.className}`}>
        <ServiceBox className="maintenance-image" text="Maintenance" subtext="All Makes and Models" />
        <ServiceBox className="alignment-image" text="Wheel Alignment" subtext="In-house state of the art equipment" />
        <ServiceBox className="performance-image" text="Performance" subtext="Upgrade your vehicle" />
      </div>
    </div>
  )
}

const PPFSection = () => {
  return (
    <div className="w-full flex h-120 justify-center bg-gray-300 text-black">
      <div className={`flex flex-row justify-center items-center ${barlow.className} sm:w-full lg:w-3/4`}>
        <div className="flex ppf-image w-full mr-8 h-108" />
        <div className="flex flex-col w-full h-72 justify-center">
          <div className="text-2xl">OUR COMPLETE CAR PAINT PROTECTION SERVICES</div>
          <ul className="list-disc ml-8 mt-4">
            <li className="mb-2">polished the car to remove defects and superficial scratches from its finish</li>
            <li className="mb-2">ceramic coating was applied to both the wheels and calipers</li>
            <li className="mb-2">the hood, front bumper, fenders, and rocker panels were wrapped with YOUR BRAND paint protection film PPF (Clear Bra)</li>
            <li className="mb-2">the headlights were wrapped in YOUR BRAND</li>
            <li className="mb-2">the remaining paintwork and exterior glass (without PPF) received our ?? coating service.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

const WhyChooseZealSection = () => {


  const WhyZealBlurb = ({ title, description }: { title: string; description: string;}): JSX.Element => (
    <div className="flex w-full h-full p-4">
    <div className="w-1/4 flex justify-center mt-1"><FaCircleCheck color="grey" size={24} /></div>
    <div className="w-3/4 flex flex-col">
      <div className="flex w-full text-2xl uppercase">{title}</div>
      <div className="flex w-full">{description}</div>
    </div>
  </div>
  )

  const BlurbRow = ({ children }: { children: React.ReactNode; }): JSX.Element => (
    <div className="flex w-full flex-col">
      <div className="flex flex-row w-full">
        {children}
      </div>
    </div>
  )

  return (
    <div className="flex w-full justify-center bg-white text-black p-6">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-3/4`}>
        <div className="flex w-full justify-center text-3xl uppercase mb-6">
          Why Choose Zeal Automotive?
        </div>
        {blurbs.map((blurb, index) => {
          if (index % 2 == 0) {
            const nextBlurb = blurbs[index + 1];
            return (
              <BlurbRow key={index}>
                <WhyZealBlurb
                  title={blurb.title}
                  description={blurb.description}
                />
                <WhyZealBlurb
                  title={nextBlurb.title}
                  description={nextBlurb.description}
                />
              </BlurbRow>
            )
          }
        })}
      </div>
    </div>
  );
}

const CallOrEmailSection = () => {
  return (
    <div className="flex w-full h-96 justify-center bg-blue-500 text-white">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-2/3`}>
        <div className="flex text-gray-800 text-4xl uppercase pb-6">Call or Email Us Today!</div>
        <div className="flex text-white text-3xl pb-6">678-402-8224</div>
        <button className="flex text-lg uppercase bg-gray-800 p-4">
          <Link className="h-fit" href="/contact">
            Send Us A Message
          </Link>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36 md:pt-24">
      <SectionContainer>
        <MainBanner />
        <SectionContainer>
          <InfoSection />
          <ServicesSection />
          <PPFSection />
          <WhyChooseZealSection />
          <CallOrEmailSection />
        </SectionContainer>
      </SectionContainer>
    </main>
  )
}