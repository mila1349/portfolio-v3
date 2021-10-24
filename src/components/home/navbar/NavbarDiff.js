import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function NavbarDiff() {
    return (
        <Link to="/">
        <div className="nav-diff">
            <div className="box-nav">
                <motion.img src="assets/images/arrow.png" alt="" 
                initial={{rotate:180}}
                whileHover={{
                    x:-5,
                    transition:{
                        yoyo:Infinity
                    }
                }}
                />
            </div>
        </div>
        </Link>
    )
}

export default NavbarDiff
