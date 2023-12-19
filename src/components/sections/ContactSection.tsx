'use client'

import ContactForm from "@/components/sections/contact/ContactForm";
import "leaflet/dist/leaflet.css"
import {useEffect, useMemo, useState} from "react";
import dynamic from "next/dynamic";
import {Contact} from "../../../tina/__generated__/types";
import client from "../../../tina/__generated__/client";

export default function ContactSection() {
    const [contact, setContact] = useState<Contact>()

    useEffect(() => {
        (async () => {
            const query = await client.queries.contact({ relativePath: 'CONTACT.md' })
            setContact(query.data.contact as Contact)
        })()
    }, [])

    const MapDisplay = useMemo(() => dynamic(
        () => import("@/components/sections/contact/LocationMap"),
        {
            ssr: false
        }
    ), [])

    if (!contact) return null

    return (
        <section id={"contact_section"} className={"bg-primary grid lg:grid-cols-2 px-4"}>
            <div className={"justify-self-end py-24 lg:pr-10 w-full lg:max-w-[40rem]"}>
                <ContactForm contact={contact} />
            </div>

            <div className={"-mx-4 lg:ml-0 z-0"}>
                <MapDisplay />
            </div>
        </section>
    )
}