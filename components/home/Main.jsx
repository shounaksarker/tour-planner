import React from 'react'
import { Hero } from './Hero'
import { PlanYourTrip } from './PlanYourTrip'
import { BestTravel } from './BestTravel'
import { FromSponsor } from './FromSponsor'
import { LatestStories } from './LatestStories'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <PlanYourTrip/>
        <BestTravel/>
        <FromSponsor/>
        <LatestStories/>
    </div>
  )
}
