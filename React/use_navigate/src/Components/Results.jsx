import React, {useState} from "react";

const Results = (props) =>{

    const [name, setName] = props;
    const [comment, setComment] = props;


return(
    <div>
        <h2>{name}</h2>
        <h2>{comment}</h2>
    </div>
)
}

export default Results;