const Hero = () => {
  return (
    <section className="relative h-screen max-h-[400px] xl:max-h-[800px]">
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
    </section>
  )
}

export default Hero
