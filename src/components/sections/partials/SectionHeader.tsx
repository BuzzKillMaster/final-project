import {TinaMarkdown, TinaMarkdownContent} from "tinacms/dist/rich-text";

interface SectionHeaderProps {
    subheading: string
    heading: string
    description: TinaMarkdownContent
}

export default function SectionHeader({subheading, heading, description}: SectionHeaderProps) {
    return (
        <header className={"grid gap-4 whitespace-pre-line"}>
            <h3 className={"text-2xl"}>{subheading}</h3>
            <h2 className={"text-5xl"}>{heading}</h2>

            <div className={"max-w-lg grid gap-4"}>
                <TinaMarkdown content={description} />
            </div>
        </header>
    )
}