import { Dispatch, JSX, SetStateAction } from "react"
import Image from "next/image"

interface IMainProps {
  pageNo: number
  setPageNo: Dispatch<SetStateAction<number>>
}

export const Main = ({pageNo, setPageNo}: IMainProps):JSX.Element => {
    return (
        <main className="w-full">

        </main>
    )
}