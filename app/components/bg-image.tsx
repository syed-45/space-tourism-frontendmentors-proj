import Image from "next/image"

export const ResponsiveBgImages = ({src}: {src: string}) => {
    return (
        <>
            <Image src={src+"-desktop.jpg"}
                width={9999}
                height={9999} 
                className="[grid-area:1/1] w-full h-screen object-cover hidden lg:block starting:blur-lg transition-discrete transition duration-700" 
                alt={src.slice(0,-4)}
            />
            <Image src={src+"-tablet.jpg"}
                width={9999}
                height={9999} 
                className="[grid-area:1/1] w-full h-full object-cover hidden sm:block lg:hidden starting:blur-lg transition-discrete transition duration-700" 
                alt={src.slice(0,-4)}
            />
            <Image src={src+"-mobile.jpg"}
                width={9999}
                height={9999} 
                className="[grid-area:1/1] w-full h-full object-cover starting:blur-lg transition-discrete transition duration-700 sm:hidden" 
                alt={src.slice(0,-4)}
            />
        </>
    )
}