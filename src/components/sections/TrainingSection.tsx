// Vicky

import DynamicCard from "../DynamicCard";
import SectionHeader from "./partials/SectionHeader";

const fakeCMS = Array(3).fill({
    heading: "Lorem ipsum dolor sit amet",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imgSource: "https://fakeimg.pl/500/",
    altText: "temp",
})

export default function TrainingSection() {
    return (
        <section>

            <SectionHeader subheading="test" heading="test 2" description="test 3"/>

            <ul>
                {
                    fakeCMS.map( (item) => (

                        <DynamicCard 
                            imgSource={item.imgSource}
                            imgWidth={200}
                            imgHeight={200}
                            altText={item.altText}
                            heading={item.heading}
                            description={item.description}
                            flexDirection="flex-row"
                        >
                        
                        </DynamicCard>
                    ))
                }

            </ul>

        </section>
    )
}