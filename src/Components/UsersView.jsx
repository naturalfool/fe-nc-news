import { useState, useEffect } from "react"
import Loading from "./Loading";
import UserCard from "./UserCard";

const UsersView = () => {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://nc-news-aa8x.onrender.com/api/users")
        .then((response) => {
            
            return response.json();
        })
        .then((users) => {
            
            setUsers(users);
            setIsLoading(false)
        });
    }, []);

if (isLoading) return <Loading/>

return (
    <ul id="users-list">
    {users.map((user) => {
      return <UserCard key={user.username} user={user} />;
    })}
  </ul>

)

}

export default UsersView