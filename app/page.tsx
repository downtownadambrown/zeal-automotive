'use client'
import Link from "next/link"
import { Barlow_Semi_Condensed } from 'next/font/google'
import { FaCircleCheck } from "react-icons/fa6";
import blurbs from "./blurbs";
import Image from 'next/image';
import zealLogo from '../public/zeal-automotive-logo.png';

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
    <div className="w-full flex h-96 sm:h-80 bg-white text-black justify-center">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-2/3 md:w-1/2`}>
        <Image
          src={zealLogo}
          alt="Zeal Automotive Logo"
          className="pb-4"
          width={400}
          height={48}
          priority
        />
        <div className="mb-4 font-bold text-xl md:text-3xl">
          Your Local Automotive Specialist
        </div>
        <div className="text-center">
          Located in <span className="font-bold">Acworth GA</span>, Zeal Automotive is your one-stop shop for automotive maintenance, paint protection, alignment, and performance enhancements in metro Atlanta Georgia.  We have a proven history providing quality services to the community to keep you on the road.  Our expertise -- combined with the best technologies -- ensures you reliability at competitive prices.
        </div>
      </div>
    </div>
  );
}

const ServiceBox = ({ className, href, text, subtext }: { className: string; href: string; text: string; subtext: string; }) => (
  <div className="flex flex-col mx-8 w-full h-full py-8">
    <div className={`mb-4 h-full ${className}`} />
    <Link href={href}>
      <div className="text-center text-2xl uppercase">
        {text}
      </div>
      <div className="text-center text-md whitespace-nowrap">
        {subtext}
      </div>
    </Link>
  </div>
)

const ServicesSection = () => {
  return (
    <div className="w-full flex h-96 bg-zinc-600 justify-center">
      <div className={`flex flex-col md:flex-row h-full sm:w-full md:w-3/4 justify-center items-center ${barlow.className}`}>
        <ServiceBox className="maintenance-image" href="/services#maintenance" text="Maintenance" subtext="All Makes and Models" />
        <ServiceBox className="alignment-image" href="/services#alignment" text="Wheel Alignment" subtext="In-house state of the art equipment" />
        <ServiceBox className="performance-image" href="/services#performance" text="Performance" subtext="Upgrade your vehicle" />
      </div>
    </div>
  )
}

const PPFSection = () => {
  return (
    <div className="w-full flex justify-center bg-gray-300 text-black p-4">
      <div className={`flex flex-col md:flex-row justify-center items-center ${barlow.className} w-full`}>
        <div className="flex ppf-image w-full md:mr-8 md:h-full" />
        <div className="flex flex-col w-full justify-center p-8 md:p-0 items-center md:items-start">
          <div className="text-2xl uppercase mb-4">Our Complete Paint Protection Services</div>
          <p className="mb-4">Transform your vehicle with our premier detailing and paint protection services.</p>
          <p className="">With an unprecedented level of care, our experienced technicians provide high-quality service to enhance your car&apos;s appearance inside and out. Our tailored services include <span className="font-bold">paint protection film, ceramic coatings, paint correction, and restoration details</span> to ensure a meticulous finish. Trust our expertise combined with our specialized equipment to deliver the ultimate aesthetic upgrade your vehicle deserves
          </p>
        </div>
      </div>
    </div>
  )
}

const WhyChooseZealSection = () => {
  const WhyZealBlurb = ({ title, description }: { title: string; description: string;}): JSX.Element => (
    <div className="flex w-full h-full p-2 md:p-4">
    <div className="w-1/4 flex justify-center mt-1"><FaCircleCheck color="grey" size={24} /></div>
    <div className="w-3/4 flex flex-col">
      <div className="flex w-full text-xl md:text-2xl uppercase">{title}</div>
      <div className="flex w-full text-sm md:text-md">{description}</div>
    </div>
  </div>
  )

  const BlurbRow = ({ children }: { children: React.ReactNode; }): JSX.Element => (
    <div className="flex w-full flex-col">
      <div className="flex flex-col md:flex-row w-full">
        {children}
      </div>
    </div>
  )

  return (
    <div className="flex w-full justify-center bg-white text-black p-2 md:p-6">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-full md:w-3/4`}>
        <div className="flex w-full justify-center text-2xl md:text-3xl uppercase md:mb-6 text-center">
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
          <Link className="h-fit" href="?modal=true" scroll={false}>
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