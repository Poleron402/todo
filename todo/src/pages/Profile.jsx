import { useOutletContext } from "react-router"
import { useNavigate } from "react-router"
export const Profile = ()=>{
    const [user, setUser] = useOutletContext()
    const navigate = useNavigate()
    console.log(user)
    const logoutHandler =(e)=>{
        localStorage.removeItem("token")
        setUser(null)
        navigate('/login', {replace: true})
    }
    return (
        <>
        <h1>Welcome {user}!</h1>
        <button onClick={(e)=>{logoutHandler(e)}}>Logout</button>
        </>
    )
}