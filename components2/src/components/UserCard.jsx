export default function UserCard({name, email, avatar}){
    return(
        <div className="div">
            <img src={avatar} alt={`${name}'s avatar`} className="image"></img>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}