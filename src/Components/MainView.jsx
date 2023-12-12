import Articles from "./Articles"
import { useState, useEffect } from "react";
import Loading from "./Loading";
import FilterBar from "./FilterBar";



const MainView = ({filterTerm, setFilterTerm}) => {

    const [isLoading, setIsLoading] = useState(false)
 

    if (isLoading) return <Loading/>

    return (
    <section>
        <FilterBar setFilterTerm={setFilterTerm}/>
        <Articles filterTerm={filterTerm}/>
        </section>
    )


}

export default MainView