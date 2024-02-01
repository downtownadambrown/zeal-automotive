import type { Metadata } from 'next';
import Image from 'next/image';
import { Barlow_Semi_Condensed, Karla } from 'next/font/google';
import './globals.css';
import zealLogo from '../public/zeal-automotive-logo.png';
import zealLogoBlack from '../public/zeal-automotive-logo-black.png'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import Link from 'next/link'

const barlow = Barlow_Semi_Condensed({ weight: "500", preload: false })
const karla = Karla({ preload: false })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <Link href="https://www.facebook.com/ZealAutoz/">      
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/zeal_automotive/">
          <FaInstagram />
        </Link>        
        <FaYoutube />
        <FaLinkedin />
      </div>
    </div>
  )
}

export function Header(): JSX.Element {
  return (
    <header className="fixed left-0 top-0 w-full z-50 border-b-black">
      <NotificationSection />
      <div className="flex flex-row items-center w-full bg-white p-3">
        <Image
          src={zealLogo}
          alt="Zeal Automotive Logo"
          // className="dark:invert"
          width={200}
          height={24}
          priority
        />
        <nav className={`flex flex-row w-full justify-end ${barlow.className}`}>
          <ul className="animated-list flex flex-row content-center">
            <li className="mx-4 text-black">Home</li>
            <li className="mx-4 text-black">Services</li>
            <li className="mx-4 text-black">About</li>
            <li className="mx-4 text-black">Projects</li>
            <li className="mx-4 text-black">Contact</li>
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
    <div className="flex w-full bg-gray-300 justify-center py-8">
      <div className="flex flex-col w-1/4 items-center px-8">
        <Image
          src={zealLogoBlack}
          alt="Zeal Automotive Logo"
          width={200}
          height={24}
          priority
        />
      </div>
      <div className="flex flex-col w-1/4 px-8">
        <div className={`flex w-full text-xl text-gray-700 uppercase font-bold pb-8 ${barlow.className}`}>Contact Us</div>
        <div className={`flex flex-col w-full text-md text-gray-700 ${karla.className}`}>
          <div className="flex flex-col w-full">
            <div>4948 Cobb Pkwy North</div>
            <div>Acworth, GA 30101</div>
            <div className="link"><a href="tel:6784028224">(678) 402-8224</a></div>
            <div className="link"><a href="mailto:zealautoz@gmail.com">zealautoz@gmail.com</a></div>
          </div>
          <div className="flex flex-col w-full pt-4">
            <div className="flex font-bold">Hours</div>
            <div className="flex flex-row">
              <div>
                Mon—Fri:
              </div>
              <div className="pl-2">
                8am-5pm
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/4 px-8">
        <div className={`flex w-full text-xl text-gray-700 uppercase font-bold pb-8 ${barlow.className}`}>Protect your car</div>
          <div className={`flex flex-col w-full text-md text-gray-700 ${karla.className}`}>
            - site links
          </div>
        </div>
        <div className="flex flex-col w-1/4 px-8 items-center">
        <div className={`flex w-full justify-center text-xl text-gray-700 uppercase font-bold pb-8 ${barlow.className}`}>
          Follow Us
        </div>
        <div className="link flex flex-row w-full justify-center">
          <div className="p-4">
            <Link href="https://www.facebook.com/ZealAutoz/">      
              <FaFacebookF size={18} />
            </Link>
          </div>
          <div className="link p-4">
            <Link href="https://www.instagram.com/zeal_automotive/">
              <FaInstagram size={18} />
            </Link>
          </div>
          <div className="link p-4">
            <FaYoutube size={18} />
          </div>
          <div className="link p-4">
            <FaLinkedin size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BulkyFooter />
        <Footer />
      </body>
    </html>
  )
}
