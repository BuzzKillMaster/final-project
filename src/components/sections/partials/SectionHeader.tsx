import {ReactNode} from "react";

interface SectionHeaderProps {
    subheading: string
    heading: string
    description: string
    children?: ReactNode
}

export default function SectionHeader({subheading, heading, description, children}: SectionHeaderProps) {
    return (
        <header className={"grid gap-4"}>
            <h3 className={"text-2xl"}>{subheading}</h3>
            <h2 className={"text-5xl"}>{heading}</h2>
            <p>{description}</p>

            {children}
        </header>
    )
}