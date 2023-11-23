import {ReactNode} from "react";

interface SectionContainerProps {
    children: ReactNode
    sectionClassName?: string
    containerClassName?: string
}

export default function SectionContainer({children, sectionClassName = "", containerClassName = ""}: SectionContainerProps) {
    return (
        <section className={"py-20 " + sectionClassName}>
            <div className={"container mx-auto " + containerClassName}>
                {children}
            </div>
        </section>
    )
}
