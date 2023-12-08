import {ChangeEvent} from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] })

interface InputFieldProps {
    label: string
    name: string
    inputType: "text" | "email" | "textarea"
    placeholder: string
    value: string
    onChange: (e: ChangeEvent) => void
    required?: boolean,
    error?: string
}

const INPUT_CLASSES = "rounded border border-neutral-800 p-2"

export default function InputField({label, name, inputType, placeholder, value, onChange, required, error}: InputFieldProps) {
    return (
        <div className={quicksand.className + " flex flex-col gap-2 font-semibold"}>
            <label htmlFor={name}>{label}</label>

            {inputType !== "textarea" && (
                <input
                    className={INPUT_CLASSES}
                    id={name}
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}

            {inputType === "textarea" && (
                <textarea
                    className={INPUT_CLASSES + " resize-none"}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={5}
                />
            )}

            {error && (
                <p className={"text-red-500"}>{error}</p>
            )}
        </div>
    )
}