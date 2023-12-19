'use client'

import * as Yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/components/sections/contact/InputField";
import {Contact} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";
import PrimaryButton from "@/components/PrimaryButton";
import {useEffect, useState} from "react";
import SectionHeader from "@/components/sections/partials/SectionHeader";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Navn er påkrævet'),
    email: Yup.string()
        .email('Email er ikke gyldig')
        .required('Email er påkrevet'),
    message: Yup.string()
        .required('Besked er påkrævet'),
})

export default function ContactForm() {
    const [contact, setContact] = useState<Contact>()

    useEffect(() => {
        (async () => {
            const query = await client.queries.contact({ relativePath: 'CONTACT.md' })
            setContact(query.data.contact as Contact)
        })()
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    if (!contact) return null

    return (
        <>
            <SectionHeader subheading={contact.subheading} heading={contact.heading} description={contact.description} />

            <form onSubmit={formik.handleSubmit} className={"grid gap-4 mt-4"}>
                <InputField
                    label={contact.form_name_label}
                    name={"name"}
                    inputType={"text"}
                    placeholder={contact.form_name_placeholder}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required={true}
                    error={formik.errors.name}
                />

                <InputField
                    label={contact.form_email_label}
                    name={"email"}
                    inputType={"email"}
                    placeholder={contact.form_email_placeholder}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required={true}
                    error={formik.errors.email}
                />

                <InputField
                    label={contact.form_message_label}
                    name={"message"}
                    inputType={"textarea"}
                    placeholder={contact.form_message_placeholder}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    required={true}
                    error={formik.errors.message}
                />

                <PrimaryButton type={"submit"} text={contact.form_button} onClick={() =>  {}} />
            </form>
        </>
    )
}