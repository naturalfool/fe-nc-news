import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../utils/api.utils";
import Loading from "./Loading";
import Comments from "./Comments";





const SingleArticle = () => {
    const {articleid} = useParams()
    const [comments, setComments] = useState([])
    
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [articleVote, setArticleVote] = useState(0)
    
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
        setArticleVote(articleVote + 1)
    }

    const downVote = () => {
        setArticleVote(articleVote - 1)
    }
if (isLoading) return <Loading/>

return (
 <article className="individual-article">
        <h3>Topic: {topic}</h3>
        <h1>{title}</h1>
        <h4>written by: {author}</h4>
        <img src={article_img_url}></img>
        <p>{body}</p>
        <p>votes: {articleVote} <button className="vote-buttons" onClick={upVote}>👍</button>
        <button className="vote-buttons" onClick={downVote}>👎</button></p>
        <p>{comment_count} comments:</p>
        <div className="comments">
        <Comments comments={comments}/>
        </div>
    </article>

)


}

export default SingleArticle