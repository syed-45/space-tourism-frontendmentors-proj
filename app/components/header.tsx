import { Dispatch, JSX, SetStateAction } from "react"
import Image from "next/image"
import { NavigationLink } from "./navigation-link"

interface IHeaderProps {
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
}

const links = [
    'Home',
    'Destination',
    'Crew',
    'Technology'
]

export const Header = ({pageNo, setPageNo}: IHeaderProps):JSX.Element => {
    return (
        <header className="w-full h-20 mt-9 flex items-center gap-10">
          <Image alt="logo" src={'/shared/logo.svg'} width={1000} height={1000} className="w-9" />
          <div className="h-[0.8px] bg-gray-700/80 w-[32%] ml-20"></div>
          <nav className="flex justify-evenly grow">
            {links.map((link, num) => {
              return <NavigationLink
                          key={link} 
                          link={link}
                          num={num}
                          pageNo={pageNo}
                          onClickFn={() => setPageNo(num)}
                      />
            })}            
          </nav>
        </header>
    )
}