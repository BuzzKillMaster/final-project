import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function MapContainer() {
    const MapDisplay = useMemo(() => dynamic(
        () => import("@/components/sections/contact/LocationMap"),
        {
            ssr: false
        }
    ), [])

    return <MapDisplay />
}