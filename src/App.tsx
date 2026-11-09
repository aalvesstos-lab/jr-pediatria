import { useEffect, useState } from 'react'
import { doctor } from '@/data/doctor'
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
      {doctor.previewMode && (
        <div role="note" className="fixed bottom-4 left-4 z-30 hidden min-[1400px]:block max-w-[calc(100%-5.5rem)] rounded-full bg-forest/90 px-4 py-2 text-[11px] leading-snug text-bege-paper sm:max-w-[15rem]">
          Modo prévia: conteúdo sugerido, pendente de validação da Dra. Jade.
        </div>
      )}
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
