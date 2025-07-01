import {useNavigate} from 'react-router-dom'
export default function Home(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/form')
    }

    return(
        <div>
            <h1>Welcome</h1>
            <button onClick={handleSubmit}>Click Me😀</button>
        </div>
    )

}