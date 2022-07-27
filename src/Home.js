import React from 'react'
import Hero from './Hero'
import Banner from './Components/Banner'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <Hero hero="defaultHero">
          <Banner title="Rooms Available" subtitle="Luxury rooms starting at 95$">
<Link to="/Room" className='btn-primary'>
  Our rooms
</Link>
          </Banner>
        </Hero>
    </div>
  )
}
