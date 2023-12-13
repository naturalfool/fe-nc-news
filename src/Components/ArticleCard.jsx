import { Link, useParams } from "react-router-dom"
import { useState } from "react"


const ArticleCard = ({article}) => {


        
    return (
 <Link to={`/articles/${article.article_id}`}> <li className="individual-article">
<h2>{article.title}</h2>
<h4>{article.author}</h4>
<img src={article.article_img_url}></img>
<p>Topic: {article.topic}</p>
<p>Votes: {article.votes}</p>
<p>Comments: {article.comment_count}</p>
        </li></Link>
    )

}


export default ArticleCard