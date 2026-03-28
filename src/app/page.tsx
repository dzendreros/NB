import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import GallerySection from '@/components/GallerySection'
import EventTypesSection from '@/components/EventTypesSection'
import CredibilitySection from '@/components/CredibilitySection'
import SocialProofSection from '@/components/SocialProofSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <EventTypesSection />
        <div className="section-divider" />
        <CredibilitySection />
        <div className="section-divider" />
        <SocialProofSection />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
