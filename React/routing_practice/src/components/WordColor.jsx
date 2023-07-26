import React from "react";
import {useParams} from 'react-router-dom';

const WordColor = (props) => {
    
    const {word, color, bgcolor} = useParams();

    return(
        <div>
            <h2 style={{color:color, background:bgcolor}}>The word is {word}</h2>
        </div>
    )
}

export default WordColor;