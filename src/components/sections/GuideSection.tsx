'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import useMockCMS from "@/MockCMS";

export default function GuideSection() {
    const {guide} = useMockCMS()

    return (
        <SectionContainer containerClassName={"grid gap-12"}>
            <SectionHeader subheading={guide.subheading} heading={guide.heading} description={guide.description} />

            <div>
                <PrimaryButton type={"button"} text={guide.button} onClick={() => alert("Hello World!")} />
            </div>
        </SectionContainer>
    )
}