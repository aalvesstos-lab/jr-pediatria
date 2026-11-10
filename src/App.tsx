import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { CareManifesto } from '@/components/CareManifesto'
import { DoctorProfile } from '@/components/DoctorProfile'
import { ServicesSection } from '@/components/ServicesSection'
import { AppointmentSection } from '@/components/AppointmentSection'
import { LocationSection } from '@/components/LocationSection'
import { FAQSection } from '@/components/FAQSection'
import { FinalCTA } from '@/components/FinalCTA'
import { FloatingWhatsApp, ScrollProgress, SectionDots } from '@/components/shared'

export default function App() {
  const [floating, setFloating] = useState(false)
  useEffect(() => {
    const on = () => setFloating(window.scrollY > 600)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <CareManifesto />
        <DoctorProfile />
        <ServicesSection />
        <AppointmentSection />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <SectionDots />
      <FloatingWhatsApp visible={floating} />
    </>
  )
}
