import React from 'react'

function Service({text, img, inview}) {
    return (
        <div className="service" id="services">
            <div className="desc">
                <p>{text}</p>
                <a href="mailto:innekamila@gmail.com" className="btn">
                    <p>HIRE ME</p>
                    <div className="elipse"></div>
                    <div className="elipse"></div>
                </a>
            </div>
            <div className="service-img">
                <img src={img} alt="" 
                />
            </div>
        </div>
    )
}

export default Service