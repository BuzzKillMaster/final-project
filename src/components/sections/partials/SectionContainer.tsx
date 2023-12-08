import {ReactNode} from "react";

interface SectionContainerProps {
    children: ReactNode
    sectionClassName?: string
    containerClassName?: string
    sectionId?: string
}

export default function SectionContainer({children, sectionClassName = "", containerClassName = "", sectionId = ""}: SectionContainerProps) {
    return (
        <section id={sectionId} className={"py-20 px-4 shadow bg-neutral-50 " + sectionClassName}>
            <div className={"container mx-auto max-w-7xl " + containerClassName}>
                {children}
            </div>
        </section>
    )
}
