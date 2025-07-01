import {useState} from 'react';

export default function State1(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Olive");
    }

    const incrementAge = () => {
        setAge(a => a + 1);

    }

    const toggleStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name: </button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age: </button>

            <p>Is employed: {isEmployed ? "yes" : "No"}</p>
            <button onClick={toggleStatus}>Toggle Status: </button>
        </div>
    );

}