
const CommentCard = ({comment}) => {
    return (
        <li className="individual-comment">
 <h4>{comment.body}</h4>
<p>Posted by: {comment.author}</p>
 <p>Votes: {comment.votes} 👍</p>
 <p>Posted at: {comment.created_at}</p>
         </li>
     )


}

export default CommentCard