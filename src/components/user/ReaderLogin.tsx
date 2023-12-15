import readerLogo from "/readerLogin.png";
import "./login.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ReaderLogin() {
  const loginVariant = {
    init: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        type: "tween",
        duration: 1.5,
      },
    },
  };

  const spanVariant = {
    init: {
      y: -500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,

        type: "spring",
        stiffness: 150,
      },
    },
  };

  return (
    <div className="container">
      <motion.span variants={spanVariant} initial="init" animate="visible">
        Reader Login
      </motion.span>
      <motion.div
        variants={loginVariant}
        initial="init"
        animate="visible"
        className="login-container"
      >
        <div className="login-img">
          <img src={readerLogo} alt="Admin Logo" />
        </div>
        <div className="login-content">
          <div className="login-email">
            <label htmlFor="email" className="login-label">
              Email
            </label>
            <input type="email" name="email" className="login-input" />
          </div>
          <div className="login-password">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input type="password" name="password" className="login-input" />
          </div>
        </div>
        <div className="login-button">
          <button>Login</button>
        </div>
        <div className="signup">
          <span>
            Don't have an Account?{" "}
            <Link to="../signup" style={{ color: "blue" }}>
              sign up
            </Link>{" "}
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default ReaderLogin;
