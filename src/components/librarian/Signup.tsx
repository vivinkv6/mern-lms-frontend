import librarianLogo from "/librarianLogin.png";
import "./signup.css";

function LibrarianSignup() {
  return (
    <div>
      <div className="container">
        <span>Librarian Signup</span>
        <div className="signup-container">
          <div className="signup-img">
            <img src={librarianLogo} alt="Admin Logo" />
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
        </div>
      </div>
    </div>
  );
}

export default  LibrarianSignup;
