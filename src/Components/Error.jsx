 

 const Error = (props) => {
const { message } = props
return (
    <div className="error">
        <h2>An error occurred! :(</h2>
        <p>{message}</p>
    </div>
)
 }

 export default Error