import SectionHeader from "@/components/sections/partials/SectionHeader";
import FakeDynamicCard from "@/components/FakeDynamicCard";
import SectionContainer from "@/components/sections/partials/SectionContainer";


const data = Array(6).fill({
    title: "Lorem ipsum dolor sit amet",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imageUri: "https://fakeimg.pl/500/",
    imageAlt: "temp",
})

export default function FakeTrainingSection() {
    return (
        <SectionContainer>
            <SectionHeader subheading={"Lorem ipsum"} heading={"Lorem ipsum dolor sit amet"} description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."} />

            <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20"}>
                {data.map((item, index) => (
                    <FakeDynamicCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        horizontal={false}
                        imageUri={item.imageUri}
                        imageAlt={item.imageAlt}
                        imageHeight={200}
                        imageWidth={200}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}