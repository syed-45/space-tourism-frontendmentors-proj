"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import spaceData from "@/starter-code/data.json"
const technology = spaceData['technology']

export const TechnologyInfo = () => {
    const pathname = usePathname()
    const segments = pathname.toLowerCase().split('/')
    const techNameSegments = ['launch-vehicle','spaceport','space-capsule']
    const techName = techNameSegments.includes(segments[2])
        ? segments[2].replace('-',' ') : "launch vehicle" 
    const currTechInfo = technology.find(crewMember => crewMember.name.toLowerCase() === techName)!

    return (
        <>
            <div className="h-full lg:min-w-150">
                <Image
                    alt={techName}
                    src={currTechInfo.images.portrait.slice(1,)}
                    width={1000}
                    height={1000}
                    className="w-full h-74 sm:h-96 sm:object-center lg:h-150 lg:mt-0 object-bottom object-cover mt-7 starting:opacity-20 transition transition-discrete duration-500"
                />
            </div>
            <div className="max-lg:px-7 lg:flex lg:items-center lg:gap-12 lg:mr-6">
                <div className="flex justify-center items-center gap-5 mt-14 lg:mt-0 lg:justify-start lg:flex-col">
                    {techNameSegments.map((segment, idx) => {
                        return (
                            <Link
                                key={segment}
                                href={`/technology/${segment}`}
                                className={`rounded-full size-12 lg:size-15 flex justify-center items-center text-xl font-Bellefair ${segment.replace('-',' ') === techName ? "bg-white text-BLUE-900" : "border border-white/20"}`}
                            >
                                {idx + 1}
                            </Link>
                        )
                    })}
                </div>
                <div>
                    <div className="text-xl lg:text-2xl text-white/40 uppercase font-Bellefair mt-7 lg:mt-0">THE TERMINOLOGY...</div>
                    <h2 className="text-3xl lg:text-4xl uppercase font-Bellefair mt-4">{currTechInfo.name}</h2>  
                    <p className="text-lg text-BLUE-300 mt-7 h-47 sm:h-40 sm:max-w-md max-lg:mx-auto">{currTechInfo.description}</p>
                </div>
            </div>            
        </>
    )
}