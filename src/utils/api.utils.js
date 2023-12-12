import axios from "axios";




const newsApi = axios.create({
  baseURL: 'https://nc-news-aa8x.onrender.com/api',
});

export const getArticleById = (articleid) => {
  return newsApi.get(`/articles/${articleid}`).then((res) => {
    return res.data
  });
};
