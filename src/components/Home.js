import React from "react";
import "../components/home.css"
import Rec1 from "../rec1.png"
import Rec2 from "../rec2.png"
import Rec3 from "../rec3.png"
import Rec4 from "../rec4.png"
import Rec5 from "../rec5.png"
import Rec6 from "../rec6.png"
import Hero from "../Hero-image.png"
import Clip from "../choose.mp3"


const Home = ()=>{
    return (
        <main>

            <div className="text-audio">
            
                <div className="lead-text">
                    <h1>The entrepreneurship <br/> podcast</h1>
                    <p>...by Lona</p>
                </div>

                <div className="Description-text">
                <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry...</p>
                </div>

                <div className="latest-clip">
                    <audio 
                    controls = {true}
                    autoPlay={true}>
                        <source  type="mp3/audio" src={Clip}/>
                    </audio>
                </div>
                
            </div>

            <div className="home-img">
                
                <div className="rectangles">
                    <img src={Rec1} alt="" className="rec1"/>
                    <img src={Rec2} alt="" className="rec2"/>
                    <img src={Rec3} alt="" className="rec3"/>
                    <img src={Rec4} alt="" className="rec4"/>
                    <img src={Rec5} alt="" className="rec5"/>
                    <img src={Rec6} alt="" className="rec6"/>
                </div>

               
                <img src={Hero} alt="Hero-img" className="hero-img"/> 
                
                

            </div>

            
        </main>
    )
}

export default Home