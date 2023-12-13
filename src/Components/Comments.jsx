import { useEffect, useState } from "react";
import CommentCard from "./CommentCard"
import { useParams } from "react-router-dom";
import Collapsible from "./Collapsible";
import { getCommentsByArticleId } from "../utils/api.utils";

const Comments = ({comments}) => {
    return (

<Collapsible>
        <ul id="comments-list">
          {comments.map((comment, index) => {
            return <CommentCard key={comment.article_id[index]} comment={comment} />;
          })}
        </ul>
        </Collapsible>
      );


}

export default Comments