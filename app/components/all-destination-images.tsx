import { Activity, } from "react";
import spaceData from "@/starter-code/data.json"
import { DestinationImage } from "./destination-image";
const destinations = spaceData['destinations']

export const AllDestinationImages = ({destinationName}: {destinationName: string}) => {

    return (
        <>
            {destinations.map(dest => {
                return <Activity
                            key={dest.name}
                            mode={dest.name.toLowerCase() === destinationName ? "visible" : "hidden"}
                        >
                            <DestinationImage 
                                name={dest.name}
                                src={dest.images.png.slice(1,)} 
                            />
                        </Activity>
                }
            )}
        </>
        
    )
}