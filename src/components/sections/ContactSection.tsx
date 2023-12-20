import ContactForm from "@/components/sections/contact/ContactForm";
import "leaflet/dist/leaflet.css"
import {useEffect, useMemo, useState} from "react";
import dynamic from "next/dynamic";
import {Contact} from "../../../tina/__generated__/types";
import client from "../../../tina/__generated__/client";
import LocationMap from "@/components/sections/contact/LocationMap";

export default async function ContactSection() {
    const query = await client.queries.contact({ relativePath: 'CONTACT.md' })
    const contact = query.data.contact as Contact

    // const MapDisplay = useMemo(() => dynamic(
    //     () => import("@/components/sections/contact/LocationMap"),
    //     {
    //         ssr: false
    //     }
    // ), [])


    return (
        <section id={"contact_section"} className={"bg-primary grid lg:grid-cols-2 px-4"}>
            <div className={"justify-self-end py-24 lg:pr-10 w-full lg:max-w-[40rem]"}>
                <ContactForm contact={contact} />
            </div>

            <div className={"-mx-4 lg:ml-0 z-0"}>
                <LocationMap />
            </div>
        </section>
    )
}