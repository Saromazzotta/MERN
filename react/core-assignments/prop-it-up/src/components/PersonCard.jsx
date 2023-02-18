import React, {useState} from 'react';

const Person = (props) => {

const { firstName, lastName, personAge, hairColor } = props

const [ages, setAges] = useState(personAge)

const increaseAge = () => {
    setAges(ages + 1)
}

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {ages}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday button for {firstName + " " + lastName }</button>
        </div>
    )
}

export default Person;