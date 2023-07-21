import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const handleFirstName = (e) =>{
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setfirstNameError('First Name must be more than 2 characters.');
        }else{
            setFirstNameError('');
        }
    }
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            firstName, 
            lastName,
            email, 
            password 
        };
        console.log("Welcome", newUser);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setFirstNameError("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName }/>
                {
                    firstNameError ?
                    <p> {firstNameError} </p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName}/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value={password}/>
            </div>
            {
                firstNameError ?
                <input type="submit" value="Create User" disabled /> :
                <input type="submit" value="Create User"/>
                }
        </form>



    );
};
    
export default UserForm;
