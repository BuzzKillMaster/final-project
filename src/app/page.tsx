import AppHeader from "@/components/app/AppHeader";
import AppFooter from "@/components/app/AppFooter";
import HeroSection from "@/components/sections/HeroSection";
import TrainingSection from "@/components/sections/TrainingSection";
import ProfileSection from "@/components/sections/ProfileSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import ApproachSection from "@/components/sections/ApproachSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GuideSection from "@/components/sections/GuideSection";
import ContactSection from "@/components/sections/ContactSection";

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
                <GuideSection/>
                <ContactSection/>
            </main>

            <AppFooter/>
        </>
    )
}
