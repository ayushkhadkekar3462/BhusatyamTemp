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
import CardSlider2 from '../../components/CardSlider2'
import '../../index.css';
import ResponsiveComponent from '../../components/ResponsiveComponent'

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
    <center><div className='sliderencloser w-[90vw] '><div className='wholeslider '>
      <BesideSlider/>
    <CardSlider/></div></div></center>
    
    
    <div className="h-auto flex justify-center">
      <div className="w-[75%] p-2">
        <CategoryList />
      </div>
    </div>
    <div className='slider2headingencloser'><div className="slider2heading">Nearby land for sale</div>
    <CardSlider2/></div>
    
    <div className="App">
      <header className="App-header">
        <MarketplaceInfo />
      </header>
    </div>
    <Footer />
    {/* <ResponsiveComponent/> */}
    </>

  )
}

export default Home
