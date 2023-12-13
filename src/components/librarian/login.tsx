import librarianLogo from "/librarianLogin.png";
import "./login.css";

function LibrarianLogin() {
  return (
    <div className="container">
      <span>Librarian Login</span>
      <div className="login-container">
        <div className="login-img">
          <img src={librarianLogo} alt="Admin Logo" />
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
          <span>Don't have an Account? signup</span>
        </div>
      </div>
    </div>
  );
}

export default LibrarianLogin;
