import { useRef } from "react"
import "./login.css"


export default function Login() {
    const cred = useRef()
    const password = useRef()
    const submitData  = (e) =>{
        e.preventDefault()
    }
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
                <form className="loginBox" onSubmit={submitData}>
                    <input placeholder="username or email" required className="loginInput" ref={cred} />
                    <input placeholder="password" required type="password" minLength="6"    className="loginInput" ref={password} />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button type="submit" className="loginRegisterButton">Create an Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}
