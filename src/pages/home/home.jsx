import React from 'react'
import Header from '../../components/header'
import Searchbar from '../../components/Searchbar'
import CardSlider from '../../components/CardSlider'
import BesideSlider from '../../components/BesideSlider'
import "../../styles/componentstyles/Home.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Textslider from '../../components/textsilder'
import CategoryList from '../../components/categorylist'
import MarketplaceInfo from '../../components/info'
import Footer from '../../components/footer'

function Home() {
  return (
    <>
    <Header />
    <Searchbar/>
    <div className="h-[20vh] flex justify-center ">
      <div className='w-[70%] pt-16'>
         <Textslider />
         </div>
       
    </div>
    <div className='sliderencloser'><div className='wholeslider'>
      <BesideSlider/>
    <CardSlider/></div></div>
    
    <div className="h-auto flex justify-center">
      <div className="w-[75%] p-2">
        <CategoryList />
      </div>
    </div>
    <div className="App">
      <header className="App-header">
        <MarketplaceInfo />
      </header>
    </div>
    <Footer />
    </>

  )
}

export default Home
