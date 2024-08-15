import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css"



function Login(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const validateForm =() => {
        setNameError('');
        setEmailError('');
        setPasswordError('');
    
    
    let isValid = true;

    if (name.trim() === '') {
        setNameError('Please enter your name');
        isValid = false;
    }

    if (email.trim() ==='') {
        setEmailError('please enter your email');
        isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Please enter a valid email');
        isValid = false;
    }

    if (password.trim() === '') {
        setPasswordError('Please  enter a password');
        isValid = false;
    } else if (password.length < 8) {
        setPasswordError('The password must be 8 characters or longer');
        isValid = false;
    }
        return isValid
    };

    const onButtonClick = () => {
        if (validateForm()) {
            const userDate = {
                name: name,
                email: email,
                password: password,
            };
            console.log(userDate);
            navigate('/');
        }
    };

    
return (
    <div className="mainTitle">
        <div className="mainInput">
            <h1 className="title1">Login</h1>
            <div className="inputName">

            <input  type="text" value={email} placeholder="email here" onChange={(ev) => setEmail(ev.target.value)}/>
            <label className="errorLabel">{emailError}</label>

            <input  type="text" value={password} placeholder="password here" onChange={(ev) => setPassword(ev.target.value)}/>
            <label className="errorLabel">{passwordError}</label>
            </div>
            <div>
                <input className="inputButton" type="button" onClick={onButtonClick} value="Sign Up"/>
            </div>
            <div>
                <p className="cold">Don't Have account?  </p>

            </div>

        </div>
    </div>
);
}

export default Login;