"use client"
import { Activity, JSX, useState } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { BgImage } from "./components/bg-image";

const bgSources = [
  '/home/background-home-desktop.jpg',
  '/destination/background-destination-desktop.jpg',
  '/crew/background-crew-desktop.jpg',
  '/technology/background-technology-desktop.jpg'
]

export default function Home() {
  const [pageNo, setPageNo] = useState(0)
  return (
    <div className="w-full grid">
      {bgSources.map((src, idx) => {
        return (
          <Activity
            key={src}
            mode={pageNo===idx ? "visible" : "hidden"}            
          >
            <BgImage src={src} />
          </Activity>
        )
      })}      
      
      
      <div className="[grid-area:1/1] z-10 flex flex-col lg:max-w-7xl lg:mx-auto w-full lg:px-10">
        <Header pageNo={pageNo} setPageNo={setPageNo}/>
        <Main pageNo={pageNo} setPageNo={setPageNo}/>
      </div>
      <div className="[grid-area:1/1] z-5 absolute h-20 top-9 right-0  w-[55%] bg-linear-to-r bg-white/5 backdrop-blur-lg"></div>
    </div>
  );
}

