// Vicky

import DynamicCard from "../DynamicCard";
import SectionHeader from "./partials/SectionHeader";
import SectionContainer from "@/components/sections/partials/SectionContainer";

const fakeCMS = Array(6).fill({
    heading: "Lorem ipsum dolor sit",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imgSource: "https://fakeimg.pl/500/",
    altText: "temp",
})

export default function TrainingSection() {
    return (
        <SectionContainer>
            <SectionHeader subheading="Jeg tilbyder" heading="Adfærdstræning på Fyn" description="Lorem ipsum dolor sit amet consectetur. Sodales id facilisi etiam purus tempor.Lorem ipsum dolor sit amet consectetur. Sodales id facilisi etiam purus tempor."/>

            <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
                {
                    fakeCMS.map( (item, index) => (

                        <DynamicCard
                            key = {index}
                            imgSource={item.imgSource}
                            imgWidth={100}
                            imgHeight={100}
                            altText={item.altText}
                            heading={item.heading}
                            description={item.description}
                            flexDirection="flex-col"
                        >
                        
                        </DynamicCard>
                    ))
                }
            </ul>
        </SectionContainer>
    )
}