"use client"
import { JSX } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const Header = ():JSX.Element => {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currPage = segments[1] === "" ? "home" : segments[1]
          
    return (
        <header className="w-full h-20 mt-9 flex items-center gap-10">
          <Image alt="logo" src={'/assets/shared/logo.svg'} width={1000} height={1000} className="w-9" />
          <div className="h-[0.8px] bg-gray-700/80 w-[32%] ml-20"></div>
          <nav className="flex justify-evenly grow">
            <Link
              href={"/"}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40 `}
            >
                <span className="font-bold">00</span>    {"HOME"}
                <div className={`${currPage === "home" ? 'opacity-100 translate-0' : ""} absolute top-[47px] left-1/2 -translate-x-1/2 w-full h-[2.5px] transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/destination/moon"}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">01</span>    {"DESTINATION"}
                <div className={`${currPage === "destination" ? 'opacity-100 translate-0' : ""} absolute top-[47px] left-1/2 -translate-x-1/2 w-full h-[2.5px] transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/crew"}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">02</span>    {"CREW"}
                <div className={`${currPage === "crew" ? 'opacity-100 translate-0' : ""} absolute top-[47px] left-1/2 -translate-x-1/2 w-full h-[2.5px] transition duration-300 bg-white opacity-0`}></div>
            </Link>
            <Link 
              href={"/technology"}
              className={`text-sm cursor-pointer tracking-widest font-Barlow-Condensed relative hover:[&>div]:opacity-40`}
            >
                <span className="font-bold">03</span>    {"TECHNOLOGY"}
                <div className={`${currPage === "technology" ? 'opacity-100 translate-0' : ""} absolute top-[47px] left-1/2 -translate-x-1/2 w-full h-[2.5px] transition duration-300 bg-white opacity-0`}></div>
            </Link>           
          </nav>
        </header>
    )
}