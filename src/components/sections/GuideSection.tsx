'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";

export default function GuideSection() {
    return (
        <SectionContainer containerClassName={"grid gap-12"}>
            <SectionHeader subheading={"Lorem ipsum"} heading={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique quis tempus id, scelerisque quis mauris."} />

            <div>
                <PrimaryButton type={"button"} text={"Click Me"} onClick={() => alert("Hello World!")} />
            </div>
        </SectionContainer>
    )
}