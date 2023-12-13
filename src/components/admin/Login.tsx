import adminLogo from "/adminLogin.png";
import "./login.css";

function Login() {
  return (
    <div className="container">
      <span>Admin Login</span>
      <div className="login-container">
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
       
      </div>
    </div>
  );
}

export default Login;
