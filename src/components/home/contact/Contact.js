import React, {useEffect, useRef, useState} from 'react'
import './style.scss'
import moment from 'moment-timezone'

function Contact() {
    const ref= useRef(null)
    const [open, setOpen]=useState(false)
    const [height, setheight]=useState(0)

    const date = new Date(); //get date and time of user
    const dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`; //formating date of user
    const where = moment.tz.guess(); //guess location user
    const time = moment.tz(dateFormat, where); //set initial time
    const jakarta = time.clone().tz("Asia/Jakarta").format("h:mm"); //get jakarta time

    const now = `${date.getHours()}:${date.getMinutes()}`;
    const check = where == "Asia/Jakarta" ? now : jakarta; //checking wheter user in jakarta

    useEffect(()=>{
        setheight(ref.current.clientHeight+2)
    },[])

    function toogle(){
        console.log(height, open)
        setOpen(!open)
    }

    return (
        <div className="contact"
        style={{
            transform:`translateY(${open?0:height}px)`
        }}
        id="contact"
        >
            <div className="contact-container">
                <div className="contact-title"
                >
                    <h1>LET'S MAKE A PROJECT</h1>
                    <img src="assets/images/arrow2.png" alt="" 
                    id="arrow"
                    style={{
                        transform:`rotate(${open?30:-30}deg)`,
                    }}
                    onClick={toogle}
                    />
                </div>
                <div className="contact-list" ref={ref}>
                    <div className="row">
                        <ul>
                            <li>web developer</li>
                            <li>ui/ux designer</li>
                        </ul>
                        <ul>
                            <li><a href="mailto:innekamila@gmail.com">innekamila@gmail.com</a></li>
                            <li>+62 896 7152 1509</li>
                        </ul>
                        <ul>
                            <li>{check}</li>
                            <li>Bandung, Indonesia</li>
                        </ul>
                    </div>

                    <div className="row ">
                        <span>
                            <p>©inneKamila</p>
                        </span>
                        <span>
                            <a href="">
                                <img className="social" src="assets/images/mail.png" alt="" />
                            </a>
                            <a href="https://github.com/mila1349">
                                <img className="social" src="assets/images/github.png" alt="" />
                            </a>
                            <a href="https://dribbble.com/mila1349">
                                <img className="social" src="assets/images/dribble.png" alt="" />
                            </a>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
