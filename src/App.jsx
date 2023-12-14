import { useState, useEffect } from 'react'
import Header from './Components/Header'
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom'
import UsersView from './Components/UsersView'




import './App.css'
import MainView from './Components/MainView'
import SingleArticle from './Components/SingleArticle'
import { UserProvider } from './Contexts/UserContext'


function App() {
const [filterTerm, setFilterTerm] = useState("")


    return (
      <UserProvider>
    <BrowserRouter>
    <div>
 <Header/>

</div>

<Routes>
<Route path="/" element= {<MainView filterTerm={filterTerm} setFilterTerm={setFilterTerm}/>} />
<Route path="/articles/:articleid" element={<SingleArticle  />} />
<Route path="/users" element={<UsersView/>}/>
</Routes>
</BrowserRouter>
</UserProvider>


    )

}

export default App
