import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Nav from './Components/Nav'



import './App.css'
import MainView from './Components/MainView'

function App() {
const [articles, setArticles] = useState([])

useEffect(() => {
    fetch("https://nc-news-aa8x.onrender.com/api/articles")
      .then((response) => {
        console.log(response)

        return response.json();
      })
      .then((articles) => {
        console.log(articles)
        setArticles(articles);
      });
  }, []);


    

    return (
        <>
 <Header/>
<Nav/>
<MainView articles={articles}/>
 </>

    )

}

export default App
