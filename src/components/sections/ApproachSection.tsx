import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import {Approach, Approach_Cards} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";

export default async function ApproachSection() {
    let approach: Approach
    let approachCards: Approach_Cards[] | undefined

    const approachQuery = await client.queries.approach({ relativePath: 'APPROACH.md' })
    const approachCardsQuery = await client.queries.approach_cardsConnection()

    approach = approachQuery.data.approach as Approach
    approachCards = approachCardsQuery.data.approach_cardsConnection.edges?.map((edge) => edge?.node as Approach_Cards)

    return (
        <SectionContainer>
            <SectionHeader subheading={approach.subheading} heading={approach.heading} description={approach.description} />

            <div className={"grid md:grid-cols-3 gap-12 mt-20"}>
                {
                    approachCards?.map((item, index) => (
                        <DynamicCard
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            flexDirection={"flex-col"}
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