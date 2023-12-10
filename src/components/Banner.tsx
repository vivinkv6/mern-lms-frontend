import { Link } from "react-router-dom";
import "./banner.css";
import { motion } from "framer-motion";

function Banner() {
  return (
    <>
      <motion.div
        className="banner"
        id="home"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
      ></motion.div>
      <div className="banner-content">
        <motion.h2
          initial={{
            opacity: 0,
            visibility: "hidden",
            y: 100,
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            y: 0,
          }}
          transition={{
            delay: 2.5,
            duration: 2,
          }}
        >
          WELCOME <br /> TO <br /> PUBLIC LIBRARY
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            visibility: "hidden",
            y: 100,
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            y: 0,
          }}
          transition={{
            delay: 3,
            duration: 2.5,
          }}
        >
         Unleash your curiosity. Discover your next adventure in reading.
        </motion.p>
       
        <motion.button
          initial={{
            opacity: 0,
            visibility: "hidden",
            y: 100,
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            y: 0,
            scale: 1.2,
          }}
          transition={{
            delay: 3.5,
            duration: 3,
          }}
        >
       <Link to='/users' style={{color:'black'}}>  GET STARTED </Link>
        </motion.button>
       
      </div>

    </>
  );
}

export default Banner;
