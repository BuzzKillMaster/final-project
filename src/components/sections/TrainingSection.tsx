// Vicky

import DynamicCard from "../DynamicCard";
import SectionHeader from "./partials/SectionHeader";
import SectionContainer from "@/components/sections/partials/SectionContainer";
import useMockCMS from "@/MockCMS";

export default function TrainingSection() {
    const {training} = useMockCMS()

    return (
        <SectionContainer>
            <SectionHeader subheading={training.subheading} heading={training.heading} description={training.description} />

            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-12 mt-20">
                {
                    training.cards.map( (item, index) => (
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