import "./login.css"

export default function Login() {
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
                    <input placeholder="username or email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create an Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
