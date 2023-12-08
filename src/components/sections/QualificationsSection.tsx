import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import {Qualifications, Qualifications_Cards} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";

export default async function QualificationsSection() {
    let qualifications: Qualifications
    let qualificationsCards: Qualifications_Cards[] | undefined

    const qualificationsQuery = await client.queries.qualifications({ relativePath: 'QUALIFICATIONS.md' })
    const qualificationsCardsQuery = await client.queries.qualifications_cardsConnection()

    qualifications = qualificationsQuery.data.qualifications as Qualifications
    qualificationsCards = qualificationsCardsQuery.data.qualifications_cardsConnection.edges?.map((edge) => edge?.node as Qualifications_Cards)

    return (
        <SectionContainer sectionId={"qualifications_section"} sectionClassName={"bg-neutral-50"} containerClassName={"grid md:grid-cols-2 gap-20 items-center"}>
            <SectionHeader subheading={qualifications.subheading} heading={qualifications.heading} description={qualifications.description} />

            <div className={"grid gap-12 mt-20"}>
                {
                    qualificationsCards?.map((item, index) => (
                        <DynamicCard
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            flexDirection={"flex-row"}
                            imgSource={item.image}
                            altText={item.imageAlt}
                            imgHeight={100}
                            imgWidth={100}
                        />
                    ))
                }
            </div>
        </SectionContainer>
    )
}