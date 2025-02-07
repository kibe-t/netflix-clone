import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../assets/back_arrow_icon.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'



const Player = () => {
  const navigate=useNavigate()

 
  
  const {id}=useParams();
  const [apiData,setapiData]=useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFjZjExOTFiNzE2MWRlNWFiNjZhYTUxNDNjM2UxZCIsIm5iZiI6MTczODg2MDU3Ni42NzgwMDAyLCJzdWIiOiI2N2E0ZTgyMGVhNDlkZTdhYzAyZmRjOGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.gyFNgBWj1EMfCYRnE90ZWMMZk3gvELXNDlT8uz6nsOk'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
 
  return (
    <div className='player'>
      <img onClick={()=>{navigate(-2)}} src={back} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="playerinfo">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player