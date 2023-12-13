import axios from "axios";




const newsApi = axios.create({
  baseURL: 'https://nc-news-aa8x.onrender.com/api',
});

export const getArticleById = (articleid) => {
  return newsApi.get(`/articles/${articleid}`).then((res) => {
    return res.data
  });
};



export const getCommentsByArticleId = (articleid) => {
  return newsApi.get(`/articles/${articleid}/comments`).then((res) => {
    return res.data.comments
  })
}


export const upvoteArticle = (articleid) => {
return newsApi.patch(`/articles/${articleid}`,
{inc_votes: 1}
).then((res) => {
  return res.data
})
}