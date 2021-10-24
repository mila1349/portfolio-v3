import React, {useState, useEffect} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'


function Work({title, category,index, img, length}) {
    const param=(index+1)%3===0;
    const last=index+1===length;
    const three=index<3;

    const [matches, setMatches] = useState(window.matchMedia("(max-width: 900px)").matches)

    useEffect(() => {
        window.matchMedia("(max-width: 900px)").addEventListener('change', e => setMatches(e.matches));
    }, []);
    
    return (
        <div className="work" style={three?{borderTop:"2px solid #B8B6B3"}:{}}>
            <div className="con" style={param||last||matches?{borderRight:"none"}:{}}>
                <Link to={{
                    pathname:"/work",
                    state:{
                        index:`${index}`
                    }
                }}>
                    <img src={img} alt="" />
                </Link>
                <div className="desc">
                    <h2>{title}</h2>
                    <h3>{category}</h3>
                </div>
            </div>
        </div>
    )
}

export default Work
