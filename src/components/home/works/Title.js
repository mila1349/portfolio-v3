import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

export default ({ title, category, setActiveIndex, index, inview }) => {
  const pathVariants={
    hidden:{
      pathLength:0
    },
    visibleOne:{
      pathLength:1,
        transition:{
          duration:1
        }
    },
    visible:{
      pathLength:1,
        transition:{
          delay:(index+1)/10,
          duration:1
        }
    }
  }  

  const textVariants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        delay:index/10
      }
    }
  }
  
  const plusVariants={
    hidden:{
      x:200
    },
    visible:{
      x:0,
      transition:{
        delay:index/10
      }
    },
    hover:{
      rotate:360,
        transition:{
            duration:2
        }
    }
  }
  return (
      <div
        className="title"
        onMouseEnter={() => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        {index===0&&(
          <svg viewBox="0 0 1297 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M0.974854 1L1431.03 1" stroke="#B8B6B3" strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate={inview?"visibleOne":"hidden"}
          />
          </svg>
        )}
        <div className="title-con">
        <motion.span className="work-title"
          variants={textVariants}
          initial="hidden"
          animate={inview?"visible":"hidden"}
        >
          <span><h2>(0{index+1})</h2></span>
          <div className="project">
            <h2>{title}</h2>
            <h3>{category}</h3> 
          </div>
        </motion.span>
        
        <Link
            to={{
              pathname:"/work",
              state:{
                index:`${index}`
              }
            }}
          >
        <span className="plus"
          onMouseEnter={() => setActiveIndex(-1)}
          onMouseLeave={() => setActiveIndex(index)}
        >
          <motion.h1
            variants={plusVariants}
            initial="hidden"
            animate={inview?"visible":"hidden"}
            whileHover="hover"
          >+</motion.h1>
        </span>
        </Link>

        </div>
        <svg viewBox="0 0 1297 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M0.974854 1L1431.03 1" stroke="#B8B6B3" strokeWidth="2"
            variants={pathVariants}
            initial="hidden"
            animate={inview?"visible":"hidden"}
          />
        </svg>
      </div>
    );
  };
  