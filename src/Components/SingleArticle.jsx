import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../utils/api.utils";
import Loading from "./Loading";
import Comments from "./Comments";
import { upvoteArticle, downvoteArticle } from "../utils/api.utils";
import Error from "./Error";





const SingleArticle = () => {
    const {articleid} = useParams()
    const [comments, setComments] = useState([])
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [articleVote, setArticleVote] = useState(0)
    const [isLiked, setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false)
    const [likeButtonStyle, setLikeButtonStyle] = useState("normal")
    const [dislikeButtonStyle, setDislikeButtonStyle] = useState("normal")
    const [likeButtonDisabled, setLikeButtonDisabled] = useState(false)
    const [dislikeButtonDisabled, setDislikeButtonDisabled] = useState(false)
    const [apiError, setApiError] = useState(null)

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
            setIsLoading(false)
        })
    }, [articleid])
    
    
    
    
    const { title, topic, author, body, article_img_url, votes, comment_count } =
    singleArticle;
   
    const upVote = () => {
        if(isLiked === false) {
            setIsLiked(true)
            setArticleVote(articleVote + 1)
            upvoteArticle(articleid)
            .catch((err) => {
                setApiError(err)
                setIsLoading(false)
            })
            setLikeButtonStyle("clicked")
            setDislikeButtonDisabled(true)
            
        } else {
        downvoteArticle(articleid)
        setArticleVote(articleVote - 1)
        setIsLiked(false)
        setLikeButtonStyle("normal")
        setDislikeButtonStyle("normal")
        setDislikeButtonDisabled(false)
        }
    }

    const downVote = () => {
        if (isDisliked === false){
            setIsDisliked(true)
            setArticleVote(articleVote - 1)
            downvoteArticle(articleid)
            .catch((err) => {
                setApiError(err)
                setIsLoading(false)
            })
            setDislikeButtonStyle("clicked")
            setLikeButtonDisabled(true)
           
        } else {
        upvoteArticle(articleid)
        setArticleVote(articleVote + 1)
        setIsDisliked(false)
        setDislikeButtonStyle("normal")
        setLikeButtonStyle("normal")
        setLikeButtonDisabled(false)
        setDislikeButtonDisabled(false)
      
    }
}

// if (apiError) return <Error message="Something went wrong!"/>

if (isLoading) return <Loading/>

return (
 <article className="individual-article">
        <h3>Topic: {topic}</h3>
        <h1>{title}</h1>
        <h4>written by: {author}</h4>
        <img src={article_img_url}></img>
        <p>{body}</p>
        <p>votes: {articleVote} <button disabled={likeButtonDisabled}  className={likeButtonStyle} onClick={upVote}>👍</button>
        <button disabled ={dislikeButtonDisabled} className={dislikeButtonStyle} onClick={downVote}>👎</button></p>
        <p>{comment_count} comments:</p>
        {apiError ? <Error /> : null}
        <div className="comments">
        <Comments articleid={articleid} comments={comments} setComments={setComments}/>
        </div>
    </article>

)


}

export default SingleArticle