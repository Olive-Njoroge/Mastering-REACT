import{useState, useEffect} from 'react';
export default function State2(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title =`Count: ${count} ${color}`

        return () => {
            //CleanUp code
        }
    }, [count, color])

    const addCount = () => {
        setCount(c => c + 1)
    }

    const subtractCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === "green" ? "red" : "green")
    }


    

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br></br><br></br>
            <button onClick={changeColor}>Change Color</button>
        </div>
        
    )

}