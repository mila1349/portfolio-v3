import React from 'react'
import './style.scss'
import {motion} from 'framer-motion'

function Profile({refer, inview}) {
    
    return (
        <div className="profile" ref={refer} id="profile">
            <div className="section-title">
                <motion.img className="bgTitle" src="assets/images/texturedBg.png" alt="" 
                    initial={{
                        translateX:1000,
                        translateY:"-50%"
                    }}
                    animate={inview?
                        {translateX:0,translateY:"-50%",}:{translateX:1000,translateY:"-50%"}
                    }
                />
                <h1>profile</h1>
            </div>

            <div className="profile-container">
                <motion.div className="images"
                initial={{
                    y:200,
                    x:300,
                    opacity:0
                }}
                animate={inview?
                    {y:0, x:0, opacity:1}:
                    {y:100, x:300, opacity:0}}
                    
                >
                    <div className="frame"></div>
                    <div className="frame"></div>
                    <img src="assets/images/profile.jpg" alt="" />
                </motion.div>

                <div className="desc">
                    <h1>INNE KAMILA</h1>
                    <p>My name is Inne kamila, i'm freelance web developer and ui/ux designer speciality in creating unique user interface, i will help you build your brand and bring ideas to life  
                        </p><p className="hide">I also skilled in graphic design and layouting in general since it helps in designing application.
                        Hardworking, fully motivated, strong attention to detail, innovate, and eager to learn and cooperate 
                        are my best personal qualities.</p>
                </div>
            </div>           
            
        </div>
    )
}

export default Profile
