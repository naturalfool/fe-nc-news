

const FilterBar = ({setFilterTerm}) => {

const handleChange = (event) => {
  
setFilterTerm(event.target.value)
 
}

 return (
    <>
    <label htmlFor="topics">Filter articles by topic:</label>

    <select defaultValue="topics" onChange={handleChange} name="topics" id="topics">
        <option disabled>topics:</option>
        <option value="all">all</option>
<option  value="coding">coding</option>
<option  value="football">football</option>
<option  value="cooking">cooking</option>
    </select>
    </>

 )

}

export default FilterBar