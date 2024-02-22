import { useEffect } from "react";
export default function Home(){
    useEffect(() => {
        const handleMouseEnter = (e) => {
          const text_home = e.target;
          if (text_home) {
            const rect = text_home.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
            text_home.style.setProperty("--mouse-x", `${x}px`);
            text_home.style.setProperty("--mouse-y", `${y}px`);
          }
        };
    
        const text_home = document.getElementById("text_home");
    
        if (text_home) {
          text_home.addEventListener("mousemove", handleMouseEnter);
    
          return () => {
            text_home.removeEventListener("mousemove", handleMouseEnter);
          };
        }
      }, []);
    return(
        <>
        <div className = 'home'>
        <div id='text_home'><h1>Organize <br></br>Your Work</h1></div>
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