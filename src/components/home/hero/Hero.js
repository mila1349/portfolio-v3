import React from 'react'
import './style.scss'
import {motion} from 'framer-motion'
import SplitText from '../../effects/SplitText'

function Hero({secondPulse, displayAnimation}) {

    return (
        <div className="hero">
            <div className="text">
                <h1>
                <SplitText
                    initial={displayAnimation?{ y: "100%" }:false}
                    animate={secondPulse&&"visible"}
                    variants={{
                    visible: (i) => ({
                        y: 0,
                        transition: {
                        delay: i * 0.1,
                        duration: 1.2
                        }
                    })
                    }}
                >
                 WEB DEVELOPER  
                </SplitText> 
                </h1>
                <motion.h2
                initial={displayAnimation?{opacity:0}:false}
                animate={secondPulse?{
                    opacity:1,
                    transition:{
                        duration:2
                    }
                }:null}
                >UI/UX DESIGNER</motion.h2> 
            </div>
            <motion.h1 className="dan"
            initial={{
                opacity:0
            }}
            animate={{
                opacity:1,
                transition:{
                    delay:10,
                    duration:2
                }
            }}

            >&</motion.h1>
            
            <motion.div className="small-bio"
            initial={displayAnimation?{opacity:0}:false}
            animate={secondPulse?{
                opacity:1,
                transition:{
                    duration:2
                }
            }:null}
            >
                <h3>INNE KAMILA</h3>
                <p>speciality in creating and developing interactive & unique user interface  </p>
            </motion.div>
        </div>
    )
}

export default Hero
