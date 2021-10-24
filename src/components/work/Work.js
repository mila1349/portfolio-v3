import React from 'react'
import './style.scss'
import { useLocation } from "react-router-dom"
import data from '../home/works/works.json'

function Work() {
    const location = useLocation()
    const passedData=location.state?.index

    return (
        <div className="work">
            <div className="work-desc">
                <h1>{data[passedData].title}</h1>
                <h2>{data[passedData].category}</h2>
                <div className="desc-p">
                    <p>{data[passedData].description}</p>
                </div>
               
                <div className="link">
                    {data[passedData].url!==""&&(
                        <p>LIVE VIEW: <a href={data[passedData].url}>{data[passedData].url}</a></p>
                    )}
                    
                    {data[passedData].git!==""&&(
                        <p>GITHUB: <a href={data[passedData].git}>{data[passedData].git}</a></p>
                    )}
                </div>
            </div>
            <img src={data[passedData].imgShow} alt="" />
        </div>
    )
}

export default Work
