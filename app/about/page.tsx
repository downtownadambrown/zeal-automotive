import { Metadata } from "next";
import { FC } from "react"
import { Barlow_Semi_Condensed, Karla } from 'next/font/google';
import Map from '../components/Map';

export const metadata: Metadata = {
  title: 'About Zeal Automotive | Your Trusted Car Repair Experts',
  description: 'Learn about Zeal Automotive - your trusted partner for car repairs and maintenance. Discover our commitment to excellence, experienced team, and dedication to customer satisfaction.',
  keywords: 'Zeal Automotive, about us, car repair experts, automotive maintenance, experienced team, customer satisfaction',
}

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })
const karla = Karla({ preload: false })

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="flex flex-col min-h-screen items-center pt-36 md:pt-24">
        <div className="about-banner-image flex h-120 w-full content-center"/>
        <AboutInfoSection />
        <Map />
    </main>
  )
}

const AboutInfoSection = () => {
  return (
    <div className="w-full flex bg-white text-black justify-center py-8">
      <div className={`flex flex-col justify-center items-center ${barlow.className} w-3/4 md:w-2/3`}>
        <div className="mb-4 text-2xl uppercase">
          The Zeal Automotive Mission Statement
        </div>
        <div className={`${karla.className}`}>
          <p className="pb-4">Welcome to Zeal Automotive, where we combine unrivaled expertise, cutting-edge technology, and a passion for excellence to deliver top-tier car repair and maintenance services.</p>
          <p className="pb-4">We understand that your vehicle is more than just a mode of transport—it&apos;s an essential part of your daily life. That’s why at Zeal Automotive, we are committed to keeping it running smoothly, safely, and efficiently. Whether you need a routine service, a complex repair, or a full vehicle inspection, our team of certified mechanics are equipped with the latest tools and training to handle any job, no matter the make or model.</p>
          <p className="pb-4">At Zeal Automotive, we pride ourselves on our transparency and integrity. We believe in clear communication and honest advice, ensuring that you understand the work that’s being done on your vehicle and why it’s necessary. No hidden fees, no unexpected surprises—just straightforward, professional service that puts your needs first.</p>
          <p className="pb-4">With our customer-first approach, outstanding workmanship, and comprehensive range of services, Zeal Automotive is here to take the stress out of car repair and maintenance. Trust us to keep your car performing at its best.</p>
          <p className="pb-4">Remember, a well-maintained car is a safe, reliable, and more economical car. Let Zeal Automotive be your partner in maintaining the health and performance of your vehicle.</p>
          <p className="pb-4">Key services we offer include: Car Repair, Routine Car Maintenance, Brake Service, Oil Changes, Tire Replacement and Balancing, Battery Replacement, Air Conditioning Service, and more.</p>
          <p>Visit our garage today and experience the Zeal Automotive difference!</p>
        </div>
      </div>
    </div>
  );
}

export default page