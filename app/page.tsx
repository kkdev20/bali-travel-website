import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Destinations from '@/components/sections/Destinations'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Gallery from '@/components/sections/Gallery'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/layout/ScrollProgress'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  )
}

