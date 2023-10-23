import AboutSection from "@/components/AboutSection/AboutSection"
import ContactSection from "@/components/ContactSection/ContactSection"
import HeroSection from "@/components/HeroSection/HeroSection"
import WorkSection from "@/components/WorkSection/WorkSection"
import Navbar from "@/components/navbar/Navbar"
export default function Home() {
    return(
        <section>
            <Navbar />
            <HeroSection />
            <WorkSection />
            <AboutSection />
            <ContactSection />
        </section>
    )
}