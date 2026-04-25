import { HeroSection, RequiresSection, WorksSection } from "./components"


export const Home = () => {
  return (
    <div className='flex flex-col gap-10 mb-10'>
      <HeroSection />
      <WorksSection />
      <RequiresSection />
    </div>
  )
}
