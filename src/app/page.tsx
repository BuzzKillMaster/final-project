import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
import ProfileSection from "@/components/sections/ProfileSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import ContactSection from "@/components/sections/ContactSection";
import TrainingSection from "@/components/sections/TrainingSection";
import HeroSectionWrapper from "@/components/sections/wrappers/HeroSectionWrapper";
// import BlogSectionWrapper from "@/components/sections/wrappers/BlogSectionWrapper";
import TestimonialsSectionWrapper from "@/components/sections/wrappers/TestimonialsSectionWrapper";

export default function Home() {
    return (
        <>
            <AppHeader/>

            <main>
                <HeroSectionWrapper/>
                <TrainingSection/>
                <ProfileSection/>
                <QualificationsSection/>
                <ApproachSection/>
                <TestimonialsSectionWrapper/>
                {/*<BlogSectionWrapper/>*/}
                <ContactSection/>
            </main>

            <AppFooter/>
        </>
    )
}
