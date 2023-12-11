import Image from 'next/image'

const MainBanner = () => (
  <div className="banner w-full flex items-center justify-center bg-gray-800">
    Banner here
  </div>
)

const Section = ({ alt, className, src, reverse }: { alt: string; className?: string; src: string; reverse?: boolean }) => {
  const contentImage = (
    <div className="h-full w-3/6 bg-stone-200/50 flex items-center justify-center">
      <Image src={src} alt={alt} />
      this is where an image will fill up the entire container
    </div>
  )

  const contentSection = (
    <div className="h-full w-3/6 bg-slate-500/50 flex items-center justify-center">
      this is where some content will go
    </div>
  )
  
  const outerClassName = `section w-full flex flex-row w-full h-full mt-8 ${className}`

  return (
    <div className={outerClassName}>
      {!!reverse ? contentImage : contentSection}
      {!!reverse ? contentSection : contentImage}
    </div>
  )
}

const SectionContainer = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="section-container flex flex-col items-center">
    {children}
  </div>
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16">
      <SectionContainer>
        <MainBanner />
        <Section alt="" src="" />
        <Section alt="" src="" reverse />
        <Section alt="" src="" className="mb-8" />
      </SectionContainer>
    </main>
  )
}
