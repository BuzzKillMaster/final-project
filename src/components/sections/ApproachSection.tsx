import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import {Approach, Approach_Cards} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";
import Image from "next/image";

export default async function ApproachSection() {
    let approach: Approach
    let approachCards: Approach_Cards[] | undefined

    const approachQuery = await client.queries.approach({ relativePath: 'APPROACH.md' })
    const approachCardsQuery = await client.queries.approach_cardsConnection()

    approach = approachQuery.data.approach as Approach
    approachCards = approachCardsQuery.data.approach_cardsConnection.edges?.map((edge) => edge?.node as Approach_Cards)

    return (
        <SectionContainer sectionId={"approach_section"} sectionClassName={"relative overflow-hidden"}>
            <SectionHeader subheading={approach.subheading} heading={approach.heading} description={approach.description} />
            <Image src={"/background_assets/paws_02.svg"} alt={"Paws"} fill={true} className={"opacity-40 -rotate-45 -scale-x-100"} />

            <div className={"grid md:grid-cols-3 gap-12 mt-20 relative z-10"}>
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