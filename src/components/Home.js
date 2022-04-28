import React from "react";
import { motion } from "framer-motion"
import "../components/home.css"
import Rec1 from "../rec1.png"
import Rec2 from "../rec2.png"
import Rec3 from "../rec3.png"
import Rec4 from "../rec4.png"
import Rec5 from "../rec5.png"
import Rec6 from "../rec6.png"
import Hero from "../Hero-image.png"
import Clip from "../choose.mp3"

const containerVariants = {
    initial:{
        x:"300vw"
    },
    visible:{
        x:0, 
        transition:{
            type:'spring',
            delay:0.4,
            stiffness:20,
            duration:2
        }
    }
}

const audioVariants = {
    initial:{
        y:500
    },
    visible:{
        y:0,
        transition: {
            delay:0.5,
            duration: 7,
            type:'spring',
            stiffness:100
        }
    }

}


const Home = ()=>{
    return (
        <main>

            <div className="text-audio">
            
                <motion.div
                initial={{x:"-50vw"}}
                animate={{x:0}}
                transition={{type:"spring", delay:0.5 , duration:7, stiffness:100}}
                 className="lead-text">
                    <h1>The entrepreneurship <br/> podcast</h1>
                    <p>...by Lona</p>
                </motion.div>

                <motion.div
                variants={containerVariants}
                initial="initial"
                animate="visible"

                 className="Description-text">
                <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry...</p>
                </motion.div>

                <motion.div 
                variants={audioVariants}
                initial="initial"
                animate="visible"
                className="latest-clip">
                    <audio 
                    controls = {true}
                    autoPlay={true}>
                        <source  type="mp3/audio" src={Clip}/>
                    </audio>
                </motion.div>
                
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