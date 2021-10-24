import React from 'react'
import './style.scss'

const nav=["works","services", "profile", "contact"]

export default function MobileNav({open, setOpen}){
    return(
        <div className="mobile-nav"
        style={open?{display:"flex"}:{display:"none"}}
        >
            <div className="top-toggle">
                <h1
                onClick={()=>setOpen(false)}
                >X</h1>
            </div>
            <ul>
                {
                    nav.map(item=>(
                        <li><a href={"#"+item}
                        onClick={()=>setOpen(false)}
                        >
                            {item}
                        </a></li>
                    ))
                }
            </ul>
        </div>
    )
}