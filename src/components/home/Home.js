import React, {useEffect, useState, useRef} from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Slogan from './slogan/Slogan'
import Works from './works/Works'
import Services from './services/Services'
import Question from './questions/Question'
import Profile from './profile/Profile'
import Contact from './contact/Contact'
import MobileNav from './mobileNav/MobileNav'
import './style.scss'
import {motion, useTransform,useViewportScroll} from 'framer-motion'
import InView from 'react-intersection-observer'

function Home({displayAnimation, setDisplayAnimation}) {
    const [cursorXY, setCursorXY] = useState({ x:0, y:0 })
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 655px)").matches)
    const [open, setOpen]=useState(false)

    //STAGGER ANIMATION
    const [firstPulse, setFirstPulse]=useState(false)
    const [secondPulse, setSecondPulse]=useState(false)

    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX * 100 / window.innerWidth;
            const y = e.clientY  * 100 / window.innerWidth;
            setCursorXY({ x, y })
        }
        console.log(cursorXY.x, cursorXY.y)
        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    useEffect(() => {
        window.matchMedia("(max-width: 655px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    const {scrollY}= useViewportScroll()
    const bgMoveX=useTransform(
        scrollY,
        [0,100],
        ["0%",matches?"-30%":"-40%"]
    )

    const bgMoveY=useTransform(
        scrollY,
        [101,500],
        ["0vh","100vh"]
    )

    return (
        <div className="home"
        style={!displayAnimation?{height:"unset"}:{height:"100vh"}}
        >
            <motion.div className="bgTextured"
                initial={displayAnimation?{
                    translateX:1000,
                    translateY:0
                }:false}
                animate={firstPulse?{
                    translateX:0,
                    translateY:0,
                    transition:{
                        duration:2
                    }
                }:null}
                onAnimationComplete={()=>setSecondPulse(true)}
                style={{
                    x:bgMoveX,
                    y:bgMoveY
                }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <img src="assets/images/texturedBg.png" alt="" />
            </motion.div>

            <Navbar
                open={open}
                setOpen={setOpen}
                setFirstPulse={setFirstPulse}
                firstPulse={firstPulse}
                secondPulse={secondPulse}
                displayAnimation={displayAnimation}
                setDisplayAnimation={setDisplayAnimation}
            />
            <MobileNav
                open={open}
                setOpen={setOpen}
            />
            <Hero
                secondPulse={secondPulse}
                displayAnimation={displayAnimation}
            />


            <InView threshold={0.9} triggerOnce={true}>
            {({ ref, inView }) => (
                <Slogan
                refer={ref}
                inview={inView}
                />
            )}
            </InView>

            <InView threshold={0.7} triggerOnce={true}>
            {({ ref, inView }) => (
                <Works
                refer={ref}
                inview={inView}
                />
            )}
            </InView>
            
            <InView threshold={0.7} triggerOnce={true}>
            {({ ref, inView }) => (
                <Services
                refer={ref}
                inview={inView}
                />
            )}
            </InView>

            <Question
                cursor={cursorXY}
            />

            <InView threshold={0.7} triggerOnce={true}>
            {({ ref, inView }) => (
                <Profile
                refer={ref}
                inview={inView}
                />
            )}
            </InView>

            <Contact/>
        </div>
    )
}

export default Home
