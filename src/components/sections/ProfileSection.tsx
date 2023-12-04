import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import Image from "next/image";
import {Profile} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";

export default async function ProfileSection() {
    let profile: Profile
    const profileQuery = await client.queries.profile({ relativePath: 'PROFILE.md' })
    profile = profileQuery.data.profile as Profile

    return (
        <SectionContainer sectionId={"profile_section"} containerClassName={"grid grid-cols-1 md:grid-cols-2 gap-20 items-center"}>
            <div className={"grid justify-self-center col-start-1 md:col-start-2"}>
                <Image
                    className={"col-start-1 row-start-1"}
                    src={profile.profile_image}
                    alt={profile.profile_image_alt}
                    width={1000}
                    height={1000}
                />

                <Image
                    className={"col-start-1 row-start-1"}
                    src={"/profile_mask.png"}
                    alt={profile.profile_image_alt}
                    width={1000}
                    height={1000}
                />
            </div>

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