import { useEffect, useState } from "react";
import CommentCard from "./CommentCard"
import { useParams } from "react-router-dom";
import Collapsible from "./Collapsible";

const Comments = ({comments}) => {

    
    return (

<Collapsible>
        <ul id="comments-list">
          {comments.map((comment) => {
            return <CommentCard key={comment.author} comment={comment} />;
          })}
        </ul>
        </Collapsible>
      );


}

export default Comments