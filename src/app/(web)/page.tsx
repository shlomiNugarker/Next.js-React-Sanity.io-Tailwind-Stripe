import Gallery from '@/cmps/Gallery/Gallery'
import HeroSection from '@/cmps/HeroSection/HeroSection'
import NewsLetter from '@/cmps/NewsLetter/NewsLetter'
import PageSearch from '@/cmps/PageSearch/PageSearch'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery />
      <NewsLetter />
    </>
  )
}
