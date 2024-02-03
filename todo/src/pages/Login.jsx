import './Login.css'
import bg from '../assets/unsplash.jpg'
export const Login = () =>{
    return(
        <>
        <div className='lisu'>
            <div className="auth_div">
                <div id="left">
                    <img src={bg} id='login_bg'></img>
                    <h1>Todo</h1>
                </div>
                <div id="right">
                    <h1>Welcome back</h1>
                </div>
                
            </div>
        </div>
        </>
    )
}