import {ReactNode} from "react";

interface SectionContainerProps {
    children: ReactNode
    sectionClassName?: string
    containerClassName?: string
    sectionId?: string
}

export default function SectionContainer({children, sectionClassName = "", containerClassName = "", sectionId = ""}: SectionContainerProps) {
    return (
        <section id={sectionId} className={"py-24 px-4 shadow bg-[#F2F8F7] " + sectionClassName}>
            <div className={"container mx-auto max-w-7xl " + containerClassName}>
                {children}
            </div>
        </section>
    )
}
