import React, {useState, useEffect} from 'react'
import axios from 'axios';

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">First Name</label><br />
                    <input type="text" onChange={ (e)=>setFirstName(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="">Last Name</label><br />
                    <input type="text" onChange={ (e)=>setLastName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default PersonForm;