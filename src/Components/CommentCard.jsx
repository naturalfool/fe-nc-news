import { deleteComment, downvoteComment, getCommentsByArticleId, upvoteComment } from "../utils/api.utils"
import { useState, useContext, useEffect } from "react"
import { UserContext } from "../Contexts/UserContext"
import { getArticleById } from "../utils/api.utils"


const CommentCard = ({comment, comment_id, comments, articleid, setComments}) => {
    const [commentVote, setCommentVote] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [likeButtonStyle, setLikeButtonStyle] = useState("normal")
    const [dislikeButtonStyle, setDislikeButtonStyle] = useState("normal")
    const [likeButtonDisabled, setLikeButtonDisabled] = useState(false)
    const [dislikeButtonDisabled, setDislikeButtonDisabled] = useState(false)


    useEffect(() => {
        getArticleById(articleid).then((article) => {
            setSingleArticle(article)
            setArticleVote(article.votes)
            setIsLoading(false)
        })
    }, [articleid])
    
    
    useEffect(() => {
        getCommentsByArticleId(articleid).then((comments) => {
            setComments(comments)
            setCommentVote(comment.votes)
            setIsLoading(false)
        })
    }, [articleid])


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
        upvoteComment(comment_id)
        setCommentVote(commentVote + 1)
        setIsLiked(true)
        setLikeButtonStyle("clicked")
        setDislikeButtonDisabled(true)
        getCommentsByArticleId(articleid).then((comments) => {
            setComments(comments)
            return comments
        })
        
    } else {
    downvoteComment(comment_id)
    setCommentVote(commentVote - 1)
    setIsLiked(false)
    setLikeButtonStyle("normal")
    setDislikeButtonStyle("normal")
    setDislikeButtonDisabled(false)
    }
}

const downVote = () => {
    if (isDisliked === false){
        downvoteComment(comment_id)
        setCommentVote(commentVote - 1)
        setIsDisliked(true)
        setDislikeButtonStyle("clicked")
        setLikeButtonDisabled(true)
       
    } else {
        upvoteComment(comment_id)
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