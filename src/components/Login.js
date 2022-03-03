import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import loginimg from '../images/login svg.jpg'


const Login = () => {
  const [loginUser,setLoginUser] = useState({email:"", password:""})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginUser({...loginUser,[name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoginUser({email: "", password: ""});
  }

  return (
    <div className='login_container'>
      <div className='login_container_left'>
        <div className='title'>
            <h1 style={{ color: '#0a65a4' }}>Login</h1>
        </div>

        <form className='form_container' onSubmit={handleSubmit}>
          <div className='form_field'>
            <label style={{ color: '#0a65a4' }}>
              <b>Email:</b>
            </label>
            <input type='email' name='email' required value={loginUser.email} onChange={handleChange}></input>
          </div>

          <div className='form_field'>
            <label style={{ color: '#0a65a4' }}>
              <b>Password:</b>
            </label>
            <input type='password' name='password' required value={loginUser.password} onChange={handleChange}></input> 
          </div>

          <button type='submit' className='btn'>Login</button>
        </form>
        
        <div className='login_footer'>
          Don't have an account? 
          <Link to='/signup' style={{ color: '#0a65a4' }}>
            <b> Sign up</b>
          </Link>
        </div>
      </div>
      
      <div className='login_container_right '>
        <img src={loginimg} />
      </div>
    </div>
  )
}

export default Login