import { useState } from "react"


const Collapsible = ({ children }) => {
const [isHidden, setIsHidden] = useState(false)

function toggleIsHidden(){
    setIsHidden(!isHidden)
}


return (
<div>
<button onClick={toggleIsHidden}>
    {isHidden ? "Show" : "Hide" } comments...
</button>
{isHidden ? null : children}
</div>

)
}

export default Collapsible