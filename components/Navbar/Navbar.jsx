import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import src from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'


const Navbar = () => {
  const navref=useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=100){
        navref.current.classList.add('navdark')
      }else{
        navref.current.classList.remove('navdark')
      }
    })

  },[])
  
  return (
    <div ref={navref} className='navbar'>
      <div className='navbarleft'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv show</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbarright">
        <img src={src}alt="" className='icons' />
        <p>Children</p>
        <img src={bell} alt="" className='icons' />
        <div className="navbarprofile">
          <img src={profile} alt="" className='profile' />
          <img src={caret} alt="" className='caret' />
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar