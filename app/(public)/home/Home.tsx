import React from 'react'
import { RequiresSection } from './components/RequiresSection'
import { WorksSection } from './components/WorksSection'
import { HeroSection } from './components/HeroSection'

export const Home = () => {
  return (
    <div className='flex flex-col gap-10 mb-10'>
      <HeroSection />
      <WorksSection />
      <RequiresSection />
    </div>
  )
}
