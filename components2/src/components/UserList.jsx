import UserCard from './UserCard';

export default function UserList(){

    const users = [{
        name: "Dilan",
        email: "dilan@gmail.com",
        avatar: "https://i.pinimg.com/736x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
    },
    {
        name: "Tori",
        email: "tori@gmail.com",
        avatar: "https://i.pinimg.com/736x/4c/2d/09/4c2d090479042c1512d46c33b79cd95c.jpg"
    }];

    return(
        <div>
            {users.map((element, index) => (
                <UserCard key={index} name={element.name} email={element.email} avatar={element.avatar}/>
            ))};
        </div>
    );

}