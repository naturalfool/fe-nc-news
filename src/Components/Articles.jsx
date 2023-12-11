import ArticleCard from "./ArticleCard";


const Articles = ({articles}) => {


    return (
        <ul id="articles-list">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      );
}

export default Articles