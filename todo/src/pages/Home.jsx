export default function Home(){
    return(
        <>
        <div className = 'home'>
        <h1 id='text_home'>Organize <br></br>Your Work</h1>
        <div className='cards'>
        <div id = 't1_home'>
            <h3> <span className = "emoji_home">☐</span> Finish Chores <span className = "emoji_home">🧺</span></h3>
            <h3>Priority: <span style={{color: '#FFC900'}}>Medium</span></h3>
            <h4>Notes: Check how full the detergent is</h4>
        </div>
        <div id = 't2_home'>
            <h3> <span className = "emoji_home">☐</span> Code Away <span className = "emoji_home">✨</span></h3>
            <h3>Priority: <span style={{color: '#FF3A00'}}>High</span></h3>
            <h4>Notes: Be a better version of yourself today</h4>
        </div>
        
        </div>
        </div>
        </>
    )
}