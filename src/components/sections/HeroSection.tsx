'use client'

import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import PrimaryButton from "@/components/PrimaryButton";
import HeroVideo from "@/components/sections/hero/HeroVideo";

export default function HeroSection() {
    return (
        <SectionContainer containerClassName={"grid grid-cols-2 gap-20 items-center"}>
            <div>
                <SectionHeader
                    subheading={"Lorem ipsum"}
                    heading={"Lorem ipsum dolor sit amet"}
                    description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."}
                />

                <PrimaryButton type={"button"} text={"Click me"} onClick={() => {}} />
            </div>

            <HeroVideo />
        </SectionContainer>
    )
}