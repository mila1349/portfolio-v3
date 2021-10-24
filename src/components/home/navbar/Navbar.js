import React, {useRef,useEffect, useState} from 'react'
import './style.scss'
import {motion, useTransform, useViewportScroll} from 'framer-motion'

function Navbar({setOpen, firstPulse, setFirstPulse, secondPulse, displayAnimation, setDisplayAnimation}) {
    const ref = useRef(null);
    const refNav = useRef(null);
    const width=(50*window.innerWidth/100);
    const height=(50*window.innerHeight/100);
    const [x, setX]=useState(0)
    const [y, setY]=useState(0)
    const [yScale, setYscale]=useState(0)

    const [matchesPhone, setMatchesPhone] = useState(window.matchMedia("(max-width: 428px)").matches)
    const [matchesTablet, setMatchesTablet] = useState(window.matchMedia("(max-width: 900px)").matches)
    const [scale, setScale]=useState(1)

    const [back,setBack]=useState(false)

    const {scrollY}= useViewportScroll()
    const svgBackScale=useTransform(
        scrollY,
        [1,100],
        [scale,1]
    )

    const svgBack=useTransform(
        scrollY,
        [1,100],
        [yScale,0]
    )

    
    const style={
        scale:svgBackScale,
        y:svgBack,
        originY:0, 
        originX:0,
    }

    const styleBefore={
        originY:0, 
        originX:0,
    }
    useEffect(() => {
        const paddingLeft = window.getComputedStyle(refNav.current, null).getPropertyValue('padding-left')
        const nah=Math.sqrt((ref.current.clientWidth*ref.current.clientWidth)+(ref.current.clientHeight*ref.current.clientHeight))
        setX(width-(ref.current.clientWidth/2))
        setY(height-(nah/2))

        setYscale(height-(nah/2)-(ref.current.clientHeight/2))

       }, []);

    useEffect(()=>{
        setInterval(()=>{
            setBack(true)
        },10000)
    },[])

    useEffect(() => {
        window.matchMedia("(max-width: 428px)").addEventListener('change', e => setMatchesPhone(e.matches));
        window.matchMedia("(max-width: 900px)").addEventListener('change', e => setMatchesTablet(e.matches));
        if(matchesPhone){
            setScale(3)
        }else if(matchesTablet){
            setScale(5)
        }else{
            setScale(7)
        }
    }, []);

    return (
        <motion.div className="navbar">
            <div className="nav-inner" ref={refNav}>
                <motion.svg  viewBox="0 0 197 196" fill="none" xmlns="http://www.w3.org/2000/svg"
                key={x}
                ref={ref}
                initial={displayAnimation?{
                    rotate:45,
                    y:y,
                    x:x
                }:false}
                animate={firstPulse?{
                    rotate:0,
                    scale:scale,
                    x:0,
                    y:yScale,
                    transition:{
                        duration:3
                    }
                }:null}
                style={!displayAnimation?style:styleBefore}
                >
                <motion.path d="M63.1447 133.355C43.6185 113.829 43.6185 82.1709 63.1447 62.6447C82.6709 43.1184 114.329 43.1184 133.855 62.6447M63.1447 133.355C82.6709 152.882 114.329 152.882 133.855 133.355C153.382 113.829 153.382 82.1709 133.855 62.6447M63.1447 133.355L133.855 62.6447M63.1447 133.355L37.1586 159.342M133.855 62.6447L159.842 36.6585" stroke="#C97173" strokeWidth="2"
                initial={displayAnimation?{pathLength:0}:false}
                animate={{
                    pathLength:1,
                    transition:{
                        duration:5
                    }
                }}
                onAnimationComplete={()=>setFirstPulse(true)}
                />
                </motion.svg>

                <motion.ul
                initial={displayAnimation?{opacity:0}:false}
                animate={secondPulse?{
                    opacity:1,
                    transition:{
                        duration:2
                    }
                }:null}
                onAnimationComplete={()=>setDisplayAnimation(false)}
                >
                    <li><a href="#works">Works</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#contact">Contact</a></li>
                </motion.ul>

                <div className="toogle-menu"
                onClick={()=>setOpen(true)}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar
