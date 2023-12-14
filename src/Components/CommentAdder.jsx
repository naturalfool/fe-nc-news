import { useContext, useState } from "react"
import { postComment } from "../utils/api.utils"
import { UserContext } from "../Contexts/UserContext"

const CommentAdder = ({articleid}) => {
    // const { user, setUser } = useContext(UserContext);
    const [comment, setComment] = useState("")
// console.log(user)

    function handleSubmit(event){
event.preventDefault()
postComment(articleid, comment, user.username)
.then((res) => {
console.log(res)
})


    }




return (
    <form onSubmit={handleSubmit}>
        <label id="add-comment-label" htmlFor="comment-body">Add a comment:</label>
        <textarea
         id="comment-body"
         placeholder="..."
        cols="50"
        rows="5"
        onChange={(event) => {
            setComment(event.target.value)
        }}
        ></textarea>
       <button  id="post-comment-button">Post comment</button>
    </form>
)
}

export default CommentAdder