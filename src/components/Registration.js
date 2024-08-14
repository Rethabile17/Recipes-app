import React, { useState } from "react";
import "./Registration.css"



function Registration(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [nameError,setNameError] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")

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

    
return (
    <div className="mainTitle">
        <div className="mainInput">
            <h1 className="title1">Registration</h1>
            <div className="inputName">
            <input  type="text" name="name" placeholder="name"/>
            <input  type="text" name="email" placeholder="email"/>
            <input  type="text" name="password" placeholder="password"/>
            </div>
            <div>
                <button>Sign up</button>
            </div>
            <div>
                <p>Do you have account already just login</p>
                <button>login</button>
            </div>

        </div>
    </div>
);
}

export default Registration;