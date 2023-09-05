import React from "react";
import "../Css/style.css";
import "../Css/responsive.css";
import { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const router = useNavigate();
    const { dispatch, state } = useContext(AuthContext)
    console.log(state, "state from context into login component")

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = userData;

        if (!email || !password) {
            return Toast.error("Email and password are required.");
        }

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                email: userData.email,
                password: userData.password,
            }
            );

            if (response.data.success) {
                dispatch({
                    type: "LOGIN",
                    payload: response.data.user,
                    
                })
                console.log(response.data.user,"user response from login payload");
                localStorage.setItem("TanishqJwtToken", JSON.stringify(response.data.token))
                setUserData({ email: "", password: "" });
                router('/');
                Toast.success(response.data.success);
            } else {
                Toast.error(response.data.message);
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                Toast.error(err.response.data.message);
            } else {
                Toast.error("An error occurred. Please try again later.");
            }
        }
    };

    useEffect(()=>{
        if(state?.user?.name){
            Toast.success("You are already logged in.")
            router('/')
        }
    },[state])

    return (
        <div>
            <div className="login-screen">
                <div className="login-content-wrapper">
                    <div className="left-login-content">
                        <h1>Login </h1>
                        <div className="form-content">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="email-info">
                                    <input type="email" onChange={handleChange}  name="email" placeholder="Enter Your Email" />
                                </div>
                                <div className="password-content">
                                    <input type="password" onChange={handleChange}  name="password" placeholder="Enter Your password" />
                                </div>
                                <div className="remember-me">
                                    <input type="checkbox" checked  readOnly/>
                                    <span>Remember Me</span>
                                </div>
                                <p className="terms-policy">By continuing, I agree to <span className="highlight">Terms of Use</span> &
                                    <span className="highlight">Privacy Policy</span>

                                </p>
                                <input type="submit" value="LOGIN" className="r-otp-btn" />
                                <p className="terms-policy" onClick={()=>router('/register')}>Don't have an account ? <span className="highlight"> Sign Up Here</span>
                            </p>
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

        </div>
    )
}

export default Login;