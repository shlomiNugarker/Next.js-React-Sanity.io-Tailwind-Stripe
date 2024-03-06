import FeaturedRoom from '@/cmps/FeaturedRoom/FeaturedRoom'
import Gallery from '@/cmps/Gallery/Gallery'
import HeroSection from '@/cmps/HeroSection/HeroSection'
import NewsLetter from '@/cmps/NewsLetter/NewsLetter'
import PageSearch from '@/cmps/PageSearch/PageSearch'
import { getFeaturedRoom } from '@/libs/apis'

export default async function Home() {
  const featuredRoom = await getFeaturedRoom()

  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter />
    </>
  )
}
