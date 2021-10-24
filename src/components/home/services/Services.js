import React, {useRef, useEffect, useState} from 'react'
import './style.scss'
import Service from './Service'
import {motion} from 'framer-motion'

const serviceData=[
    {
        name:"design",
        img:"assets/images/design.png",
        desc:`I create good user experience by designing digital product (website and mobile app), combining your brand image, ideas, and user behavior to build an exceptional product that people need and love to use. I have the excellece of creating upstanding ui/ux designs and prototyping, since i am developer myself i wil create user friendly design and makes a design feasible for development.`
    },
    {
        name:"front-end",
        img:"assets/images/front.png",
        desc:"Converting your design and prototype to real website, with creative motion effect and transition. my goal is always to deliver the best user experience possible. I follow advanced front-end development tools and technologies to ensure optimum quality solutions within the fixed time frame and the customers' specific demands. Some technologies i use: html, css/ sass/ tailwind, javascript and react.js"
    },
    {
        name:"full-stack",
        img:"assets/images/full.png",
        desc:"Creating fully functionate website providing ui ux design, front end & back end development, database and api integration. Help you deliver an end to end solution and creating website that user love to use.        "
    },
    
]
function Services({refer, inview}) {
    const ref =useRef(null)
    const [width, setWidth]=useState(0)
    const [current, setCurrent]=useState(0)
    const [transform, setTransform]=useState(0)

    useEffect(()=>{
      setWidth(ref.current.clientWidth)
    },[])

    function setIndex(des){
        setTransform(((0-des)*width)-(des*(20*window.innerWidth/100)))
        setCurrent(des)
    }

    return (
        <div className="services" ref={refer} id="services">
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
                <h1>services</h1>
            </div>
            <div className="carousel">
                <div className="pick-index">
                    {
                        serviceData.map((item, index)=>(
                            <div className="pick"
                            style={{
                                fontSize:current===index?"2rem":"1rem"
                            }}
                            onClick={()=>{setIndex(index)}}
                            >{item.name}</div>
                        ))
                    }
                </div>

                <div 
                    className="service-wrapper"
                    ref={ref}
                    style={{
                        transform:`translateX(${transform}px)`
                    }}
                >
                    {
                        serviceData.map((item, index)=>(
                            <Service
                            text={item.desc}
                            img={item.img}
                            inview={inview}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Services 
