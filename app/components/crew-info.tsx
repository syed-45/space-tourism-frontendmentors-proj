"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import spaceData from "@/starter-code/data.json"
const crew = spaceData['crew']

export const CrewInfo = () => {
    const pathname = usePathname()
    const segments = pathname.toLowerCase().split('/')
    const crewMemberSegments = ['douglas-hurley','mark-shuttleworth','victor-glover']
    const crewMemberName = crewMemberSegments.includes(segments[2])
        ? segments[2].replace('-',' ') : "douglas hurley" 
    const currCrewMemberInfo = crew.find(crewMember => crewMember.name.toLowerCase() === crewMemberName)!

    return (
        <>
            <div>
                <div className="text-3xl text-white/30 uppercase font-Bellefair lg:mt-30">{currCrewMemberInfo.role}</div>
                <h2 className="text-4xl uppercase font-Bellefair mt-4 h-20 sm:h-16">{currCrewMemberInfo.name}</h2>  
                <p className="text-lg text-BLUE-300 mt-7 h-47 sm:h-40 sm:max-w-md max-lg:mx-auto">{currCrewMemberInfo.bio}</p>
                <div className="flex justify-center items-center gap-7 py-3 lg:mt-26 lg:justify-start">
                    {crewMemberSegments.map((segment, idx) => {
                        if (idx === 3) return <></>
                        return (
                            <Link
                                key={segment}
                                href={`/crew/${segment}`}
                                className={`rounded-full w-4 h-4 ${segment.replace('-',' ') === crewMemberName ? "bg-white" : "bg-white/20"}`}
                            >
                            </Link>
                        )
                    })}
                </div>
            </div>
            <div className="h-fit sm:h-120 lg:h-140 flex flex-col justify-end">
                <Image
                    alt={crewMemberName}
                    src={currCrewMemberInfo.images.png.slice(1,)}
                    width={1000}
                    height={1000}
                    className="w-[65%] lg:w-4/5 mx-auto mt-7 starting:opacity-0 transition-discrete transition ease-in duration-700 mask-b-from-90%"
                />
            </div>
        </>
    )
}