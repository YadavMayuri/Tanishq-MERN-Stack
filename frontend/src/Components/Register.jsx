import React from "react";
import "../Css/style.css"
import "../Css/responsive.css"

const Register = () => {
    return (
        <div className="register-screen">
            <div className="login-content-wrapper">
                <div className="left-login-content">
                    <h1>Sign Up</h1>

                    <div className="form-content">
                        <form >
                            <div className="f-content-field">
                                <input type="text" id="username" placeholder="Enter Your Name" className="ent-num" /><br/>
                            </div>
                            <div className="email-info">
                                <input type="email" id="useremail" placeholder="Enter Your Email" />
                            </div>
                            <div className="password-content">
                                <input type="password" id="userpassword" placeholder="Enter Your password" />
                            </div>
                            <div className="password-content">
                                <input type="password" id="userconfirmpassword" placeholder="Comfirm Password" />
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" />
                                <span>Remember Me</span>
                            </div>
                            <p className="terms-policy">By continuing, I agree to <span className="highlight">Terms of Use</span> &
                                <span className="highlight">Privacy Policy</span>
                            </p>
                            <input type="submit" value="Sign Up" className="r-otp-btn" />
                        </form>

                    </div>
                </div>
                <div className="right-login-img">
                    <div className="right-login-image">
                        <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register;