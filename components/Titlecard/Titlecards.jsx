import React, { useEffect, useRef, useState } from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const Titlecards = ({title,category}) => {
  const [apiData,setApiData]=useState([])
  const cardsRef=useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFjZjExOTFiNzE2MWRlNWFiNjZhYTUxNDNjM2UxZCIsIm5iZiI6MTczODg2MDU3Ni42NzgwMDAyLCJzdWIiOiI2N2E0ZTgyMGVhNDlkZTdhYzAyZmRjOGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gyFNgBWj1EMfCYRnE90ZWMMZk3gvELXNDlT8uz6nsOk'
    }
  };

  const handlewheel=(event)=>{
    event.preventDefault()
    cardsRef.current.scrollleft+=event.deltaY
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlewheel)

  },[])
  return (
    <div className='titlecards'>
      <h2>{title?title:"Porpular on Netflix"}</h2>
      <div className="cardlist" ref={cardsRef}>
       {apiData.map((card,index)=>{
         return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
         </Link>
       })}
      </div>
      
        
    </div>
  )
}

export default Titlecards