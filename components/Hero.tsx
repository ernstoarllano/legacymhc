import { useWindowSize } from 'hooks/useWindowSize'
import Image from 'next/image'

const Hero = () => {
  const { width } = useWindowSize()

  const isDesktop = width >= 1024

  return (
    <section className="relative h-screen max-h-[400px] xl:max-h-[800px]">
      {isDesktop ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/preroll-for-website.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          className="absolute inset-0 w-full h-full object-cover"
          src="/placeholder.webp"
          layout="fill"
          alt="Test"
        />
      )}
    </section>
  )
}

export default Hero
