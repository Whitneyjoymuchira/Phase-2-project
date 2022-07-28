import React from 'react'
import Hero from './Hero'
import Banner from './Components/Banner'
import { Link } from 'react-router-dom'
import Services from './Components/Services'
import FeaturedRooms from './Components/FeaturedRooms'
import StyledHero from './Components/StyledHero'
export default function Home() {
  return (
    <div>
        <Hero hero="defaultHero">
          <Banner title="Rooms Available" subtitle="Luxury rooms starting at 95$">
<Link to="/Rooms" className='btn-primary'>
  Our rooms
</Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms/>
    </div>
  )
}
