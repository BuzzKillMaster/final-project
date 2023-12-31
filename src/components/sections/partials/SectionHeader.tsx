'use client'

import {TinaMarkdown, TinaMarkdownContent} from "tinacms/dist/rich-text";
import { Quicksand } from "next/font/google";
import ScrollAnimation from "@/components/ScrollAnimation";

const quicksand = Quicksand({ subsets: ['latin'] })

interface SectionHeaderProps {
    subheading: string
    heading: string
    description: TinaMarkdownContent
    headingClassname?: string
}

export default function SectionHeader({subheading, heading, description, headingClassname = ""}: SectionHeaderProps) {
    return (
        <ScrollAnimation>
            <header className={"whitespace-pre-line relative z-10"}>
                <h3 className={quicksand.className + " text-2xl font-medium text-[#94A79E]"}>{subheading}</h3>
                <h2 className={quicksand.className + " text-5xl font-semibold mt-4 mb-6 leading-snug " + headingClassname}>{heading}</h2>

                <div className={"max-w-lg grid gap-4 mb-8"}>
                    <TinaMarkdown content={description}/>
                </div>
            </header>
        </ScrollAnimation>
    )
}