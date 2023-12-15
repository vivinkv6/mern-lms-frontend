import readerLogo from "/readerLogin.png";
import "./signup.css";
import { motion } from "framer-motion";

function ReaderSignup() {
  const signupVariant = {
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
    <div>
      <div className="container">
        <motion.span variants={spanVariant} initial="init" animate="visible">
          Reader Signup
        </motion.span>
        <motion.div
          variants={signupVariant}
          initial="init"
          animate="visible"
          className="signup-container"
        >
          <div className="signup-img">
            <img src={readerLogo} alt="Admin Logo" />
          </div>
          <div className="signup-content">
            <div className="signup-email">
              <label htmlFor="email" className="signup-label">
                Email
              </label>
              <input type="email" name="email" className="signup-input" />
            </div>
            <div className="signup-password">
              <label htmlFor="password" className="signup-label">
                Password
              </label>
              <input type="password" name="password" className="signup-input" />
            </div>
            <div className="signup-confirm">
              <label htmlFor="password" className="signup-label">
                Confirm
              </label>
              <input type="password" name="password" className="signup-input" />
            </div>
          </div>
          <div className="signup-button">
            <button>Sign up</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ReaderSignup;
