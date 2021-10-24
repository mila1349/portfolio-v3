import React, {useState} from 'react'
import './style.scss'
import {motion, useTransform,useViewportScroll} from 'framer-motion'

function Slogan({refer}) {
    const {scrollY}= useViewportScroll()
    
    const moveA=useTransform(
        scrollY,
        [400,600],
        ["-200vw","0vh"]
    )

    const moveB=useTransform(
        scrollY,
        [400,600],
        ["200vw","0vh"]
    )

    const moveC=useTransform(
        scrollY,
        [400,600],
        ["-200vw","0vh"]
    )
    
    return (
        <div className="slogan" ref={refer}>
            <div className="text">
                <motion.h1
                    style={{
                        x:moveA
                    }}
                >A NEW WORLD</motion.h1>
                <motion.h1
                    style={{
                        x:moveB
                    }}
                >HOSTED THROUGH</motion.h1>
                <motion.h1
                    style={{
                        x:moveC
                    }}
                >BROWSER</motion.h1>
            </div>
        </div>
    )
}

export default Slogan 
