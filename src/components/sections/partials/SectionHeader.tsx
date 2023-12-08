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
        <header className={"grid gap-4 whitespace-pre-line"}>
            <h3 className={quicksand.className + " text-2xl mb-2"}>{subheading}</h3>
            <h2 className={quicksand.className + " text-5xl mb-4"}>{heading}</h2>

            <div className={"max-w-lg grid gap-4 mb-8"}>
                <TinaMarkdown content={description} />
            </div>
        </header>
    )
}