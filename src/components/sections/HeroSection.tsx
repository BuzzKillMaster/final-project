'use client'

import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import HeroVideo from "@/components/sections/hero/HeroVideo";
import useMockCMS from "@/MockCMS";

export default function HeroSection() {
    const {hero} = useMockCMS()

    return (
        <section className={"px-4 grid items-center lg:grid-cols-2"}>
            <div className={"px-4 lg:px-0 col-start-1 row-start-1 text-neutral-50 md:text-neutral-950 z-10 justify-self-end lg:max-w-[40rem]"}>
                <SectionHeader
                    subheading={hero.subheading}
                    heading={hero.heading}
                    description={hero.description}
                />

                <PrimaryButton type={"button"} text={hero.button} onClick={() => {}} />
            </div>

            <div className={"lg:-mr-4 col-start-1 row-start-1 lg:col-start-2 hero_video_container"}>
                <HeroVideo src={hero.video} />
            </div>
        </section>
    )
}