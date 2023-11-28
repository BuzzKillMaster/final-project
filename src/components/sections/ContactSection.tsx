import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import "leaflet/dist/leaflet.css"
import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function ContactSection() {
    const MapDisplay = useMemo(() => dynamic(
        () => import("@/components/sections/contact/LocationMap"),
        {
            ssr: false
        }
    ), [])

    return (
        <SectionContainer containerClassName={"grid md:grid-cols-2 gap-20 items-center"}>
            <div>
                <SectionHeader
                    subheading={"Lorem ipsum"}
                    heading={"Lorem ipsum dolor sit amet"}
                    description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."}
                />

                <ContactForm />
            </div>

            <MapDisplay />
        </SectionContainer>
    )
}