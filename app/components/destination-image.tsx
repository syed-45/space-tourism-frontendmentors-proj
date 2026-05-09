import Image from "next/image"

export const DestinationImage = ({name, src}: {name : string, src: string}) => {
    return (
        <Image
            alt={name}
            src={src}
            width={1000}
            height={1000}
            className="w-[45%] lg:w-4/5 mx-auto pt-8 starting:opacity-0 transition-discrete transition ease-in duration-700"
        />
    )
}