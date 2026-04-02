import UrgencyBanner from '@/components/UrgencyBanner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeatureStrip from '@/components/FeatureStrip'
import StatementSection from '@/components/StatementSection'
import ExperienceSection from '@/components/ExperienceSection'
import PricingSection from '@/components/PricingSection'
import GallerySection from '@/components/GallerySection'
import EventTypesSection from '@/components/EventTypesSection'
import CredibilitySection from '@/components/CredibilitySection'
import SocialProofSection from '@/components/SocialProofSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Fixed top bar — urgency banner (z-60) */}
      <UrgencyBanner />

      {/* Navbar sits below urgency banner (top-[40px], z-50) */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Feature strip — 4 icons */}
        <FeatureStrip />

        {/* 3. Statement impact section */}
        <StatementSection />

        <div className="section-divider" />

        {/* 4. ExperienceSection — "El Problema" / event categories */}
        <ExperienceSection />

        <div className="section-divider" />

        {/* 5. Pricing packages (id="paquetes") */}
        <PricingSection />

        <div className="section-divider" />

        {/* 6. Gallery — "El Arsenal" with real event photos */}
        <GallerySection />

        <div className="section-divider" />

        {/* 7. Adaptabilidad — untouched */}
        <EventTypesSection />

        <div className="section-divider" />

        {/* 8. Credibility / "Por qué NB" */}
        <CredibilitySection />

        <div className="section-divider" />

        {/* 9. Testimonials carousel + client logos */}
        <SocialProofSection />

        <div className="section-divider" />

        {/* 10. Final CTA */}
        <CTASection />
      </main>

      {/* Footer — redesigned */}
      <Footer />
    </>
  )
}
