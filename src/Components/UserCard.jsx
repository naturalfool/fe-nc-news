

const UserCard = ({user}) => {

return (
    <li className="individual-user">
    <h2>{user.username}</h2>
    <h4>{user.name}</h4>
    <img src={user.avatar_url}></img>
  
            </li>
        )



}

export default UserCard