import type { Metadata } from 'next';
import Image from 'next/image';
import { Barlow_Semi_Condensed, Karla } from 'next/font/google';
import './globals.css';
import zealLogo from '../public/zeal-automotive-logo.png';
import zealLogoBlack from '../public/zeal-automotive-logo-black.png'
import suntekLogo from '../public/suntek-logo.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Link from 'next/link'
import LinkedListItem from './components/LinkedListItem';
import Modal from './components/Modal';

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })
const karla = Karla({ preload: false })

export const metadata: Metadata = {
  title: 'Zeal Automotive | Your Local Automotive Repair Alignments and Service | Acworth, Georgia',
  description: 'Get reliable automotive repair services in Acworth, Georgia at Zeal Automotive. Our experienced mechanics offer expert solutions for all your car repair needs. Call us today!',
}

export function NotificationSection(): JSX.Element {
  return (
    <div className={`flex w-full flex-col sm:flex-col md:flex-row h-28 sm:h-28 md:h-8 bg-blue-400 w-full justify-center items-center md:items-center md:justify-between px-16 ${karla.className}`}>
      <div className="flex flex-col sm:flex-col md:flex-row w-100 justify-evenly text-md md:text-sm">
        <div className="flex flex-row pr-0 sm:pr-4 md:pr-4">Call Us Today!</div>
        <div className="flex flex-row pr-0 sm:pr-4 md:pr-4">(678) 402-8224</div>
        <div className="flex flex-row">
          <a href="mailto:zealautoz@gmail.com">
            zealautoz@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly w-72 md:w-36 my-1">
        <Link className="hover-black" href="https://www.facebook.com/ZealAutoz/">      
          <FaFacebookF />
        </Link>
        <Link className="hover-black" href="https://www.instagram.com/zeal_automotive/">
          <FaInstagram />
        </Link>
        <Link className="hover-black" href="#">
          <FaYoutube />
        </Link>
        <Link className="hover-black" href="#">
          <FaLinkedin />
        </Link>        
      </div>
    </div>
  )
}

export function Header(): JSX.Element {
  return (
    <header className="fixed left-0 top-0 w-full z-50 border-b-black">
      <NotificationSection />
      <div className="flex flex-col md:flex-row items-center w-full bg-white p-3">
        <Image
          src={zealLogo}
          alt="Zeal Automotive Logo"
          // className="dark:invert"
          width={200}
          height={24}
          priority
        />
        <nav className={`flex flex-col md:flex-row w-full justify-end ${barlow.className}`}>
          <ul className="animated-list flex flex-row content-center items-center self-center">
            <li className="mx-4 text-black text-2xl md:text-xl">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="mx-4 text-black text-2xl md:text-xl">
              <Link href="/services">
                Services
              </Link>
            </li>
            <li className="mx-4 text-black text-2xl md:text-xl">
              <Link href="/about">
                About
              </Link>
            </li>
            {/*<li className="mx-4 text-black">
              <Link href="/projects">
                Projects
              </Link>
            </li>*/}
            <li className="mx-4 text-black text-2xl md:text-xl">
              <Link href="/contact">
                Contact
              </Link>            
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function Footer(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <footer className="footer w-full h-16 text-white flex justify-center items-center text-xs">
      <>
        {`© Copyright ${year} | Zeal Automotive | All Rights Reserved`}
      </>
    </footer>
  );
}

export function BulkyFooter(): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row w-full items-center bg-gray-300 justify-center md:py-8">
      <div className="flex flex-col w-full md:w-1/4 items-center px-8 justify-center py-8">
        <Image
          src={zealLogoBlack}
          alt="Zeal Automotive Logo"
          width={200}
          height={24}
          priority
        />
        <div className="h-12"/>
        <Image
          src={suntekLogo}
          alt="SunTek Logo"
          width={200}
          height={24}
          priority
        />
      </div>
      <div className="flex flex-col w-100 md:w-1/4 px-8">
        <div className={`flex w-full text-xl text-gray-700 uppercase font-bold pb-0 md:pb-4 justify-center ${barlow.className}`}>Contact Us</div>
        <div className={`flex flex-col w-full text-md text-gray-700 ${karla.className}`}>
          <div className="flex flex-col w-full items-center">
            <div>4948 Cobb Pkwy North</div>
            <div>Acworth, GA 30101</div>
            <a className="link hover-black" href="tel:6784028224">(678) 402-8224</a>
            <a className="link hover-black" href="mailto:zealautoz@gmail.com">zealautoz@gmail.com</a>
          </div>
          <div className="flex flex-col w-full pt-4 items-center">
            <div className="flex font-bold">Hours</div>
            <div className="flex flex-row">
              <div>
                Mon—Fri:
              </div>
              <div className="pl-2">
                8am—5pm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col w-full md:w-1/4 px-8 pt-4 md:pt-0 items-center">
        <div className="md:pb-8 w-1/2 md:w-full">
          <div className={`flex w-full text-xl text-gray-700 uppercase content-center font-bold ${barlow.className}`}>
            Service your car
          </div>
          <div className={`flex flex-col w-full text-md text-gray-700 ${karla.className}`}>
            <ul className="self-center">
              <LinkedListItem href="/services#maintenance" text="— Maintenance"/>
              <LinkedListItem href="/services#alignment" text="— Alignment"/>
              <LinkedListItem href="/services#performance" text="— Performance Upgrades"/>
            </ul>
          </div>
        </div>
        <div className="w-1/2 md:w-full">
          <div className={`flex w-full text-xl text-gray-700 uppercase font-bold justify-center ${barlow.className}`}>
            Protect your car
          </div>
          <div className={`flex flex-col w-full text-md text-gray-700 ${karla.className}`}>
            <ul className="self-center">
              <LinkedListItem href="/services#ppf" text="— Paint Protection Film"/>
              <LinkedListItem href="/services#paintcorrection" text="— Paint Correction Services"/>
              <LinkedListItem href="/services#ceramic" text="— Ceramic Coating"/>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 md:w-1/4 px-8 items-center">
        <div className={`flex w-full justify-center text-xl text-gray-700 uppercase font-bold md:pb-8 ${barlow.className}`}>
          Follow Us
        </div>
        <div className="flex flex-row w-full justify-center">
          <div className="link hover-black p-4">
            <Link href="https://www.facebook.com/ZealAutoz/">      
              <FaFacebookF size={24} />
            </Link>
          </div>
          <div className="link hover-black p-4">
            <Link href="https://www.instagram.com/zeal_automotive/">
              <FaInstagram size={24} />
            </Link>
          </div>
          <div className="link hover-black p-4">
            <FaYoutube size={24} />
          </div>
          <div className="link hover-black p-4">
            <FaLinkedin size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BulkyFooter />
        <Footer />
        <Modal />
      </body>
    </html>
  )
}
