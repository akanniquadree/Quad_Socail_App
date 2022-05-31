import "./register.css"
function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MandyConnect</h3>
                <span className="loginDesc">
                    Connect With your Friends and Family around the world with MandyConnect
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="username" className="loginInput" />
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="username or email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    
                    <button className="loginRegisterButton">Log In to you Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register