import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import FakeDynamicCard from "@/components/FakeDynamicCard";

const data = Array(3).fill({
    title: "Lorem ipsum dolor sit amet",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imageUri: "https://fakeimg.pl/500/",
    imageAlt: "temp",
})

export default function ApproachSection() {
    return (
        <SectionContainer>
            <SectionHeader subheading={"Lorem ipsum"} heading={"Lorem ipsum dolor sit amet"} description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."} />

            <div className={"grid md:grid-cols-3 gap-12 mt-20"}>
                {data.map((item, index) => (
                    <FakeDynamicCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        horizontal={false}
                        imageUri={item.imageUri}
                        imageAlt={item.imageAlt}
                        imageHeight={100}
                        imageWidth={100}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}