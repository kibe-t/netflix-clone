import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero from '../../assets/hero_banner.jpg'
import herotitle from '../../assets/hero_title.png'
import play from '../../assets/play_icon.png'
import info from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecard/Titlecards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero} alt="" className='bannerimg'/>
        <div className="herocaption">
          <img src={herotitle} alt="" className='captionimg' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium debitis voluptatum blanditiis architecto optio non, autem nemo neque voluptates laboriosam maiores 
            iusto earum assumenda, sint culpa eveniet, illum amet eos.</p>
          <div className="herobtn">
            <button className='btn'><img src={play} alt="" />play</button>
            <button className='btn drkbtn'><img src={info} alt="" />more info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="morecards">
        <Titlecards title={'Blockbuster movies'} category={'top_rated'}/>
        <Titlecards title={'Only on netflix'} category={'popular'}/>
        <Titlecards title={'Upcoming'} category={'upcoming'}/>
        <Titlecards title={'Topics for you'} category={'now_playing'}/>
      </div>
      <Footer/>

    </div>
  )
}

export default Home