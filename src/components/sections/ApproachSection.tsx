import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import useMockCMS from "@/MockCMS";

export default function ApproachSection() {
    const {approach} = useMockCMS()

    return (
        <SectionContainer>
            <SectionHeader subheading={approach.subheading} heading={approach.heading} description={approach.description} />

            <div className={"grid md:grid-cols-3 gap-12 mt-20"}>
                {
                    approach.cards.map((item, index) => (
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