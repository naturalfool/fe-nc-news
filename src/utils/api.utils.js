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
 if (res.request.status === 400){
  return Promise.reject({status: 400, message: "Bad request"})
 }
  return res.data
})
}

export const downvoteArticle = (articleid) => {
  return newsApi.patch(`/articles/${articleid}`,
  {inc_votes: -1}
  ).then((res) => {
    if (res.request.status === 400){
      return Promise.reject({status: 400, message: "Bad request"})
     }
    return res.data
  })
  }


export const postComment = (articleid, body, author) => {
  
  return newsApi
    .post(`/articles/${articleid}/comments`, { username: author, body: body })
    .then((res) => {
     
      return res.data.rows;
    });
};

export const deleteComment = (comment_id) => {
  console.log(comment_id)
  return newsApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};