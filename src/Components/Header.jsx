import { Link } from "react-router-dom"



const Header = () => {
    return (
        <header>
       <Link id="header-link" to="/"> <h1>NC News</h1></Link>
       <h3 id="sub-heading">The Best Place To Read Articles About Cooking, Coding, & Football</h3>
        </header>

    )
}

export default Header