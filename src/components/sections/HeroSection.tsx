'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import HeroVideo from "@/components/sections/hero/HeroVideo";
import useMockCMS from "@/MockCMS";

export default function HeroSection() {
    const {hero} = useMockCMS()

    return (
        <SectionContainer containerClassName={"grid md:grid-cols-2 gap-20 items-center"}>
            <div className={"col-start-1 row-start-1 text-neutral-50 md:text-neutral-950 z-10"}>
                <SectionHeader
                    subheading={hero.subheading}
                    heading={hero.heading}
                    description={hero.description}
                />

                <PrimaryButton type={"button"} text={hero.button} onClick={() => {}} />
            </div>

            <div className={"col-start-1 row-start-1 md:col-start-2"}>
                <HeroVideo src={hero.video} />
            </div>
        </SectionContainer>
    )
}