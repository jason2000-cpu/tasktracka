import {useState, React} from 'react'
import { useNavigate } from 'react-router-dom'
import googleIcon from '../image/googleIcon.svg'
import Vector from '../image/Vector.png'

import './login.css'
import { Link } from 'react-router-dom'



function Login({ getUserId }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/getUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            
            });
            
            const json = await res.json();
            // console.log(json);

            if (json.status === 'Success') {
                localStorage.setItem('token', json.body);
                // props.history.push('/home');
                 navigate(`/home/`);
                 getUserId(json.body);
                
            } else {
                alert('Invalid Credentials');
            }
        } catch (err) {
            console.log(err);
        }
    };

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
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" name='email' aria-describedby="email" onChange={onChange} required /> 
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name='password' onChange={onChange} required/>
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