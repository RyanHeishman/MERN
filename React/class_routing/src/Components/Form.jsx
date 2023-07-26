import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    
    const navigate = useNavigate();
    const [color, setColor] = useState('')
    const [word, setWord] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate(`/dynamic/${word}/${color}`)

    }
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="">Pick a color: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
                <label htmlFor="">Type a word: </label>
                <input type="text" onChange={(e) => setWord(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;