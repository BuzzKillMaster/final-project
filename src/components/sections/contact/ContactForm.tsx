'use client'

import * as Yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/components/sections/contact/InputField";
import {Contact} from "@/../tina/__generated__/types";
import PrimaryButton from "@/components/PrimaryButton";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import {IoMdCheckmark} from "react-icons/io";
import ScrollAnimation from "@/components/ScrollAnimation";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Navn er påkrævet'),
    email: Yup.string()
        .email('Email er ikke gyldig')
        .required('Email er påkrævet'),
    message: Yup.string()
        .required('Besked er påkrævet'),
    acceptTerms: Yup.bool().isTrue(),
})

export default function ContactForm({contact}: {contact: Contact}) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
            acceptTerms: false,
        },
        initialErrors: {
            name: '',
            email: '',
            message: '',
            acceptTerms: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    if (!contact) return null

    return (
        <ScrollAnimation>
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

                <div className={"flex items-start py-4 gap-4"}>
                    <div className={"p-1 border-2 border-neutral-700 rounded cursor-pointer"}>
                        <IoMdCheckmark className={formik.values.acceptTerms ? "visible" : "invisible"} />
                    </div>

                    <input
                        id="acceptTerms"
                        name="acceptTerms"
                        type="checkbox"
                        className={"hidden"}
                        checked={formik.values.acceptTerms}
                        onChange={formik.handleChange}
                    />

                    <label htmlFor="acceptTerms" className={"cursor-pointer"}>
                        Jeg acceptere at Borreby Adfærdstræning må benytte mine oplysninger til at kontakte mig.
                    </label>
                </div>

                <PrimaryButton type={"submit"} text={contact.form_button} onClick={() =>  {}} disabled={!formik.isValid}/>
                <p className={"text-center"}>Denne formular er ikke aktiv. Den er kun til demonstration. For nu.</p>
            </form>
        </ScrollAnimation>
    )
}