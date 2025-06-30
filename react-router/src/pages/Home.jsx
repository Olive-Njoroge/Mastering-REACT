import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    const coffeeImage = "./src/assets/coffee.png"

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/coffee')
    }
    return(
        <div>
            <NavBar/>
            <div className="coffeCard">
                <img src={coffeeImage}></img>
                <h3>Ready to embark on your coffee journey😃</h3>
                <button onClick={handleSubmit}>Click Me😀</button>
            </div>

        </div>
    )

}