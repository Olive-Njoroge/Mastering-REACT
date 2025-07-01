import {useState} from 'react';
import api from '../services/api'

export default function PeopleForm({ onPersonAdded }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const res = await api.post("/", {name, email});
            onPersonAdded(res.data);
            setName("");
            setEmail("");
        }catch(error){
            alert('Error creating person');
        }
    }

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your Name...' value={name} onChange={(e) => setName(e.target.value)}/><br></br><br></br>
                <input type="email" placeholder='email...'value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
                <button type="submit">Add person</button>
            </form>
        </div>
    );

}