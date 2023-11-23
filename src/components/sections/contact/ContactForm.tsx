'use client'

import * as Yup from 'yup';
import {useFormik} from "formik";
import InputField from "@/components/sections/contact/InputField";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    message: Yup.string()
        .required('Message is required'),
})

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={"grid gap-4 mt-4"}>
            <InputField
                label={"Name"}
                name={"name"}
                inputType={"text"}
                placeholder={"John Doe"}
                value={formik.values.name}
                onChange={formik.handleChange}
                required={true}
                error={formik.errors.name}
            />

            <InputField
                label={"Email"}
                name={"email"}
                inputType={"email"}
                placeholder={"john@example.com"}
                value={formik.values.email}
                onChange={formik.handleChange}
                required={true}
                error={formik.errors.email}
            />

            <InputField
                label={"Message"}
                name={"message"}
                inputType={"textarea"}
                placeholder={"Hello, I would like to ..."}
                value={formik.values.message}
                onChange={formik.handleChange}
                required={true}
                error={formik.errors.message}
            />
        </form>
    )
}