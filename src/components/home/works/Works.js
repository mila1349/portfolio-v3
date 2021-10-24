import React, {useEffect,useState} from 'react'
import './style.scss'
import Title from './Title'
import Img from './Img'
import data from './works.json'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


function Works({refer, inview}) {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })

    useEffect(() => {
        const moveCursor = (e) => { 
            const x = e.clientX
            const y = e.clientY 
            setCursorXY({ x, y })
        }

        window.addEventListener('mousemove', moveCursor)


        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    const bgVariants={
        hidden:{
            translateX:1000,
            translateY:"-50%"
        },
        visible:{
            translateX:0,
            translateY:"-50%"
        }
    }

    return (
        <div className="works" ref={refer} id="works">
            <div className="section-title">
                <motion.img className="bgTitle" src="assets/images/texturedBg.png" alt="" 
                variants={bgVariants}
                initial="hidden"
                animate={inview?"visible":"hidden"}
                />
                <h1>works</h1>
            </div>
            

            <div className="works-container">
            <div className="projects-wrapper">
                {data.slice(0, 5).map(({ title, category }, index) => (
                <Title
                    title={title}
                    category={category}
                    setActiveIndex={setActiveIndex}
                    index={index}
                    inview={inview}
                />
                ))}

                <Link to="/works">
                <div className="view-more">
                    <h2>view more</h2>
                    <motion.img src="assets/images/arrow.png" alt="" 
                    animate={{
                        x:5,
                        transition:{
                            yoyo:Infinity
                        }
                    }}
                    />
                </div>
                </Link>
                
            </div>

            <div className="img-wrapper">
                {data.map(({ img }, index) => {
                const isActive = index === activeIndex;
                const xPos=isActive?cursorXY.x:0
                const yPos=isActive?cursorXY.y:0
                return <Img url={img} active={isActive} index={index} x={cursorXY.x} y={cursorXY.y}/>;
                })}
            </div>

            </div>
        </div>
    )
}

export default Works
