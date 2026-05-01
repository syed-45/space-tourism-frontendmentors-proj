import Image from "next/image";
import { JSX } from "react";


export default function Home() {
  return (
    <div className="w-full grid">
      <Image src={'/home/background-home-desktop.jpg'} width={99999} height={99999} className="[grid-area:1/1] w-full h-screen object-cover hidden lg:block" alt="bg-desktop"/>
      <div className="[grid-area:1/1] flex flex-col lg:max-w-7xl lg:mx-auto w-full lg:px-10">
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

const Header = ():JSX.Element => {
    return (
        <header className="w-full mt-12 flex items-center">
            <Image src={'/shared/logo.svg'} width={1000} height={1000} className="w-12" alt="logo"/>
            <div className="min-h-0.5 max-h-0.5 bg-white w-full ml-20"></div>
        </header>
    )
}

const Main = ():JSX.Element => {
    return (
        <main className="w-full">

        </main>
    )
}