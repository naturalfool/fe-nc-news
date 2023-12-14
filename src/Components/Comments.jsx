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
          {comments.map((comment, index) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
        </Collapsible>
</section>
      );

}

export default Comments