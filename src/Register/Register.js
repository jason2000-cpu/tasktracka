import {useState, React} from 'react'
import { Link } from 'react-router-dom'

import '../login/login.css'
// import './Register.css'
// import logo from '../image/logo.svg'
import Vector from '../image/Vector.png'
import googleIcon from '../image/googleIcon.svg'

function Register(props) {
    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {

        const formData = new FormData();
        formData.append('username', username);
        // formData.append('email', email);
        formData.append('password', password);

        try {
            const res = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            const json = await res.json();
            console.log(json);
            if (json.status === "success"){
                localStorage.setItem('token', json.data.token);
                props.history.push('/home');
                alert('Registration Successful');
                window.location.href = '/home';
            }
           
        } catch (err) {
            console.log(err);
        }
    }

    
    const confirmPassword = (e) => {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const passwordConf = document.getElementById('passwordConf').value;
        if (password !== passwordConf) {
            alert('Password does not match');
        } else {
            setPassword(password);
            handleSubmit(e);
            
        }
    }



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
                    <input type="text" class="form-control" id="username" aria-describedby="username" onChange={(e)=>{setUsername(e.target.value)}}  required/> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required />
                </div>
                <div class="mb-3">
                    <label for="passwordConf" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="passwordConf" required />
                </div>
                <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn" onClick={confirmPassword}>Submit</button>
            </form>
            <p>Already have an Account? <Link to={'/login'} style={{textDecoration:'none'}}><span>Login</span></Link> </p>
        </div>
    </div>
  )
}

export default Register