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

export default function Home() {
    return (
        <>
            <AppHeader/>

            <main>
                <HeroSection/>
                <TrainingSection/>
                <ProfileSection/>
                <QualificationsSection/>
                <ApproachSection/>
                <TestimonialsSection/>
                <BlogSection/>
                <ContactSection/>
            </main>

            <AppFooter/>
        </>
    )
}
