
export default function Navbar({user}){
    console.log(user)
    return(
        <>
            <div className="navbar">
                <a href="\" id = "title">Todo</a>
                <div className = "options">
                    <a href = "#" className='lnk'>Motivate</a>
                    <a href = "why-todo" className='lnk'>Why Todo?</a>
                </div >
                {user? (<a href="profile"className='lnk' >Profile</a>):
                (<a href="login"className='lnk' id = "lgn">Login</a>)
                }
                
            </div>
        </>
    )
}