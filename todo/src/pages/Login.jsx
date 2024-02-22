import './Login.css'
import bg from '../assets/unsplash.jpg'
import { api } from '../utilities'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useOutletContext } from 'react-router'
export const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useOutletContext()
    const [success, setSuccess] = useState(true)
    let navigate = useNavigate()
    const onSubmitHandler = async(e) =>{
        e.preventDefault();
        // Do the backend stuff
        let data = {
            email: email,
            password: password
        }
        try{let request = await api.post('user/login/', data)
        let user = request.data.username
        let token = request.data.token
        localStorage.setItem("token", token)
        api.defaults.headers.common['Authorization'] = `Token ${token}`
        setUser(user)
        navigate("/profile", {replace: true})
    }catch(e){
        setSuccess(false)
    }
    }
    useEffect(()=>{
        setSuccess(true)
    }, [])
    const myStyle = {
        color: '#FF0000	',
      };
    return(
        <>
        <div className='lisu'>
            <div className="auth_div">
                <div id="left">
                    <img src={bg} id='login_bg'></img>
                    <h1>Get stuff ✅-ed</h1>
                </div>
                <div id="right">
                    <h1>Welcome back</h1><br></br>
                    <form onSubmit={(e)=>onSubmitHandler(e)}>
                    <input className = 'auth' placeholder='Email:' onChange={e=>setEmail(e.target.value)}></input>
                    <input type='password' className = 'auth' placeholder='Password:' onChange={e=>setPassword(e.target.value)}></input>
                    <input type='submit' id='sub' ></input>
                    </form>
                    {!success?(<p style={myStyle}>Incorrect credentials</p>):(<></>)}
                    <p>Haven't joined yet?</p>
                    <a href="/register">Sign Up</a>
                </div>
                
            </div>
        </div>
        </>
    )
}