'use client'

import SectionHeader from "@/components/sections/partials/SectionHeader";
import HeroVideo from "@/components/sections/hero/HeroVideo";
import {Hero} from "../../../tina/__generated__/types";

export default function HeroSection({hero}: { hero: Hero }) {
    return (
        <section id={"hero_section"} className={"lg:px-4 grid items-center lg:grid-cols-2 shadow relative"}>
            <div
                className={"py-12 lg:py-0 px-4 lg:px-0 col-start-1 row-start-1 text-neutral-50 lg:text-neutral-950 relative z-10 justify-self-end w-full lg:max-w-[40rem]"}>
                <SectionHeader
                    subheading={hero.subheading}
                    heading={hero.heading}
                    description={hero.description}
                    headingClassname={"text-[#955E42]"}
                />
            </div>

            <div className={"lg:-mr-4 col-start-1 row-start-1 lg:col-start-2 hero_video_container"}>
                <HeroVideo src={hero.hero_video}/>
            </div>

            <div className={"lg:hidden absolute inset-0 bg-neutral-800 backdrop-blur-sm bg-opacity-75"}></div>
        </section>
    )
}