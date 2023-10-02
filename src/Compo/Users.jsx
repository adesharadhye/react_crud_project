import axios from "axios"
import { useState, useEffect } from "react"
import style from "./homecrud.module.css"
import { Link } from "react-router-dom"
const Users=()=>{
let [content, setContent] = useState([])
useEffect(()=>{
axios.get("http://localhost:3000/Emp")
.then((response)=>{
console.log("Got the data");
setContent(response.data)
})
.catch(()=>{
console.log("Something went wrong.");
})},[])
let deleteData = (a)=>{
axios.delete(`http://localhost:3000/Emp/${a}`)
window.location.assign("/users")
}
return(
<div id={style.homeuser}>
{content.map((x)=>{
return(
<div id={style.card}>
<table>
<tr>
<th colSpan="2">Employee {x.id}</th>
</tr>
<tr>
<td>Name:</td>
<td>{x.name}</td>
</tr>
<tr>
<td>Salary:</td>
<td>{x.sal}</td>
</tr>
<tr>
<td>Company:</td>
<td>{x.company}</td>
</tr>
<tr>
<td>
<Link to={`/edit/${x.id}`}>Edit</Link>
 </td>
<td>
<button onClick={()=>deleteData(x.id)}>Delete</button>
 </td>
</tr>
</table>
</div>
)
})}
</div>
)
}
export default Users