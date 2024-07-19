import React from 'react'
import Header from '../../components/header'
import Searchbar from '../../components/Searchbar'
import CardSlider from '../../components/CardSlider'
import BesideSlider from '../../components/BesideSlider'
import "../../styles/componentstyles/Home.css"

function Home() {
  return (
    <>
    <Header />
    <Searchbar/>
    <div className='sliderencloser'><div className='wholeslider'>
      <BesideSlider/>
    <CardSlider/></div></div>
    
    
   
    
    </>

  )
}

export default Home
