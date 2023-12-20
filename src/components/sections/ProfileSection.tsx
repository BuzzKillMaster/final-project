import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import Image from "next/image";
import {Profile} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";
import ScrollAnimation from "@/components/ScrollAnimation";
import ProfileImage from "@/components/sections/profile/ProfileImage";

export default async function ProfileSection() {
    let profile: Profile
    const profileQuery = await client.queries.profile({ relativePath: 'PROFILE.md' })
    profile = profileQuery.data.profile as Profile

    return (
        <SectionContainer sectionId={"profile_section"} sectionClassName={"relative overflow-hidden"} containerClassName={"grid grid-cols-1 md:grid-cols-2 gap-20 items-center"}>
            <Image src={"/background_assets/paws_01.svg"} alt={"Paws"} fill={true} className={"opacity-30"} />

            <ProfileImage
                imageSrc={profile.profile_image}
                imageAlt={profile.profile_image_alt}
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