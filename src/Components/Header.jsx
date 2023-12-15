import { Link } from "react-router-dom"



const Header = () => {
    return (
        <header>
       <Link id="header-link" to="/"> <h1>NC News</h1></Link>
       <h3 id="sub-heading">Why Don't You Click, Drag, And Use Keyboard Arrows On nc-riggnews.netlify.app?</h3>
        </header>

    )
}

export default Header