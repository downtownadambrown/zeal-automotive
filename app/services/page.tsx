import { FC } from "react"
import { Barlow_Semi_Condensed, Karla } from 'next/font/google';
import Link from "next/link"
import type { Metadata } from 'next';

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })
const karla = Karla({ preload: false })

export const metadata: Metadata = {
  title: 'Professional Automotive Maintenance & Upgrades | Zeal Automotive | Acworth, GA',
  description: 'Zeal Automotive offers expert maintenance services, alignments, ceramic coating, paint protection film, and performance modifications. Enhance your vehicle\'s performance and appearance with our skilled technicians.',
  keywords: 'automotive maintenance, alignments, ceramic coating, paint protection film, performance modifications, Zeal Automotive, car services, vehicle upgrades',
}

const OurServices = () => (
  <div className="w-full flex bg-white text-black justify-center py-8">
    <div className={`flex flex-col justify-center items-center ${barlow.className} w-full md:w-1/2`}>
      <div className="text-2xl uppercase">
        Zeal Automotive Services
      </div>
    </div>
  </div>
)

const MaintenanceService = () => (
  <div className="w-full flex bg-gray-300 text-black justify-center" id="maintenance">
    <div className={`flex flex-col md:flex-row justify-center items-center ${barlow.className} w-full`}>
      <div className="maintenance-image h-96 md:h-72 w-full md:w-1/2" />
      <div className="flex flex-col w-full md:w-1/2 items-center py-8">
        <div className="text-2xl uppercase pb-8">
          General Maintenance
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="pr-8">
            <ul>
              <li className="pb-2">—Oil Changes</li>
              <li className="pb-2">—Tire Rotations</li>
              <li className="pb-2">—Brakes</li>
              <li className="pb-2">—Emissions Systems</li>
              <li className="pb-2">—Air Conditioning and Heat</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="pb-2">—Transmissions</li>
              <li className="pb-2">—Engine Repair and Rebuilding</li>
              <li className="pb-2">—Cooling Systems</li>
              <li className="pb-2">—Electrical</li>
              <li className="pb-2">—Interior Repair</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const AlignmentService = () => (
  <div className="w-full flex bg-white text-black justify-center" id="alignment">
    <div className={`flex flex-col-reverse md:flex-row justify-center items-center ${barlow.className} w-full`}>
      <div className="flex flex-col w-full md:w-1/2 md:h-full items-center py-8">
        <div className="text-2xl uppercase pb-8">
          Vehicle Alignments
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="">
            <ul>
              <li className="pb-2">—In-house digital alignment technology</li>
              <li className="pb-2">—Excellent turnaround time</li>
              <li className="pb-2">—Specialized technicians</li>
              <li className="">—Best in the industry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="alignment-image h-72 w-full md:w-1/2" />
    </div>
  </div>
)


const GetAQuote = () => (
  <div className="flex w-full h-64 justify-center bg-blue-500 text-white">
    <div className={`flex flex-col justify-center items-center ${barlow.className} w-2/3`}>
      <div className="flex text-gray-800 text-4xl uppercase pb-6">Call or Email Us Today!</div>
      <div className="flex text-white text-3xl pb-6">678-402-8224</div>
      <button className="flex text-lg uppercase bg-gray-800 p-4">
        <Link className="h-fit" href="?modal=true" scroll={false}>
          Get A Quote
        </Link>
      </button>
    </div>
  </div>
)

const CeramicCoatingService = () => (
  <div id="ceramic" className="w-full flex bg-gray-300 text-black justify-center">
  <div className={`flex flex-col md:flex-row justify-center items-center ${barlow.className} w-full`}>
    <div className="ceramic-corvette-image h-96 md:h-72 w-full md:w-1/2" />
    <div className="flex flex-col w-full md:w-1/2 items-center py-8">
      <div className="text-2xl uppercase pb-8">
        Ceramic Coating
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="pr-8">
          <ul>
            <li className="pb-2">—Oil Changes</li>
            <li className="pb-2">—Tire Rotations</li>
            <li className="pb-2">—Brakes</li>
            <li className="pb-2">—Emissions Systems</li>
            <li className="pb-2">—Air Conditioning and Heat</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li className="pb-2">—Transmissions</li>
            <li className="pb-2">—Engine Repair and Rebuilding</li>
            <li className="pb-2">—Cooling Systems</li>
            <li className="pb-2">—Electrical</li>
            <li className="pb-2">—Interior Repair</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
);

const PPFService = () => (
  <div id="ppf" className="w-full flex bg-white text-black justify-center">
    <div className={`flex flex-col-reverse md:flex-row justify-center items-center ${barlow.className} w-full`}>
      <div className="flex flex-col w-full md:w-1/2 md:h-full items-center py-8">
        <div className="text-2xl uppercase pb-8">
          Paint Protection Film
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="">
            <ul>
              <li className="pb-2">—In-house digital alignment technology</li>
              <li className="pb-2">—Excellent turnaround time</li>
              <li className="pb-2">—Specialized technicians</li>
              <li className="">—Best in the industry</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ppf-image h-72 w-full md:w-1/2" />
    </div>
  </div>
);

const PerformanceService = () => (
  <div id="performance" className="w-full flex bg-gray-300 text-black justify-center">
    <div className={`flex flex-col md:flex-row justify-center items-center ${barlow.className} w-full`}>
      <div className="performance-image h-96 md:h-72 w-full md:w-1/2" />
      <div className="flex flex-col w-full md:w-1/2 items-center py-8">
        <div className="text-2xl uppercase pb-8">
          Performance Modifications
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="pr-8">
            <ul>
              <li className="pb-2">—Exhaust Mufflers</li>
              <li className="pb-2">—Headers</li>
              <li className="pb-2">—High-flow Intakes</li>
              <li className="pb-2">—Fuel Systems</li>
              <li className="pb-2">—Track Suspension</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="pb-2">—Transmission Upgrades</li>
              <li className="pb-2">—Supercharger Kits</li>
              <li className="pb-2">—Turbocharger Kits</li>
              <li className="pb-2">—ECU Tuning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="pt-36 md:pt-24 flex flex-col text-black">
      <div className="services-banner-image flex h-96 w-full content-center"/>
      <OurServices />
      <MaintenanceService />
      <AlignmentService />
      <CeramicCoatingService />
      <PPFService />
      <PerformanceService />
      <GetAQuote />
    </div>
  )
}

export default page