import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");

    const navigate = useNavigate();

    const validateForm = () => {
        setEmailError('');
        setPasswordError('');
        setLoginError('');
        
        let isValid = true;

        if (email.trim() === '') {
            setEmailError('Please enter your email');
            isValid = false;
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email');
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError('Please enter a password');
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError('The password must be 8 characters or longer');
            isValid = false;
        }

        return isValid;
    };

    const onLoginClick = () => {
        if (validateForm()) {
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser) {
                if (storedUser.email === email && storedUser.password === password) {
                    console.log("Login successful");
                    localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
                    navigate('/');  
                } else {
                    setLoginError("Invalid email or password");
                }
            } else {
                setLoginError("No user found. Please register first.");
            }
        }
    };

    return (
        <div className="mainTitle">
            <div className="mainInput">
                <h1 className="title1">Login</h1>
                <div className="inputName">

                    <input
                        type="text"
                        value={email}
                        placeholder="Email"
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <label className="errorLabel">{emailError}</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(ev) => setPassword(ev.target.value)}
                    />
                    <label className="errorLabel">{passwordError}</label>

                </div>
                {loginError && <div className="errorLabel">{loginError}</div>}
                <div>
                    <input className="inputButton" type="button" onClick={onLoginClick} value="Submit"/>
                </div>
            </div>
        </div>
    );
}

export default Login;
