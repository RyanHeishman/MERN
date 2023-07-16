import React, { useState }from "react";

const Form = (props) =>{

const {boxColorArray, setBoxColorArray} = props;

const [color, setColor] = useState("");

const handleSubmit = (e) =>{
    e.preventDefault();

    setBoxColorArray([...boxColorArray,color]);

}
    return(

        <form onSubmit={handleSubmit}>
            
            <h1>Add a color:</h1>

            <div>
                <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
            </div>

            <input type="submit" value="Add"/>

        </form>
    );
}

export default Form;