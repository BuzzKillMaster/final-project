'use client'

import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLng} from "leaflet";
import "leaflet/dist/leaflet.css"
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const position: LatLng = new LatLng(55.31920555566235, 10.274566768351592)

export default function LocationMap() {
    return (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false} className={"h-full w-full aspect-square lg:aspect-auto"}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Find vej på Google Maps <br /> <a href={"https://www.google.com/maps/dir//55.3192116,10.2745909/@55.3304934,10.2505897,11.57z?entry=ttu"} target={"_blank"} rel={"noreferrer"}>Klik her</a>
                </Popup>
            </Marker>
        </MapContainer>
    )
}