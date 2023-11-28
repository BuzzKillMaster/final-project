import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import Image from "next/image";

export default function ProfileSection() {
    return (
        <SectionContainer containerClassName={"grid grid-cols-1 md:grid-cols-2 gap-20 items-center"}>
            <Image
                className={"justify-self-center col-start-1 md:col-start-2"}
                src={"https://fakeimg.pl/1000"}
                alt={"Profile"}
                width={500}
                height={500}
            />

            <div className={"md:col-start-1 md:row-start-1"}>
                <SectionHeader
                    subheading={"Lorem ipsum"}
                    heading={"Lorem ipsum dolor sit amet"}
                    description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."}
                />
            </div>
        </SectionContainer>
    )
}