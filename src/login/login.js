import React from 'react'
import googleIcon from '../image/googleIcon.svg'
import Vector from '../image/Vector.png'

import './login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='bdy'>
        <div className='logo'>
            <h1>Task</h1>
            <img src={Vector} id='icon' style={{width: '60px', height: '60px'}} alt='logo'/>
            <h1>Tracka</h1>
        </div>
        <div className='login'>
            <h2>Login</h2>
            <div className='google-login'>
                <div className='gogle-logo'>
                    <img src={googleIcon} alt='google-icon' />
                </div>
                <div className='ggle-text'>
                    <h5>Continue with Google</h5>
                </div>
            </div>
            <h5 style={{display:'flex', justifyContent:'center', margin:'1rem'}}>or</h5>
            <div className='form'>
                <div class="mb-3">
                    <label for="username" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="username" aria-describedby="username" /> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn">Submit</button>
                <p>Don't have an Account?  <Link to={'/'} style={{textDecoration:'none'}}><span onClick={()=>{}}>Sign In</span></Link> </p>
            </div>
        </div>
    </div>
    // <h1>HELLO WORLD!!!</h1>
  )
}

export default Login