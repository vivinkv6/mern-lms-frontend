import { Link } from "react-router-dom";
import "./login.css";
import { motion } from "framer-motion";

type loginProp = {
  usersList: {
    id: number;
    name: string;
    url: string;
    link: string;
    duration: number;
    position: number;
  }[];
};

function Login(props: loginProp) {
  return (
    <>
      <motion.p
        className="header"
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 400,
        }}
      >
        Role
      </motion.p>

      <div className="user-container">
        {props.usersList.map((value) => {
          return (
            <Link to={`${value.link}`}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: value.position,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: value.duration,
                  duration: value.duration,
                  type: "just",
                  stiffness: 300,
                }}
                className="user-item"
                key={value.id}
              >
                <div className="user-img">
                  <img src={value.url} alt={value.name} />
                </div>
                <div className="user-name">
                  <p>{value.name}</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Login;
