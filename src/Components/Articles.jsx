import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import Loading from "./Loading";


const Articles = ({filterTerm}) => {
    const [isLoading, setIsLoading] = useState(true)






    const [articles, setArticles] = useState([])
    
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
    if (isLoading) return <Loading/>
    


return (
    <ul id="articles-list">
    {articles.map((article) => {
      return <ArticleCard key={article.article_id} article={article} />;
    })}
  </ul>
)

}


export default Articles