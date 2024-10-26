import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const validateForm = () => {
        setNameError('');
        setEmailError('');
        setPasswordError('');

        let isValid = true;

        if (name.trim() === '') {
            setNameError('Please enter your name');
            isValid = false;
        }

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

    const onButtonClick = () => {
        if (validateForm()) {
            const userData = {
                name: name,
                email: email,
                password: password,
            };

            localStorage.setItem("user", JSON.stringify(userData));
            console.log("User registered:", userData);
            navigate('/Login');
        }
    };

    return (
        <div className="mainContainer">
            <div className="mainTitle">
                <h1 className="title1">Registration</h1>
                <div className="inputName">
                    <input
                        type="text"
                        value={name}
                        placeholder="Name here"
                        onChange={(ev) => setName(ev.target.value)}
                        className="inputBox" // Apply the inputBox class
                    />
                    <label className="errorLabel">{nameError}</label>

                    <input
                        type="text"
                        value={email}
                        placeholder="Email here"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className="inputBox" // Apply the inputBox class
                    />
                    <label className="errorLabel">{emailError}</label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Password here"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className="inputBox" // Apply the inputBox class
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <div>
                    <input
                        className="inputButton"
                        type="button"
                        onClick={onButtonClick}
                        value="Sign Up"
                    />
                </div>
                <div className="inputContainer text">
                Already have  an account? 
                <Link to="/" className="registerLink"> Register here.</Link>
            </div>
            </div>
        </div>
    );
}

export default Registration;
