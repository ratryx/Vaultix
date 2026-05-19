import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Products from '@/components/Products'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import Support from '@/components/Support'
import Footer from '@/components/Footer'
import CouponPopup from '@/components/CouponPopup'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBar />
      <Products />
      <HowItWorks />
      <Testimonials />
      <Support />
      <Footer />
      <CouponPopup />
    </main>
  )
}
