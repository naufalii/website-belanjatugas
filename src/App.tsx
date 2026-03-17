import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-body scroll-smooth text-gray-800 antialiased selection:bg-secondary selection:text-primary">
      <main className="flex flex-col w-full overflow-hidden">
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
