import { useOutletContext } from "react-router"
export const Profile = ()=>{
    const [user] = useOutletContext()
    console.log(user)
    return (
        <>
        <h1>Welcome {user}!</h1>
        </>
    )
}