"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import spaceData from "@/starter-code/data.json"
import { AllDestinationImages } from "./all-destination-images"
const destinations = spaceData['destinations']

export const DestinationInfo = () => {
    const pathname = usePathname()
    const segments = pathname.split('/')
    const destinationName = ['moon','mars','europa','titan'].includes(segments[2].toLowerCase()) ? segments[2].toLowerCase() : "moon" 
    const currDestination = destinations.find(dest => dest.name.toLowerCase() === destinationName)!

    return (
        <>
            <AllDestinationImages 
                destinationName={destinationName} 
            />
            <div className="flex flex-col justify-start lg:ml-8 max-lg:mt-16">
                <div className="w-full flex gap-12 lg:gap-6 lg:ml-1 max-lg:justify-center">
                    {destinations.map(destination => {
                        const isCurrentLink = destination.name.toLowerCase() === destinationName
                        return (
                            <Link
                                href={`/destination/${destination.name.toLowerCase()}`}
                                className={`font-Barlow-Condensed tracking-widest text-lg lg:text-sm uppercase relative ${isCurrentLink ? "text-white" : "text-BLUE-300 hover:[&>div]:opacity-50"}`}
                                key={destination.name}
                            >
                                {destination.name}
                                <div className={`${isCurrentLink ? "opacity-100" : ""} max-lg:top-10 absolute top-6 left-1/2 -translate-x-1/2 w-full h-[2.5px] transition duration-400 bg-white opacity-0`}></div>
                            </Link>
                        )
                        })}
                </div>
                <h2 className="text-7xl uppercase font-Bellefair mt-8 max-lg:mt-12">
                    {currDestination.name}
                </h2>
                <p className="leading-7 mt-4 text-BLUE-300 max-lg:text-xl max-lg:leading-8 max-sm:h-49 sm:max-lg:h-28">{currDestination.description}</p>  
                <div className="h-[0.4] bg-gray-700 w-full mt-7"></div>
                <div className="grid place-items-center sm:grid-cols-2 mt-4">
                    <div className="flex flex-col items-start max-lg:items-center">
                        <div className="text-lg lg:text-sm font-Barlow-Condensed tracking-widest text-BLUE-300">AVG. DISTANCE</div>
                        <div className="font-Bellefair text-2xl uppercase mt-3 max-lg:text-4xl">{currDestination.distance}</div>
                    </div>
                    <div className="flex flex-col items-start max-lg:items-center max-sm:mt-10">
                        <div className="text-lg lg:text-sm font-Barlow-Condensed tracking-widest text-BLUE-300">EST. TRAVEL TIME</div>
                        <div className="font-Bellefair text-2xl uppercase mt-3 max-lg:text-4xl">{currDestination.travel}</div>
                    </div>
                </div>     
            </div>
        </>
    )
}