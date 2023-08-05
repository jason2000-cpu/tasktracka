import {useState, React} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../login/login.css'
// import './Register.css'
// import logo from '../image/logo.svg'
import Vector from '../image/Vector.png'
import googleIcon from '../image/googleIcon.svg'

function Register({ getUserId }) {
    const navigate= useNavigate();

    const [formData, setFormData] = useState({});

    const onChange = (e) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/addUser', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const json = await res.json();
            console.log(json.status);
            if (json.status === "Success"){
                // localStorage.setItem('token', json.body.id);
                // props.history.push('/home');
                getUserId(json.body.id);
                alert('Registration Successful');
                navigate('/login');           
             }
           
        } catch (err) {
            console.log(err);
        }
    }

    
    // const confirmPassword = (e) => {
    //     e.preventDefault();
    //     const password = document.getElementById('password').value;
    //     const passwordConf = document.getElementById('passwordConf').value;
    //     if (password !== passwordConf) {
    //         alert('Password does not match');
    //     } else {
    //         // setPassword(password);
    //         handleSubmit(e);
            
    //     }
    // }



  return (
<div className='bdy'>
        <div className='logo'>
            <h1>Task</h1>
            <img src={Vector} id='icon' style={{width: '60px', height: '60px'}} alt='logo'/>
            <h1>Tracka</h1>
        </div>
        <div className='login'>
            <h2>Sign In</h2>
            <div className='google-login'>
                <div className='gogle-logo'>
                    <img src={googleIcon} alt='google-icon' />
                </div>
                <div className='ggle-text'>
                    <h5>Continue with Google</h5>
                </div>
            </div>
            <h5 style={{display:'flex', justifyContent:'center', margin:'1rem'}}>or</h5>
            <form className='form'>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="name" aria-describedby="username" name="username" onChange={onChange}  required/> 
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" name="email" onChange={onChange} required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password"  onChange={onChange} required />
                </div>
                <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn" onClick={handleSubmit}>Submit</button>
            </form>
            <p>Already have an Account? <Link to={'/login'} style={{textDecoration:'none'}}><span>Login</span></Link> </p>
        </div>
    </div>
  )
}

export default Register