import { useContext, useState } from "react"
import { getCommentsByArticleId, postComment } from "../utils/api.utils"
import { UserContext } from "../Contexts/UserContext"
import Error from "./Error"

const CommentAdder = ({articleid, comments, setComments}) => {
    const { user, setUser } = useContext(UserContext);
    const [comment, setComment] = useState("")
    const [input, setInput] = useState("")
    const [apiError, setApiError] = useState(null)

function handleChange(event){
setInput(event.target.value)
setApiError(false)
}


    function handleSubmit(e){
        e.preventDefault()
       if (input.length !== 0){
    postComment(articleid, input, user.username)
    .then((res) => {
            setInput("")
            getCommentsByArticleId(articleid).then((comments) => {
                setComments(comments)
                return comments
            })
        })
    } else {
        setApiError(true)
       

} 
}





return (
    <form value={input} onSubmit={handleSubmit} id="add-comment-form">
        {apiError ? <Error message="your comment cannot be empty!"/> : null}
        <label id="add-comment-label" htmlFor="comment-body">Add a comment:</label>
        <textarea
        value={input}
         id="comment-body"
        placeholder="..."
        cols="50"
        rows="5"
        onChange={handleChange}
        ></textarea>
        {input.length > 200 ? <Error message="your comment is too long!"/> : 
        <p>{`${200 - input.length} characters remaining`}</p>}
       <button disabled={comment.length > 150} id="post-comment-button">Post comment</button>
    </form>
)
}

export default CommentAdder