import Image from "next/image"

export const BgImage = ({src}: {src: string}) => {
    return (
        <Image src={src}
            width={9999}
            height={9999} 
            className="[grid-area:1/1] w-full h-screen object-cover hidden lg:block starting:blur-lg transition duration-700" 
            alt={src.slice(0,-4)}
        />
    )
}