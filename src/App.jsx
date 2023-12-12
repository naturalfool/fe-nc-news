import { useState, useEffect } from 'react'
import Header from './Components/Header'
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom'
import UsersView from './Components/UsersView'
import Loading from './Components/Loading'



import './App.css'
import MainView from './Components/MainView'
import ArticleById from './Components/Article-By-Id'
import FilterBar from './Components/FilterBar'

function App() {
const [filterTerm, setFilterTerm] = useState("")


    return (
      
    <BrowserRouter>
    <div>
 <Header/>

</div>

<Routes>
<Route path="/" element= {<MainView filterTerm={filterTerm} setFilterTerm={setFilterTerm}/>} />
<Route path="/articles/:articleid" element={<ArticleById  />} />
<Route path="/users" element={<UsersView/>}/>
</Routes>
</BrowserRouter>


    )

}

export default App
