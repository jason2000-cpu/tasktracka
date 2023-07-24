import React from 'react'


import '../login/login.css'
import logo from '../image/logo.svg'

function Register() {
  return (
<div className='bdy'>
        <div className='logo'>
            <h2>Task</h2>
            <img src={logo} id='icon' alt='logo'/>
            <h2>Tracka</h2>
        </div>
        <div className='login'>
            <h2>Sign In</h2>
            <div className='google-login'>
                <div className='gogle-logo'>
                    <h1>G</h1>
                </div>
                <div className='ggle-text'>
                    <h5>Continue with Google</h5>
                </div>
            </div>
            <h5 style={{display:'flex', justifyContent:'center', margin:'1rem'}}>or</h5>
            <div className='form'>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" aria-describedby="username" /> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <div class="mb-3">
                    <label for="passwordConf" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="passwordConf" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Register