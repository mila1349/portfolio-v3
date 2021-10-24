import React from 'react'
import Work from './Work'
import './style.scss'
import data from '../home/works/works.json'

export default function Works(){
    return(
        <div className="works-page">
            <h1>WORKS</h1>
            <div className="container">
                {
                    data.map((item, index)=>(
                        <Work
                            title={item.title}
                            category={item.category}
                            desc={item.description}
                            img={item.img}
                            index={index}
                            length={data.length}
                        />
                    ))
                }
            </div>
        </div>
    )
}