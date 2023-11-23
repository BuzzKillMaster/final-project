import SectionContainer from "@/components/sections/partials/SectionContainer";
import SectionHeader from "@/components/sections/partials/SectionHeader";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactSection() {
    return (
        <SectionContainer containerClassName={"grid grid-cols-2 gap-20 items-center"}>
            <SectionHeader
                subheading={"Lorem ipsum"}
                heading={"Lorem ipsum dolor sit amet"}
                description={"Vivamus quis semper tortor. Duis sapien sem, pretium non tristique nec, volutpat ut diam. Proin euismod mollis purus id porta."}
            >
                <ContactForm />
            </SectionHeader>
        </SectionContainer>
    )
}