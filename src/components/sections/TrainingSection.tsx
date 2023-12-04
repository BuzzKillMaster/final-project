// Vicky

import DynamicCard from "../DynamicCard";
import SectionHeader from "./partials/SectionHeader";
import SectionContainer from "@/components/sections/partials/SectionContainer";
import {Training, Training_Cards} from "@/../tina/__generated__/types";
import client from "@/../tina/__generated__/client";

export default async function TrainingSection() {
    let training: Training
    let trainingCards: Training_Cards[] | undefined

    const trainingQuery = await client.queries.training({ relativePath: 'TRAINING.md' })
    const trainingCardsQuery = await client.queries.training_cardsConnection()

    training = trainingQuery.data.training as Training
    trainingCards = trainingCardsQuery.data.training_cardsConnection.edges?.map((edge) => edge?.node as Training_Cards)

    return (
        <SectionContainer sectionId={"training_section"}>
            <SectionHeader subheading={training.subheading} heading={training.heading} description={training.description} />

            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 mt-20">
                {
                    trainingCards?.map( (item, index) => (
                        <DynamicCard
                            key = {index}
                            imgSource={item.image}
                            imgWidth={100}
                            imgHeight={100}
                            altText={item.imageAlt}
                            heading={item.heading}
                            description={item.description}
                            flexDirection="flex-col"
                        />
                    ))
                }
            </ul>
        </SectionContainer>
    )
}