import {ChangeEvent} from "react";

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

export default function InputField({label, name, inputType, placeholder, value, onChange, required, error}: InputFieldProps) {
    return (
        <div className={"flex flex-col gap-2"}>
            <label htmlFor={name}>{label}</label>

            {inputType !== "textarea" && (
                <input
                    className={"border border-gray-300 p-2"}
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
                    className={"border border-gray-300 p-2 resize-none"}
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