import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import Image from "next/image";

export default function ProfileSection() {
    return (
        <SectionContainer containerClassName={"grid grid-cols-2 gap-20 items-center"}>
            <SectionHeader
                subheading={"Lorem ipsum"}
                heading={"Lorem ipsum dolor sit amet"}
                description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."}
            />

            <Image
                className={"justify-self-center"}
                src={"https://fakeimg.pl/1000"}
                alt={"Profile"}
                width={500}
                height={500}
            />
        </SectionContainer>
    )
}