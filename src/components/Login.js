import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const validateForm = () => {
        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if (!email.trim()) {
            setEmailError("Please enter your email");
            isValid = false;
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email");
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError("Please enter a password");
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError("The password must be 8 characters or longer");
            isValid = false;
        }

        return isValid;
    };

    const onLoginClick = async () => {
        if (!validateForm()) return;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            if (storedUser.email === email && storedUser.password === password) {
                Swal.fire({
                    title: "Login Successful!",
                    text: "Welcome back!",
                    icon: "success",
                    confirmButtonText: "Proceed",
                }).then(() => {
                    navigate("/home"); 
                });
            } else {
                Swal.fire({
                    title: "Login Unsuccessful!",
                    text: "Invalid email or password.",
                    icon: "error",
                    confirmButtonText: "Try Again",
                });
            }
        } else {
            Swal.fire({
                title: "No User Found!",
                text: "Please register first.",
                icon: "warning",
                confirmButtonText: "Register",
            }).then(() => {
                navigate("/registration");
            });
        }
    };

    return (
        <div className="mainContainer">
            <div className="Container">
            <div className="titleContainer">
                <h1>Login</h1>
            </div>
            <div className="inputContainer">
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className="inputBox"
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <div className="inputContainer">
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    type="password"
                    className="inputBox"
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <div className="inputContainer">
                <input
                    className="inputButton"
                    type="button"
                    onClick={onLoginClick}
                    value="Submit"
                />
            </div>
            <div className="inputContainer text">
                Don't have an account?
                <Link to="/registration" className="registerLink"> Register here.</Link>
            </div>
            </div>
        </div>
    );
}

export default Login;
