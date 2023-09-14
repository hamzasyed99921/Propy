import React from 'react'
import Hero from '../components/Elements/Hero'
import Future from '../components/Elements/Future'
import Featured from '../components/Elements/Featured'
import Funds from '../components/Elements/Funds'
import Escrow from '../components/Elements/Escrow'
import Newsletter from '../components/Elements/Newsletter'
import Card from '../components/Elements/Card'
import Sections from '../components/Elements/Sections'
import Client from '../components/Elements/Client'
import Inventions from '../components/Elements/Inventions'

const Home = () => {
  return (
    <>
      <Hero/>
      <Future/>
      <Featured/>
      <Funds/>
      <Inventions/>
      <Client/>
      <Escrow/>
      <Sections/>
      <Newsletter/>
      <Card/>
    </>
  )
}

export default Home