import React, { useState } from "react";

const UserForm = ( ) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length == 1) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else if(e.target.value.length == 0) {
            setFirstNameError("");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length == 1) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else if(e.target.value.length == 0) {
            setLastNameError("");
        } else {

            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length >= 1) {
            setEmailError("Email must be 5 characters or longer!");
        } else if(e.target.value.length == 0) {
            setEmailError("");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length >= 1) {
            setPasswordError("Password must be 8 characters or longer!");
        } else if(e.target.value.length == 0) {
            setPasswordError("");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setConfirmPasswordError("Password must match");
        }else if(e.target.value == password) {
            setConfirmPasswordError('');
        }
        else {
            setConfirmPasswordError("");
        }
    }
    
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div>

            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            
            <input type="submit" value="Create User" />

        </form>
    );
}

export default UserForm;