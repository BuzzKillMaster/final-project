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
        <section id={"contact_section"} className={"bg-primary grid lg:grid-cols-2 px-4"}>
            <div className={"justify-self-end py-20 lg:pr-10 w-full lg:max-w-[40rem]"}>
                <ContactForm />
            </div>

            <div className={"-mx-4 lg:ml-0 z-0"}>
                <MapDisplay />
            </div>
        </section>
    )
}