import { useOutletContext } from "react-router"
import { useNavigate } from "react-router"
export const Profile = ()=>{
    const [user] = useOutletContext()
    const navigate = useNavigate()
    console.log(user)
    const logoutHandler =(e)=>{
        localStorage.removeItem("token")
        navigate('/login', {replace: true})
    }
    return (
        <>
        <h1>Welcome {user}!</h1>
        <button onClick={(e)=>{logoutHandler(e)}}>Logout</button>
        </>
    )
}