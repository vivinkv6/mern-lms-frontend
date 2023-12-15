import adminLogo from "/adminLogin.png";
import "./login.css";
import { motion } from "framer-motion";

function AdminLogin() {
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
        Admin Login
      </motion.span>
      <motion.div
        variants={loginVariant}
        initial="init"
        animate="visible"
        className="login-container"
      >
        <div className="login-img">
          <img src={adminLogo} alt="Admin Logo" />
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
      </motion.div>
    </div>
  );
}

export default AdminLogin;
