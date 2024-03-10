import { Metadata } from "next";
import { FC } from "react"
import { Barlow_Semi_Condensed, Karla } from 'next/font/google';
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Zeal Automotive | Get in Touch for Expert Car Repairs',
  description: 'Need car repairs or maintenance? Contact Zeal Automotive today. Fill out our contact form to schedule an appointment with our experienced mechanics. Your trusted partner for automotive services.',
  keywords: 'contact Zeal Automotive, car repairs, automotive maintenance, mechanic, schedule appointment, automotive services',
}

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })
const karla = Karla({ preload: false })

const ContactBox = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="flex flex-row md:flex-col w-full md:w-1/4 sm:justify-between md:justify-start md:items-center px-24 md:px-0 pb-16 md:pb-0">
    <div className="flex uppercase md:pb-4 sm:align-middle items-center md:justify-center pr-8 md:pr-0 w-1/2 md:w-full text-3xl md:text-2xl">{title}</div>
    <div className="flex flex-col xs:w-1/2 md:w-full md:justify-center md:items-center text-2xl md:text-base">
      {children}
    </div>
  </div>
)

const BlueContactSection = () => (
  <div className="flex flex-col md:flex-row w-full justify-between bg-blue-500 text-white md:px-16 lg:px-16 py-8">
    <ContactBox title="Address">
      <div>4948 Cobb Pkwy North</div>
      <div>Acworth, GA 30101</div>
    </ContactBox>
    <ContactBox title="Telephone">
      <a className="white-link hover-black" href="tel:6784028224">(678) 402-8224</a>
    </ContactBox>
    <ContactBox title="Email">
      <a className="white-link hover-black" href="mailto:zealautoz@gmail.com">zealautoz@gmail.com</a>
    </ContactBox>
    <ContactBox title="Business Hours">
      <div>Monday—Friday</div>
      <div>8:00am—5:00pm</div>
    </ContactBox>
  </div>
)

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className={`flex flex-col text-black ${barlow.className}`}>
      <div className="contact-banner-image flex h-120 w-full content-center"/>
      <BlueContactSection />
      <ContactForm />
    </div>
  )
}

export default page