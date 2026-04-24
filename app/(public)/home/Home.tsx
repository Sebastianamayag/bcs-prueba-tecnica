import React from 'react'
import { RequiresSection } from './components/RequiresSection'
import { WorksSection } from './components/WorksSection'

export const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <WorksSection />
      <RequiresSection />
    </div>
  )
}
