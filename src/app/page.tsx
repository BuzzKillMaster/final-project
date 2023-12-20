import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
import HeroSection from "@/components/sections/HeroSection";
import ProfileSection from "@/components/sections/ProfileSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import TrainingSection from "@/components/sections/TrainingSection";
import BackToTopButton from "@/components/app/navigation/BackToTopButton";
import HeroSectionWrapper from "@/components/sections/wrappers/HeroSectionWrapper";
import BlogSectionWrapper from "@/components/sections/wrappers/BlogSectionWrapper";
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
                <BlogSectionWrapper/>
                <ContactSection/>
            </main>

            <AppFooter/>

            <BackToTopButton/>
        </>
    )
}
