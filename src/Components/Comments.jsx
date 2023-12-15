import { useEffect, useState } from "react";
import CommentCard from "./CommentCard"
import { useParams } from "react-router-dom";
import Collapsible from "./Collapsible";
import { getCommentsByArticleId } from "../utils/api.utils";
import CommentAdder from "./CommentAdder";

const Comments = ({setComments, comments, articleid}) => {
    return (
<section>

<CommentAdder setComments={setComments} comments={comments} articleid={articleid}/>

<Collapsible>

        <ul id="comments-list">
          {comments.map((comment) => {
            return <CommentCard setComments={setComments} articleid={articleid} key={comment.comment_id} comment={comment} comment_id={comment.comment_id} comments={comments} />;
          })}
        </ul>
        </Collapsible>
</section>
      );

}

export default Comments