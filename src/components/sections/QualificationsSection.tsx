import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import DynamicCard from "@/components/DynamicCard";

const data = Array(3).fill({
    title: "Lorem ipsum dolor sit amet",
    description: "Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta.",
    imageUri: "https://fakeimg.pl/500/",
    imageAlt: "temp",
})

export default function QualificationsSection() {
    return (
        <SectionContainer containerClassName={"grid md:grid-cols-2 gap-20 items-center"}>
            <SectionHeader subheading={"Lorem ipsum"} heading={"Lorem ipsum dolor sit amet"} description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."} />

            <div className={"grid gap-12 mt-20"}>
                {
                    data.map((item, index) => (
                        <DynamicCard
                            key={index}
                            heading={item.title}
                            description={item.description}
                            flexDirection={"flex-row"}
                            imgSource={item.imageUri}
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