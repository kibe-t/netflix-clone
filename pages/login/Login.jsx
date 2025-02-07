import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signstate,setsignstate]=useState('Sign In')
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [loading,setloading]=useState(false)

  const userAuth=async(event)=>{
    event.preventDefault()
    setloading(true)
    if(signstate==='Sign In'){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setloading(false)
  }
  return (
    loading? <div className="loginspinner"><img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className='loginlogo' />
      <div className="loginform">
        <h1>{signstate}</h1>
        <form>
          {signstate==='Sign Up'?<input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" placeholder='Your name' />:<></>}
          
          <input value={email} onChange={(e)=>{setemail(e.target.value)}}  type="email" placeholder='Your e-mail' />
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder='Your password' />
          <button onClick={userAuth} type='submit'>{signstate}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>need help</p>
          </div>
          <div className="formswitch">
            {signstate==='Sign In'?<p>new to netflix?<span  onClick={()=>{setsignstate('Sign Up')}}>signup now</span></p>
            : <p>already have account?<span onClick={()=>{setsignstate('Sign In')}}>signin now</span></p>}
          </div>
        </form>
      </div>

    </div>
  )
}

export default Login