import React from "react";
import "../Css/style.css"
import "../Css/responsive.css"
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {

    const { state } = useContext(AuthContext)

    const [userData, setuserData] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'buyer' })
    const router = useNavigate()

    const handleChange = (event) => {
        setuserData({ ...userData, [event.target.name]: event.target.value })
    }
    const handleChangeForSelect = (event) => {
        // console.log(event.target.value, "- value", event.target.name, "- name")
        setuserData({ ...userData, ["role"]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("hiiiii");
        const { name, email, password, confirmPassword, role } = userData;
        if (!name || !email || !password || !confirmPassword || !role) { return Toast.error("Please fill all the fields.") }
        if (password.length < 5 || confirmPassword.length < 5) { return Toast.error("Password length should be greater than 5.") }
        if (password !== confirmPassword) { return Toast.error("Passsword and confirm password not matched.") }
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                confirmPassword: userData.confirmPassword,
                role: userData.role
            })
            if (response.data.success) {
                setuserData({ name: '', email: '', password: '', confirmPassword: '', role: 'buyer' })
                router('/login')
                return Toast.success(response.data.success)
            } else {
                return Toast.error(response.data.message)
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                return Toast.error(err.response.data.message);
            } else {
                return Toast.error("An error occurred. Please try again later.");
            }
        }
    }


    useEffect(() => {
        if (state?.user?.name) {
            Toast.success("You are already logged in.")
            router('/')
        }
        
    }, [state])

    return (
        <div className="register-screen">
            <div className="login-content-wrapper">
                <div className="left-login-content">
                    <h1>Sign Up</h1>

                    <div className="form-content">
                        <form onSubmit={handleSubmit} method="post">
                            <div className="f-content-field">
                                <input type="text" name="name" onChange={handleChange} placeholder="Enter Your Name" className="ent-num" /><br />
                            </div>
                            <div className="email-info">
                                <input type="email" name="email" onChange={handleChange} placeholder="Enter Your Email" />
                            </div>
                            <div className="email-inforole">
                                <span className="roletxt">Please select your role :</span>
                                <select onChange={handleChangeForSelect}>
                                    <option value='buyer'>Buyer</option>
                                    <option value='seller'>Seller</option>
                                </select>
                            </div>
                            <div className="password-content">
                                <input type="password" name="password" onChange={handleChange} placeholder="Enter Your Password" />
                            </div>
                            <div className="password-content">
                                <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Comfirm Password" />
                            </div>
                            <div className="remember-me">
                                <input type="checkbox" checked readOnly />
                                <span>Remember Me</span>
                            </div>
                            <p className="terms-policy">By continuing, I agree to <span className="highlight">Terms of Use</span> &
                                <span className="highlight">Privacy Policy</span>
                            </p>
                            <input type="submit" value="Sign Up" className="r-otp-btn" />
                            <p className="terms-policy" onClick={() => router('/login')}>Already have an account ? <span className="highlight"> Login Here</span>
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
    )
}

export default Register;