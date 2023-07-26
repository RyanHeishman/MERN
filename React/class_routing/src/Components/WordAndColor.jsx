import React, {useState} from "react";
import { useParams } from "react-router-dom";

const WordAndColor = (props) => {
    const {word, color} = useParams()

    return(
        <div>
            <h2 style={{background:color}}>The Word is {word} and the color is {color}</h2>
        </div>
    )
}

export default WordAndColor;