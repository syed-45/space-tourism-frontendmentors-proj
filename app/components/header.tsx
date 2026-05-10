"use client"
import { JSX, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = ():JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currPage = segments[1] === "" ? "home" : segments[1]
          
    return (
        <header className="w-full h-20 max-sm:mt-4 lg:mt-9 flex items-center lg:gap-10 p-7 sm:px-0 lg:p-0 justify-between lg:justify-start">
          <Link
            href={'/'}            
          >
            <Image alt="logo" src={'/assets/shared/logo.svg'} width={1000} height={1000} className="max-lg:w-11 lg:w-19 sm:mx-7 lg:mx-0" />
          </Link>
          <button
            className="sm:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Image alt="icon-hamburger" src={'/assets/shared/icon-hamburger.svg'} width={1000} height={1000} className="w-9" />
          </button>
          <div className="h-[0.8px] bg-gray-700/80 w-[72%] ml-20 hidden lg:block"></div>
          <nav 
          className={`starting:translate-x-40 starting:opacity-0 transition transition-discrete duration-400 ease-out absolute z-40 w-7/10 min-h-full top-0 right-0 backdrop-blur-2xl flex flex-col gap-9 pl-6
            sm:backdrop-blur-none sm:bg-white/5 sm:w-full sm:static sm:min-h-0 sm:flex-row sm:py-10 sm:px-8 sm:gap-10 sm:justify-end sm:translate-x-0 sm:grow lg:bg-transparent lg:justify-start lg:p-0 lg:pl-10 ${isMobileMenuOpen ? "flex translate-x-0 opacity-100" : "opacity-0 hidden sm:flex sm:opacity-100 translate-x-40"}`
          }>
              <div className="pt-11 mb-18 flex justify-end mr-8 sm:hidden">
                <button
                  className=""
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image alt="icon-close" src={'/assets/shared/icon-close.svg'} width={1000} height={1000} className="w-6" />
                </button>
              </div>
            <Link
              href={"/"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40 `}
            >
                <span className="font-bold">00</span>    {"HOME"}
                <div className={`${currPage === "home" ? 'opacity-100 translate-0' : ""} absolute sm:top-11.75 sm:left-1/2 -translate-x-1/2 sm:w-full sm:h-[2.5px] w-1 h-full top-0 right-0 transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/destination/moon"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">01</span>    {"DESTINATION"}
                <div className={`${currPage === "destination" ? 'opacity-100 translate-0' : ""} absolute sm:top-11.75 sm:left-1/2 -translate-x-1/2 sm:w-full sm:h-[2.5px] w-1 h-full top-0 right-0 transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/crew/douglas-hurley"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">02</span>    {"CREW"}
                <div className={`${currPage === "crew" ? 'opacity-100 translate-0' : ""} absolute sm:top-11.75 sm:left-1/2 -translate-x-1/2 sm:w-full sm:h-[2.5px] w-1 h-full top-0 right-0 transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/technology"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">03</span>    {"TECHNOLOGY"}
                <div className={`${currPage === "technology" ? 'opacity-100 translate-0' : ""} absolute sm:top-11.75 sm:left-1/2 -translate-x-1/2 sm:w-full sm:h-[2.5px] w-1 h-full top-0 right-0 transition duration-300 bg-white opacity-0`}></div>
            </Link>           
          </nav>
        </header>
    )
}