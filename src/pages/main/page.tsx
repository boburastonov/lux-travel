import React from 'react'
import Header from './header'
import Hero from './hero'
import Video from './video'
import Collage from './collage'
import SelCause from './selCause'
import RestPlaces from './restPlaces'
import Services from './services'
import Accardion from './accordion'
import Contact from './contact'

const Main = () => {
  return (
    <div>
      <main className="main md:py-[30px]">
        <Header />
        <Hero />
      </main>
      <Video />
      <Collage />
      <SelCause />
      <RestPlaces />
      <Services />
      <Accardion />
      <Contact />
    </div>
  )
}

export default Main