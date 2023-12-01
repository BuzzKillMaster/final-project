import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";
import useMockCMS from "@/MockCMS";

export default function QualificationsSection() {
    const {qualifications} = useMockCMS()

    return (
        <SectionContainer containerClassName={"grid md:grid-cols-2 gap-20 items-center"}>
            <SectionHeader subheading={qualifications.subheading} heading={qualifications.heading} description={qualifications.description} />

            <div className={"grid gap-12 mt-20"}>
                {
                    qualifications.cards.map((item, index) => (
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