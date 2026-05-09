"use client"
import { Activity, } from "react";
import { ResponsiveBgImages } from "./bg-image";
import { usePathname } from "next/navigation";

export const AllBgImages = () => {
    const pathname = usePathname()
    const segments = pathname.split('/')
    const currPage = segments[1] === "" ? "home" : segments[1]
    
    return (
        <>
            <Activity
                mode={currPage === "home" ? "visible" : "hidden"}
            >
                <ResponsiveBgImages src={'/assets/home/background-home'}/>
            </Activity>
            <Activity
                mode={currPage === "destination" ? "visible" : "hidden"}
            >
                <ResponsiveBgImages src={'/assets/destination/background-destination'}/>
            </Activity>
            <Activity
                mode={currPage === "crew" ? "visible" : "hidden"}
            >
                <ResponsiveBgImages src={'/assets/crew/background-crew'}/>
            </Activity>
            <Activity
                mode={currPage === "technology" ? "visible" : "hidden"}
            >
                <ResponsiveBgImages src={'/assets/technology/background-technology'}/>
            </Activity>
        </>
        
    )
}