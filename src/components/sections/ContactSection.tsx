import ContactForm from "@/components/sections/contact/ContactForm";
import "leaflet/dist/leaflet.css"
import {Contact} from "../../../tina/__generated__/types";
import client from "../../../tina/__generated__/client";
import React from "react";
import MapContainer from "@/components/sections/contact/MapContainer";

export default async function ContactSection() {
    const query = await client.queries.contact({ relativePath: 'CONTACT.md' })
    const contact = query.data.contact as Contact

    return (
        <section id={"contact_section"} className={"bg-primary grid lg:grid-cols-2 px-4"}>
            <div className={"justify-self-end py-24 lg:pr-10 w-full lg:max-w-[40rem]"}>
                <ContactForm contact={contact} />
            </div>

            <div className={"-mx-4 lg:ml-0 z-0"}>
                <MapContainer />
            </div>
        </section>
    )
}