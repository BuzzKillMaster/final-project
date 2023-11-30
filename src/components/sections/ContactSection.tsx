import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import ContactForm from "@/components/sections/contact/ContactForm";
import "leaflet/dist/leaflet.css"
import {useMemo} from "react";
import dynamic from "next/dynamic";
import useMockCMS from "@/MockCMS";

export default function ContactSection() {
    const {contact} = useMockCMS()

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
                    subheading={contact.subheading}
                    heading={contact.heading}
                    description={contact.description}
                />

                <ContactForm />
            </div>

            <MapDisplay />
        </SectionContainer>
    )
}