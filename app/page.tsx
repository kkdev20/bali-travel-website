import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Destinations from '@/components/sections/Destinations'
import Contact from '@/components/sections/Contact'
import ScrollProgress from '@/components/layout/ScrollProgress'
import FixedSocialIcons from '@/components/layout/FixedSocialIcons'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FixedSocialIcons />
      <Hero />
      <About />
      <Destinations />
      <Contact />
    </>
  )
}

