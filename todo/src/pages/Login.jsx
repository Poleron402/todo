import './Login.css'
import bg from '../assets/unsplash.jpg'
import { useState } from 'react'
export const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        // Do the backend stuff
    }
    
    return(
        <>
        <div className='lisu'>
            <div className="auth_div">
                <div id="left">
                    <img src={bg} id='login_bg'></img>
                    <h1>Todo</h1>
                </div>
                <div id="right">
                    <h1>Welcome back</h1><br></br>
                    <form onSubmit={(e)=>onSubmitHandler(e)}>
                    <input class = 'auth' placeholder='Email:' onChange={e=>setEmail(e.target.value)}></input>
                    <input type='password' class = 'auth' placeholder='Password:' onChange={e=>setPassword(e.target.value)}></input>
                    <input type='submit' id='sub' ></input>
                    </form>
                </div>
                
            </div>
        </div>
        </>
    )
}