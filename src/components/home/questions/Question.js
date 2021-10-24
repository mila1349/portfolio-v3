import React, {useState, useEffect} from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

function Question({cursor}) {
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 1000px)").matches)

    useEffect(() => {
        window.matchMedia("(max-width: 1000px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    const style={
        top:cursor.y,
        left:cursor.x,
        transform:`translate(0%,-50%)`,
    }
    return (
        <div className="question" style={{backgroundImage:'url(assets/images/quest.png)'}} >

            <Link to="questOne">
            <button className="btn a"
            style={matches?{}:{
                top:cursor.y,
                left:cursor.x,
                transform:`translate(-30%,-50%)`}}
            >
                <p>wanna make website but don't have a design</p>
            </button>
            </Link>
            
            <Link to="/questTwo">
            <button className="btn b"
            style={matches?{}:{
                top:cursor.y,
                left:cursor.x,
                transform:`translate(80%,-50%)`
            }}
            >
                <p>have design and wanna make it real</p>
            </button>
            </Link>

            <Link to="/questThree">
            <button className="btn c"
            style={matches?{}:{
                top:cursor.y,
                left:cursor.x,
                transform:`translate(-80%,-50%)`
            }}
            >
                <p>still confuse about the idea</p>
            </button>
            </Link>

            <button className="btn d"
            style={matches?{}:{
                top:cursor.y,
                left:cursor.x,
                transform:`translate(40%,-50%)`
            }}
            >
                <p>don't know where to start</p>
            </button>
        </div>
    )
}

export default Question
