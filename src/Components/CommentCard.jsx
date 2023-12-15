import { deleteComment, getCommentsByArticleId } from "../utils/api.utils"
import { useState, useContext } from "react"
import { UserContext } from "../Contexts/UserContext"


const CommentCard = ({comment, comment_id, comments, articleid, setComments}) => {
    const [commentVote, setCommentVote] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [likeButtonStyle, setLikeButtonStyle] = useState("normal")
    const [dislikeButtonStyle, setDislikeButtonStyle] = useState("normal")
    const [likeButtonDisabled, setLikeButtonDisabled] = useState(false)
    const [dislikeButtonDisabled, setDislikeButtonDisabled] = useState(false)
    const { user, setUser } = useContext(UserContext);



const handleDelete = () => {
    deleteComment(comment_id)
    .then(() => {
        getCommentsByArticleId(articleid).then((comments) => {
            setComments(comments)
            return comments
        })
    })
 
}

const upVote = () => {
    if(isLiked === false) {
        setIsLiked(true)
        setCommentVote(commentVote + 1)
        setLikeButtonStyle("clicked")
        setDislikeButtonDisabled(true)
        
    } else {
    setCommentVote(commentVote - 1)
    setIsLiked(false)
    setLikeButtonStyle("normal")
    setDislikeButtonStyle("normal")
    setDislikeButtonDisabled(false)
    }
}

const downVote = () => {
    if (isDisliked === false){
        setIsDisliked(true)
        setCommentVote(commentVote - 1)
        setDislikeButtonStyle("clicked")
        setLikeButtonDisabled(true)
       
    } else {
    setCommentVote(commentVote + 1)
    setIsDisliked(false)
    setDislikeButtonStyle("normal")
    setLikeButtonStyle("normal")
    setLikeButtonDisabled(false)
    setDislikeButtonDisabled(false)
  
}
}


    return (
        <li className="individual-comment">
 <h4>{comment.body}</h4>
<p>Posted by: {comment.author}</p>
 <p>Votes: {commentVote} <button disabled={likeButtonDisabled}  className={likeButtonStyle} onClick={upVote}>👍</button>
 <button disabled ={dislikeButtonDisabled} className={dislikeButtonStyle} onClick={downVote}>👎</button></p>
 <p>Posted at: {comment.created_at}</p>
 <button onClick={handleDelete}>Delete comment 🗑️</button>
         </li>
     )


}

export default CommentCard