import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getArticleById } from "../utils/api.utils";
import Loading from "./Loading";


const ArticleById = () => {
 
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("https://nc-news-aa8x.onrender.com/api/articles")
        .then((response) => {
            
            return response.json();
        })
        .then((articles) => {
            
            setArticles(articles);
            setIsLoading(false)
        });
    }, []);
    




    const { title, topic, author, body, article_img_url, votes, comment_count } =
    singleArticle;

if (isLoading) return <Loading/>

return (
    <article>
        <h3>{topic}</h3>
        <h1>{title}</h1>
        <h4>written by: {author}</h4>
        <img src={article_img_url}></img>
        <p>{body}</p>
        <p>{votes}</p>
        <p>comments: {comment_count}</p>

    </article>
)


}

export default ArticleById