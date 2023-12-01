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
        <section className={"grid lg:grid-cols-2 px-4"}>
            <div className={"justify-self-end py-20 lg:pr-10 w-full lg:max-w-[40rem]"}>
                <SectionHeader subheading={contact.subheading} heading={contact.heading} description={contact.description} />
                <ContactForm />
            </div>

            <div className={"-mx-4 lg:ml-0"}>
                <MapDisplay />
            </div>
        </section>
    )
}