import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api.utils";
import Loading from "./Loading";


const SingleArticle = () => {
    const {articleid} = useParams()
    console.log(useParams())
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
    getArticleById(articleid).then((article) => {
        setSingleArticle(article)
        setIsLoading(false)
console.log(article)
    })
}, [articleid])



    const { title, topic, author, body, article_img_url, votes, comment_count } =
    singleArticle;

if (isLoading) return <Loading/>

return (
    <article className="individual-article">
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

export default SingleArticle