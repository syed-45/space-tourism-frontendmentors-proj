"use client"
import { Activity, } from "react";
import { BgImage } from "./bg-image";
import { usePathname } from "next/navigation";

const bgSources = {
    'home': '/home/background-home-desktop.jpg',
    'destination': '/destination/background-destination-desktop.jpg',
    'crew': '/crew/background-crew-desktop.jpg',
    'technology' : '/technology/background-technology-desktop.jpg'
}

export const AllBgImages = () => {
    const pathname = usePathname()
    const segments = pathname.split('/')
    const currPage = segments[1] === "" ? "home" : segments[1]
    
    return (
        <>
            <Activity
                mode={currPage === "home" ? "visible" : "hidden"}
            >
                <BgImage src={bgSources[currPage as keyof typeof bgSources]}/>
            </Activity>
            <Activity
                mode={currPage === "destination" ? "visible" : "hidden"}
            >
                <BgImage src={bgSources[currPage as keyof typeof bgSources]}/>
            </Activity>
            <Activity
                mode={currPage === "crew" ? "visible" : "hidden"}
            >
                <BgImage src={bgSources[currPage as keyof typeof bgSources]}/>
            </Activity>
            <Activity
                mode={currPage === "technology" ? "visible" : "hidden"}
            >
                <BgImage src={bgSources[currPage as keyof typeof bgSources]}/>
            </Activity>
        </>
        
    )
}