import profilePic from '../assets/image.jpg'

function UserCard(props){
    return(
        <div className='cardDiv'>
            <img src={profilePic} alt='Profile image' className='cardPic'></img>
            <h2 className='cardName'>Name: {props.name}</h2>
            <p>Gender: {props.gender}</p>
            <p>Age: {props.age}</p>
            <p>Occupation: {props.occupation}</p>
        </div>
    );

}
export default UserCard