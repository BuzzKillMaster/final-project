import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import Image from "next/image";
import useMockCMS from "@/MockCMS";

export default function ProfileSection() {
    const {profile} = useMockCMS()

    return (
        <SectionContainer containerClassName={"grid grid-cols-1 md:grid-cols-2 gap-20 items-center"}>
            <Image
                className={"justify-self-center col-start-1 md:col-start-2"}
                src={profile.image}
                alt={profile.imageAlt}
                width={500}
                height={500}
            />

            <div className={"md:col-start-1 md:row-start-1"}>
                <SectionHeader
                    subheading={profile.subheading}
                    heading={profile.heading}
                    description={profile.description}
                />
            </div>
        </SectionContainer>
    )
}