import { useContext, useState } from "react"
import { postComment } from "../utils/api.utils"
import { UserContext } from "../Contexts/UserContext"

const CommentAdder = ({articleid, comments, setComments}) => {
    const { user, setUser } = useContext(UserContext);
    const [comment, setComment] = useState("")

function handleChange(event){
setComment(event.target.value)
}


    function handleSubmit(e){
        e.preventDefault()
       
        postComment(articleid, comment, user.username)
        .then((res) => {
            const newComment = res
            setComments([newComment, ...comments])
            return comments
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
        onChange={handleChange}
        ></textarea>
       <button  id="post-comment-button">Post comment</button>
    </form>
)
}

export default CommentAdder