import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footericons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help center</li>
        <li>Gift cards</li>
        <li>Media center</li>
        <li>Investor relations</li>
        <li>Jobs</li>
        <li>Provacy</li>
        <li>Legal notices</li>
        <li>Cookie references</li>
        <li>Cooporate information</li>
        <li>Contact us</li>
      </ul>
      <p className="copyrighttext">@ 1997-2025 Netflix Inc</p>
      

    </div>
  )
}

export default Footer