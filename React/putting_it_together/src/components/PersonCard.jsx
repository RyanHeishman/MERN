import React, { useState } from "react";

const PersonCard = (props) => {
  const {firstName, lastName, hairColor} = props
    const [ age, setAge] = useState(props.age);
    return (
      <div>
        <h2>{lastName}, {firstName}</h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={ () => setAge(age + 1)}>{firstName}'s Birthday Button</button>
      </div>    
    )
}

export default PersonCard;