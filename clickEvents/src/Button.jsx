export default function Button(){
    const handleClick = () => {
        console.log("Ouch🤕");
    }

    const handleClick2 = (name) =>{
        console.log(`${name} stop clicking me`);
    }

    const handleClick3 = (e) =>{
        e.target.textContent = "Ouch🤕";
    }

    const imageURL = "./src/assets/image.png"

    const handleImageClick = (e) => {
        e.target.style.display = "none";
    }

    
    return(
        <div>
            <button onClick={handleClick}>Click Me😀</button><br></br><br></br>
            <button onClick={() => handleClick2("Olive")}>Click Me😀</button><br></br><br></br>
            <button onClick={(e) => handleClick3(e)}>Click Me😀</button><br></br><br></br>
            <img src={imageURL} alt="image" onClick={(e) => handleImageClick(e)}/>
        </div>
        
    )
}