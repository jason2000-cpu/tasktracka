import {useState, React} from 'react'
import googleIcon from '../image/googleIcon.svg'
import Vector from '../image/Vector.png'

import './login.css'
import { Link } from 'react-router-dom'

function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const res = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            
            });
            

            const json = await res.json();
            console.log(json);

            if (json.status === 'success') {
                localStorage.setItem('token', json.data.token);
                props.history.push('/home');
            } else {
                alert('Invalid Credentials');
            }
        } catch (err) {
            console.log(err);
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
            <form className='form'>
                <div class="mb-3">
                    <label for="username" class="form-label">Email address</label>
                    <input type="text" class="form-control" id="username" aria-describedby="username" onChange={(e)=>{setUsername(e.target.value)}} required /> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}} required/>
                </div>
                <div className='forgotpwdRem'>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"  />
                        <label class="form-check-label" for="exampleCheck1">Remeber me</label>
                    </div>
                    <div className='forgotpwd'>
                        <Link to={'/'} style={{textDecoration:'none'}}><span onClick={()=>{}}>Forgot Password?</span></Link>
                    </div>
                </div>
                <button type="submit"  style={{backgroundColor:'#367864', width:'100%'}} class="btn" onClick={handleSubmit}>Submit</button>
                <p>Don't have an Account?  <Link to={'/'} style={{textDecoration:'none'}}><span onClick={()=>{}}>Sign In</span></Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Login