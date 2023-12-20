import {TinaMarkdown, TinaMarkdownContent} from "tinacms/dist/rich-text";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ['latin'] })

interface SectionHeaderProps {
    subheading: string
    heading: string
    description: TinaMarkdownContent
}

export default function SectionHeader({subheading, heading, description}: SectionHeaderProps) {
    return (
        <header className={"whitespace-pre-line relative z-10"}>
            <h3 className={quicksand.className + " text-2xl font-medium text-[#94A79E]"}>{subheading}</h3>
            <h2 className={quicksand.className + " text-5xl font-semibold mt-4 mb-6 leading-snug"}>{heading}</h2>

            <div className={"max-w-lg grid gap-4 mb-8"}>
                <TinaMarkdown content={description} />
            </div>
        </header>
    )
}