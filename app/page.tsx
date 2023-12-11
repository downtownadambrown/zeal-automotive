import Image from 'next/image'

const Section = ({ alt, src, reverse }: { alt: string; src: string; reverse?: boolean }) => {
  const contentImage = (
    <div className="h-full w-3/6 bg-stone-200/50">
      <Image src={src} alt={alt} />
    </div>
  )

  const contentSection = (
    <div className="h-full w-3/6 bg-slate-500/50">a</div>
  )
  
  return (
    <div className="section w-full flex flex-row w-full h-full mt-8">
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
        <Section alt="" src="" />
        <Section alt="" src="" reverse />
        <Section alt="" src="" />
      </SectionContainer>
    </main>
  )
}
